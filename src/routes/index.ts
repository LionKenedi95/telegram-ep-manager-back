import { Router } from 'express'
import { getUserController, postUserController, putUserController } from '../controllers/Users/user.controller'
import { getBusinessController, postBusinessController } from '../controllers/Businesses/business.controller'
import { getProductController, postProductController } from '../controllers/Products/product.controller'

const router = Router()

/* Users */
router.get('/user', getUserController)
router.post('/user', postUserController)
router.put('/user', putUserController)

/* Businesses */
router.get('/business', getBusinessController)
router.post('/business', postBusinessController)

/* Products */
router.get('/product', getProductController)
router.post('/product', postProductController)


export { router }
