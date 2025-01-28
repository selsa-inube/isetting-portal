import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { basic } from "@design/tokens";
import {
  IGeneralInformationEntry,
  IOptionInitialiceEntry,
} from "@pages/privileges/outlets/positions/add-position/types";

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

const renderStepTwoVerification = (
  values: IOptionInitialiceEntry[],
  isMobile: boolean
) => (
  <>
    <Grid
      templateColumns={isMobile ? "1fr" : "1fr 1fr"}
      autoRows="1fr"
      gap={basic.spacing.s100}
      width="100%"
    >
      {values
        .filter((value) => value.isActive)
        .map((value) => (
          <Stack key={value.id}>
            <BoxAttribute label="Fecha de creación:" value={value.value} />
          </Stack>
        ))}
    </Grid>
  </>
);

export { renderPersonalInfoVerification, renderStepTwoVerification };
