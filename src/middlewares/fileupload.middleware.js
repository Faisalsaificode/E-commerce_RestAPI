import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'uploads')); // safer absolute path
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().toISOString().replace(/:/g, '-'); // remove colons
        cb(null, `${timestamp}-${file.originalname}`);
    },
});

export const upload = multer({ storage });
