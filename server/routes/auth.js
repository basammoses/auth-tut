import { Router } from "express"
import { createUser, loginUser, logOut } from "../controllers/auth.js"
import { verifyToken } from "../controllers/posts.js"


const router = Router()


router.post('/signup', createUser)
router.post('/login', loginUser)
router.post('/verify', verifyToken)
router.post('/logout', logOut)

export default router