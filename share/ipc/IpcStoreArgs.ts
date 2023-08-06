export type IpcStoreRendererArgs =
    | {
          type: 'get';
          key: string;
      }
    | {
          type: 'set';
          key: string;
          value: unknown;
      };

export type IpcStoreMainArgs = unknown;
