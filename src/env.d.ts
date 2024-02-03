/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly INSTAGRAM_URL: string;
  readonly LINKEDIN_URL: string;
  readonly FACEBOOK_URL: string;
  readonly ASSETS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
