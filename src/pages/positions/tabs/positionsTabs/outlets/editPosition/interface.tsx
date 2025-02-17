import { FormikProps } from "formik";
import { IRuleDecision } from "@isettingkit/input";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inubekit/inubekit";

import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

import { IEditDestinationTabsConfig } from "@ptypes/positions/tabs/ITabConfig/IEditDestinationTabsConfig";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import {
  IFormAddPosition,
  IGeneralInformationEntry,
} from "../addPosition/types";
import { Title } from "@design/label/Title";
import { crumbsEditPosition } from "@config/positions/editPositions/navigation";
import { GeneralInformationForm } from "../../forms/generalInformationForm";
import { InitializerForm } from "@design/forms/InitializerForm";
import { basic } from "@design/tokens";

interface IEditDestinationUI {
  editPositionTabsConfig: IEditDestinationTabsConfig;
  creditLineDecisions: IRuleDecision[];
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialValues: IFormAddPosition;
  isSelected: string;
  requestSteps: IRequestSteps[];
  loading: boolean;
  showPendingReqModal: boolean;
  showRequestProcessModal: boolean;
  savePositions: ISaveDataResponse;
  onTabChange: (id: string) => void;
  onButtonClick: () => void;
  onReset: () => void;
  setCreditLineDecisions: (decisions: IRuleDecision[]) => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
}

const EditDestinationUI = (props: IEditDestinationUI) => {
  const {
    editPositionTabsConfig,
    generalInformationRef,
    initialValues,
    isSelected,
    loading,
    onTabChange,
    setIsCurrentFormValid,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");
  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsEditPosition} />
          <Title
            title="Destinos de dinero"
            description=" Destino del dinero para crédito."
            sizeTitle="large"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Tabs
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={isSelected}
            onChange={onTabChange}
          />
          <Stack direction="column">
            {isSelected === editPositionTabsConfig.generalInformation.id && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                // onButtonClick={onButtonClick}
                editDataOption
                loading={loading}
                handleNextStep={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
            {isSelected === editPositionTabsConfig.selectionRoles.id && (
              <InitializerForm
                dataOptionsForms={initialValues.rolesStaff.values}
                dataOptionsValueSelect={initialValues.applicationStaff.values}
                setSelectedToggle={() => false}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        {/* <Button
          fullwidth={smallScreen}
          onClick={() => formik.resetForm()}
          appearance={ComponentAppearance.GRAY}
          disabled={valuesEqual}
        >
          Cancelar
        </Button>

        <Button
          fullwidth={smallScreen}
          onClick={onButtonClick}
          disabled={
            editDataOption ? isDisabledButton && !loading : isDisabledButton
          }
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {editDataOption ? "Guardar" : "Siguiente"}
        </Button> */}
      </Stack>
      {/* {showRequestProcessModal && savePositions && (
        <RequestProcessModal
          portalId="portal"
          saveData={saveMoneyDestination}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          loading={loading}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
        />
      )}
      {showPendingReqModal && saveMoneyDestination.requestNumber && (
        <DecisionModal
          portalId="portal"
          title={requestPendingModal(saveMoneyDestination.requestNumber).title}
          description={
            requestPendingModal(saveMoneyDestination.requestNumber).description
          }
          actionText={
            requestPendingModal(saveMoneyDestination.requestNumber).actionText
          }
          onCloseModal={onClosePendingReqModal}
          onClick={onClosePendingReqModal}
          withCancelButton={false}
        />
      )} */}
    </Stack>
  );
};

export { EditDestinationUI };
