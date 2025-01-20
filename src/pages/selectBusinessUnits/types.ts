interface ISelectBusinessUnitsUI {
  screenTablet: boolean;
  imageWidth: () => string;
  appData: { businessManager: { urlLogo: string } };
}

export type { ISelectBusinessUnitsUI };
