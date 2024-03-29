export const WEATHER_APIXU_BASE_URL: string = 'http://api.apixu.com/v1';
export const WEATHER_SOURCE_APIXU_NAME: string = 'apixu';

export const WEATHER_STORMGLASS_BASE_URL: string = 'https://api.stormglass.io/v1';
export const WEATHER_SOURCE_STORMGLASS_NAME: string = 'stormglass';

export const OPENCAGEDATA_BASE_URL: string = 'https://api.opencagedata.com/geocode/v1';

// API keys
export const WEATHER_APIXU_API_KEY: string | undefined =
  process.env.REACT_APP_WEATHER_APIXU_API_KEY;
export const WEATHER_STORMGLASS_API_KEY: string | undefined =
  process.env.REACT_APP_WEATHER_STORMGLASS_API_KEY;
export const OPENCAGEDATA_API_KEY: string | undefined =
  process.env.REACT_APP_WEATHER_SOPENCAGEDATA_API_KEY;
