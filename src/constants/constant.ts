export const BASE_URL = "https://api.themoviedb.org/3";

export const THEMES = ["LIGHT", "DARK"] as const;
export type THEME_MODE = (typeof THEMES)[number];

export const TYPES = ["popular", "now_playing", "upcoming"] as const;
export type TYPE_MODE = (typeof TYPES)[number];

export const VITE_API_KEY = "ffb94059c259041348b0799147e0ade9";

export const ROUTE_PATH = {
  ROOT: "/",
  UPCOMING: "upcoming",
  NOW_PLAYING: "now_playing",
  SEARCH: "search",
} as const;
