import { Router } from 'express'
import { getUserController, postUserController, putUserController } from '../../controllers/Users/user.controller'
import { createUserValidation } from '../../middleware/validator/user.validator'

const userRouter = Router()

userRouter.get('/user/:userId', getUserController)
userRouter.post('/user', createUserValidation, postUserController)
userRouter.put('/user', createUserValidation, putUserController)

export { userRouter }
