import { Router } from 'express'
import { userRouter } from './User/user.router'
import { businessRouter } from './Business/business.router'
import { productRouter } from './Product/product.router'
import { requisitesRouter } from './Requisites/requisites.router'

const router = Router()

router.use(userRouter)
router.use(businessRouter)
router.use(productRouter)
router.use(requisitesRouter)

export { router }
