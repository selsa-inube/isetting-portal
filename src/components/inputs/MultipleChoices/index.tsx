import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";
import { useState } from "react";

import { IOptionItemCheckedProps } from "@components/inputs/SelectCheck/OptionItem";

import { SelectCheck } from "../SelectCheck";
import { StyledContainer, StyledSelection } from "./styles";

interface MultipleChoicesProps {
  id: string;
  labelSelect: string;
  labelSelected: string;
  onHandleSelectCheckChange: (
    options: IOptionItemCheckedProps[]
  ) => void;
  options: IOptionItemCheckedProps[];
  placeholderSelect?: string;
  required?: boolean;
}

const MultipleChoices = (props: MultipleChoicesProps) => {
  const {
    id,
    labelSelect,
    labelSelected,
    onHandleSelectCheckChange,
    options,
    placeholderSelect = "",
    required = false,
  } = props;

  const [optionsSelect, setOptionsSelect] = useState(options);

  const onHandleSelectCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked };
      }
      return option;
    });
    setOptionsSelect(newOptions);
    onHandleSelectCheckChange(newOptions);
  };

  const onRemoveTag = (id: string) => {
    const newOptions = optionsSelect.map((option) => {
      if (option.id === id) {
        return { ...option, checked: false };
      }
      return option;
    });
    setOptionsSelect(newOptions);
  };

  return (
    <StyledContainer>
      {optionsSelect.length > 0 &&
        optionsSelect.some((option) => option.checked) && (
          <>
            <Text
              margin="0px 0px 4px 0px"
              padding="0px 0px 0px 16px"
              type="label"
              size="medium"
              weight="bold"
            >
              {labelSelected}
            </Text>
            <StyledSelection>
              {optionsSelect
                .filter((option) => option.checked)
                .map((option) => (
                  <Tag
                    key={option.id}
                    appearance="primary"
                    label={option.label}
                    weight="strong"
                    removable
                    onClose={() => {
                      onRemoveTag(option.id);
                    }}
                  />
                ))}
            </StyledSelection>
          </>
        )}

      <SelectCheck
        id={id}
        label={labelSelect}
        name={id}
        onChangeCheck={onHandleSelectCheck}
        options={optionsSelect}
        placeholder={ placeholderSelect }
        required={required}
        value=""
        size="compact"
        fullwidth
      />
    </StyledContainer>
  );
};

export { MultipleChoices };

export type { MultipleChoicesProps };
