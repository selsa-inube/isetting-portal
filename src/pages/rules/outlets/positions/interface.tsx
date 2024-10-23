import { useLocation } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";

import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { IPosition } from "./add-position/types";

import { usePagination } from "./components/GeneralInformationForm/utils";
import { privilegeOptionsConfig } from "@src/pages/privileges/config/privileges.config";
import { BusinessRuleCard, BusinessRuleView } from "@isettingkit/business-rules";
import { decisions } from "./config/decisions";
import { Grid } from "@inubekit/grid";

const pagerecord = 10;

interface IPositionsProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IPosition[];
  loading: boolean;
}

export function PositionsUI(props: IPositionsProps) {
  const { searchPosition, loading, data } = props;
  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );



  const {
    filteredData,
  } = usePagination(searchPosition, data, pagerecord);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `{${basic.spacing.s24}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle
                title={label.label}
                description={label.description}
                navigatePage="/privileges/options"
              />
            </>
          )}
        </Stack>
        <Stack>
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Consulta de Cargos vigentes ({filteredData.length})
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column">
          <Stack justifyContent="flex-end" alignItems="center">
              <Button
                iconBefore={<MdAddCircleOutline />}
                spacing="wide"
                type="link"
                path="/privileges/positions/add-position"
              >
                Agregar decisión
              </Button>
          </Stack>
          {loading && data.length <= 0 ? (
            <LoadingApp />
          ) : (
          <Grid templateColumns="repeat(3, 1fr)" gap={basic.spacing.s24} alignItems="start" justifyContent="center" >
              {decisions.map((decision, index) => (
                <BusinessRuleCard
                  key={`decision-${index}`}
                  handleDelete={(id) => {
                    console.log(`Deleting item with id: ${id}`);
                  }}
                  handleView={(id) => {
                    console.log(`Viewing item with id: ${id}`);
                  }}
                  id={`decision-${index}`}
                >
                  <BusinessRuleView
                    decision={decision}
                    textValues={{
                      selectOptions: "Seleccione las opciones",
                      selectOption: "Seleccione una opción",
                      rangeMin: (label: string) => `${label} Minima`,
                      rangeMax: (label: string) => `${label} Maxima`,
                      reasonForChange: "Motivo del cambio",
                      change: "Cambio",
                      changePlaceholder: "Describa brevemente el motivo del cambio",
                      termStart: "Fecha de inicio",
                      termEnd: "Fecha de fin",
                      cancel: "Cancelar",
                      confirm: "Confirmar",
                      none: "Ninguno",
                      FactsThatConditionIt: "Hechos que condicionan",
                      criteria: "Criterios",
                      Terms: "Vigencia",
                    }}
                  />
                </BusinessRuleCard>
              ))}
            </Grid>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
