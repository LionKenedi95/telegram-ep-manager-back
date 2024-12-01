import { Response, Request } from 'express'
import { getProduct } from '../../db/functions/getProduct.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'

async function getProductController(
	req: Request,
	res: Response,
): Promise<void> {
	const product = req.body
	try {
		const { id } = product as ParsedUrlQueryInput

		const productData = await getProduct(Number(id))

		res.status(200).send(prettyfyAnswer(productData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { getProductController }
