// import { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
// import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
// import { EditDestinationUI } from "./interface";

// const EditDestination = () => {
//   const location = useLocation();
//   const { data } = location.state || {};
//   const { appData } = useContext(AuthAndPortalData);

//   const {
//     creditLineDecisions,
//     formValues,
//     generalInformationRef,
//     isSelected,
//     saveData,
//     showRequestProcessModal,
//     onSubmit,
//     handleReset,
//     setCreditLineDecisions,
//     setIsCurrentFormValid,
//     handleTabChange,
//     setShowRequestProcessModal,
//     setErrorFetchSaveData,
//     setShowModal,
//   } = UseEditPosition(data, appData);

//   const {
//     saveMoneyDestination,
//     requestSteps,
//     loadingSendData,
//     showPendingReqModal,
//     handleCloseRequestStatus,
//     handleClosePendingReqModal,
//   } = useSaveMoneyDestination(
//     appData.businessUnit.publicCode,
//     appData.user.userAccount,
//     showRequestProcessModal,
//     saveData as ISaveDataRequest,
//     setShowModal,
//     setShowRequestProcessModal,

//     setErrorFetchSaveData
//   );

//   return (
//     <EditDestinationUI
//       creditLineDecisions={creditLineDecisions}
//       editDestinationTabsConfig={editDestinationTabsConfig}
//       isSelected={isSelected}
//       onTabChange={handleTabChange}
//       generalInformationRef={generalInformationRef}
//       initialGeneralInformationValues={formValues}
//       onButtonClick={onSubmit}
//       onReset={handleReset}
//       setCreditLineDecisions={setCreditLineDecisions}
//       setIsCurrentFormValid={setIsCurrentFormValid}
//       saveMoneyDestination={saveMoneyDestination as ISaveDataResponse}
//       requestSteps={requestSteps}
//       loading={loadingSendData}
//       showPendingReqModal={showPendingReqModal}
//       showRequestProcessModal={showRequestProcessModal}
//       onCloseRequestStatus={handleCloseRequestStatus}
//       onClosePendingReqModal={handleClosePendingReqModal}
//     />
//   );
// };

// export { EditDestination };
