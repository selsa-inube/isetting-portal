import { ArgTypes } from "@storybook/react";
import { MultipleChoicesProps } from "..";

export const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

export const props: Partial<ArgTypes<MultipleChoicesProps>> = {
  labelSelected: {
    description: "prompts the user what value to enter",
  },
  labelSelect: {
    description: "prompts the user what value to enter",
  },  
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  onHandleSelectCheckChange: {
    description:
      "allows you to control what to do when the user changes the value of the checkbox",
  },
};
