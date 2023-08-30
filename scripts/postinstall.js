import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// tauri 要求要有 dist 目录
try {
  await mkdir(resolve(__dirname, "../dist"));
} catch {
  /* don't care if succeed */
}
