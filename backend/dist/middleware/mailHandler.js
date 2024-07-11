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
exports.mainHandler = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mainHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, message } = req.body;
    const transporter = nodemailer_1.default.createTransport({});
    try {
        yield transporter.sendMail({
            from: "ameerjafar123@gmail.com",
            to,
            text: message
        });
        res.status(200).send({ message: "Email sent successfully" });
    }
    catch (error) {
        res.status(200).send({ message: "Email has not sent" });
    }
});
exports.mainHandler = mainHandler;
