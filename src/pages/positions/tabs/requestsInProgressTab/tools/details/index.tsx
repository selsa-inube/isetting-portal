import { DetailsRequestInProcess } from "@design/feedback/detailsRequestInProcess";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { UseDetailsRequestInProgress } from "@hooks/positions/useDetailsRequestInProgress";

interface IDetails {
  data: IEntrys;
}

const Details = (props: IDetails) => {
  const { data } = props;

  const {
    dateOptions,
    form,
    showModal,
    handleChange,
    handleToggleModal,
    normalizeData,
  } = UseDetailsRequestInProgress(data);

  return (
    <DetailsRequestInProcess
      data={normalizeData}
      showModal={showModal}
      form={form}
      onToggleModal={handleToggleModal}
      onChange={handleChange}
      dateOptions={dateOptions}
    />
  );
};

export { Details };
