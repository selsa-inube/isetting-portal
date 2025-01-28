import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { UseCheckCredentials } from "@hooks/pages/useCheckCredentials";
import { CheckingCredentialsUI } from "./interface";

const CheckingCredentials = ({
  businessUnits,
}: {
  businessUnits: IBusinessUnitsPortalStaff[];
}) => {
  UseCheckCredentials(businessUnits);

  return <CheckingCredentialsUI />;
};

export { CheckingCredentials };
