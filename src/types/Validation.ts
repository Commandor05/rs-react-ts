import { Validated } from '../interfaces/Validated';

export type Validations<T extends Record<string, unknown>> = Partial<Record<keyof T, Validated>>;
