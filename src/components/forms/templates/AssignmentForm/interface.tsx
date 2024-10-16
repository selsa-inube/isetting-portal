import React, { useState, useEffect } from "react";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import {
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from "@inubekit/table";
import { Toggle } from "@inubekit/toggle";
import { Fieldset } from "@inubekit/fieldset";
import { Text } from "@inubekit/text";

import { Menu } from "@components/navigation/Menu";
import { IOption } from "@components/navigation/Menu/types";
import { basic } from "@design/tokens";
import { MultipleChoices } from "@components/inputs/MultipleChoices";
import { IOptionInitialiceEntryApp } from "@pages/privileges/outlets/positions/add-position/types";
import { IOptionItemCheckedProps } from "@components/inputs/SelectCheck/OptionItem";

import {
  StyledForm,
  StyledOptionsContainer,
  StyledToggleContainer,
} from "./styles";
import { IEntry, titlesOptions, Option } from "./types";

interface AssignmentFormUIProps {
  title: string;
  filter: string;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleEntry: (id: string) => void;
  entries: IEntry[];
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  menuOptions: IOption[];
  isAssignAll: boolean;
  readOnly?: boolean;
  valueSelect: IOptionInitialiceEntryApp[];
}

function AssignmentFormUI(props: AssignmentFormUIProps) {
  const {
    title,
    handleToggleAllEntries,
    handleToggleEntry,
    entries,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    menuOptions,
    isAssignAll,
    valueSelect,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredRows, setFilteredRows] = useState<IEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");

  const options: Option[] = valueSelect.map((entry) => ({
    id: entry.k_uso,
    label: entry.n_uso,
    checked: selectedOptions.includes(entry.k_uso),
  }));

  const handleSelectChange = (options: IOptionItemCheckedProps[]) => {
    const selectedIds = options
      .filter((option) => option.checked)
      .map((option) => option.id);
    setSelectedOptions(selectedIds);
  };

  useEffect(() => {
    if (selectedOptions.length === 0 && filterValue.length === 0) {
      setFilteredRows(entries);
      return;
    }
    let newfilter = filteredRows;

    if (selectedOptions.length > 0) {
      newfilter = entries.filter(
        (entry) => entry.k_uso && selectedOptions.includes(entry.k_uso)
      );
    }

    if (filterValue.length > 0) {
      newfilter = newfilter.filter(
        (entry) =>
          entry.value.toLowerCase().includes(filterValue.toLowerCase()) ||
          (entry.n_uso ?? "").toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    setFilteredRows(newfilter);
  }, [selectedOptions, filterValue]);

  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const dataValidations = entries.length === 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onHandleSelectCheckChange = (id: string) => {
    setFilteredRows((prevRows) =>
      prevRows.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              isActive: !entry.isActive,
            }
          : entry
      )
    );
    handleToggleEntry(id);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Fieldset legend={title} size="small" type="title">
        <Stack
          gap={basic.spacing.s16}
          direction="column"
          width="-webkit-fill-available"
        >
          <Stack gap={basic.spacing.s32} justifyContent="space-between">
            <Stack gap={basic.spacing.s16} alignItems="end">
              <MultipleChoices
                id="Multiples-choices"
                labelSelect="Selecciona la aplicacion"
                labelSelected=""
                onHandleSelectCheckChange={handleSelectChange}
                options={options}
                placeholderSelect="Seleccione una opción"
              />
              <Textfield
                type="search"
                iconBefore={<MdSearch size={22} />}
                placeholder="Búsqueda..."
                name="search"
                id="search"
                size="compact"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFilterInput(e)
                }
                value={filterValue}
                disabled={dataValidations}
              />
            </Stack>
            {smallScreen ? (
              <StyledOptionsContainer>
                <Icon
                  icon={<MdOutlineMoreHoriz />}
                  appearance="dark"
                  spacing="compact"
                  size="24px"
                  shape="circle"
                  onClick={handleToggleMenuInvitation}
                />
                {showMenu && (
                  <Menu
                    options={menuOptions}
                    handleClose={handleCloseMenuInvitation}
                  />
                )}
              </StyledOptionsContainer>
            ) : (
              <Stack gap={basic.spacing.s8} alignItems="end">
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(false)}
                  disabled={
                    !entries.some((entry) => entry.isActive) || dataValidations
                  }
                >
                  Desasignar todos
                </Button>
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(true)}
                  disabled={isAssignAll || dataValidations}
                >
                  Asignar todos
                </Button>
              </Stack>
            )}
          </Stack>
          {dataValidations ? (
            <Text>No se encuentran datos para seleccionar.</Text>
          ) : (
            <Table>
              <Colgroup>
                <Col width="8%" />
                <Col width="25%" />
              </Colgroup>
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th key={index} align="left">
                      {title.titleName}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {filteredRows.map((entry, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    <Td align="left" type="custom">
                      <StyledToggleContainer>
                        <Toggle
                          checked={entry.isActive}
                          disabled={false}
                          id={`isActive-${entry.id}`}
                          name="isActive"
                          margin={basic.spacing.s0}
                          onChange={() => onHandleSelectCheckChange(entry.id)}
                          padding={basic.spacing.s0}
                          size="small"
                        />
                      </StyledToggleContainer>
                    </Td>
                    <Td align="left"> {entry.value}</Td>
                    <Td align="left"> {entry.n_uso}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Stack>
      </Fieldset>
    </StyledForm>
  );
}

export { AssignmentFormUI };
