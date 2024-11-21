import { IRuleDecision, ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const getData = (): IRuleDecision => {
   return  {
    name: "TasaEfectivaAnual",
    dataType: ValueDataType.PERCENTAGE,
    value: "18%",
    possibleValue: {
      list: ["18%", "15%", "20%", "25%"],
    },
    valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    conditions: [
      {
        name: "PlazoMeses",
        dataType: ValueDataType.NUMBER,
        value: {
          from: 1,
          to: 12,
        },
        valueUse: ValueHowToSetUp.RANGE,
      },
      {
        name: "ScoringRiesgo",
        dataType: ValueDataType.NUMBER,
        value: {
          from: 100,
          to: 700,
        },
        valueUse: ValueHowToSetUp.RANGE,
        // switchPlaces: true,
      },
      {
        name: "CategoriaCliente",
        dataType: ValueDataType.ALPHABETICAL,
        possibleValue: {
          list: ["Funcionario", "Independiente", "Pensionado", "Empleado"],
        },
        value: ["Independiente", "Pensionado"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "Riesgo",
        dataType: ValueDataType.ALPHABETICAL,
        possibleValue: {
          list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
        },
        value: ["Medio"],
        valueUse: ValueHowToSetUp.LIST_OF_VALUES,
      },
      {
        name: "CarteraDescubierto",
        dataType: ValueDataType.CURRENCY,
        value: {
          from: 1000000,
          to: 15000000,
        },
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

};

const decisionTemplate: IRuleDecision = {
  name: "TasaEfectivaAnual",
  dataType: ValueDataType.PERCENTAGE,
  value: { from: -1, to: -1 },
  valueUse: ValueHowToSetUp.RANGE,
  startDate: "",
  endDate: "",
  conditions: [
    {
      name: "AntigüedadDelCliente(Días)",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "CategoríaDelCliente ",
      dataType: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Funcionario", "Independiente", "Pensionado", "Empleado"],
      },
      value: [],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "NivelDeMembresía",
      dataType: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
      },
      value: "",
      valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "ReciprocidadDeAhorro",
      dataType: ValueDataType.PERCENTAGE,
      value: 0,
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "DestinoDelDinero",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Temporada",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
    {
      name: "ScoringDeRiesgo",
      dataType: ValueDataType.ALPHABETICAL,
      value: "",
      valueUse: ValueHowToSetUp.EQUAL,
    },
  ],
};

export {decisionTemplate, getData };