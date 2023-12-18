import {dirname} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
import multer from 'multer';


// photo storage
export const photoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../images'));
    },
    filename: function (req, file, cb) {
        if (file) {
            cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
        } else {
            cb(null, false);
        }
    }

})
// photo upload midleware
export const photoUpload = multer({
    storage: photoStorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        }
        else {
            cb({ message: 'unsupported file formate' }, false);
        }
    },
    limits: { fileSize: 1024 * 1024 * 8 }
})