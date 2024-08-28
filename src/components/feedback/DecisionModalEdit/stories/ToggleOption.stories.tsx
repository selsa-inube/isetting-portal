import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/button";

import { DecisionModalEdit, DecisionModalEditProps } from "..";
import { RuleDecision, ValueType } from "@src/pages/rules/types";

const meta: Meta<typeof DecisionModalEdit> = {
    title: "components/DecisionModalEdit",
    component: DecisionModalEdit,
    decorators: [
        (Story: StoryFn) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

const getData = (): RuleDecision => {
    const decision: RuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            dataType: ValueType.List,
            value: {
                list: ["10%", "15%", "20%", "25%"],
                listSelected: ["20%"],
            },
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
            {
                name: "PlazoMeses",
                dataType: ValueType.Range,
                value: {
                    rangeFrom: 1,
                    rangeTo: 12,
                },
            },
            {
                name: "ScoringRiesgo",
                dataType: ValueType.Range,
                value: {
                    rangeFrom: 100,
                    rangeTo: 700,
                },
            },
            {
                name: "CategoriaCliente",
                dataType: ValueType.ListMultiple,
                value: {
                    list: [
                        "Funcionario",
                        "Independiente",
                        "Pensionado",
                        "Empleado",
                    ],
                    listSelected: ["Independiente", "Pensionado"],
                },
            },
            {
                name: "Riesgo",
                dataType: ValueType.List,
                value: {
                    list: ["Muy alto", "Alio", "Medio", "Bajo", "Muy bajo"],
                    listSelected: ["Medio"],
                },
            },
            {
                name: "CarteraDescubierto",
                dataType: ValueType.Range,
                value: {
                    rangeFrom: 1000000,
                    rangeTo: 15000000,
                },
            },
        ],
    };
    return decision;
};

const getNotCondition = (): RuleDecision => {
    const decision: RuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            dataType: ValueType.Number,
            value: {
                value: 10,
            },
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
        ],
    };
    return decision;
};

const Template: StoryFn<DecisionModalEditProps> = (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button onClick={() => setShowModal(true)}>Show Modal</Button>
            {showModal && (
                <DecisionModalEdit
                    {...args}
                    onCloseModal={() => setShowModal(false)}
                    onCancel={() => setShowModal(false)}
                    onSubmitEvent={(data) => {
                        setShowModal(false);
                        console.log({data});
                    }}
                />
            )}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    decision: getData(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: RuleDecision) => console.log("Submit", data),
};




export const NotConditions = Template.bind({});
NotConditions.args = {
    decision: getNotCondition(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: RuleDecision) => console.log("Submit", data),
};

const getListMulti = (): RuleDecision => {
    const decision: RuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            dataType: ValueType.ListMultiple,
            value: {
                list: ["10%", "15%", "20%", "25%"],
                listSelected: ["20%", "25%"],
            },
            startDate: new Date("2024-08-15"),
        },
        conditions: [
            {
                name: "ScoringRiesgo",
                dataType: ValueType.Range,
                value: {
                    rangeFrom: 100,
                    rangeTo: 700,
                },
            },
            {
                name: "CategoriaCliente",
                dataType: ValueType.ListMultiple,
                value: {
                    list: [
                        "Funcionario",
                        "Independiente",
                        "Pensionado",
                        "Empleado",
                    ],
                    listSelected: ["Independiente", "Pensionado"],
                },
            },
        ],
    };
    return decision;
};

export const ListMutiple = Template.bind({});
ListMutiple.args = {
    decision: getListMulti(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: RuleDecision) => console.log("Submit", data),
};

const getRange = (): RuleDecision => {
    const decision: RuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            dataType: ValueType.Range,
            value: {
                rangeFrom: 10,
                rangeTo: 25,
            },
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
            {
                name: "Riesgo",
                dataType: ValueType.List,
                value: {
                    list: ["Muy alto", "Alio", "Medio", "Bajo", "Muy bajo"],
                    listSelected: ["Medio"],
                },
            },
            {
                name: "CarteraDescubierto",
                dataType: ValueType.Range,
                value: {
                    rangeFrom: 1000000,
                    rangeTo: 15000000,
                },
            },
        ],
    };
    return decision;
};

export const Range = Template.bind({});
Range.args = {
    decision: getRange(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: RuleDecision) => console.log("Submit", data),
};

export default meta;
