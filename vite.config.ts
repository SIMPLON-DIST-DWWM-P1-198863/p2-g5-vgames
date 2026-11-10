import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/gamesdb": {
          target: "https://api.thegamesdb.net",
          changeOrigin: true,
          rewrite: (path) => {
            const url = new URL(path, "http://localhost");
            url.pathname = url.pathname.replace(/^\/gamesdb/, "");
            url.searchParams.set("apikey", env.GAMESDB_API_KEY);
            return url.pathname + url.search;
          },
        },
      },
    },
  };
});
