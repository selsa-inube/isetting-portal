import { Tag } from "@inubekit/tag";
import { Text } from "@inubekit/text";
import { Selectcheck } from "../inputs/SelectCheck";
import { StyledContainer, StyledSelection } from "./styles";
import { IOptionItemCheckedProps } from "@components/inputs/SelectCheck/OptionItem";
import { useState } from "react";


interface MultipleChoicesProps {
    onHandleSelectCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelSelected: string;
    labelSelect: string;
    options: IOptionItemCheckedProps[];
    id: string;
    required?: boolean;
}

const MultipleChoices = (props: MultipleChoicesProps) => {

    const {
        onHandleSelectCheckChange,
        labelSelected,
        labelSelect,
        options,
        id,
        required = false,
    } = props;

    const [optionsSelect, setOptionsSelect] = useState(options)

    const onHandleSelectCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, id } = event.target;
        const newOptions = optionsSelect.map((option) => {
            if (option.id === id) {
                return { ...option, checked };
            }
            return option;
        });
        setOptionsSelect(newOptions);
        onHandleSelectCheckChange(event)
    }

    const onRemoveTag = (id: string) => {
        const newOptions = optionsSelect.map((option) => {
            if (option.id === id) {
                return { ...option, checked: false };
            }
            return option;
        });
        setOptionsSelect(newOptions);
    }

    return (
        <StyledContainer>
            {
                optionsSelect.length > 0 && optionsSelect.some(option => option.checked) &&
                 (
                    <>
                        <Text
                            margin="0px 0px 4px 0px"
                            padding="0px 0px 0px 16px"
                            type="label"
                            size="medium"
                            weight="bold"
                        >{labelSelected}</Text>
                        <StyledSelection>
                            {
                                optionsSelect.filter(option => option.checked).map((option) => (
                                    <Tag key={option.id} appearance="primary" label={option.label} weight="strong" removable onClose={() => { onRemoveTag(option.id) }} />
                                ))
                            }
                        </StyledSelection>
                    </>

                )
            }

            <Selectcheck
                id={id}
                label={labelSelect}
                name={id}
                onChangeCheck={onHandleSelectCheck}
                options={optionsSelect}
                placeholder="Seleccione una opción"
                required={required}
                value=""
                size="compact"

            />
        </StyledContainer>
    )
}

export { MultipleChoices }

export type { MultipleChoicesProps }