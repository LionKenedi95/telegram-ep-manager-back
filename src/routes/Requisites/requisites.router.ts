import { Router } from 'express'
import { getRequisitesController, postRequisitesController } from '../../controllers/Requisites/requisites.controller'
import { createRequisitesValidation, getRequisitesValidation } from '../../middleware/validator/requisites.validator'

const requisitesRouter = Router()

requisitesRouter.get('/requisites/:businessId', getRequisitesValidation, getRequisitesController)
requisitesRouter.post('/requisites', createRequisitesValidation, postRequisitesController)

export { requisitesRouter }
