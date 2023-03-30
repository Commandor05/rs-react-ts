export enum StorageKey {
  searchQuery = 'searchQuery',
  searchIsApplied = 'searchIsApplied',
}

export interface Storage {
  setData<K extends StorageKey, T>(key: K, data: T): void;
  getData<K extends StorageKey, T>(key: K): T | null;
  removeData<K extends StorageKey>(key: K): void;
  removeAll(): void;
}
