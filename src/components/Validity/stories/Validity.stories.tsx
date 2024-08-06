import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { Validity, ValidityProps } from "..";

const meta: Meta<typeof Validity> = {
  title: "components/Validity",
  component: Validity,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof Validity>;

const style = {
  width : "402px",
};

export const Default: Story = (args: ValidityProps) => (
 <div style={style}><Validity {...args} /></div> 
);
Default.args = {
  onHandleStartChange: () => {},
  onHandleEndChange: () => {},
  labelStart: "Fecha de inicio",
  labelEnd: "Fecha de fin",
  checkedClosed: false,
  required: false,
  valueStart: "",
  valueEnd: "",
};

export default meta;
