import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      insertTypesEntry: true,
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "radix-ui",
        /^radix-ui\/.*/,
        "@base-ui/react",
        /^@base-ui\/react\/.*/,
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "@tabler/icons-react",
        /^@tabler\/icons-react\/.*/,
        "cmdk",
        "date-fns",
        /^date-fns\/.*/,
        "embla-carousel-react",
        "input-otp",
        "next-themes",
        "react-day-picker",
        "react-resizable-panels",
        "recharts",
        "sonner",
        "vaul",
        "tw-animate-css",
        "shadcn",
        /^shadcn\/.*/,
        "@fontsource-variable/inter",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
