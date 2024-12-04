import { ParentInput } from './ParentInput.interface'

interface ProductInterface {
	id: number
	name: string
	businessId: number
	link: string
	type: 'channel' | 'media'
}

interface CreateProductInput extends ParentInput {
	product: {
		name: string
		business_id: number
		link: string
		type: 'channel' | 'media'
	}
}

interface GetProductInput extends ParentInput {
	product_id: number
}

export { ProductInterface, CreateProductInput, GetProductInput }
