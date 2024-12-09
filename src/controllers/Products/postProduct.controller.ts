import { Response, Request, RequestHandler } from 'express'
import { newProduct } from '../../db/functions/newProduct.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'
import { CreateProductInput } from '../../interfaces/Products.interface'

async function postProductController(req: Request<any, CreateProductInput>, res: Response): Promise<void> {
	try {
		const { name, businessId, link, type } = req.body.product

		const productData = await newProduct(name, Number(businessId), link, type)

		res.status(200).send(prettyfyAnswer(productData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postProductController }
