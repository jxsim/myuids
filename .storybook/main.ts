import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const { plugins = [], resolve = {} } = config
    return {
      ...config,
      plugins: [...plugins, tailwindcss()],
      resolve: {
        ...resolve,
        alias: {
          ...(resolve.alias as Record<string, string>),
          "@": path.resolve(__dirname, "../src"),
        },
      },
    }
  },
}

export default config
