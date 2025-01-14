import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { initalValuesPositions } from "@pages/privileges/outlets/positions/components/GeneralInformationForm/types";
import { addStaffRolesSteps } from "@pages/privileges/outlets/positions/add-position/config/addPosition.config";
import {
  dataToAssignmentFormEntry,
  IFormAddPosition,
  IGeneralInformationEntry,
} from "@pages/privileges/outlets/positions/add-position/types";
import { useAuth0 } from "@auth0/auth0-react";
import { getRolesForStaff } from "@api/isaasQuery";
import { IRoleForStaff } from "@ptypes/rolesForStaff";

const useAddStaffRoles = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useAuth0();
  const [rolesStaff, setRolesStaff] = useState<Record<string, unknown>[]>([]);
  const [applicationStaff, setApplicationStaff] = useState<
    Record<string, unknown>[]
  >([]);
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

  const fetchRolesStaff = () => {
    if (!user || rolesStaff.length > 0) return;

    getRolesForStaff()
      .then((data) => {
        if (data !== null) {
          setRolesStaff(data as unknown as Record<string, unknown>[]);
          setFormValues((prevFormData) => ({
            ...prevFormData,
            rolesStaff: {
              isValid: true,
              values: dataToAssignmentFormEntry({
                dataOptions: data as unknown as Record<string, unknown>[],
                idLabel: "roleId",
                valueLabel: "abbreviatedName",
                isActiveLabel: "isActive",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching roles staff:", error.message);
      });
  };

  const fetchApplicationStaff = () => {
    if (!user || applicationStaff.length > 0) return;

    getRolesForStaff()
      .then((data) => {
        if (Array.isArray(data)) {
          const filteredData = data.map((role: IRoleForStaff) => ({
            appId: role.application?.appId,
            abbreviatedName: role.application?.abbreviatedName,
          }));

          setApplicationStaff(
            filteredData as unknown as Record<string, unknown>[]
          );

          setFormValues((prevFormData) => ({
            ...prevFormData,
            applicationStaff: {
              isValid: true,
              values: dataToAssignmentFormEntry({
                dataOptions: filteredData as unknown as Record<
                  string,
                  unknown
                >[],
                idLabel: "appId",
                valueLabel: "abbreviatedName",
                isActiveLabel: "isActive",
              }),
            },
          }));
        } else {
          console.error("Expected an array, but received:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching application staff:", error.message);
      });
  };

  useEffect(() => {
    fetchRolesStaff();
    fetchApplicationStaff();
  }, []);

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

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
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  };
};

export { useAddStaffRoles };
