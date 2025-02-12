import { useState } from "react";
import { IEntrys } from "@design/templates/assignmentForm/types";

const UseDeleteRequestInProgress = (
  data: IEntrys,
  setEntryDeleted: (value: string | number) => void
) => {
  const [showModal, setShowModal] = useState(false);
  const [justificationDelete, setJustificationDelete] = useState("");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    setShowModal(!showModal);
    setEntryDeleted(data.id);
  };

  return {
    showModal,
    handleToggleModal,
    handleClick,
    setJustificationDelete,
    justificationDelete,
  };
};
export { UseDeleteRequestInProgress };
