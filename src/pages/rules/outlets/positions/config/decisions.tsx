import {  IRuleDecision, ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const decision1: IRuleDecision = {
  id: "Decisión 1",
  name: "TasaEfectivaAnual",
  dataType: ValueDataType.PERCENTAGE,
  value: { from: 4, to: 8 },
  valueUse: ValueHowToSetUp.RANGE,
  startDate: "2024-12-31",
  endDate: "2024-12-31",
  conditions: [
    {
      name: "Antigüedad del cliente (Días)",
      dataType: ValueDataType.ALPHABETICAL,
      value: "Mayor a: 720",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Categoría del cliente ",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Independiente", "Pensionado"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "Nivel de membresía",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Alto"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "Reciprocidad de ahorro",
      dataType: ValueDataType.PERCENTAGE,
      value: 19,
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Destino del dinero",
      dataType: ValueDataType.ALPHABETICAL,
      value: "Crédito Vehículo",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Temporada",
      dataType: ValueDataType.ALPHABETICAL,
      value: "Normal",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Scoring de riesgo",
      dataType: ValueDataType.ALPHABETICAL,
      value: "0,2",
      valueUse: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision2: IRuleDecision = {
    id: "Decisión 2",
    name: "TasaInteresAnual",
    dataType: ValueDataType.PERCENTAGE,
    value: ["25%"],
    valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "AntiguedadCliente",
        dataType: ValueDataType.NUMBER,
        value: "Desde: 02/Sep/2024",
        valueUse: ValueHowToSetUp.EQUAL,
        switchPlaces: true,
      },
      {
        name: "Categoría del cliente ",
        dataType: ValueDataType.ALPHABETICAL,
        value: ["Ocasionales", "Plata", "Inactivos"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "Nivel de membresía",
        dataType: ValueDataType.ALPHABETICAL,
        value: "Bajo",
        valueUse: ValueHowToSetUp.EQUAL,
      },
    ],
};

// const decision3: IRuleDecision = {
//     id: "Decisión 3",
//     name: "TasaInteresAnual",
//     dataType: ValueDataType.PERCENTAGE,
//     value: { from: 12, to: 28 },
//     valueUse: ValueHowToSetUp.RANGE,
//     startDate: "2024-08-15",
//     endDate: "2024-09-15",
//     conditions: [
//       {
//         name: "CategoriaCliente",
//         dataType: ValueDataType.ALPHABETICAL,
//         value: ["Premium", "Leales"],
//         valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
//       },
//       {
//         name: "ReciprocidadInversion",
//         dataType: ValueDataType.CURRENCY,
//         value: 25000,
//         valueUse: ValueHowToSetUp.EQUAL,
//       },
//     ],
// };

// const decision4: IRuleDecision = {
//     id: "Decisión 4",
//     name: "PorcentajeDescuento",
//     dataType: ValueDataType.PERCENTAGE,
//     value: { from: 24, to: 32 },
//     valueUse: ValueHowToSetUp.RANGE,
//     startDate: "2024-08-15",
//     endDate: "2024-09-15",
//     conditions: [
//       {
//         name: "FrecuenciaCompra",
//         dataType: ValueDataType.NUMBER,
//         value: 12,
//         valueUse: ValueHowToSetUp.EQUAL,
//       },
//       {
//         name: "Temporada",
//         dataType: ValueDataType.ALPHABETICAL,
//         value: "Festiva",
//         valueUse: ValueHowToSetUp.EQUAL,
//       },
//     ],
// };

// const decision5: IRuleDecision = {
//     id: "Decisión 5",
//     name: "TasaDescuento",
//     dataType: ValueDataType.PERCENTAGE,
//     value: { from: 24, to: 32 },
//     valueUse: ValueHowToSetUp.RANGE,
//     startDate: "2024-08-15",
//     endDate: "2024-09-15",
//     conditions: [
//       {
//         name: "CategoriaProducto",
//         dataType: ValueDataType.ALPHABETICAL,
//         value: ["Electrónica"],
//         valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
//       },
//       {
//         name: "ReciprocidadCompra",
//         dataType: ValueDataType.CURRENCY,
//         value: 3000,
//         valueUse: ValueHowToSetUp.EQUAL,
//       },
//     ],

// };

const decisions = [
   decision1,
   decision2,
  // decision3,
  // decision4,
  // decision5,
];

export { decisions };
