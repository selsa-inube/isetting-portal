import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import {
  InputRange, InputRangeProps
} from "..";


const meta: Meta<typeof InputRange> = {
  title: "components/InputRange",
  component: InputRange,
  parameters,
  argTypes: props,
};


type Story = StoryObj<typeof InputRange>;

export const Default: Story = (args: InputRangeProps) => <InputRange {...args} />;
Default.args = {
  checked: false,
  handleToggleChange: () => {},
  handleInputChangeFrom: () => {},
  handleInputChangeTo: () => {},
  id: "inputRango",
  label: "Antiguedad del cliente",
  valueToggle: "",
  valueFrom: "",
  valueTo: "",
  typeInput: "date",
  required: false,
};

export default meta;