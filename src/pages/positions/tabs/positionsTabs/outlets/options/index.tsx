import { appsConfig } from "@config/nav";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { PositionsOptionsUI } from "./interface";

const PositionsOptions = () => {
  return (
    <PositionsOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={PrivilegeOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
};

export { PositionsOptions };
