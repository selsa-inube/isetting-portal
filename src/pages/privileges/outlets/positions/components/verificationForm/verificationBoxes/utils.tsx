import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { BoxAttribute } from "@design/feedback/BoxAttribute";
import { basic } from "@design/tokens";
import { IGeneralInformationEntry } from "../../../add-position/types";

const renderPersonalInfoVerification = (
  values: IGeneralInformationEntry,
  isMobile: boolean
) => (
  <>
    <Grid
      templateColumns={isMobile ? "1fr" : "1fr 1fr"}
      autoRows="1fr"
      gap={basic.spacing.s100}
      width="100%"
    >
      <BoxAttribute label="Nombre del destino:" value={values.namePosition} />
    </Grid>
    <Stack width="100%" direction="column" gap={basic.spacing.s100}>
      <BoxAttribute
        direction="column"
        label="Descripción:"
        value={values.descriptionPosition}
      />
    </Stack>
  </>
);

export { renderPersonalInfoVerification };
