import { ParentInput } from './ParentInput.interface'
import { ProductInterfaceDB } from './Products.interface'

interface BusinessInterfaceDB {
	business_id: string
	name: string
	owner_id: number
	products?: ProductInterfaceDB[]
}

interface CreateBusinessInput extends ParentInput {
	business: {
		name: string
		ownerId: number
	}
}

interface GetBusinessInput extends ParentInput {
	businessId: string
}

export { BusinessInterfaceDB, CreateBusinessInput, GetBusinessInput }
