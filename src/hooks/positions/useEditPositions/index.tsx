import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";

import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { formatDate } from "@utils/date/formatDate";
import { IAppData } from "@ptypes/authAndPortalDataProvider/IAppData";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { IRuleDecision } from "@isettingkit/input";

import { IRoleForStaff } from "@ptypes/rolesForStaff";

const UseEditPositions = (
  data: {
    missionId: string;
    missionName: string;
    descriptionUse: string;
    MissionByRole: IRoleForStaff[];
  },
  appData: IAppData,
  rolesData: IRoleForStaff[] | undefined
) => {
  const normalizeGeneralData = {
    missionId: data.missionId,
    namePosition: data.missionName,
    descriptionPosition: data.descriptionUse,
  };

  console.log("data.MissionByRole", data.MissionByRole);

  const [isSelected, setIsSelected] = useState<string>(
    editPositionTabsConfig.generalInformation.id
  );
  const [formValues, setFormValues] = useState<IFormAddPosition>({
    generalInformation: {
      isValid: false,
      values: normalizeGeneralData,
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

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
  const [saveData, setSaveData] = useState<ISaveDataRequest>();
  const [errorFetchSaveData, setErrorFetchSaveData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [creditLineDecisions, setCreditLineDecisions] = useState<
    IRuleDecision[]
  >([]);
  // const [newDecisions, setNewDecisions] = useState<IRuleDecision[]>();
  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  // const ruleName = "LineOfCredit";
  const conditionRule = "MoneyDestination";

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

      const roles = transformedRolesData.map((role) => {
        const applicationStaff = transformedApplicationData.find(
          (app) => app.id !== role.id
        );
        return {
          ...role,
          applicationStaff: applicationStaff?.value,
        };
      });

      const rolesDataPrueba = roles.map((role) => {
        const active =
          Array.isArray(data.MissionByRole) &&
          data.MissionByRole.find((app) => app.roleName === role.value);

        return {
          ...role,
          isActive: !!active, // Converts truthy/falsy values to boolean
        };
      });

      setFormValues((prev) => ({
        ...prev,
        rolesStaff: {
          ...prev.rolesStaff,
          isValid: true,
          values: rolesDataPrueba,
        },
        applicationStaff: {
          isValid: true,
          values: transformedApplicationData,
        },
      }));
    }
  }, [rolesData]);

  // const roles = formValues.rolesStaff.values.map((role) => {
  //   const applicationStaff = formValues.applicationStaff.values.find(
  //     (app) => app.id !== role.id
  //   );
  //   return {
  //     ...role,
  //     applicationStaff: applicationStaff?.value,
  //   };
  // });
  // const valuesEqual =
  //   JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const onSubmit = () => {
    const configurationRequestData: {
      missionId: string;
      abbreviatedName?: string;
      descriptionUse?: string;
    } = {
      missionId: data.missionId,
    };
    if (
      generalInformationRef.current?.values.namePosition !== undefined &&
      (generalInformationRef.current?.values.namePosition !==
        data.missionName ||
        generalInformationRef.current?.values.descriptionPosition !==
          data.descriptionUse)
    ) {
      configurationRequestData.abbreviatedName =
        generalInformationRef.current?.values.namePosition ?? "";
      configurationRequestData.descriptionUse =
        generalInformationRef.current?.values.descriptionPosition ?? "";
    }

    setSaveData({
      applicationName: "ifac",
      businessManagerCode: appData.businessManager.publicCode,
      businessUnitCode: appData.businessUnit.publicCode,
      description: "Solicitud de modificación de un destino de dinero",
      entityName: conditionRule,
      requestDate: formatDate(new Date()),
      useCaseName: "ModifyMoneyDestination",
      configurationRequestData,
    });
    setShowRequestProcessModal(true);
  };

  //useEffect(() => {
  //   if (!errorFetchSaveData) {
  //     setFormValues(
  //       generalInformationRef.current?.values as IGeneralInformationEntry
  //     );
  //   }
  // }, [errorFetchSaveData]);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    isSelected,
    saveData,
    showRequestProcessModal,
    showModal,
    errorFetchSaveData,
    // formik,
    // handleReset,
    // onFormSubmit,
    onSubmit,
    setCreditLineDecisions,
    setIsCurrentFormValid,
    handleTabChange,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
    setShowModal,
    // valuesEqual,
  };
};

export { UseEditPositions };
