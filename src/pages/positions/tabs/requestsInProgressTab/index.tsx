import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseRequestsInProgress } from "@hooks/positions/useRequestsInProgress";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { RequestsInProgressTabUI } from "./interface";
const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndData);
  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
  } = UseRequestsInProgress(appData.businessUnit.publicCode);

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntrys[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryDeleted={setEntryDeleted}
    />
  );
};

export { RequestsInProgressTab };
