import { IOptionItemChecked } from "@design/select/OptionItem";
import { IEntry } from "@design/templates/AssignmentForm/types";
import { useEffect, useState } from "react";

const UseAssignmentForm = (
  entries: IEntry[],
  changeData: IEntry[],
  setChangedData: (changeData: IEntry[]) => void,
  handleChange: (entries: IEntry[]) => void,
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>
) => {
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filteredRows, setFilteredRows] = useState<IEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");
  const [dataValidations, setDataValidations] = useState(entries.length === 0);

  const menuOptions = [
    {
      id: "allocate-all",
      label: "Asignar todos",
      handleClick: () => handleToggleAllEntries(true),
    },
    {
      id: "deallocate-all",
      label: "Desasignar todos",
      handleClick: () => handleToggleAllEntries(false),
    },
  ];

  const handleToggleAllEntries = (allocate: boolean) => {
    const newFilteredEntries = filteredRows.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    const newEntries = entries.map((entry) => {
      const filteredEntry = newFilteredEntries.find((e) => e.id === entry.id);
      return filteredEntry ? filteredEntry : entry;
    });

    setIsAssignAll(allocate);
    handleChange(newEntries);
    setFilteredRows(newFilteredEntries);
    setSelectedToggle(newEntries);
  };

  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleToggleEntry = (id: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = {
          ...entry,
          isActive: !entry.isActive,
        };

        if (updatedEntry.isActive !== entry.isActive) {
          const updatedChangedData = [
            ...changeData.filter((e) => e.id !== entry.id),
            updatedEntry,
          ];
          setChangedData(updatedChangedData);
        }

        return updatedEntry;
      }

      return entry;
    });
    setSelectedToggle(newEntries);
    handleChange(newEntries);
  };

  const onHandleSelectCheckChange = (id: string) => {
    setFilteredRows((prevRows) => {
      return prevRows.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              isActive: !entry.isActive,
            }
          : entry
      );
    });

    handleToggleEntry(id);
  };

  const handleSelectChange = (options: IOptionItemChecked[]) => {
    const selectedIds = options
      .filter((option) => option.checked)
      .map((option) => option.id);

    setSelectedOptions(selectedIds);
  };

  useEffect(() => {
    if (selectedOptions.length === 0 && filterValue.length === 0) {
      setFilteredRows(entries);
      setDataValidations(entries.length === 0);

      return;
    }
    let newFilter = filteredRows;

    if (selectedOptions.length > 0) {
      newFilter = entries.filter(
        (entry) =>
          entry.applicationStaff &&
          selectedOptions.includes(entry.applicationStaff)
      );
    }

    if (filterValue.length > 0) {
      newFilter = newFilter.filter(
        (entry) =>
          entry.value.toLowerCase().includes(filterValue.toLowerCase()) ||
          (entry.applicationStaff ?? "")
            .toLowerCase()
            .includes(filterValue.toLowerCase())
      );
    }
    setFilteredRows(newFilter);
    setDataValidations(newFilter.length === 0);
  }, [selectedOptions, filterValue, entries]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return {
    filteredRows,
    filterValue,
    filter,
    setFilter,
    handleFilterInput,
    handleFilterChange,
    handleToggleAllEntries,
    onHandleSelectCheckChange,
    handleSelectChange,
    menuOptions,
    isAssignAll,
    setShowMenu,
    showMenu,
    dataValidations,
  };
};

export { UseAssignmentForm };
