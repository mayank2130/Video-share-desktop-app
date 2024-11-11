declare global {
    interface Window {
      electron: {
        ipcRenderer: {
          send: (channel: string, data: any) => void;
          invoke: (channel: string) => Promise<any>;
          on: (channel: string, func: (...args: any[]) => void) => void;
          removeListener: (channel: string) => void;
        };
      };
    }
  }