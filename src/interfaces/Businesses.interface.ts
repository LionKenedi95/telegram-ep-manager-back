import { ParentInput } from './ParentInput.interface'
import { ProductInterface } from './Products.interface'

interface BusinessInterface {
	business_id: string
	name: string
	owner_id: string
	products?: ProductInterface[]
}

interface CreateBusinessInput extends ParentInput {
	business: {
		name: string
		owner_id: string
	}
}

interface GetBusinessInput extends ParentInput {
	business_id: string
}

export { BusinessInterface, CreateBusinessInput, GetBusinessInput }
