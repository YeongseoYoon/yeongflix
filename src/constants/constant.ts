export const BASE_URL = "https://api.themoviedb.org/3";

export const THEME = ["LIGHT", "DARK"] as const;
export type THEME_MODE = (typeof THEME)[number];

export const TYPE = ["popular", "now_playing", "upcoming"] as const;
export type TYPE_MODE = (typeof TYPE)[number];
