import { useMediaQuery } from "@inubekit/hooks";
import { useLocation } from "react-router-dom";
import { isMobile580 } from "@config/environment";

import {
  PaginationConfig,
  PrivilegeOptionsConfig,
} from "@pages/privileges/config/privileges.config";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { UseManageSearchAndPageControl } from "../useManageSearchAndPageControl";

const UsePaginationAndFilters = (Data: IBusinessUnitsPortalStaffId[]) => {
  const SmallScreen = useMediaQuery(isMobile580);
  const Location = useLocation();

  const Label = PrivilegeOptionsConfig.find(
    (Item) => Item.url === Location.pathname
  );

  const {
    filteredData: FilteredData,
    handleStartPage: HandleStartPage,
    handlePrevPage: HandlePrevPage,
    handleNextPage: HandleNextPage,
    handleEndPage: HandleEndPage,
    firstEntryInPage: FirstEntryInPage,
    lastEntryInPage: LastEntryInPage,
    paginatedData: PaginatedData,
  } = UseManageSearchAndPageControl(Data, PaginationConfig.PageRecord);

  return {
    SmallScreen,
    Label,
    FilteredData,
    HandleStartPage,
    HandlePrevPage,
    HandleNextPage,
    HandleEndPage,
    FirstEntryInPage,
    LastEntryInPage,
    PaginatedData,
  };
};

export { UsePaginationAndFilters };
