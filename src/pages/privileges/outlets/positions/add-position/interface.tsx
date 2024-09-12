import { Assisted } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";

import { isMobile580 } from "@config/environment";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";

import { createPositionConfig } from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IStep,
  titleButtonTextAssited,
} from "./types";

import { StyledContainerAssisted } from "./styles";
import { IMessageState } from "../../types/forms.types";
interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  showModal: boolean;
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
  handleCloseSectionMessage: () => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    steps,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
  } = props;

  const smallScreen = useMediaQuery(isMobile580);
  const disabled = !isCurrentFormValid;

  return (
    <Stack
      direction="column"
      padding={
        smallScreen
          ? `{${basic.spacing.s16}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s32} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={basic.spacing.s50}
          >
            <PageTitle
              title={createPositionConfig[0].title}
              description={createPositionConfig[0].description}
              navigatePage="/privileges/positions"
            />
          </Stack>
        </Stack>
        <>
          <StyledContainerAssisted $cursorDisabled={disabled}>
            <Assisted
              steps={steps}
              currentStepId={currentStep}
              handlePrev={handlePreviousStep}
              handleNext={handleNextStep}
              titleButtonText={titleButtonTextAssited}
            />
          </StyledContainerAssisted>
        </>
      </Stack>
    </Stack>
  );
}
