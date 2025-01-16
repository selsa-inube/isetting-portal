import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { MultipleChoices, IIMultipleChoices } from "..";

const options = [
  { id: "1", label: "Option 1", checked: false },
  { id: "2", label: "Option 2", checked: false },
  { id: "3", label: "Option 3", checked: false },
  { id: "4", label: "Option 4", checked: false },
];

const meta: Meta<typeof MultipleChoices> = {
  title: "components/inputs/MultipleChoices",
  component: MultipleChoices,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof MultipleChoices>;

const Default: Story = (args: IIMultipleChoices) => (
  <MultipleChoices {...args} />
);
Default.args = {
  id: "MultipleOptionesCategorias",
  labelSelect: "Selecciones las categorias",
  labelSelected: "Categorias Seleccionadas",
  onHandleSelectCheckChange: (options) => console.log(options),
  options: options,
  required: false,
  placeholderSelect: "Selecciona una categoria",
};

export { meta, Default };
export default options;
