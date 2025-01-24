import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";

import { addStaffRolesSteps } from "@pages/privileges/outlets/positions/add-position/config/addPosition.config";
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "@pages/privileges/outlets/positions/add-position/types";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { IEntry } from "@design/templates/AssignmentForm/types";
import { initalValuesPositions } from "@pages/privileges/outlets/positions/add-position/config/initialValues";
import { useMediaQuery } from "@inubekit/hooks";

const UseAddStaffRoles = (rolesData: IRoleForStaff[] | undefined) => {
  const [currentStep, setCurrentStep] = useState(1);
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
        value: role.abbreviatedName,
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

  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    setSelectedToggle,
    smallScreen,
    roles,
    disabled,
  };
};

export { UseAddStaffRoles };
