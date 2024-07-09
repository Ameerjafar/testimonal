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
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
const signupMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const object = zod_1.default.object({
        firstName: zod_1.default.string(),
        email: zod_1.default.string().email(),
        password: zod_1.default.string().min(6)
    });
    const body = req.body;
    const verify = object.safeParse(body);
    if (verify.success === true) {
        const user = yield prisma.user.create({
            data: {
                firstName: req.body.firstName,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.json({ message: "verified and also it is stored in the database." });
    }
    else {
        res.json({ message: "not verified" });
    }
});
exports.default = signupMiddleware;
