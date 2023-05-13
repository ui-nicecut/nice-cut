export function getStore<T = any>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key);
  if (!value) return defaultValue;
  return JSON.parse(value);
}

export function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  return today.getFullYear() - birth.getFullYear();
}
    