import { useEffect, useState } from "react";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { getRolesStaff } from "@services/positions/getRolesForStaff";

const UseFetchRolesStaff = () => {
  const [rolesStaff, setRolesStaff] = useState<IRoleForStaff[]>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchRolesStaff = async () => {
      try {
        const data = await getRolesStaff();
        setRolesStaff(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };
    fetchRolesStaff();
  }, []);

  return { rolesStaff, hasError };
};

export { UseFetchRolesStaff };
