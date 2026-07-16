const express = require("express");

const {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const { contactValidator } = require("../validators/contactValidator");
const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Route
|--------------------------------------------------------------------------
*/

router.post(
    "/",
    contactValidator,
    validate,
    createContact
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    protect,
    getContacts
);

router.get(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    getContactById
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    updateContact
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteContact
);

module.exports = router;