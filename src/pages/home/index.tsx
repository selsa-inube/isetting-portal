import { appCards } from "@config/appCards";
import { UseHome } from "@hooks/useHome";
import { HomeUI } from "./interface";

const Home = () => {
  const {
    Collapse,
    SetCollapse,
    SelectedClient,
    businessUnitsToTheStaff,
    HandleLogoClick,
    CollapseMenuRef,
    BusinessUnitChangeRef,
    IsTablet,
    SmallScreen,
    Username,
  } = UseHome();

  return (
    <HomeUI
      data={appCards}
      collapse={Collapse}
      setCollapse={SetCollapse}
      selectedClient={SelectedClient}
      businessUnitsToTheStaff={businessUnitsToTheStaff}
      handleLogoClick={HandleLogoClick}
      collapseMenuRef={CollapseMenuRef}
      businessUnitChangeRef={BusinessUnitChangeRef}
      isTablet={IsTablet}
      smallScreen={SmallScreen}
      username={Username}
    />
  );
};

export { Home };
