declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
    MONGO_DB_URL: string;
    BCRYPT_SALT_ROUND: string;
    JWT_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRY: string;
    JWT_TOKEN_EXPIRY: string;
  }
}
