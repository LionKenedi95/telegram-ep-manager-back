import { Response, Request, RequestHandler } from 'express'
import { newProduct } from '../../db/functions/newProduct.db'
import { ParsedUrlQueryInput } from 'querystring'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'
import { CreateProductInput } from '../../interfaces/Products.interface'

async function postProductController(req: Request<any, CreateProductInput>, res: Response): Promise<void> {
	const product = req.body
	try {
		const { name, businessId, link, type } = product as ParsedUrlQueryInput

		const productData = await newProduct(name, businessId, link, type)

		res.status(200).send(prettyfyAnswer(productData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postProductController }