import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.resolve('uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // unique name: <timestamp>-<original>
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
  },
});

export const upload = multer({ storage });
export default upload;
