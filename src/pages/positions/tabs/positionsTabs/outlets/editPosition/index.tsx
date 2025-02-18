import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { EditDestinationUI } from "./interface";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
import { UseEditPositions } from "@hooks/positions/useEditPositions";
import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";

const EditDestination = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndData);
  const { rolesStaff } = UseFetchRolesStaff();

  const {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    onSubmit,
    handleReset,
    setCreditLineDecisions,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
  } = UseEditPositions(data, appData, rolesStaff);

  const {
    savePositions,
    requestSteps,
    loading,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = UseSavePositions(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowModal
  );

  return (
    <EditDestinationUI
      creditLineDecisions={creditLineDecisions}
      editPositionTabsConfig={editPositionTabsConfig}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      generalInformationRef={generalInformationRef}
      initialValues={formValues}
      setCreditLineDecisions={setCreditLineDecisions}
      setIsCurrentFormValid={setIsCurrentFormValid}
      savePositions={savePositions as ISaveDataResponse}
      requestSteps={requestSteps}
      loading={loading}
      showRequestProcessModal={showRequestProcessModal}
      onCloseRequestStatus={handleCloseRequestStatus}
      showPendingReqModal={showPendingReqModal}
      onClosePendingReqModal={handleClosePendingReqModal}
      onButtonClick={onSubmit}
      onReset={handleReset}
    />
  );
};

export { EditDestination };
