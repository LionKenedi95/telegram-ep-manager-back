import { Response, Request } from 'express'
import { getUser } from '../../db/functions/getUser.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function getUserController(req: Request, res: Response): Promise<void> {
	const user = req.body.user
	try {
		const { id } =
			user as ParsedUrlQueryInput

		const userData = await getUser(+id)

		res.status(200).send(prettyfyAnswer(userData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getUserController }
