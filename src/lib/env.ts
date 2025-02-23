import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  POSTHOG_KEY: z.string().min(1),
  POSTHOG_HOST: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse(process.env);