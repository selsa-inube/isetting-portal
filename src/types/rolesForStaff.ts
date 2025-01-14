interface IAplication {
  appId: string;
  abbreviatedName: string;
}

interface IUseCasesByStaffRoles {
  roleId: string;
  useCaseId: string;
}

interface IRoleForStaff {
  roleId: string;
  publicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  application: IAplication;
  useCasesByStaffRoles: IUseCasesByStaffRoles[];
}
export type { IRoleForStaff };
