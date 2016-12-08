// Helper functions to aid aesthetic presentation,
// process text, currency formats, etc
export function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

export function deslug(str) {
  return str.split("_").map(titleCase).join(" ");
}
