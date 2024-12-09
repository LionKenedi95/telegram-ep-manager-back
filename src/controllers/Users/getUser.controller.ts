import { Response, Request, RequestParamHandler } from 'express'
import { getUser } from '../../db/functions/getUser.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function getUserController(req: Request, res: Response): Promise<void> {
	try {
		const { userId } = req.params
		const userData = await getUser(+userId)
		if (!userData) {
			res.status(404).send('User not found')
			return
		}
		res.status(200).send(prettyfyAnswer(userData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getUserController }
