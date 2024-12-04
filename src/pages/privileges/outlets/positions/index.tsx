import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";

import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [positions, setPositions] = useState<IPosition[]>([]);

  useEffect(() => {
    getAll("staff-positions")
      .then((data) => {
        setLoading(true);
        if (Array.isArray(data)) {
          setPositions(data as IPosition[]);
        } else {
          console.error("Data fetched is not an array:", data);
          setPositions([]); // Manejar casos en los que no es un array
        }
      })
      .catch((error) => {
        console.info(error.message);
        setPositions([]); // En caso de error, inicializar con un array vacío
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };
  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={positions}
    />
  );
}
