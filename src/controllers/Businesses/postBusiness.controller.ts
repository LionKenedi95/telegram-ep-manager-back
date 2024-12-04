import { Response, Request, RequestParamHandler } from 'express'
import { newBusiness } from '../../db/functions/newBusiness.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'
import { CreateBusinessInput } from '../../interfaces/Businesses.interface'

async function postBusinessController(req: Request<any, CreateBusinessInput>, res: Response): Promise<void> {
	const business = req.body.business
	try {
		const { name, ownerId } = business

		let businessData = await newBusiness(name as string, Number(ownerId))

		res.status(200).send(prettyfyAnswer(businessData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postBusinessController }
