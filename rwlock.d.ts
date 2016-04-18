// Type definitions for Joint JS 0.9.7
// Project: https://github.com/71104/rwlock
// Definitions by: Federico Caselli <https://github.com/CaselIT/typings-rwlock>

declare class ReadWriteGeneric<T> {
  readLock(callback: T, options?: ReadWriteLock.RWOptions): void;
  readLock(key: string, callback: T, options?: ReadWriteLock.RWOptions): void;
  writeLock(callback: T, options?: ReadWriteLock.RWOptions): void;
  writeLock(key: string, callback: T, options?: ReadWriteLock.RWOptions): void;
}

declare namespace ReadWriteLock {
  interface RWRelease {
    (): void;
  }

  interface RWCallback {
    (release: RWRelease): void;
  }

  interface RWAsyncCallback {
    (err: Error, release: RWRelease): void;
  }

  interface RWOptions {
    scope?: any;
    timeout?: number;
    timeoutCallback?: () => void;
  }
}

declare class ReadWriteLock extends ReadWriteGeneric<ReadWriteLock.RWCallback>{
  constructor();
  async: ReadWriteGeneric<ReadWriteLock.RWAsyncCallback>;
}

export = ReadWriteLock;
