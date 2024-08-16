import path from "path";

export const publicUrl = (...args) =>
  path.join(import.meta.env.BASE_URL, ...args);
