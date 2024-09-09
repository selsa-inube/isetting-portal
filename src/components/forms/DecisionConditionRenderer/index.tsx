import { TextValue } from "@config/components/feedback/DecisionModalEdit";
import { InputRange } from "@src/components/inputs/InputRange";
import { MultipleChoices } from "@src/components/inputs/MultipleChoices";
import { SingleChoice } from "@src/components/inputs/SingleChoice";
import {
  ICondition,
  IDecision,
  IValue,
  ValueHowToSetUp,
} from "@pages/rules/types";
import { DynamicField } from "@src/components/inputs/DynamicField";

interface DecisionConditionRendererProps {
  element: IDecision | ICondition;
  onDecision: (value: IValue, nameCondition: string) => void;
}

export const DecisionConditionRenderer = (
  props: DecisionConditionRendererProps
) => {
  const { element, onDecision } = props;
  const name = element.name.replace(" ", ""),
    value = element.possibleValue,
    nameLabel = element.name.split(/(?=[A-Z])/).join(" ");

  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return (
        <SingleChoice
          handleSelectChange={(valueSelect, name) => {
            onDecision({ listSelected: [valueSelect], list: value.list }, name);
          }}
          id={name}
          labelSelect={nameLabel}
          name={name}
          options={
            Array.isArray(value.list)
              ? value.list.map((item) => ({
                  id: item,
                  label: item,
                  value: item,
                }))
              : []
          }
          valueSelected={value.listSelected?.[0]}
        />
      );
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
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
          options={
            Array.isArray(value.list)
              ? value.list.map((item) => ({
                  id: item,
                  label: item,
                  checked: value.listSelected?.includes(item),
                }))
              : []
          }
          placeholderSelect={TextValue.selectOptions}
        />
      );
    case ValueHowToSetUp.RANGE:
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
    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
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
    default:
      return null;
  }
};
