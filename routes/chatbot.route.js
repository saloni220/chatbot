import express from 'express'
const router=express.Router()
import { Message } from '../controllers/chatbot.message.js'
router.post('/message',Message)
export default router;