import { CONTENTFUL_MANAGEMENT_ACCESS_TOKEN } from './constants';

export function validateEnvironmentVariables() {
  const errors: { [key: string]: { _errors: string[] } } = {};

  if (!process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN) {
    errors.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = { _errors: ['Required'] };
  }

  if (Object.keys(errors).length > 0) {
    console.error('Invalid environment variables', errors);
    process.exit(1);
  }
}