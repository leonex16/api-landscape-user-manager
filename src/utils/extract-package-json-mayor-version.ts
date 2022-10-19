export const extractPackageManagerMayorVersion = async () => {
  const packageJsonModule = await import('../../package.json');
  const { version } = packageJsonModule;

  return version.split('.')[0];
};
