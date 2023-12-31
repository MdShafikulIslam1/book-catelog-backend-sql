"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.create({
        data: {
            userId,
            orderedBooks: payload.orderedBooks,
        },
    });
    return order;
});
const getAllOrder = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if ((user === null || user === void 0 ? void 0 : user.role) === client_1.UserRole.customer) {
        const result = yield prisma_1.default.order.findMany({
            where: {
                userId: user === null || user === void 0 ? void 0 : user.userId,
            },
        });
        return result;
    }
    const result = yield prisma_1.default.order.findMany({
        include: {
            user: true,
        },
    });
    return result;
});
const getSingleOrder = (userId, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id: orderId,
            userId,
        },
    });
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrder,
    getSingleOrder,
};
