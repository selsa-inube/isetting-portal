interface IEntry {
  id: string;
  value: string;
  abbreviatedName?: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}

interface IOptions {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const titlesOptions = [
  {
    id: "id",
    titleName: "",
    priority: 0,
    value: "isActive",
    type: "toggle",
  },
  {
    id: "abbreviatedName",
    titleName: "Rol",
    priority: 1,
    value: "abbreviatedName",
  },
  {
    id: "value",
    titleName: "Aplicación",
    priority: 2,
    value: "value",
  },
];
export { titlesOptions };
export type { IEntry, IOptions };
