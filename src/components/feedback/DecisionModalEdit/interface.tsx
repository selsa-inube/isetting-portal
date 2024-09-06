import { useState } from "react";
import { Button } from "@inubekit/button";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";

import { TextValue } from "@config/components/feedback/DecisionModalEdit";
import { DynamicField } from "@components/inputs/DynamicField";
import { InputRange } from "@components/inputs/InputRange";
import { MultipleChoices } from "@components/inputs/MultipleChoices";
import { ReasonForChange } from "@components/inputs/ReasonForChange";
import { SingleChoice } from "@components/inputs/SingleChoice";
import { Term } from "@components/inputs/Term";
import { ToggleOption } from "@components/inputs/ToggleOption";
import {
  IDecision,
  IRuleDecision,
  IValue,
  ICondition,
  ValueHowToSetUp,
} from "@pages/rules/types";

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
    value = element.possibleValue,
    nameLabel = element.name.split(/(?=[A-Z])/).join(" ");
  let options = [],
    optionsMultiple = [];
  if (element.howToSetUp === ValueHowToSetUp.LIST_OF_VALUES) {
    options = Array.isArray(value.list)
      ? value.list.map((item) => ({
          id: item,
          label: item,
          value: item,
        }))
      : [];
    return (
      <SingleChoice
        handleSelectChange={(valueSelect, name) => {
          onDecision({ listSelected: [valueSelect], list: value.list }, name);
        }}
        id={name}
        labelSelect={nameLabel}
        name={name}
        options={options}
        valueSelected={value.listSelected?.[0]}
      />
    );
  } 
  if (element.howToSetUp === ValueHowToSetUp.LIST_OF_VALUES_MULTI) {
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
        labelSelected={TextValue.selectOption}
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
        placeholderSelect={TextValue.selectOptions}
      />
    );
  }
  if (element.howToSetUp === ValueHowToSetUp.RANGE) {
    return (
      <InputRange
        handleInputChangeFrom={(valueRange) => {
          onDecision({ ...value, rangeFrom: valueRange }, name);
        }}
        handleInputChangeTo={(valueRange) => {
          onDecision({ ...value, rangeTo: valueRange }, name);
        }}
        id={name}
        labelFrom={TextValue.rangeMin(nameLabel)}
        labelTo={TextValue.rangeMax(nameLabel)}
        typeInput={element.typeData}
        valueFrom={value.rangeFrom}
        valueTo={value.rangeTo}
      />
    );
  } 
  if (
    element.howToSetUp === ValueHowToSetUp.GREATER_THAN ||
    element.howToSetUp === ValueHowToSetUp.LESS_THAN ||
    element.howToSetUp === ValueHowToSetUp.EQUAL       
  ) { 

        return (
          <DynamicField
            label={nameLabel}
            name={name}
            handleChange={(value) => {
              onDecision({ value: value }, name);
            }}
            type={element.typeData}
            valueInput={value.value as string} 
          />
        );
   
      
  }
  return null;

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
  const [checkDisabledConfirm, setCheckDisabledConfirm] = useState(true);

  const handleToggleNone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckNone(e.target.checked);
  };

  const handleReasonForChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value) {
      setCheckDisabledConfirm(false);
    }else{
      setCheckDisabledConfirm(true);
    }
  }

  return (
    <Stack direction="column" gap="24px">
      <Stack direction="column" gap="16px">
        <Text weight="bold" size="medium">
          Criterios
        </Text>
        {decision.decision && showElement(decision.decision, onChangeDecision)}
      </Stack>
      <Divider dashed />
      <Stack direction="column">
        <Stack direction="row" gap="16px" justifyContent="space-between">
          <Text>Hechos que lo condicionan</Text>
          <Toggle
            id="toogleNone"
            onChange={handleToggleNone}
            padding="0"
            margin="0"
            checked={checkNone}
            size="small"
          >
            <Text size="medium" type="label" weight="bold">
              Ninguno
            </Text>
          </Toggle>
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
                        list: condition.possibleValue.list,
                      },
                      condition.name
                    );
                  }
                }}
                id={condition.name.replace(" ", "")}
                labelToggle={condition.name.split(/(?=[A-Z])/).join(" ")}
                name={condition.name.replace(" ", "")}
              >
                {showElement(condition, onChangeCondition)}
              </ToggleOption>
            </Stack>
          ))}
      </Stack>
      <Divider dashed />
      <Stack direction="column">
        <ReasonForChange
          label={TextValue.reasonForChange}
          labelText={TextValue.change}
          onHandleChange={handleReasonForChange}
          placeholder={TextValue.changePlaceholder}
          required={true}
        />
      </Stack>
      <Divider dashed />
      <Stack direction="column">
        <Term
          onHandleStartChange={(e) => onStartChange(e.target.value)}
          onHandleEndChange={(e) => onEndChange(e.target.value)}
          labelStart={TextValue.termStart}
          labelEnd={TextValue.termEnd}
          checkedClosed={decision.decision.endDate ? true : false}
          valueStart={decision.decision.startDate.toLocaleDateString("en-CA")}
          valueEnd={
            decision.decision.endDate?.toLocaleDateString("en-CA") || ""
          }
        />
      </Stack>
      <Divider dashed />
      <Stack direction="row" justifyContent="end" gap="8px">
        <Button appearance="gray" onClick={onCancel}>
          {TextValue.cancel}
        </Button>
        <Button onClick={onSubmit} disabled={checkDisabledConfirm} type="submit">{TextValue.confirm}</Button>
      </Stack>
    </Stack>
  );
};
