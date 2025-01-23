import { FormButtons } from "@design/layout/FormButtons";
import { AssignmentForm } from "@design/templates/AssignmentForm";
import { IInitializerFormUI } from "./types";

const InitializerFormUI = (props: IInitializerFormUI) => {
  const {
    dataOptionsForms,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeInitializerForm,
    setSelectedToggle,
    withSubmitButtons,
    hasChanges,
    readOnly,
    setChangedData = () => {},
    changeData = [],
    dataOptionsValueSelect,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          withDisabledButtons={!hasChanges(dataOptionsForms)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeInitializerForm}
            entries={dataOptionsForms}
            title="Selecciona los roles:"
            setChangedData={setChangedData}
            changeData={changeData}
            valueSelect={dataOptionsValueSelect}
            setSelectedToggle={setSelectedToggle}
          />
        </FormButtons>
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeInitializerForm}
      entries={dataOptionsForms}
      title="Selecciona los roles:"
      readOnly={readOnly}
      valueSelect={dataOptionsValueSelect}
      setSelectedToggle={setSelectedToggle}
    />
  );
};

export { InitializerFormUI };
