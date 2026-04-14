import { createContext, useCallback, useContext, useState } from 'react';

/**
 * Global sync context — any page that syncs employees/attendance
 * bumps `syncVersion`, causing all subscribed pages to reload their data.
 */
const SyncContext = createContext(null);

export function SyncProvider({ children }) {
  const [syncVersion, setSyncVersion] = useState(0);

  const notifySync = useCallback(() => {
    setSyncVersion((v) => v + 1);
  }, []);

  return (
    <SyncContext.Provider value={{ syncVersion, notifySync }}>
      {children}
    </SyncContext.Provider>
  );
}

export function useSyncContext() {
  return useContext(SyncContext);
}
