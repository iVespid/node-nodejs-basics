import fs from 'fs/promises';
import path from 'path';

async function copyDirectory(from, to) {
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

async function isPathPresent(path ){
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

const copy = async () => {
    const sourceFolder = path.join('files');
    const targetFolder = path.join('files_copy');
    const accessTarget = await isPathPresent(targetFolder);
    const accessSource = await isPathPresent(sourceFolder);
    if (accessTarget || !accessSource) {
        throw Error(`FS operation failed`);
    }

    await copyDirectory(sourceFolder, targetFolder);
};

await copy();
