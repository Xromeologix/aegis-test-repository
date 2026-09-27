import { formatGreeting } from "./utils/format.ts";

export function getGreeting(name: string): string {
  if (!name) return "Hello, Guest!";
  return formatGreeting(name);
}
