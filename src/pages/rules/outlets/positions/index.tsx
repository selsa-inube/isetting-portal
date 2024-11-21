/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";
import { IRuleDecision } from "@isettingkit/input";
import { decisions as initialDecisions } from "./config/decisions";
import { PositionsUI } from "./interface";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";
import { getData } from "./config/formMock";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [decisions, setDecisions] = useState<IRuleDecision[]>(initialDecisions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState<IRuleDecision | null>(null);
  const [originalDecision, setOriginalDecision] = useState<IRuleDecision | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getAll("staff-positions")
        .then((data) => {
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
    }, 500);
  }, []);
  

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  // const handleOpenModal = () => {
  //   setSelectedDecision(null); 
  //   setIsModalOpen(true);
  // };


  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleSubmitForm = (dataDecision: IRuleDecision) => {
  //   console.log('handleSubmitForm: dataDecision', dataDecision);
  //   if (selectedDecision) {
  //     setDecisions((prevDecisions) =>
  //       prevDecisions.map((decision) =>
  //         decision.id === selectedDecision.id ? dataDecision : decision
  //       )
  //     );
  //   } else {
  //     const newDecision = {
  //       ...dataDecision,
  //       id: `decision-${decisions.length + 1}`,
  //     };
  //     setDecisions((prevDecisions) => [...prevDecisions, newDecision]);
  //   }
  //   handleCloseModal();
  // };
  const handleOpenModal = () => {
    const newDecision = selectedDecision || getData();
    setOriginalDecision(newDecision);
    setIsModalOpen(true);
    setSelectedDecision(null); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOriginalDecision(null);
  };

  const revertModalDisplayData = (dataDecision: IRuleDecision, originalDecision: IRuleDecision) => {
    const conditionToRestore = {
      name: dataDecision.name,
      dataType: dataDecision.dataType,
      value: dataDecision.value,
      valueUse: dataDecision.valueUse,
      possibleValue: dataDecision.possibleValue,
      switchPlaces: true,
    };
  
    return {
      ...originalDecision,
      conditions: dataDecision.conditions?.map((condition: any) =>
        condition.hidden ? conditionToRestore : condition
      ),
    };
  };
  

const handleSubmitForm = (dataDecision: IRuleDecision) => {
  const revertedDecision = revertModalDisplayData(dataDecision, originalDecision!);

  if (selectedDecision) {
    setDecisions((prevDecisions) =>
      prevDecisions.map((decision) =>
        decision.id === selectedDecision.id ? revertedDecision : decision
      )
    );
    console.log('updatedDecision: ', revertedDecision);
  } else {
    const newDecision = {
      ...revertedDecision,
      id: `decision-${decisions.length + 1}`,
    };
    setDecisions((prevDecisions) => [...prevDecisions, newDecision]);
    console.log('newDecision: ', newDecision);
  }

  handleCloseModal();
};


  const handleDelete = (id: string) => {
    setDecisions((prevDecisions) =>
      prevDecisions.filter((decision) => decision.id !== id)
    );
  };

  // const handleView = (decision: IRuleDecision) => {
  //   setSelectedDecision(decision);
  //   setIsModalOpen(true);
  // };
  const handleView = (decision: IRuleDecision) => {
    setSelectedDecision(decision);
    setOriginalDecision(decision);
    setIsModalOpen(true);
  };
  
  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={positions}
      decisions={decisions}
      isModalOpen={isModalOpen}
      selectedDecision={selectedDecision}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      handleSubmitForm={handleSubmitForm}
      handleDelete={handleDelete}
      handleView={handleView} 
      layoutMode="default"
    />
  );
}
