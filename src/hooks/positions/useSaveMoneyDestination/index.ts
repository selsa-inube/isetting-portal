import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";

import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IFlagAppearance, useFlag } from "@inubekit/flag";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { requestStepsInitial } from "@config/positions/addPositions/requestSteps";

import { flowAutomaticMessages } from "@config/positionsTabs/generics/flowAutomaticMessages";
import { getRequestInProgressById } from "@services/positions/getRequestInProgressById";
import { statusCloseModal } from "@config/status/statusCloseModal";
import { statusRequestFinished } from "@config/status/statusRequestFinished";
import { interventionHumanMessage } from "@config/positionsTabs/generics/interventionHumanMessage";

const useSaveMoneyDestination = (
  bussinesUnits: string,
  userAccount: string,
  sendData: boolean,
  data: ISaveDataRequest,
  setSendData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [saveMoneyDestination, setSaveMoneyDestination] =
    useState<ISaveDataResponse>();
  const [statusRequest, setStatusRequest] = useState<string>();
  const [loading] = useState(false);
  const { addFlag } = useFlag();
  const [requestSteps, setRequestSteps] =
    useState<IRequestSteps[]>(requestStepsInitial);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const navigatePage = "/positions/positions";

  // const fetchSaveMoneyDestinationData = async () => {
  //   setLoading(true);
  //   try {
  //     const saveData = await postSaveRequest(userAccount, data);
  //     setSaveMoneyDestination(saveData);
  //   } catch (error) {
  //     console.info(error);
  //     setSendData(false);
  //     addFlag({
  //       title: flowAutomaticMessages.errorSendingData.title,
  //       description: flowAutomaticMessages.errorSendingData.description,
  //       appearance: flowAutomaticMessages.errorSendingData
  //         .appearance as IFlagAppearance,
  //       duration: flowAutomaticMessages.errorSendingData.duration,
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchRequestInProgressData = async () => {
    try {
      if (!isStatusIntAutomatic(saveMoneyDestination?.requestStatus)) return;

      const data = await getRequestInProgressById(
        bussinesUnits,
        saveMoneyDestination?.settingRequestId || ""
      );
      setStatusRequest(data.requestStatus);
    } catch (error) {
      console.info(error);
      setError(true);
      addFlag({
        title: flowAutomaticMessages.errorQueryingData.title,
        description: flowAutomaticMessages.errorQueryingData.description,
        appearance: flowAutomaticMessages.errorQueryingData
          .appearance as IFlagAppearance,
        duration: flowAutomaticMessages.errorQueryingData.duration,
      });
    }
  };

  const updateRequestSteps = (
    steps: IRequestSteps[],
    stepName: string,
    newStatus: "pending" | "completed" | "error"
  ): IRequestSteps[] => {
    return steps.map((step) => {
      if (step.name === stepName) {
        return {
          ...step,
          status: newStatus,
        };
      }
      return step;
    });
  };

  const isStatusIntAutomatic = (status: string | undefined): boolean => {
    return status ? statusFlowAutomatic.includes(status) : false;
  };

  const isStatusCloseModal = (): boolean => {
    return statusRequest ? statusCloseModal.includes(statusRequest) : false;
  };

  const isStatusRequestFinished = (): boolean => {
    return statusRequest
      ? statusRequestFinished.includes(statusRequest)
      : false;
  };

  const changeRequestSteps = () => {
    if (isStatusIntAutomatic(statusRequest)) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[1].name, "completed")
      );
    }

    if (isStatusRequestFinished()) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[1].name, "completed")
      );
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[2].name, "completed")
      );
    }

    if (isStatusCloseModal()) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[1].name, "error")
      );
    }
  };

  const handleStatusChange = () => {
    setTimeout(() => {
      if (isStatusIntAutomatic(saveMoneyDestination?.requestStatus)) {
        if (isStatusCloseModal()) {
          navigate(navigatePage);
          addFlag({
            title: flowAutomaticMessages.errorCreateRequest.title,
            description: flowAutomaticMessages.errorCreateRequest.description,
            appearance: flowAutomaticMessages.errorCreateRequest
              .appearance as IFlagAppearance,
            duration: flowAutomaticMessages.errorCreateRequest.duration,
          });
        }

        if (isStatusRequestFinished()) {
          navigate(navigatePage);
          addFlag({
            title: flowAutomaticMessages.SuccessfulCreateRequest.title,
            description:
              flowAutomaticMessages.SuccessfulCreateRequest.description,
            appearance: flowAutomaticMessages.SuccessfulCreateRequest
              .appearance as IFlagAppearance,
            duration: flowAutomaticMessages.SuccessfulCreateRequest.duration,
          });
        }
      }
    }, 3000);
  };

  useEffect(() => {
    if (!sendData) return;
    setSaveMoneyDestination({
      settingRequestId: "c574d0ff-d0ff-4e2c-80f9-923c010ab227",
      requestNumber: "ddd",
      requestStatus: "ProcessingRequest",
    });
    // fetchSaveMoneyDestinationData();
  }, [sendData]);

  useEffect(() => {
    if (isStatusIntAutomatic(saveMoneyDestination?.requestStatus)) {
      setRequestSteps((prev) =>
        updateRequestSteps(prev, requestStepsInitial[0].name, "completed")
      );

      const timer = setInterval(() => {
        const checkRequestStatus = async () => {
          if (isStatusCloseModal() || isStatusRequestFinished() || error) {
            changeRequestSteps();
            clearInterval(timer);
            setTimeout(() => {
              setSendData(false);
            }, 1500);
          } else {
            await fetchRequestInProgressData();
            changeRequestSteps();
          }
        };
        checkRequestStatus();
      }, 2000);

      const timeout = setTimeout(() => {
        clearInterval(timer);
        setSendData(false);
        navigate(navigatePage);
        addFlag({
          title: flowAutomaticMessages.requestInQueue.title,
          description: flowAutomaticMessages.requestInQueue.description,
          appearance: flowAutomaticMessages.requestInQueue
            .appearance as IFlagAppearance,
          duration: flowAutomaticMessages.requestInQueue.duration,
        });
      }, 60000);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }
  }, [saveMoneyDestination, statusRequest]);

  const handleCloseRequestStatus = () => {
    setSendData(false);
    navigate(navigatePage);
    addFlag({
      title: interventionHumanMessage.SuccessfulCreateRequestIntHuman.title,
      description:
        interventionHumanMessage.SuccessfulCreateRequestIntHuman.description,
      appearance: interventionHumanMessage.SuccessfulCreateRequestIntHuman
        .appearance as IFlagAppearance,
      duration:
        interventionHumanMessage.SuccessfulCreateRequestIntHuman.duration,
    });
  };

  useEffect(() => {
    handleStatusChange();
  }, [statusRequest]);

  return {
    saveMoneyDestination,
    requestSteps,
    loading,
    handleCloseRequestStatus,
  };
};

export { useSaveMoneyDestination };
