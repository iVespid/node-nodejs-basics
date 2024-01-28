import fs from 'fs';
import path from 'path';

const create = async () => {
    const fileName = 'fresh.txt';
    const filePath = path.join('files', fileName);
    if (fs.existsSync(filePath)) {
        throw Error(`FS operation failed`);
    } else {
        fs.writeFileSync(filePath, 'I am fresh and young', {encoding: 'UTF8'});
    }
};

await create();