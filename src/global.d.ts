declare global {
    interface Window {
      singleSpaNavigate?: boolean;
    }
  }
  
  export {};
  
  declare global {
    interface ImportMeta {
      env: Record<string, string>;
    }
  
    const System: {
      import: (module: string) => Promise<any>;
    };
  }
  
  export {};
  