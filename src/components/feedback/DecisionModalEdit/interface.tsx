import { useState } from "react";
import { Button } from "@inubekit/button";
import { Divider } from "@src/components/layout/Divider";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Toggle } from "@inubekit/toggle";

import { InputRange } from "@src/components/inputs/InputRange";
import { MultipleChoices } from "@src/components/inputs/MultipleChoices";
import { SingleChoice } from "@src/components/inputs/SingleChoice";
import { Term } from "@src/components/inputs/Term";
import { ToggleOption } from "@src/components/inputs/ToggleOption";
import {
    IDecision,
    IRuleDecision,
    IValue,
    ICondition,
} from "@src/pages/rules/types";

export interface DecisionModalEditUIProps {
    decision: IRuleDecision;
    onCancel: () => void;
    onChangeCondition: (value: IValue, nameCondition: string) => void;
    onChangeDecision: (value: IValue, nameDecision: string) => void;
    onEndChange: (value: string) => void;
    onStartChange: (value: string) => void;
    onSubmit: () => void;
}
const showElement = (
    element: IDecision | ICondition,
    onDecision: (value: IValue, nameCondition: string) => void
) => {
    const name = element.name.replace(" ", ""),
        value = element.value,
        nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
    let options = [],
        optionsMultiple = [];
    switch (element.dataType) {
        case "list":
            options = Array.isArray(value.list)
                ? value.list.map((item) => ({
                      id: item,
                      label: item,
                  }))
                : [];
            return (
                <SingleChoice
                    handleSelectChange={(e, name) => {
                        onDecision({ value: e.target.innerText }, name);
                    }}
                    id={name}
                    labelSelect={nameLabel}
                    name={name}
                    options={options}
                    valueSelected={value.listSelected?.[0]}
                />
            );
        case "listMultiple":
            optionsMultiple = Array.isArray(value.list)
                ? value.list.map((item) => ({
                      id: item,
                      label: item,
                      checked: value.listSelected?.includes(item),
                  }))
                : [];
            return (
                <MultipleChoices
                    id={name}
                    labelSelect={nameLabel}
                    labelSelected="Seleccione una opción"
                    onHandleSelectCheckChange={(options) => {
                        onDecision(
                            {
                                listSelected: options
                                    .filter((option) => option.checked)
                                    .map((option) => option.id),
                            },
                            name
                        );
                    }}
                    options={optionsMultiple}
                    placeholderSelect="Seleccione las opciónes"
                />
            );
        case "number":
            return (
                <Textfield
                    id={name}
                    label={nameLabel}
                    onChange={(e) => {
                        onDecision({ value: e.target.value }, name);
                    }}
                    type="number"
                    value={value.value}
                    fullwidth
                />
            );
        case "range":
            return (
                <InputRange
                    handleInputChangeFrom={(valueRange) => {
                        onDecision(
                            { rangeFrom: valueRange, rangeTo: value.rangeTo },
                            name
                        );
                    }}
                    handleInputChangeTo={(valueRange) => {
                        onDecision(
                            { rangeTo: valueRange, rangeFrom: value.rangeFrom },
                            name
                        );
                    }}
                    id={name}
                    labelFrom={`${nameLabel} Minima`}
                    labelTo={`${nameLabel} Maxima`}
                    typeInput="number"
                    valueFrom={value.rangeFrom}
                    valueTo={value.rangeTo}
                />
            );
        case "string":
            return (
                <Textfield
                    id={name}
                    label={nameLabel}
                    onChange={(e) => {
                        onDecision({ value: e.target.value }, name);
                    }}
                    type="text"
                    value={value.value}
                    fullwidth
                />
            );
    }
};

export const DecisionModalEditUI = (props: DecisionModalEditUIProps) => {
    const {
        decision,
        onCancel,
        onChangeCondition,
        onChangeDecision,
        onSubmit,
        onStartChange,
        onEndChange,
    } = props;
    const [checkNone, setCheckNone] = useState(false);

    const handleToggleNone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckNone(e.target.checked);
    };

    return (
        <Stack direction="column" gap="24px">
            <Stack direction="column" gap="16px">
                <Text weight="bold" size="medium">
                    Criterios
                </Text>
                {decision.decision &&
                    showElement(decision.decision, onChangeDecision)}
            </Stack>
            <Divider dashed />
            <Stack direction="column">
                <Stack
                    direction="row"
                    gap="16px"
                    justifyContent="space-between"
                >
                    <Text>Hechos que lo condicionan</Text>
                    <Toggle
                        id="toogleNone"
                        label="Ninguno"
                        onChange={handleToggleNone}
                        padding="0"
                        margin="0"
                        checked={checkNone}
                        size="small"
                    />
                </Stack>
                {decision.conditions &&
                    decision.conditions.map((condition) => (
                        <Stack key={condition.name} direction="column">
                            <ToggleOption
                                checked={!checkNone}
                                handleToggleChange={(e) => {
                                    if (!e.target.checked) {
                                        onChangeCondition(
                                            {
                                                value: "",
                                                rangeTo: 0,
                                                rangeFrom: 0,
                                                list: condition.value.list,
                                            },
                                            condition.name
                                        );
                                    }
                                }}
                                id={condition.name.replace(" ", "")}
                                labelToggle={condition.name
                                    .split(/(?=[A-Z])/)
                                    .join(" ")}
                                name={condition.name.replace(" ", "")}
                            >
                                {showElement(condition, onChangeCondition)}
                            </ToggleOption>
                        </Stack>
                    ))}
            </Stack>
            <Divider dashed />
            <Stack direction="column"></Stack>
            <Divider dashed />
            <Stack direction="column">
                <Term
                    onHandleStartChange={(e) => onStartChange(e.target.value)}
                    onHandleEndChange={(e) => onEndChange(e.target.value)}
                    labelStart="Fecha de inicio"
                    labelEnd="Fecha de fin"
                    checkedClosed={decision.decision.endDate ? true : false}
                    valueStart={decision.decision.startDate.toLocaleDateString(
                        "en-CA"
                    )}
                    valueEnd={
                        decision.decision.endDate?.toLocaleDateString(
                            "en-CA"
                        ) || ""
                    }
                />
            </Stack>
            <Divider dashed />
            <Stack direction="row" justifyContent="end" gap="8px">
                <Button appearance="gray" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button onClick={onSubmit}>Confirmar</Button>
            </Stack>
        </Stack>
    );
};
