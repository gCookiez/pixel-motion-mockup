export function trimmedModules(obj) {

	return Object.fromEntries(
  Object.entries(obj).map(([path, module]) => [
    path.slice(path.lastIndexOf('/') + 1, -3).split('_').join(" ").toUpperCase().replace('.', ''), // Trims './dir/' and '.js'
    module
  ])
);
}
