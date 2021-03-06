// Type definitions for RWLock 5.0.0
// Project: https://github.com/71104/rwlock
// Definitions by: Federico Caselli <https://github.com/CaselIT/typings-rwlock>

declare class ReadWriteGeneric<T> {
  readLock(callback: T, options?: ReadWriteLock.Options): void;
  readLock(key: string, callback: T, options?: ReadWriteLock.Options): void;
  writeLock(callback: T, options?: ReadWriteLock.Options): void;
  writeLock(key: string, callback: T, options?: ReadWriteLock.Options): void;
}

declare namespace ReadWriteLock {
  interface Release {
    (): void;
  }

  interface Callback {
    (release: Release): void;
  }

  interface AsyncCallback {
    (err: Error, release: Release): void;
  }

  interface Options {
    scope?: any;
    timeout?: number;
    timeoutCallback?: () => void;
  }
}

declare class ReadWriteLock extends ReadWriteGeneric<ReadWriteLock.Callback>{
  constructor();
  async: ReadWriteGeneric<ReadWriteLock.AsyncCallback>;
}

export = ReadWriteLock;
