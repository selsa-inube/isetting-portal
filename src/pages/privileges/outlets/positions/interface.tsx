import { MdSearch, MdPersonAddAlt } from "react-icons/md";

import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Pagination,
} from "@inubekit/table";
import { UsePaginationAndFilters } from "@hooks/usePositions/usePaginationAndFilters";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { Loading } from "@pages/login/loading";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { ActionRenderer } from "@design/table/actionRenderer";

import { titlesOptions, actions } from "./config/dataPositions";
import { StyledButtonWrapper } from "./styles";

interface IPositions {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaffId[];
  loading: boolean;
}

const PositionsUI = ({
  handleSearchPositions,
  searchPosition,
  loading,
  data,
}: IPositions) => {
  const { ShowAction, ShowActionTitle } = ActionRenderer();

  const {
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
  } = UsePaginationAndFilters(searchPosition, data);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        SmallScreen
          ? `{${basic.spacing.s24}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {Label && (
            <>
              <Breadcrumbs crumbs={Label.crumbs} />
              <PageTitle
                title={Label.label}
                description={Label.description}
                navigatePage="/privileges/options"
              />
            </>
          )}
        </Stack>
        <Stack>
          <Text type="title" size={SmallScreen ? "medium" : "large"}>
            Consulta de Cargos vigentes ({FilteredData.length})
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Textfield
              name="searchPositions"
              id="searchPositions"
              placeholder="Búsqueda..."
              type="search"
              iconBefore={<MdSearch />}
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
              }
            />
            <StyledButtonWrapper>
              <Button
                iconBefore={<MdPersonAddAlt />}
                spacing="wide"
                type="link"
                path="/privileges/positions/add-position"
              >
                Solicitar nuevo cargo
              </Button>
            </StyledButtonWrapper>
          </Stack>
          {loading && data.length <= 0 ? (
            <Loading />
          ) : (
            <Table>
              <Colgroup>
                <Col width="80%" />
              </Colgroup>
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th
                      key={index}
                      action={title.action}
                      align={title.action ? "center" : "left"}
                    >
                      {title.titleName}
                    </Th>
                  ))}
                  {ShowActionTitle(actions)}
                </Tr>
              </Thead>
              <Tbody>
                {PaginatedData.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    {titlesOptions.map((title) => (
                      <Td
                        key={`e-${entry[title.id]}`}
                        align={entry.action ? "center" : "left"}
                      >
                        {entry[title.id]}
                      </Td>
                    ))}
                    {ShowAction(actions, entry)}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={titlesOptions.length + actions.length}
                    type="custom"
                    align="right"
                  >
                    <Pagination
                      firstEntryInPage={FirstEntryInPage}
                      lastEntryInPage={LastEntryInPage}
                      totalRecords={FilteredData.length}
                      handleStartPage={HandleStartPage}
                      handlePrevPage={HandlePrevPage}
                      handleNextPage={HandleNextPage}
                      handleEndPage={HandleEndPage}
                    />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { PositionsUI };
