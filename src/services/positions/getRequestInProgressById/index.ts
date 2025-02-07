import { AxiosRequestConfig } from "axios";
import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntity } from "./mappers";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingProcess";

const getRequestInProgressById = async (
  bussinesUnits: string,
  settingRequestId: string
): Promise<IRequestsInProgress> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdConfigurationRequestsByBusinessUnit",
      "X-Business-unit": bussinesUnits,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "ifac",
    entityName: "MoneyDestination",
  });
  const data = await getWithRetries<IRequestsInProgress>(
    axiosInstance,
    `/requests/business-unit/${bussinesUnits}/${settingRequestId}?${queryParams.toString()}`,
    config
  );
  return mapRequestsInProgressToEntity(data);
};

export { getRequestInProgressById };
