import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { TabsController } from "./TabsController";
import { Tabs, ITabs } from "..";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "navigation/Tabs",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<ITabs> = (args) => <TabsController {...args} />;

const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      id: "positions",
      disabled: false,
      label: "Destinos de dinero",
    },
    {
      id: "requestsProcedures",
      disabled: false,
      label: "Solicitudes de tramite",
    },
  ],
  selectedTab: "generalInformation",
  scroll: true,
};

const Notification = Template.bind({});
Notification.args = {
  tabs: [
    {
      id: "positions",
      disabled: false,
      label: "Cargos",
    },
    {
      id: "requestsProcedures",
      disabled: false,
      label: "Solicitudes de tramite",
      notificationIndicators: 3,
    },
  ],
  selectedTab: "generalInformation",
  scroll: true,
};

export { Notification, Default };
export default meta;
