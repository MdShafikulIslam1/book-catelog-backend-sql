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
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../error/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpes_1 = require("../../../helpers/jwtHelpes");
const config_1 = __importDefault(require("../../../config"));
const signupUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.create({
        data,
    });
    return result;
});
const signinUser = (signinData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = signinData;
    const isExistUser = yield prisma_1.default.user.findUnique({
        where: {
            email,
        },
    });
    const isPasswordMatch = (isExistUser === null || isExistUser === void 0 ? void 0 : isExistUser.password) === password;
    if (!isExistUser || !isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Email or Password are invalid');
    }
    const token = jwtHelpes_1.JwtHelpers.createToken({ userId: isExistUser.id, role: isExistUser.role }, config_1.default.secret, config_1.default.secret_expires_in);
    return { token };
});
exports.AuthService = {
    signupUser,
    signinUser,
};
