interface ImportMetaEnv {
  /** 项目 SSR */
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
