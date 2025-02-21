import { editPositionModal } from "@config/positionsTabs/generics/editPositionModal";
import { EditRecord } from "@design/feedback/editRecord";
import { IEntry } from "@design/table/types";
import { UseEditPositionsModal } from "@hooks/positions/useEditPositionsModal";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { showModal, handleEdit, handleToggleModal } =
    UseEditPositionsModal(data);
  return (
    <EditRecord
      showModal={showModal}
      portalId="portal"
      editRecordMessage={editPositionModal}
      onToggleModal={handleToggleModal}
      onEdit={handleEdit}
    />
  );
};

export { Edit };
