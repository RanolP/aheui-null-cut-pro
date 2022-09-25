declare module 'aheui-jit' {
  export interface AheuiJITCallbacks {
    printChar: (char: string) => void;
    printNum: (num: number) => void;
    inputChar: () => string;
    inputNum: () => number;
  }
  export interface AheuiJITConfig {
    maxStorageSize: number;
    logIR: boolean;
    logDisasm: boolean;
    optIR: boolean;
    optAsm: boolean;
    numInterpretCycle: number;
    interpretAfterFail: boolean;
    wasmMemorySize: number;
  }
  class AheuiJITImpl {
    ready: Promise<void>;
    callbacks: AheuiJITCallbacks;
    config: AheuiJITConfig;

    run(code: string): Promise<void>;

    syncConfig(): Promise<void>;
  }

  const AheuiJIT: AheuiJITImpl;
  export default AheuiJIT;
}
