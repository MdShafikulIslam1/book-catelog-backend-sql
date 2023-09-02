"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const user_1 = require("../../../enum/user");
const router = express_1.default.Router();
router.get('/', (0, Auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), profile_controller_1.ProfileController.getSingleProfile);
exports.ProfileRoutes = router;
