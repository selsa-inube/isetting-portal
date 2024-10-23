import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";
import { IRuleDecision } from "@isettingkit/input";
import { getData } from "./config/formMock";
import { decisions as initialDecisions } from "./config/decisions"; // Import the mock decisions
import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [decisions, setDecisions] = useState<IRuleDecision[]>(initialDecisions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAll("staff-positions")
      .then((data) => {
        setLoading(true);
        if (data !== null) {
          setPositions(data as IPosition[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmitForm = (dataDecision: IRuleDecision) => {
    const newDecision = {
      ...dataDecision,
      id: `decision-${decisions.length + 1}`,
    };
    setDecisions((prevDecisions) => [...prevDecisions, newDecision]);
    handleCloseModal();
  };


  const handleDelete = (id: string) => {
    setDecisions((prevDecisions) =>
      prevDecisions.filter((decision) => decision.id !== id)
    );
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={positions}
      decisions={decisions}
      isModalOpen={isModalOpen}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      handleSubmitForm={handleSubmitForm}
      handleDelete={handleDelete}
    />
  );
}
