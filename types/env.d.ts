declare namespace NodeJS {
  export interface ProcessEnv {
    MAIN_BASE_API_URL: string;
    NEXT_PUBLIC_BASE_API_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
  }
}
