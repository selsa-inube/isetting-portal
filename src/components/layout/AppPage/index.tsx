import { Outlet } from "react-router-dom";
import { Grid } from "@inubekit/grid";
import { Header } from "@inubekit/header";
import { Nav } from "@inubekit/nav";
import { useMediaQuery } from "@inubekit/hooks";

import { nav } from "@src/config/nav";

import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
} from "./styles";
import linparLogo from "@assets/images/linpar.png";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const isTablet = useMediaQuery("(max-width: 944px)");

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header
          portalId="portal"
          navigation={nav}
          logoURL={renderLogo(linparLogo)}
          userName={"Dora Lucia"}
          client={"Selsa"}
        />
        <StyledContainer>
          <Grid
            templateColumns={!isTablet ? "auto 1fr" : "1fr"}
            alignContent="unset"
          >
            {!isTablet && (
              <Nav
                navigation={nav}
                logoutPath="/logout"
                logoutTitle="Cerrar sesión"
              />
            )}
            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
