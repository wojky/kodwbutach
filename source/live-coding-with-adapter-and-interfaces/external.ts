type ExternalConnection = {
  db_type: string;
};

export declare class ExternalDatabaseService {
  connect(databaseName: string): Promise<ExternalConnection>;
}
