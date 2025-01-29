import { IIconAppearance } from "@inubekit/icon";

interface IDecisionEntry {
  justification: string;
}

interface IDecisionModal {
  actionText: string;
  description: string;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
  setFieldEntered?: (value: string) => void;
  appearance?: IIconAppearance;
  icon?: React.JSX.Element;
  isLoading?: boolean;
  justificationOfDecision?: boolean;
  withIcon?: boolean;
}

export type { IDecisionEntry, IDecisionModal };
