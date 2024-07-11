import express from 'express';
import signupMiddleware from '../middleware/signup';
import signinMiddleware from '../middleware/Signin';
import dashboardMiddlerware from '../middleware/dashboardMiddleware';
import { mainHandler } from '../middleware/mailHandler';


const router = express.Router();
const app = express();


router.post('/signup', signupMiddleware, (req, res) => {
})
router.post('/signin', signinMiddleware, (req, res) => {
    
})
router.post('/dashboard', dashboardMiddlerware, (req, res) => {
    
})
router.post('/email', mainHandler, (req, res) => {
    
})
export default router;