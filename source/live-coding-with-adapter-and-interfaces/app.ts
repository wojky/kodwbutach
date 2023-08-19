import { Connection, ENV, LegacyDatabaseConfig, CloudDatabaseConfig, initLogger } from "./utils";
import { ExternalDatabaseService } from "./external";

interface Connectable {
  connect(): Promise<Connection>;
}

class CloudDatabaseService implements Connectable {
  private readonly config: CloudDatabaseConfig;

  someCoolMethodOnlyForThisService() {}

  async connect() {
    // mock! 🐱‍👤
    this.someCoolMethodOnlyForThisService();

    return {
      type: "cloud",
    } as Connection;
  }
}

class LegacyDatabaseService implements Connectable {
  private readonly config: LegacyDatabaseConfig;

  async connect() {
    // mock! 🐱‍👤
    return {
      type: "legacy",
    } as Connection;
  }
}

class ExternalDatabaseServiceAdapter {
  static adapt(service: ExternalDatabaseService): Connectable {
    return {
      async connect() {
        const connection = await service.connect(ENV.EXTERNAL_DB_NAME);

        return {
          type: connection.db_type,
          ...connection,
        };
      },
    };
  }
}

const DATABASE_DICT: Record<string, () => Connectable> = {
  external: () => ExternalDatabaseServiceAdapter.adapt(new ExternalDatabaseService()),
  cloud: () => new CloudDatabaseService(),
  legacy: () => new LegacyDatabaseService(),
};

initDatabaseConnection(DATABASE_DICT["external"]());

async function initDatabaseConnection(service: Connectable) {
  return service.connect().then((connection) => {
    initLogger(connection);

    return connection;
  });
}
