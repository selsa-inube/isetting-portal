import { IAssistedStep } from "@inubekit/assisted";

const AddDestinationStepsConfig = (NameDescription: string) => {
  const AddDestinationSteps: IAssistedStep[] = [
    {
      id: 1,
      number: 1,
      name: "Datos generales",
      description: "Selecciona o agrega un nuevo destino.",
    },
    {
      id: 2,
      number: 2,
      name: "Selección de roles",
      description: `Agregar decisión para ${NameDescription}.`,
    },
    {
      id: 3,
      number: 3,
      name: "Verificación",
      description: "Confirma la información diligenciada en pasos anteriores.",
    },
  ];
  return AddDestinationSteps;
};

export { AddDestinationStepsConfig };
