import { useLocation } from "react-router-dom";
import { privilegeOptionsConfig } from "../../config/privileges.config";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";
import { isMobile580 } from "@src/config/environment";

export function PositionsUI() {

  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? `{${basic.spacing.s24}}` : `${basic.spacing.s32} ${basic.spacing.s64}`}
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle
                title={label.label}
                description={label.description}
                navigatePage="/privileges"
              />
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
