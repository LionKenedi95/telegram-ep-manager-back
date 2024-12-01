import { Response, Request } from 'express'
import { getUser } from '../../db/functions/getUser.db'
import { newUser } from '../../db/functions/newUser.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function putUserController(req: Request, res: Response): Promise<void> {
    console.group('PUT User controller')
	const user = req.body.user

	console.log(`PUT User source: 
${JSON.stringify(user)}`)

	try {
		const { id, first_name, last_name, username } =
			user as ParsedUrlQueryInput

		let newUserData = await newUser(
			Number(id),
			first_name as string,
			last_name as string,
			username as string,
		)

		const userData = await getUser(+id)

		res.status(200).send(prettyfyAnswer(userData))
        console.log(`OK`)
        console.groupEnd()
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
        console.log(`Internal Server Error`)
        console.groupEnd()
	}
}

export { putUserController }
