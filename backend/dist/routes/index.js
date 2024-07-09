"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../middleware/signup"));
const Signin_1 = __importDefault(require("../middleware/Signin"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
router.post('/signup', signup_1.default, (req, res) => {
});
router.post('/signin', Signin_1.default, (req, res) => {
});
exports.default = router;
