import { useContext, useState } from "react";
import { UseBusinessManagersId } from "@hooks/usePositions/useBusinessManageresId";
import { AuthAndData } from "@context/authAndDataProvider";
import { PositionsUI } from "./interface";

const Positions = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading] = useState<boolean>(false);

  const { appData } = useContext(AuthAndData);
  const { BusinessManagersData } = UseBusinessManagersId(
    appData.businessManager.publicCode
  );

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={BusinessManagersData}
    />
  );
};

export { Positions };
