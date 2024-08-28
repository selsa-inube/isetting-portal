export interface RuleDecision {
    decision: Decision;
    conditions?: Condition[];
}
export interface Condition {
    name: string;
    dataType: ValueType;
    value: Value;
}
export interface Decision {
    name: string;
    dataType: ValueType;
    value: Value;
    startDate: Date;
    endDate?: Date;
}

export interface Value {
    value?: string | number;
    list?: string[];
    rangeTo?: number;
    rangeFrom?: number;
    listSelected?: string[];
}

export enum ValueType {
    List = "list",
    ListMultiple = "listMultiple",
    Number = "number",
    Range = "range",
    String = "string",
}
