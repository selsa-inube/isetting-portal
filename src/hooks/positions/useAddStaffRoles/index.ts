import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

const UseAddStaffRoles = (rolesData: IRoleForStaff[] | undefined) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showRequestProcessModal, setShowRequestProcessModal] = useState(false);
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

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmitClick = () => {
    handleToggleModal();
    setShowRequestProcessModal(!showRequestProcessModal);
    navigate("/positions/positions");
  };

  return {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    handleSubmitClick,
    showModal,
    handleToggleModal,
    handlePreviousStep,
    setIsCurrentFormValid,
    setSelectedToggle,
    setCurrentStep,
    smallScreen,
    roles,
    disabled,
  };
};

export { UseAddStaffRoles };
