import { Response, Request } from 'express'
import { getBusiness } from '../../db/functions/getBusiness.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function getBusinessController(req: Request, res: Response): Promise<void> {
	const business = req.body
	try {
		const { id } =
			business as ParsedUrlQueryInput

		const businessData = await getBusiness(+id)

		res.status(200).send(prettyfyAnswer(businessData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getBusinessController }
