#!/usr/bin/env node
/**
 * snapshot.mjs — 保存当天 data.js 快照到 history/ 并清理超过 7 天的旧文件。
 *
 * 用法:
 *   node scripts/snapshot.mjs              # 保存今天的快照并清理
 *   node scripts/snapshot.mjs --date 2026-05-26  # 指定日期名保存
 */
import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const HISTORY_DIR = join(ROOT, "history");
const DATA_FILE = join(ROOT, "data.js");
const MANIFEST_FILE = join(HISTORY_DIR, "manifest.json");
const RETENTION_DAYS = 7;

// Parse args
const args = process.argv.slice(2);
const dateArgIndex = args.indexOf("--date");
const today = dateArgIndex !== -1 && args[dateArgIndex + 1]
  ? args[dateArgIndex + 1]
  : new Date().toISOString().slice(0, 10);

// Ensure history dir exists
if (!existsSync(HISTORY_DIR)) {
  mkdirSync(HISTORY_DIR, { recursive: true });
}

// 1. Copy current data.js to history/YYYY-MM-DD.js
const snapshotPath = join(HISTORY_DIR, `${today}.js`);
const dataContent = readFileSync(DATA_FILE, "utf-8");
writeFileSync(snapshotPath, dataContent, "utf-8");
console.log(`Saved snapshot: history/${today}.js`);

// 2. Build manifest (sorted list of available dates)
const files = readdirSync(HISTORY_DIR)
  .filter((f) => /^\d{4}-\d{2}-\d{2}\.js$/.test(f))
  .map((f) => f.replace(".js", ""))
  .sort()
  .reverse();

// 3. Clean old snapshots beyond retention
const toKeep = files.slice(0, RETENTION_DAYS);
const toRemove = files.slice(RETENTION_DAYS);

for (const date of toRemove) {
  const filepath = join(HISTORY_DIR, `${date}.js`);
  unlinkSync(filepath);
  console.log(`Removed old snapshot: history/${date}.js`);
}

// 4. Write manifest
const manifest = { dates: toKeep, updatedAt: new Date().toISOString() };
writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), "utf-8");
console.log(`Manifest updated: ${toKeep.length} snapshots available`);
