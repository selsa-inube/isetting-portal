// import { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
// import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
// import { EditDestinationUI } from "./interface";
// import { AuthAndData } from "@context/authAndDataProvider";
// import { UseSavePositions } from "@hooks/positions/useSavePositions";
// import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
// import { UseEditPositions } from "@hooks/positions/useEditPositions";

// const EditDestination = () => {
//   const location = useLocation();
//   const { data } = location.state || {};
//   const { appData } = useContext(AuthAndData);

//   const {
//     creditLineDecisions,
//     formValues,
//     generalInformationRef,
//     isSelected,
//     saveData,
//     showRequestProcessModal,
//     // onSubmit,
//     // handleReset,
//     setCreditLineDecisions,
//     setIsCurrentFormValid,
//     handleTabChange,
//     setShowRequestProcessModal,
//     setErrorFetchSaveData,
//     setShowModal,
//   } = UseEditPositions(data, appData);

//   const {
//     savePositions,
//     requestSteps,
//     loading,
//     // showPendingReqModal,
//     handleCloseRequestStatus,
//     // handleClosePendingReqModal,
//   } = UseSavePositions(
//     appData.businessUnit.publicCode,
//     appData.user.userAccount,
//     showRequestProcessModal,
//     saveData as ISaveDataRequest,
//     setShowModal
//     // setShowRequestProcessModal,
//     // setErrorFetchSaveData
//   );

//   return (
//     <EditDestinationUI
//       creditLineDecisions={creditLineDecisions}
//       editPositionTabsConfig={editPositionTabsConfig}
//       isSelected={isSelected}
//       onTabChange={handleTabChange}
//       generalInformationRef={generalInformationRef}
//       initialGeneralInformationValues={formValues}
//       // onButtonClick={onSubmit}
//       // onReset={handleReset}
//       setCreditLineDecisions={setCreditLineDecisions}
//       setIsCurrentFormValid={setIsCurrentFormValid}
//       savePositions={savePositions as ISaveDataResponse}
//       requestSteps={requestSteps}
//       loading={loading}
//       //   showPendingReqModal={showPendingReqModal}
//       showRequestProcessModal={showRequestProcessModal}
//       onCloseRequestStatus={handleCloseRequestStatus}
//       showPendingReqModal={false}
//       onClosePendingReqModal={function (): void {
//         throw new Error("Function not implemented.");
//       }} //   onClosePendingReqModal={handleClosePendingReqModal}
//       onButtonClick={function (): void {
//         throw new Error("Function not implemented.");
//       }}
//       onReset={function (): void {
//         throw new Error("Function not implemented.");
//       }}
//     />
//   );
// };

// export { EditDestination };
