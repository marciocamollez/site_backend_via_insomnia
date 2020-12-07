import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    storage:
        multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'tmp/uploads/sobre')
            },
            filename: function (req, file, cb) {
                crypto.randomBytes(16, (err, res) => {
                    if (err) return cb(err);
                    return cb(null, res.toString('hex') + extname(file.originalname));
                })
            }
        }),        
};
