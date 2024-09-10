import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

const MockPositions: IPosition[] = [
  {
    id: "1",
    public_code: "001",
    abbreviated_name: "Administrador Funcional",
    n_roles: [
      "Análista Financiero ",
      "Especialista en Riesgos Financieros ",
      "Planificación Financiera ",
      "Cumplimiento Normativo ",
    ],
  },

  {
    id: "2",
    public_code: "ADM",
    abbreviated_name: "Administracion tecnica",
    n_roles: [""],
  },
  {
    id: "3",
    public_code: "ADW",
    abbreviated_name: "ADMINISTRADOR DEL WORKFLOW",
    n_roles: [""],
  },
  { id: "4", public_code: "AUX", abbreviated_name: "Auxilios", n_roles: [""] },
  { id: "5", public_code: "CAL", abbreviated_name: "Calidad", n_roles: [""] },
  {
    id: "6",
    public_code: "CAP",
    abbreviated_name: "Captaciones",
    n_roles: [""],
  },
  { id: "7", public_code: "CAR", abbreviated_name: "Cartera", n_roles: [""] },
  {
    id: "8",
    public_code: "CIN",
    abbreviated_name: "Control Interno",
    n_roles: [""],
  },
  {
    id: "9",
    public_code: "COM",
    abbreviated_name: "Comunicaciones",
    n_roles: [""],
  },
  {
    id: "10",
    public_code: "COT",
    abbreviated_name: "Contabilidad",
    n_roles: [""],
  },
  { id: "11", public_code: "CON", abbreviated_name: "Consulta", n_roles: [""] },
  { id: "12", public_code: "CRE", abbreviated_name: "Créditos", n_roles: [""] },
  { id: "13", public_code: "EVE", abbreviated_name: "Eventos", n_roles: [""] },
  {
    id: "14",
    public_code: "FIN",
    abbreviated_name: "Financiero",
    n_roles: [""],
  },
  { id: "15", public_code: "GER", abbreviated_name: "Gerencia", n_roles: [""] },
  { id: "16", public_code: "JUR", abbreviated_name: "Juridico", n_roles: [""] },
  {
    id: "17",
    public_code: "002",
    abbreviated_name: "Administrador web",
    n_roles: [""],
  },
  {
    id: "18",
    public_code: "NOC",
    abbreviated_name: "Configuracion nomina",
    n_roles: [""],
  },
  { id: "19", public_code: "MER", abbreviated_name: "Mercadeo", n_roles: [""] },
  {
    id: "20",
    public_code: "NOE",
    abbreviated_name: "Nomina de empleados",
    n_roles: [""],
  },
  {
    id: "21",
    public_code: "NOO",
    abbreviated_name: "Operacion nomina",
    n_roles: [""],
  },
  { id: "22", public_code: "SIS", abbreviated_name: "Sistemas", n_roles: [""] },
  {
    id: "23",
    public_code: "TES",
    abbreviated_name: "Tesorería",
    n_roles: [""],
  },
  {
    id: "24",
    public_code: "TAH",
    abbreviated_name: "Talento humano",
    n_roles: [""],
  },
  {
    id: "25",
    public_code: "003",
    abbreviated_name: "Administrador créditos",
    n_roles: [""],
  },
  {
    id: "26",
    public_code: "004",
    abbreviated_name: "Administrador cartera",
    n_roles: [""],
  },
  {
    id: "27",
    public_code: "005",
    abbreviated_name: "Administrador contabilidad",
    n_roles: [""],
  },
];

export { MockPositions };
