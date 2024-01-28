import fs from "fs/promises";
import path from "path";

export async function copyDirectory(from, to) {
    const sourceContent = await fs.readdir(from);
    await fs.mkdir(to);
    await Promise.all(sourceContent.map(async (f) => {
        const fromPath = path.join(from, f);
        const toPath = path.join(to, f);
        const stats = await fs.stat(fromPath);
        if (stats.isDirectory()) {
            await copyDirectory(fromPath, toPath);
        } else {
            await fs.copyFile(fromPath, toPath);
        }
    }))
}

export async function isPathPresent(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export const FS_ERROR = `FS operation failed`