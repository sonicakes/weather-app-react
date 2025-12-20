export const WMO_WEATHER_MAP = {
  // Clear and Part-Cloudy
  0: { description: 'Clear sky', icon: '☀️', style: 'sunny' },
  1: { description: 'Mainly clear', icon: '🌤️', style: 'mostly-sunny' },
  2: { description: 'Partly cloudy', icon: '⛅️', style: 'partly-cloudy' },
  3: { description: 'Overcast', icon: '☁️', style: 'overcast' },

  // Fog
  45: { description: 'Fog', icon: '🌁', style: 'fog' },
  48: { description: 'Rime fog', icon: '🌁', style: 'fog' },

  // Drizzle
  51: { description: 'Light Drizzle', icon: '🌧️', style: 'drizzle' },
  53: { description: 'Moderate Drizzle', icon: '🌧️', style: 'drizzle' },
  55: { description: 'Heavy Drizzle', icon: '🌧️', style: 'drizzle' },

  //56, 57	Freezing Drizzle: Light and dense intensity
  56: {description: 'Light freezing drizzle', icon: '🥶', style: 'freezing drizzle'},
  57: {description: 'Dense freezing drizzle', icon: '🧊', style: 'freezing drizzle'},

  //61, 63, 65	Rain: Slight, moderate and heavy intensity
  61: {description: 'Slight rain', icon: '☂️', style: 'rain'},
  63: {description: 'Moderate rain', icon: '🌧️', style: 'rain'},
  65: {description: 'Heavy rain', icon: '⛈️', style: 'rain'},

  //66, 67	Freezing Rain: Light and heavy intensity
  66: {description: 'Light freezing rain', icon: '🌨️', style: 'freezing rain'},
  67: {description: 'Heavy freezing rain', icon: '☔', style: 'freezing rain'},
 
  //snow
  71: { description: 'Slight Snow Fall', icon: '🌨️', style: 'snow-slight' },
  73: { description: 'Moderate Snow Fall', icon: '❄️', style: 'snow-moderate' },
  75: { description: 'Heavy Snow Fall', icon: '❄️', style: 'snow-heavy' },
  77: { description: 'Snow Grains', icon: '🌨️', style: 'snow-grains' },

  // --- SHOWERS (80 - 86) ---
  80: { description: 'Slight Rain Showers', icon: '☔️', style: 'showers-slight' },
  81: { description: 'Moderate Rain Showers', icon: '☔️', style: 'showers-moderate' },
  82: { description: 'Violent Rain Showers', icon: '☔️', style: 'showers-violent' },
  85: { description: 'Slight Snow Showers', icon: '🌨️', style: 'snow-showers-slight' },
  86: { description: 'Heavy Snow Showers', icon: '❄️', style: 'snow-showers-heavy' },

  // --- THUNDERSTORM (95 - 99) ---
  95: { description: 'Thunderstorm', icon: '⚡️', style: 'thunderstorm' }, // slight or moderate
  96: { description: 'Thunderstorm with Hail', icon: '⛈️', style: 'thunderstorm-hail' }, // slight or moderate hail
  99: { description: 'Thunderstorm with Heavy Hail', icon: '⛈️', style: 'thunderstorm-heavy-hail' }, // heavy hail
};