import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config: any) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
      "@components": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../app/components"),
    };
    return config;
  }
};
export default config;