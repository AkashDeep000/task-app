declare namespace NodeJS {
  export interface ProcessEnv {
    DB_URL: string;
    ACCESS_TOKEN: string;
    ENVRIONMENT: "development" | "production";
  }
}