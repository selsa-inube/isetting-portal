import { IRuleDecision, ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const getData = (): IRuleDecision => {
  const decision: IRuleDecision = {
    decision: {
      name: "TasaEfectivaAnual",
      label: "Tasa de interés efectiva anual",
      description: "Tasa de interés efectiva anual",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["10%", "15%", "20%", "25%"],
        listSelected: ["20%"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
      startDate: new Date("2024-08-15"),
      endDate: new Date("2024-09-15"),
    },
    conditions: [
      {
        name: "PlazoMeses",
        label: "Plazo en meses",
        description: "Plazo en meses",
        typeData: ValueDataType.NUMBER,
        possibleValue: {
          labelFrom: "1",
          labelTo: "12",
          rangeFrom: 1,
          rangeTo: 12,
        },
        value:{
          labelFrom: "desde",
          labelTo: "hasta",
        },
        howToSetUp: ValueHowToSetUp.RANGE,
      },
      {
        name: "ScoringRiesgo",
        label: "Scoring de riesgo",
        description: "Scoring de riesgo",
        typeData: ValueDataType.NUMBER,
        possibleValue: {
          labelFrom: "1",
          labelTo: "12",
          rangeFrom: 100,
          rangeTo: 700,
        },
        value:{
          labelFrom: "desde",
          labelTo: "hasta",
        },
        howToSetUp: ValueHowToSetUp.RANGE,
      },
      {
        name: "CategoriaCliente",
        label: "Categoria del cliente",
        description: "Categoria del cliente",
        typeData: ValueDataType.ALPHABETICAL,
        possibleValue: {
          list: ["Funcionario", "Independiente", "Pensionado", "Empleado"],
          listSelected: ["Independiente", "Pensionado"],
        },
        howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
      },
      {
        name: "Riesgo",
        label: "Riesgo",
        description: "Riesgo",
        typeData: ValueDataType.ALPHABETICAL,
        possibleValue: {
          list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
          listSelected: ["Medio"],
        },
        howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
      },
      {
        name: "CarteraDescubierto",
        label: "Cartera de descubierto",
        description: "Cartera de descubierto",
        typeData: ValueDataType.CURRENCY,
        possibleValue: {
          labelFrom: "1",
          labelTo: "12",
          rangeFrom: 1000000,
          rangeTo: 15000000,
        },
        value:{
          labelFrom: "desde",
          labelTo: "hasta",
        },
        howToSetUp: ValueHowToSetUp.RANGE,
      },
      {
        name: "FechaTasa",
        label: "Fecha Tasa",
        description: "Fecha Tasa",
        typeData: ValueDataType.DATE,
        possibleValue: {
          value: "2024-08-15",
        },
        howToSetUp: ValueHowToSetUp.EQUAL,
      },
      {
        name: "Porcentaje",
        label: "Porcentaje",
        description: "Porcentaje",
        typeData: ValueDataType.PERCENTAGE,
        possibleValue: {
          value: 10,
        },
        howToSetUp: ValueHowToSetUp.EQUAL,
      },
      {
        name: "Monto",
        label: "Monto",
        description: "Monto",
        typeData: ValueDataType.CURRENCY,
        possibleValue: {
          value: 1000000,
        },
        howToSetUp: ValueHowToSetUp.EQUAL,
      },
    ],
  };
  return decision;
};

export {getData};