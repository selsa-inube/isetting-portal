import { IRequestSteps } from "@design/feedback/requestProcess/types";

const UseCountVerifiedRequests = (requests: IRequestSteps[]) => {
  const countVerified = requests.filter(
    (request) => request.status === "completed" || request.status === "error"
  ).length;
  return (countVerified * 100) / requests.length;
};

export { UseCountVerifiedRequests };
