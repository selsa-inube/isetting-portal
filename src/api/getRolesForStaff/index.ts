import { AxiosRequestConfig } from "axios";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { fetchWithRetries } from "@api/axiosConfig/getDataWithRetries";

const getRolesForStaff = async (): Promise<IRoleForStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllRolesForStaff",
    },
  };
  return fetchWithRetries<IRoleForStaff[]>(`/roles-for-staff`, config);
};

export { getRolesForStaff };
