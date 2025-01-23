import { UseAssignmentForm } from "@hooks/useAssignmentForm";
import { AssignmentFormUI } from "./interface";
import { IAssignmentForm } from "./types";

const AssignmentForm = (props: IAssignmentForm) => {
  const {
    handleChange,
    entries,
    title,
    readOnly,
    setSelectedToggle,
    setChangedData = () => {},
    changeData = [],
    valueSelect,
  } = props;

  const {
    filteredRows,
    filterValue,
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
  } = UseAssignmentForm(
    entries,
    changeData,
    setChangedData,
    handleChange,
    setSelectedToggle
  );

  const options = valueSelect.map((entry) => ({
    id: entry.id,
    label: entry.value,
    checked: filteredRows.some((row) => row.applicationStaff === entry.value),
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChange(entries);
  };

  return (
    <AssignmentFormUI
      handleToggleAllEntries={handleToggleAllEntries}
      filter={filterValue}
      handleFilter={handleFilterChange}
      handleFilterInput={handleFilterInput}
      entries={entries}
      title={title}
      showMenu={showMenu}
      handleToggleMenuInvitation={() => setShowMenu((prev) => !prev)}
      handleCloseMenuInvitation={() => setShowMenu(false)}
      menuOptions={menuOptions}
      isAssignAll={isAssignAll}
      readOnly={readOnly}
      filteredRows={filteredRows}
      handleSubmit={handleSubmit}
      handleSelectChange={handleSelectChange}
      options={options}
      filterValue={filterValue}
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      dataValidations={dataValidations}
    />
  );
};

export { AssignmentForm };
export type { IAssignmentForm };
