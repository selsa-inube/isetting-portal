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
            <p>Decision</p>
        </div>
    ),
    handleDelete: () => {},
    handleView: () => {},
    id: "1",
};

const criteriaArray = Array(7).fill("Decision");

export const Container: Story = (args: RulesViewCardProps) => (
    <RulesViewCard {...args} />
);
Container.args = {
    children: (
        <>
            {criteriaArray.map((criteria, index) => (
                <div key={index}>
                    <p>{criteria}</p>
                </div>
            ))}
        </>
    ),
    handleDelete: () => {},
    handleView: () => {},
    id: "2",
};

export default meta;
