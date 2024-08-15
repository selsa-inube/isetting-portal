import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { RulesViewCard, RulesViewCardProps } from "..";

const meta: Meta<typeof RulesViewCard> = {
    title: "components/cards/RulesViewCard",
    component: RulesViewCard,
    parameters,
    argTypes: props,
};

type Story = StoryObj<typeof RulesViewCard>;

export const Default: Story = (args: RulesViewCardProps) => (
    <RulesViewCard {...args} />
);
Default.args = {
    children: (
        <div>
            <p>Criteria</p>
        </div>
    ),
    handleDelete: () => {},
    handleView: () => {},
    id: "1",
};

export const Container: Story = (args: RulesViewCardProps) => (
    <RulesViewCard {...args} />
);
Container.args = {
    children: (
        <>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
            <div>
                <p>Criteria</p>
            </div>
        </>
    ),
    handleDelete: () => {},
    handleView: () => {},
    id: "2",
};

export default meta;
