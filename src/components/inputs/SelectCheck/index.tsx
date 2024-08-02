import { useEffect, useRef, useState } from "react";

import { IOptionItemCheckedProps } from "./OptionItem";
import { Size, Status } from "./types";
import { SelectCheckUI } from "./interface";

export interface SelectCheckProps {
  id: string;
  name: string;
  disabled?: boolean;
  fullwidth?: boolean;
  label?: string;
  message?: string;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent) => void;
  options: IOptionItemCheckedProps[];
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  status?: Status;
  value: string | number;
}

export const SelectCheck = (props: SelectCheckProps) => {
  const {
    disabled = false,
    fullwidth = false,
    id,
    label,
    message,
    name,
    onBlur,
    onChange,
    onChangeCheck,
    onClick,
    onFocus,
    options,
    placeholder,
    readonly = false,
    required = false,
    size = "wide",
    status = "pending",
    value,
  } = props;

  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setDisplayList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;
    onClick && onClick(e);
    setDisplayList(!displayList);
  };

  return (
    <SelectCheckUI
      disabled={disabled}
      displayList={displayList}
      focused={focused}
      fullwidth={fullwidth}
      id={id}
      label={label}
      message={message}
      name={name}
      onBlur={handleBlur}
      onChange={onChange}
      onChangeCheck={onChangeCheck}
      onClick={handleClick}
      onFocus={handleFocus}
      options={options}
      placeholder={placeholder}
      readonly={readonly}
      ref={selectRef}
      required={required}
      size={size}
      status={status}
      value={value}
    />
  );
};
