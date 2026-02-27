// Environment variables with fallback values
const env = {
    // Sanity CMS
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13',

    // Node Environment
    NODE_ENV: process.env.NODE_ENV || 'development',
};

// Helper function to get environment variables with fallback
export const getEnv = (key) => {
    if (!(key in env)) {
        console.warn(`Environment variable ${key} is not defined in config`);
        return process.env[key];
    }
    return env[key];
};

// Export all environment variables
export default env;
