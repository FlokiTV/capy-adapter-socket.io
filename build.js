import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/server/index.js"],
  bundle: true,
  outfile: "server/index.mjs",
  format: "esm",
  target: "esnext",
  platform: "node",
  banner: {
    js: `
        import * as path from 'path';
        import { fileURLToPath } from 'url';
        import { createRequire as topLevelCreateRequire } from 'module';
        const require = topLevelCreateRequire(import.meta.url);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        `,
  },
});
