import { AppContext } from "@context/AppContext";
import { appsConfig } from "@src/config/nav";
import { PrivilegesOptionsUI } from "@src/pages/privileges/outlets/options/interface";

import { useContext } from "react";

import { privilegeOptionsConfig } from "../../config/privileges.config";

function PrivilegesOptions() {
  const { user } = useContext(AppContext);

  const allowedOptions =
    user.company !== "sistemasenlinea"
      ? ["Cargos"]
      : [];

  const filteredOptions = privilegeOptionsConfig.filter((option) =>
    allowedOptions.includes(option.label)
  );

  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={filteredOptions}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { PrivilegesOptions };
