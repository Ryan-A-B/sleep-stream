export enum Severity {
    Emergency = 0,
    Alert = 1,
    Critical = 2,
    Error = 3,
    Warning = 4,
    Notice = 5,
    Informational = 6,
    Debug = 7,
}

export interface LogInput {
    severity: Severity,
    message: string,
}

export default interface LoggingService {
    log: (input: LogInput) => void
}
