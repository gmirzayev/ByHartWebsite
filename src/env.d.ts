/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.mov" {
  const src: string;
  export default src;
}
