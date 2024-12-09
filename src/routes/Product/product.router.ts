import { Router } from 'express'
import { getProductController, postProductController } from '../../controllers/Products/product.controller'
import { createProductValidation } from '../../middleware/validator/product.validator'

const productRouter = Router()

productRouter.get('/product/:productId', getProductController)
productRouter.post('/product', createProductValidation, postProductController)

export { productRouter }
