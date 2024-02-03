/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly INSTAGRAM_URL: string;
  readonly LINKEDIN_URL: string;
  readonly FACEBOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
