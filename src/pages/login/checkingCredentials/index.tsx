import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useCheckCredentials } from "@hooks/useCheckCredentials";
import { CheckingCredentialsUI } from "./interface";

const CheckingCredentials = ({
  businessUnits,
}: {
  businessUnits: IBusinessUnitsPortalStaff[];
}) => {
  useCheckCredentials(businessUnits);

  return <CheckingCredentialsUI />;
};

export { CheckingCredentials };
