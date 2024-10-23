import { ValueDataType, ValueHowToSetUp } from "@src/pages/rules/types";
import { IRuleDecision } from "@isettingkit/input";

const decision1: IRuleDecision = {
  decisions: [
    {
      name: "TasaInteresAnual",
      label: "Tasa de interés anual",
      description: "Tasa de interés anual",
      typeData: ValueDataType.PERCENTAGE,
      value: 5.2,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "TasaInteresMensual",
      label: "Tasa de interés mensual",
      description: "Tasa de interés mensual",
      typeData: ValueDataType.PERCENTAGE,
      value: 2,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
  ],
  startDate: new Date("2024-05-01"),
  endDate: new Date("2024-06-01"),
  conditions: [
    {
      name: "IngresosAnuales",
      label: "Ingresos anuales",
      description: "Ingresos anuales",
      typeData: ValueDataType.CURRENCY,
      value: 35000,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "CategoriaCliente",
      description: "Categoría del cliente",
      label: "Categoría del cliente",
      typeData: ValueDataType.ALPHABETICAL,
          value: {
        list: ["Premium", "Leales"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
  ],
};

const decision2: IRuleDecision = {
  decisions: [
    {
      name: "TasaInteresAnual",
      label: "Tasa de interés anual",
      description: "Tasa de interés anual",
      typeData: ValueDataType.PERCENTAGE,
      value: 4,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "TasaInteresMensual",
      label: "Tasa de interés mensual",
      description: "Tasa de interés mensual",
      typeData: ValueDataType.PERCENTAGE,
      value: 2,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
  ],
  startDate: new Date("2024-07-01"),
  endDate: new Date("2024-08-01"),
  conditions: [
    {
      name: "AntiguedadCliente",
      label: "Antigüedad del cliente",
      description: "Antigüedad del cliente (Días)",
      typeData: ValueDataType.NUMBER,
      value: 365,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "ReciprocidadAhorro",
      label: "Reciprocidad de ahorro",
      description: "Reciprocidad de ahorro",
      typeData: ValueDataType.CURRENCY,
      value: 10000,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision3: IRuleDecision = {
  decisions: [
      {
        name: "TasaInteresAnual",
        label: "Tasa de interés anual",
        description: "Tasa de interés anual",
        typeData: ValueDataType.PERCENTAGE,
        value: 8,
        howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
      },
      {
        name: "TasaInteresMensual",
        label: "Tasa de interés mensual",
        description: "Tasa de interés mensual",
        typeData: ValueDataType.PERCENTAGE,
        value: 3,
        howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
      },
  ],
  startDate: new Date("2024-09-01"),
  endDate: new Date("2024-10-01"),
  conditions: [
    {
      name: "CategoriaCliente",
      description: "Categoría del cliente",
      label: "Categoría del cliente",
      typeData: ValueDataType.ALPHABETICAL,
      value: {
        list: ["Premium", "Leales"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "ReciprocidadInversion",
      label: "Reciprocidad de inversión",
      description: "Reciprocidad de inversión",
      typeData: ValueDataType.CURRENCY,
      value: 25000,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision4: IRuleDecision = {
  decisions: [
    {
      name: "PorcentajeDescuento",
      label: "Porcentaje de descuento",
      description: "Porcentaje de descuento",
      typeData: ValueDataType.PERCENTAGE,
      value: 10,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "TipoDescuento",
      label: "Tipo de descuento",
      description: "Tipo de descuento",
      typeData: ValueDataType.ALPHABETICAL,
      value: "Promocional",
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
  startDate: new Date("2024-10-01"),
  endDate: new Date("2024-12-31"),
  conditions: [
    {
      name: "FrecuenciaCompra",
      label: "Frecuencia de compra",
      description: "Frecuencia de compra",
      typeData: ValueDataType.NUMBER,
      value: 12,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Temporada",
      label: "Temporada",
      description: "Temporada",
      typeData: ValueDataType.ALPHABETICAL,
      value: "Festiva",
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision5: IRuleDecision = {
  decisions: [
    {
      name: "TasaDescuento",
      label: "Tasa de descuento",
      description: "Tasa de descuento",
      typeData: ValueDataType.PERCENTAGE,
      value: 15,
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "ValorMaximo",
      label: "Valor máximo de descuento",
      description: "Valor máximo de descuento",
      typeData: ValueDataType.CURRENCY,
      value: 5000,
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
  startDate: new Date("2024-11-01"),
  endDate: new Date("2024-12-01"),
  conditions: [
    {
      name: "CategoriaProducto",
      label: "Categoría del producto",
      description: "Categoría del producto",
      typeData: ValueDataType.ALPHABETICAL,
      value: {
        list: ["Electrónica"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "ReciprocidadCompra",
      label: "Reciprocidad de compra",
      description: "Reciprocidad de compra",
      typeData: ValueDataType.CURRENCY,
      value: 3000,
      howToSetUp: ValueHowToSetUp.EQUAL,
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

export {decisions };