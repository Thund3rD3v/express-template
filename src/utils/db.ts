import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
