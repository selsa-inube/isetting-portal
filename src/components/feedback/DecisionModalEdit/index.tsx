import { RuleDecision, Value } from "@src/pages/rules/types";
import { DecisionModalEditUI } from "./interface";
import { RulesConfiguration } from "@src/components/modals/RulesConfiguration";
import { useState } from "react";


export interface DecisionModalEditProps {
  decision: RuleDecision;
  onCloseModal: () => void;
  onCancel: () => void;
  onSubmitEvent: (dataDecision:RuleDecision) => void;
  portalId: string;
}

export const DecisionModalEdit = (prop: DecisionModalEditProps) => {
  const { decision, onCloseModal, onCancel, onSubmitEvent, portalId } = prop;
  const [DataDecision, setDataDecision] = useState(decision);
  const onCodition = (value: Value, nameCodition:string) => {
    const conditions = DataDecision?.conditions?.map((condition) => {
      if (condition.name === nameCodition) {
        return { ...condition, value };
      }
      return condition;
    });
    setDataDecision({ ...DataDecision, conditions });
  }
  const onDecision = (value: Value) => {
    setDataDecision({ ...DataDecision, decision: { ...DataDecision.decision, value } });
  }
  const onSubmit = () => {
    onSubmitEvent(DataDecision);
  }
  return (
      <RulesConfiguration
        portalId = {portalId}
        onCloseModal = {onCloseModal}
        title = "Configuración"
       >
        <DecisionModalEditUI decision={DataDecision} onCancel={onCancel} onSubmit={onSubmit} onChangeCodition={onCodition} onChangeDecision={onDecision}/>
      </RulesConfiguration>
    
  )
}
