import { useState } from "react";
import { Button } from "@inubekit/button";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";

import { TextValue } from "@config/components/feedback/DecisionModalEdit";
import { ReasonForChange } from "@components/inputs/ReasonForChange";
import { Term } from "@components/inputs/Term";
import { ToggleOption } from "@components/inputs/ToggleOption";
import { DecisionConditionRenderer } from "@src/components/forms/DecisionConditionRenderer";
import { basic } from "@design/tokens";
import {
  IRuleDecision,
  IValue,
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
    <Stack direction="column" gap={basic.spacing.s24}>
      <Stack direction="column" gap={basic.spacing.s16}>
        <Text weight="bold" size="medium">
          Criterios
        </Text>
        {decision.decision && <DecisionConditionRenderer element={decision.decision} onDecision={onChangeDecision}/>}
      </Stack>
      <Divider dashed />
      <Stack direction="column">
        <Stack direction="row" gap={basic.spacing.s16} justifyContent="space-between">
          <Text>Hechos que lo condicionan</Text>
          <Toggle
            id="toogleNone"
            onChange={handleToggleNone}
            padding={basic.spacing.s0}
            margin={basic.spacing.s0}
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
                {<DecisionConditionRenderer element={condition} onDecision={onChangeCondition}/>}
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
      <Stack direction="row" justifyContent="end" gap={basic.spacing.s8}>
        <Button appearance="gray" onClick={onCancel}>
          {TextValue.cancel}
        </Button>
        <Button onClick={onSubmit} disabled={checkDisabledConfirm} type="submit">{TextValue.confirm}</Button>
      </Stack>
    </Stack>
  );
};
