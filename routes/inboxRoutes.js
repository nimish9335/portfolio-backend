const express = require("express");

const {
    getDashboard,
    getRecentMessages,
    getInboxStats,
    markAllAsRead,
    bulkMarkAsRead,
    bulkDeleteMessages,
} = require("../controllers/inboxController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const { bulkIdsValidator } = require("../validators/inboxValidator");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| All Inbox Routes are Protected
|--------------------------------------------------------------------------
*/

router.use(protect);

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/

router.get("/dashboard", getDashboard);

router.get("/recent", getRecentMessages);

router.get("/stats", getInboxStats);

/*
|--------------------------------------------------------------------------
| Bulk Operations
|--------------------------------------------------------------------------
*/

router.put(
    "/read-all",
    markAllAsRead
);

router.put(
    "/bulk-read",
    bulkIdsValidator,
    validate,
    bulkMarkAsRead
);

router.delete(
    "/bulk-delete",
    bulkIdsValidator,
    validate,
    bulkDeleteMessages
);

module.exports = router;