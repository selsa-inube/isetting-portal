import { useState } from "react";

import { IRuleDecision, IValue } from "@src/pages/rules/types";
import { RulesConfiguration } from "@src/components/modals/RulesConfiguration";
import { DecisionModalEditUI } from "./interface";

export interface DecisionModalEditProps {
    decision: IRuleDecision;
    onCloseModal: () => void;
    onCancel: () => void;
    onSubmitEvent: (dataDecision: IRuleDecision) => void;
    portalId: string;
}

const updateDataDecision = (prevDataDecision:IRuleDecision, field:string, value:IValue | Date) => {
    return {
        ...prevDataDecision,
        decision: { ...prevDataDecision.decision, [field]: value },
    };
};

export const DecisionModalEdit = (prop: DecisionModalEditProps) => {
    const { decision, onCloseModal, onCancel, onSubmitEvent, portalId } = prop;
    const [DataDecision, setDataDecision] = useState(decision);
    const onCondition = (value: IValue, nameCondition: string) => {
        setDataDecision((DataDecisionRule) => {
            const conditions = DataDecisionRule?.conditions?.map((condition) => {
                if (condition.name === nameCondition) {
                    return { ...condition, value };
                }
                return condition;
            });
            return { ...DataDecisionRule, conditions };
        });
    };
    const onDecision = (value: IValue) => {
        setDataDecision((prevDataDecision) => updateDataDecision(prevDataDecision, 'value', value));
    };

    const onStartChange = (value: string) => {
        setDataDecision((prevDataDecision) => updateDataDecision(prevDataDecision, 'startDate', new Date(value)));
    };

    const onEndChange = (value: string) => {
        setDataDecision((prevDataDecision) => updateDataDecision(prevDataDecision, 'endDate', new Date(value)));
    };
    return (
        <RulesConfiguration
            portalId={portalId}
            onCloseModal={onCloseModal}
            title="Configuración"
        >
            <DecisionModalEditUI
                decision={DataDecision}
                onCancel={onCancel}
                onSubmit={()=>onSubmitEvent(DataDecision)}
                onChangeCondition={onCondition}
                onChangeDecision={onDecision}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
            />
        </RulesConfiguration>
    );
};
