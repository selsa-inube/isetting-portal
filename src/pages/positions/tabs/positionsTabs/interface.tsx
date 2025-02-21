import { MdSearch, MdPersonAddAlt } from "react-icons/md";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/inubekit";
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
} from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { Loading } from "@pages/login/loading";
import { actionsConfig, titlesOptions } from "@config/positions/table";
import { StyledButtonWrapper } from "./styles";
import { IPositions } from "./types";

const PositionsUI = (props: IPositions) => {
  const {
    handleSearchPositions,
    searchPosition,
    loading,
    data,
    smallScreen,
    ShowAction,
    ShowActionTitle,
    filteredData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  } = props;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `{${basic.spacing.s24}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack>
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Consulta de Cargos vigentes ({filteredData.length})
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
                path="/positions/positions/add-position"
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
                  {ShowActionTitle(actionsConfig(() => {}))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    {titlesOptions.map((title) => (
                      <Td
                        key={`e-${entry[title.id]}`}
                        align={entry.action ? "center" : "left"}
                      >
                        {entry[title.id]}
                      </Td>
                    ))}
                    {ShowAction(
                      actionsConfig(() => {}),
                      { ...entry, id: entry.staffId }
                    )}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={titlesOptions.length + actionsConfig.length}
                    type="custom"
                    align="right"
                  >
                    <Pagination
                      firstEntryInPage={firstEntryInPage}
                      lastEntryInPage={lastEntryInPage}
                      totalRecords={filteredData.length}
                      handleStartPage={handleStartPage}
                      handlePrevPage={handlePrevPage}
                      handleNextPage={handleNextPage}
                      handleEndPage={handleEndPage}
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
