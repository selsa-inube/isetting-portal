import { useMediaQuery } from "@inubekit/hooks";
import { useLocation } from "react-router-dom";
import { isMobile580 } from "@config/environment";
import { usePagination } from "@pages/privileges/outlets/positions/components/GeneralInformationForm/utils";
import {
  PaginationConfig,
  PrivilegeOptionsConfig,
} from "@pages/privileges/config/privileges.config";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const UsePaginationAndFilters = (
  SearchPosition: string,
  Data: IBusinessUnitsPortalStaffId[]
) => {
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
  } = usePagination(SearchPosition, Data, PaginationConfig.PageRecord);

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
