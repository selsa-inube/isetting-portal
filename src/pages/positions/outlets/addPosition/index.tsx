import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { IEntry } from "@design/templates/AssignmentForm/types";
import { UseAddStaffRoles } from "@hooks/positions/useAddStaffRoles";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { requestStepsMock } from "@mocks/positions/requestProcess";
import { AddStaffRolesUI } from "./interface";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { useSaveMoneyDestination } from "@hooks/positions/useSaveMoneyDestination";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";

const AddPosition = () => {
  const { rolesStaff } = UseFetchRolesStaff();
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    handlePreviousStep,
    handleToggleModal,
    handleToggleModalApplication,
    setIsCurrentFormValid,
    handleSubmitClick,
    handleSubmitClickApplication,
    showModalApplicationStatus,
    showModal,
    setSelectedToggle,
    showRequestProcessModal,
    setCurrentStep,
    saveData,
    smallScreen,
    roles,
    disabled,
    setShowRequestProcessModal,
  } = UseAddStaffRoles(rolesStaff, requestStepsMock);
  const { appData } = useContext(AuthAndData);
  const {
    saveMoneyDestination,

    loading,
    handleCloseRequestStatus,
  } = useSaveMoneyDestination(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal
  );
  return (
    <AddStaffRolesUI
      saveMoneyDestination={saveMoneyDestination as ISaveDataResponse}
      showModalApplicationStatus={showModalApplicationStatus}
      requestSteps={requestStepsMock}
      showRequestProcessModal={showRequestProcessModal}
      onFinishForm={handleSubmitClick}
      onFinishFormApplicationStatus={handleSubmitClickApplication}
      showModal={showModal}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues.generalInformation.values}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addStaffRolesSteps}
      handlePreviousStep={handlePreviousStep}
      handleNextStep={handleNextStep}
      formValues={formValues}
      selectedToggle={selectedToggle as IEntry[]}
      setSelectedToggle={setSelectedToggle}
      smallScreen={smallScreen}
      roles={roles}
      disabled={disabled}
      onToggleModal={handleToggleModal}
      onToggleApplicationStatus={handleToggleModalApplication}
      loading={loading}
      onCloseRequestStatus={handleCloseRequestStatus}
    />
  );
};

export { AddPosition };
