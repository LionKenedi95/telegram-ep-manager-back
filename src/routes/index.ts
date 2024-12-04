import { Router } from 'express'
import { userRouter } from './User/user.router'
import { businessRouter } from './Business/business.router'
import { productRouter } from './Product/product.router'

const router = Router()

router.use(userRouter)
router.use(businessRouter)
router.use(productRouter)

export { router }
