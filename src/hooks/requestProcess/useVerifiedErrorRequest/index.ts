import { IRequestSteps } from "@design/feedback/requestProcess/types";

const UseVerifiedErrorRequest = (requests: IRequestSteps[]): boolean => {
  return requests.find((request) => request.status === "error") ? true : false;
};

export { UseVerifiedErrorRequest };
