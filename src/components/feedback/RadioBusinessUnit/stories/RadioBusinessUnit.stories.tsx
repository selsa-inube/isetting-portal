import { BrowserRouter } from "react-router-dom";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { Meta, StoryFn } from "@storybook/react";
import { RadioBusinessUnit, RadioBusinessUnitProps } from "../index";

const meta: Meta<typeof RadioBusinessUnit> = {
  title: "feedback/RadioBusinessUnit",
  component: RadioBusinessUnit,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

const Template: StoryFn<RadioBusinessUnitProps> = (args) => (
  <RadioBusinessUnit {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: businessUnitDataMock[1].publicCode,
  name: "BusinessUnit",
  value: businessUnitDataMock[1].abbreviatedName,
  label: businessUnitDataMock[1].abbreviatedName,
  logo: businessUnitDataMock[1].urlLogo,
};
