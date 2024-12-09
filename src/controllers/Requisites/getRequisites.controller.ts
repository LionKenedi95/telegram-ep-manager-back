import { Response, Request } from 'express'
import { getRequisites } from '../../db/functions/getRequisites.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'
import { CreateRequisitesInput } from '../../interfaces/Requisites.interface'

async function getRequisitesController(req: Request<any, CreateRequisitesInput>, res: Response): Promise<void> {
	try {
		const { businessId } = req.params

		const requisitesData = await getRequisites(Number(businessId))

		const pretyfiedRequisitesData = requisitesData.map(requisite => prettyfyAnswer(requisite))

		res.status(200).send(pretyfiedRequisitesData)
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getRequisitesController }
