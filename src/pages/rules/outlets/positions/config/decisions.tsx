import {  IRuleDecision, ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const decision1: IRuleDecision = {
    id: "decision-1",
    name: "TasaInteresAnual",
    dataType: ValueDataType.PERCENTAGE,
    value: ["10%"],
    valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "PlazoMeses",
        dataType: ValueDataType.NUMBER,
        value: { from: 1, to: 12 },
        valueUse: ValueHowToSetUp.RANGE,
      },
      {
        name: "ScoringRiesgo",
        dataType: ValueDataType.NUMBER,
        value: { from: 100, to: 700 },
        valueUse: ValueHowToSetUp.RANGE,
      },
      {
        name: "CategoriaCliente",
        dataType: ValueDataType.ALPHABETICAL,
        value: ["Funcionario", "Independiente", "Pensionado", "Empleado"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "Riesgo",
        dataType: ValueDataType.ALPHABETICAL,
        value: ["Medio"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES,
      },
      {
        name: "CarteraDescubierto",
        dataType: ValueDataType.CURRENCY,
        value: { from: 1000000, to: 15000000 },
        valueUse: ValueHowToSetUp.RANGE,
      },
      {
        name: "FechaTasa",
        dataType: ValueDataType.DATE,
        value: "2024-08-15",
        valueUse: ValueHowToSetUp.EQUAL,
      },
      {
        name: "Porcentaje",
        dataType: ValueDataType.PERCENTAGE,
        value: 10,
        valueUse: ValueHowToSetUp.EQUAL,
      },
      {
        name: "Monto",
        dataType: ValueDataType.CURRENCY,
        value: 1000000,
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],
};

const decision2: IRuleDecision = {
    id: "decision-2",
    name: "TasaInteresAnual",
    dataType: ValueDataType.PERCENTAGE,
    value: ["23%"],
    valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "AntiguedadCliente",
        dataType: ValueDataType.NUMBER,
        value: 25,
        valueUse: ValueHowToSetUp.EQUAL,
      },
      {
        name: "ReciprocidadAhorro",
        dataType: ValueDataType.CURRENCY,
        value: 10000,
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],
};

const decision3: IRuleDecision = {
    id: "decision-3",
    name: "TasaInteresAnual",
    dataType: ValueDataType.PERCENTAGE,
    value: { from: 12, to: 28 },
    valueUse: ValueHowToSetUp.RANGE,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "CategoriaCliente",
        dataType: ValueDataType.ALPHABETICAL,
        value: ["Premium", "Leales"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "ReciprocidadInversion",
        dataType: ValueDataType.CURRENCY,
        value: 25000,
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],
};

const decision4: IRuleDecision = {
    id: "decision-4",
    name: "PorcentajeDescuento",
    dataType: ValueDataType.PERCENTAGE,
    value: { from: 24, to: 32 },
    valueUse: ValueHowToSetUp.RANGE,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "FrecuenciaCompra",
        dataType: ValueDataType.NUMBER,
        value: 12,
        valueUse: ValueHowToSetUp.EQUAL,
      },
      {
        name: "Temporada",
        dataType: ValueDataType.ALPHABETICAL,
        value: "Festiva",
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],
};

const decision5: IRuleDecision = {
    id: "decision-5",
    name: "TasaDescuento",
    dataType: ValueDataType.PERCENTAGE,
    value: { from: 24, to: 32 },
    valueUse: ValueHowToSetUp.RANGE,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "CategoriaProducto",
        dataType: ValueDataType.ALPHABETICAL,
        value: ["Electrónica"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "ReciprocidadCompra",
        dataType: ValueDataType.CURRENCY,
        value: 3000,
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],

};

const decisions = [
  decision1,
  decision2,
  decision3,
  decision4,
  decision5,
];

export { decisions };
