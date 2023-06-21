export const BASE_URL = "https://api.themoviedb.org/3";

export const THEMES = ["LIGHT", "DARK"] as const;
export type THEME_MODE = (typeof THEMES)[number];

export const TYPES = ["popular", "now_playing", "upcoming"] as const;
export type TYPE_MODE = (typeof TYPES)[number];
