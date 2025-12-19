// Helper to get correct asset path with basePath
export const getAssetPath = (path) => {
  const basePath = '/Birthday';
  // Only add basePath if the path doesn't already start with it
  if (path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
};
