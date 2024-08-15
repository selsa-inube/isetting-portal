import { EAppearance } from "@ptypes/colors.types";

export const deletePositionModal = {
  delete: {
    title: "Eliminar cargo",
    description: (k_Grupo: string) =>
      `¿Está seguro de que desea eliminar el cargo ${k_Grupo}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
