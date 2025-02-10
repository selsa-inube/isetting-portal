import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { IEntry } from "@design/templates/AssignmentForm/types";
import { useMediaQuery } from "@inubekit/hooks";
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "@pages/positions/outlets/addPosition/types";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { initalValuesPositions } from "@ptypes/positions/initialValues";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";

const UseAddStaffRoles = (rolesData: IRoleForStaff[] | undefined) => {
  const { appData } = useContext(AuthAndData);
  const [currentStep, setCurrentStep] = useState(1);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [showModalApplicationStatus, setShowModalApplicationStatus] =
    useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedToggle, setSelectedToggle] = useState<IEntry[]>();
  const [formValues, setFormValues] = useState<IFormAddPosition>({
    generalInformation: {
      isValid: false,
      values: initalValuesPositions.generalInformation,
    },
    rolesStaff: {
      isValid: false,
      values: [],
    },
    applicationStaff: {
      isValid: false,
      values: [],
    },
  });

  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width: 990px)");

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const disabled = !isCurrentFormValid;

  const roles = formValues.rolesStaff.values.map((role) => {
    const applicationStaff = formValues.applicationStaff.values.find(
      (app) => app.id !== role.id
    );
    return {
      ...role,
      applicationStaff: applicationStaff?.value,
    };
  });

  useEffect(() => {
    if (rolesData && rolesData.length > 0) {
      const transformedRolesData = rolesData.map((role) => ({
        id: role.roleId,
        value: role.roleName,
        isActive: role.isActive ?? false,
      }));

      const transformedApplicationData = rolesData.map((role) => ({
        id: role.application?.appId ?? "",
        value: role.application?.abbreviatedName ?? "",
        isActive: role.isActive ?? false,
      }));
      setFormValues((prev) => ({
        ...prev,
        rolesStaff: {
          ...prev.rolesStaff,
          isValid: true,
          values: selectedToggle ? selectedToggle : transformedRolesData,
        },
        applicationStaff: {
          isValid: true,
          values: transformedApplicationData,
        },
      }));
    }
  }, [rolesData, selectedToggle]);

  const handleNextStep = () => {
    if (currentStep < addStaffRolesSteps.length) {
      if (generalInformationRef.current) {
        setFormValues({
          ...formValues,
          generalInformation: {
            ...formValues.generalInformation,
            values: generalInformationRef.current
              .values as unknown as typeof formValues.generalInformation.values,
          },
        });
        setIsCurrentFormValid(generalInformationRef.current.isValid);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleModalApplication = () => {
    setShowModalApplicationStatus(!showModalApplicationStatus);
  };

  const handleSubmitClick = () => {
    handleToggleModal();
    setShowRequestProcessModal(!showRequestProcessModal);
    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "solicitud de creación de un destino de dinero",
      entityName: "MoneyDestination",
      requestDate: "",
      useCaseName: "AddMoneyDestination",
      configurationRequestData: {
        abbreviatedName: "",
        descriptionUse: "",
        iconReference: "",
        rules: "",
      },
    });
  };

  const handleSubmitClickApplication = () => {
    handleToggleModal();
    setShowModalApplicationStatus(!showRequestProcessModal);
    navigate("/positions/positions");
  };

  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    showModalApplicationStatus,
    handleSubmitClick,
    showModal,
    handleToggleModal,
    handleToggleModalApplication,
    handlePreviousStep,
    setIsCurrentFormValid,
    setSelectedToggle,
    handleSubmitClickApplication,
    setCurrentStep,
    showRequestProcessModal,
    saveData,
    smallScreen,
    roles,
    disabled,
    setShowRequestProcessModal,
  };
};

export { UseAddStaffRoles };
