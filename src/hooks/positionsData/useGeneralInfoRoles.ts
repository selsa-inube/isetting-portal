import { useEffect, useImperativeHandle } from "react";
import { FormikProps, useFormik } from "formik";
import { object } from "yup";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { IGeneralInformationEntry } from "@pages/privileges/outlets/positions/add-position/types";

const useGeneralInfoCreditLineForm = (
  initialValues: IGeneralInformationEntry,
  ref: React.ForwardedRef<FormikProps<IGeneralInformationEntry>>,
  onSubmit: ((values: IGeneralInformationEntry) => void) | undefined,
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined
) => {
  const createValidationSchema = () =>
    object().shape({
      namePosition: validationRules.string.required(
        validationMessages.required
      ),
      descriptionPosition: validationRules.string.required(
        validationMessages.required
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  return {
    formik,
  };
};

export { useGeneralInfoCreditLineForm };
