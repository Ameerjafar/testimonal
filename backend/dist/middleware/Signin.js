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
const signinMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const object = zod_1.default.object({
        email: zod_1.default.string(),
        password: zod_1.default.string()
    });
    const body = req.body;
    const verify = object.safeParse(body);
    const verify1 = yield prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    });
    console.log(verify1);
    if (verify.success === true && verify1 !== null) {
        res.json({ message: "This is email is verified" });
    }
    else {
        res.json({ message: "This email is not verified" });
    }
});
exports.default = signinMiddleware;
