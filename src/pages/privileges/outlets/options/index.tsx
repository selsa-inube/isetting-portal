import { appsConfig } from "@config/nav";
import { PrivilegeOptionsConfig } from "@pages/privileges/config/privileges.config";
import { PrivilegesOptionsUI } from "@pages/privileges/outlets/options/interface";

const PrivilegesOptions = () => {
  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={PrivilegeOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
};

export { PrivilegesOptions };
