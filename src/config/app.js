const ENV = process.env.NODE_ENV || 'development';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug
  ? 'http://localhost:8000'
  : process.env.PROD_ROOT_URL || 'https://changeme.example.com';
