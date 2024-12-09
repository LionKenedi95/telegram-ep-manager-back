import { ParentInput } from './ParentInput.interface'

interface RequisitesInterfaceDB {
	id: number
	business_id: number
	type: 'самозанятый' | 'ип'
	inn: string
	kpp: string
	ogrn: string
	bik: string
	paymentAccount: string
	bank: string
}

interface CreateRequisitesInput extends ParentInput {
	requisites: {
		businessId: number
		type: 'самозанятый' | 'ип'
		inn: string
		kpp: string
		ogrn: string
		bik: string
		paymentAccount: string
		bank: string
	}
}

interface GetRequisitesInput {
	businessId: number
}

export { RequisitesInterfaceDB, CreateRequisitesInput, GetRequisitesInput }
