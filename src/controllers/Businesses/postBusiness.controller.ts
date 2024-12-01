import { Response, Request } from 'express'
import { newBusiness } from '../../db/functions/newBusiness.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function postBusinessController(req: Request, res: Response): Promise<void> {
	const business = req.body
	try {
		const { name, ownerId } = business as ParsedUrlQueryInput

		let businessData = await newBusiness( name as string, Number(ownerId) )

		res.status(200).send(prettyfyAnswer(businessData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postBusinessController }
