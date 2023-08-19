export {};

export declare function initLogger(connection: Connection): void;

export type LegacyDatabaseConfig = {
  type: string;
  host: string;
  username: string;
  password: string;
  database_name: string;
};

export type CloudDatabaseConfig = { type: string; connection_string: string };

export const ENV = {
  EXTERNAL_DB_NAME: "mock",
};

export declare interface Connection {
  type: string;
}