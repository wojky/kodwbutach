import { Connection } from ".";

type LegacyDatabaseConfig = {
  type: string;
  host: string;
  username: string;
  password: string;
  database_name: string;
};

class LegacyDatabaseService {
  private readonly config: LegacyDatabaseConfig;

  async connect() {
    // mock! 🐱‍👤
    return { type: "legacy" } as Connection;
  }
}

async function initDatabaseConnection() {
  const connection = await new LegacyDatabaseService().connect();

  return connection;
}

initDatabaseConnection();
