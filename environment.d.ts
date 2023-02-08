declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DEBUG: string ,
        GRAPHQL_ENDPOINT:  string ,
        MYSQL_DB_NAME: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  //
  export {}
  //