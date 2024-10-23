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
import { privilegeOptionsConfig } from "@pages/privileges/config/privileges.config";
import { BusinessRuleCard, BusinessRuleView, RulesForm } from "@isettingkit/business-rules";
import { Grid } from "@inubekit/grid";
import { Assisted } from "@inubekit/assisted";
import { RulesConfiguration } from "@components/modals/RulesConfiguration";
import { IRuleDecision } from "@isettingkit/input";
import { useState } from "react";
import { stepsMock } from "./config/stepmock";
import { getData } from "./config/formMock";

interface IPositionsUIProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  loading: boolean;
  data: IPosition[];
  decisions: IRuleDecision[];
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleSubmitForm: (dataDecision: IRuleDecision) => void;
  handleDelete: (id: string) => void;
}

export function PositionsUI(props: IPositionsUIProps) {
  const {
    loading,
    data,
    decisions,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleSubmitForm,
    handleDelete,
  } = props;

  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );
  const [currentStepNumber, _] = useState(3);

  const stepsList = Object.values(stepsMock);
  const currentStep = stepsList.find(
    (step: { number: number }) => step.number === currentStepNumber
  );

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
        <Stack direction="column" gap="4px">
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Evaluacion Crediticia
          </Text>
          <Text
            type="body"
            size={smallScreen ? "medium" : "small"}
            appearance="gray"
          >
            Completa la información para evaluar la viabilidad del crédito
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column">
          <Assisted
            step={currentStep!}
            totalSteps={stepsList.length}
            onBackClick={() => {}}
            onNextClick={() => {}}
            onSubmitClick={() => {}}
            size="large"
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Enviar",
            }}
          />
          <Stack justifyContent="flex-end" alignItems="center">
            <Button
              iconBefore={<MdAddCircleOutline />}
              spacing="wide"
              onClick={handleOpenModal}
            >
              Agregar decisión
            </Button>
          </Stack>
          {loading && data.length <= 0 ? (
            <LoadingApp />
          ) : (
            <Grid
              templateColumns="repeat(3, 1fr)"
              autoRows="auto"
              gap={basic.spacing.s24}
              alignItems="start"
              justifyContent="center"
            >
              {decisions.map((decision, index) => (
                <BusinessRuleCard
                  key={`decision-${index}`}
                  handleDelete={() => {
                    handleDelete(decision.id!);
                  }}
                  handleView={() => {
                    console.log(`Viewing item with id: ${decision.id}`);
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

      {isModalOpen && (
        <RulesConfiguration
          portalId="modal-portal"
          onCloseModal={handleCloseModal}
          title="Configuración de Reglas"
        >
          <RulesForm
            decision={getData()}
            onCloseModal={handleCloseModal}
            onCancel={handleCloseModal}
            onSubmitEvent={(dataDecision: IRuleDecision) => {
              console.log('dataDecision:', dataDecision),
              handleSubmitForm(dataDecision);
            }}
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
        </RulesConfiguration>
      )}
    </Stack>
  );
}
