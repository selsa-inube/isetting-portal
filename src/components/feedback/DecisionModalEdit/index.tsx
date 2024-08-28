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

export const DecisionModalEdit = (prop: DecisionModalEditProps) => {
    const { decision, onCloseModal, onCancel, onSubmitEvent, portalId } = prop;
    const [DataDecision, setDataDecision] = useState(decision);
    const onCondition = (value: IValue, nameCondition: string) => {
        const conditions = DataDecision?.conditions?.map((condition) => {
            if (condition.name === nameCondition) {
                return { ...condition, value };
            }
            return condition;
        });
        setDataDecision({ ...DataDecision, conditions });
    };
    const onDecision = (value: IValue) => {
        setDataDecision({
            ...DataDecision,
            decision: { ...DataDecision.decision, value },
        });
    };
    const onStartChange = (value: string) => {
        setDataDecision({
            ...DataDecision,
            decision: { ...DataDecision.decision, startDate: new Date(value) },
        });
    };
    const onEndChange = (value: string) => {
        setDataDecision({
            ...DataDecision,
            decision: { ...DataDecision.decision, endDate: new Date(value) },
        });
    };
    const onSubmit = () => {
        onSubmitEvent(DataDecision);
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
                onSubmit={onSubmit}
                onChangeCondition={onCondition}
                onChangeDecision={onDecision}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
            />
        </RulesConfiguration>
    );
};
