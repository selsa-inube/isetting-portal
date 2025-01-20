import { useContext, useState } from "react";

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@inubekit/hooks";

import { AuthAndData } from "@context/authAndDataProvider";
import { isMobile580 } from "@config/environment";
import { ActionRenderer } from "@design/table/actionRenderer";
import { UseBusinessManagersId } from "@hooks/usePositions/useBusinessManageresId";
import {
  PaginationConfig,
  PrivilegeOptionsConfig,
} from "@pages/privileges/config/privileges.config";
import { UseManageSearchAndPageControl } from "@hooks/useManageSearchAndPageControl";
import { PositionsUI } from "./interface";

const Positions = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading] = useState<boolean>(false);

  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { ShowAction, ShowActionTitle } = ActionRenderer();

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = UseBusinessManagersId(
    appData.businessManager.publicCode
  );

  const {
    filteredData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  } = UseManageSearchAndPageControl(
    searchPosition,
    businessManagersData,
    PaginationConfig.PageRecord
  );

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={businessManagersData}
      smallScreen={smallScreen}
      label={label}
      ShowAction={ShowAction}
      ShowActionTitle={ShowActionTitle}
      filteredData={filteredData}
      handleStartPage={handleStartPage}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handleEndPage={handleEndPage}
      firstEntryInPage={firstEntryInPage}
      lastEntryInPage={lastEntryInPage}
      paginatedData={paginatedData}
    />
  );
};

export { Positions };
