import { editMoneyDestinationModal } from "@config/positionsTabs/generics/editMoneyDestinationModal";
import { EditRecord } from "@design/feedback/editRecord";
import { IEntry } from "@design/table/types";
import { useEditDestinationModal } from "@hooks/positions/useEditDestinationModal";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { showModal, handleEdit, handleToggleModal } =
    useEditDestinationModal(data);
  return (
    <EditRecord
      showModal={showModal}
      portalId="portal"
      editRecordMessage={editMoneyDestinationModal}
      onToggleModal={handleToggleModal}
      onEdit={handleEdit}
    />
  );
};

export { Edit };
