export interface IRuleDecision {
    decision: IDecision;
    conditions?: ICondition[];
}
export interface ICondition {
    name: string;
    dataType: ValueType;
    value: IValue;
}
export interface IDecision {
    name: string;
    dataType: ValueType;
    value: IValue;
    startDate: Date;
    endDate?: Date;
}

export interface IValue {
    value?: string | number;
    list?: string[];
    rangeTo?: number;
    rangeFrom?: number;
    listSelected?: string[];
}

export enum ValueType {
    LIST = "list",
    LISTMULTIPLE = "listMultiple",
    NUMBER = "number",
    RANGE = "range",
    STRING = "string",
}
