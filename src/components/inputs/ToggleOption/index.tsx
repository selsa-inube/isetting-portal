import { useEffect, useState } from "react";
import { Toggle } from "@inubekit/toggle";

export interface ToggleOptionProps {
    checked: boolean;
    children: React.ReactNode;
    handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    labelToggle: string;
    name: string;
    valueToggle?: string;
}

export const ToggleOption = (props: ToggleOptionProps) => {
    const {
        checked,
        children,
        handleToggleChange,
        id,
        labelToggle,
        name,
        valueToggle = "",
    } = props;
    const [toogleCheck, setToogleCheck] = useState(checked);
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToogleCheck(e.target.checked);
        handleToggleChange(e);
    };

    useEffect(() => {
        setToogleCheck(checked);
    }, [checked]);

    return (
        <>
            <Toggle
                checked={toogleCheck}
                id={id}
                label={labelToggle}
                margin="10px"
                name={name}
                onChange={handleToggle}
                padding="0px"
                size="small"
                value={valueToggle}
            />
            {toogleCheck && (<>{children}</>)}
        </>
    );
};
