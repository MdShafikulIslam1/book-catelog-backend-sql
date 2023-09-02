"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const user_1 = require("../../../enum/user");
const router = express_1.default.Router();
router.post('/create-category', (0, Auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.create);
router.get('/', category_controller_1.CategoryController.getAllCategory);
router.get('/:id', category_controller_1.CategoryController.getSingleCategory);
router.patch('/:id', (0, Auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.updateCategory);
router.delete('/:id', (0, Auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteCategory);
exports.CategoryRoutes = router;
