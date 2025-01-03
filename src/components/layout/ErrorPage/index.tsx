import { MdChevronLeft } from "react-icons/md";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import { useMediaQueries } from "@inubekit/hooks";

import selsaLogo from "@assets/images/selsa.png";
import errorImage from "@assets/images/timeout.png";

import { StyledCompanyLogo, StyledErrorImage } from "./styles";
import { basic } from "@design/tokens";

interface ErrorPageProps {
  logo?: string;
  logoAlt?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  nameButton?: string;
  onClick?: () => void;
}

const ErrorPage = (props: ErrorPageProps) => {
  const {
    logo = selsaLogo,
    logoAlt = "Sistemas Enlinea",
    heading = "!Oh! Algo ha salido mal",
    description = "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
    image = errorImage,
    imageAlt = "Ha surgido un error. Revisa la descripción",
    nameButton = "volver",
    onClick,
  } = props;

  const mediaQueries = ["(min-width: 771px)", "(max-width: 770px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <Stack
      padding={
        matches["(max-width: 770px)"]
          ? `${basic.spacing.s400}`
          : `${basic.spacing.s1000}`
      }
      gap={
        matches["(min-width: 771px)"]
          ? `${basic.spacing.s600}`
          : `${basic.spacing.s800}`
      }
      direction="column"
    >
      <StyledCompanyLogo src={logo} alt={logoAlt} />
      <Grid
        templateRows={matches["(max-width: 770px)"] ? "repeat(2, 1fr)" : "1fr"}
        templateColumns={
          matches["(max-width: 770px)"] ? "auto" : "repeat(2, 1fr)"
        }
        alignItems="center"
        gap={
          matches["(max-width: 770px)"]
            ? `${basic.spacing.s0}`
            : `${basic.spacing.s1000}`
        }
      >
        <Stack gap={basic.spacing.s300} direction="column">
          <Stack gap={basic.spacing.s300} direction="column">
            <Text
              type="title"
              weight="bold"
              size={matches["(max-width: 770px)"] ? "small" : "medium"}
            >
              {heading}
            </Text>
            <Text
              type="title"
              size={matches["(max-width: 770px)"] ? "small" : "medium"}
            >
              {description}
            </Text>
          </Stack>
          <Button iconBefore={<MdChevronLeft size={18} />} onClick={onClick}>
            {nameButton}
          </Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </Grid>
    </Stack>
  );
};

export { ErrorPage };
export type { ErrorPageProps };
