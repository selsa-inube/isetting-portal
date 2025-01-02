import { useRef, useState } from "react";
import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@pages/privileges/outlets/positions/components/GeneralInformationForm/types";
import { addStaffRolesSteps } from "@pages/privileges/outlets/positions/add-position/config/addPosition.config";

const useAddStaffRoles = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<IGeneralInformationEntry>({
    nameCreditLine: "",
    descriptionCreditLine: "",
  });

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const handleNextStep = () => {
    if (currentStep < addStaffRolesSteps.length) {
      if (generalInformationRef.current) {
        setFormValues(generalInformationRef.current.values);
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
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  };
};

export { useAddStaffRoles };
