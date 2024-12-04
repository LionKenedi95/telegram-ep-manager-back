import { Response, Request } from 'express'
import { newUser } from '../../db/functions/newUser.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function postUserController(req: Request, res: Response): Promise<void> {
	const user = req.body.user
	try {
		const { id, first_name, last_name, username } = user

		let userData = await newUser(Number(id), first_name as string, last_name as string, username as string)

		res.status(200).send(prettyfyAnswer(userData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postUserController }
