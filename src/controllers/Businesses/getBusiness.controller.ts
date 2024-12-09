import { Response, Request } from 'express'
import { getBusiness } from '../../db/functions/getBusiness.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function getBusinessController(req: Request, res: Response): Promise<void> {
	try {
		const { businessId } = req.params

		const businessData = await getBusiness(Number(businessId))

		res.status(200).send(prettyfyAnswer(businessData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getBusinessController }
