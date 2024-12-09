import { ParentInput } from './ParentInput.interface'

interface ProductInterfaceDB {
	id: number
	name: string
	business_id: number
	link: string
	type: 'channel' | 'media'
}

interface CreateProductInput extends ParentInput {
	product: {
		name: string
		businessId: number
		link: string
		type: 'channel' | 'media'
	}
}

interface GetProductInput extends ParentInput {
	productId: number
}

export { ProductInterfaceDB, CreateProductInput, GetProductInput }
