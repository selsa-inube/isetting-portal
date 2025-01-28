import { IPosition } from "@pages/positions/outlets/addPosition/types";

interface IPositionsContext {
  positions: IPosition[];
  setPositions: React.Dispatch<React.SetStateAction<IPosition[]>>;
}

export type { IPositionsContext };
