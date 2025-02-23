import posthog from 'posthog-js';
import { env } from '@/lib/env';

if (typeof window !== 'undefined') {
  posthog.init(env.POSTHOG_KEY, {
    api_host: env.POSTHOG_HOST,
    capture_pageview: false 
  });
}