import express from 'express';
import signupMiddleware from '../middleware/signup';
import signinMiddleware from '../middleware/Signin';


const router = express.Router();
const app = express();


router.post('/signup', signupMiddleware, (req, res) => {
})
router.post('/signin', signinMiddleware, (req, res) => {
    
})

export default router;