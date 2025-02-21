import { useState, useMemo, useContext } from "react";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile580 } from "@config/environment";
import { useLocation } from "react-router-dom";
import { AuthAndData } from "@context/authAndDataProvider";
import { ActionRenderer } from "@design/table/actionRenderer";
import { PrivilegeOptionsConfig } from "@pages/privileges/config/privileges.config";
import { UseBusinessManagersId } from "@hooks/positions/useBusinessManageresId";

const UseManageSearchAndPageControl = (
  data: IBusinessUnitsPortalStaffId[],
  pagerecord: number
) => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const pageLength = pagerecord;
  const [currentPage, setCurrentPage] = useState(0);
  const totalRecords = Array.isArray(data) ? data.length : 0;
  const totalPages = Math.ceil(totalRecords / pageLength);

  const handleStartPage = () => setCurrentPage(0);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const handleEndPage = () => setCurrentPage(totalPages - 1);

  const firstEntryInPage = currentPage * pageLength;
  const lastEntryInPage = Math.min(firstEntryInPage + pageLength, totalRecords);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.warn("Data is not an array:", data);
      return [];
    }
    return data.filter((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchPosition.toLowerCase())
      );
    });
  }, [data, searchPosition]);

  const paginatedData = useMemo(() => {
    return filteredData.slice(firstEntryInPage, lastEntryInPage);
  }, [filteredData, firstEntryInPage, lastEntryInPage]);

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

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  return {
    currentPage,
    filteredData,
    totalPages,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
    searchPosition,
    smallScreen,
    label,
    ShowAction,
    ShowActionTitle,
    businessManagersData,
    handleSearchPositions,
  };
};

export { UseManageSearchAndPageControl };
