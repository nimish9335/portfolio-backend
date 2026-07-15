const multer = require("multer");
const ApiError = require("../utils/ApiError");

const storage = multer.memoryStorage();

const createUpload = ({
    allowedMimeTypes,
    maxFileSize = 5 * 1024 * 1024,
    errorMessage,
}) => {
    return multer({
        storage,
        limits: {
            fileSize: maxFileSize,
        },
        fileFilter: (req, file, cb) => {
            if (allowedMimeTypes.includes(file.mimetype)) {
                return cb(null, true);
            }

            cb(new ApiError(400, errorMessage));
        },
    });
};

const imageUpload = createUpload({
    allowedMimeTypes: [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
    ],
    errorMessage: "Only JPG, JPEG, PNG and WEBP images are allowed.",
});

const pdfUpload = createUpload({
    allowedMimeTypes: ["application/pdf"],
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "Only PDF files are allowed.",
});

module.exports = {
    imageUpload,
    pdfUpload,
};