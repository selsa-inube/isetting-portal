import { useContext, useState } from "react";

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@inubekit/hooks";
import { useBusinessManagersId } from "@hooks/useBusinessManageresId";
import { AuthAndData } from "@context/authAndDataProvider";
import { isMobile580 } from "@config/environment";
import { ActionRenderer } from "@design/table/actionRenderer";
import { usePagination } from "@hooks/usePagination";
import {
  paginationConfig,
  privilegeOptionsConfig,
} from "../../config/privileges.config";

import { PositionsUI } from "./interface";

const Positions = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading] = useState<boolean>(false);

  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { ShowAction, ShowActionTitle } = ActionRenderer();

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId(
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
  } = usePagination(
    searchPosition,
    businessManagersData,
    paginationConfig.pageRecord
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
