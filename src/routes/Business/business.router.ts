import { Router, RequestHandler } from 'express'
import { getBusinessController, postBusinessController } from '../../controllers/Businesses/business.controller'
import { createBusinessValidation } from '../../middleware/validator/business.validator'

const businessRouter = Router()

businessRouter.get('/business', getBusinessController)
businessRouter.post('/business', createBusinessValidation, postBusinessController)

export { businessRouter }
