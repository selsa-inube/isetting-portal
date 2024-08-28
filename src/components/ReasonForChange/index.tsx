import { useState } from "react";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Textarea } from "@inubekit/textarea";

interface ReasonForChangeProps {
    label: string;
    labelText: string;
    onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required: boolean;
    value?: string;
}

export const ReasonForChange = (props: ReasonForChangeProps) => {
    const {
        label,
        labelText,
        onHandleChange,
        placeholder,
        required,
        value = "",
    } = props;

    const [valueTextarea, setTextarea] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextarea(event.target.value);
        onHandleChange(event);
    };

    return (
        <Stack direction="column" margin="10px 5px">
            <Text
                size="large"
                appearance="gray"
                weight="bold"
                margin="10px 0px"
            >
                {labelText}
            </Text>
            <Stack margin="10px 0px">
                <Textarea
                    id="reasonChange"
                    label={label}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={required}
                    value={valueTextarea}
                    maxLength={120}
                    fullwidth
                />
            </Stack>
        </Stack>
    );
};

export type { ReasonForChangeProps };
