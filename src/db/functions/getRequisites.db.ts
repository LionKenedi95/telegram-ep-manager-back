import { RequisitesModel } from '../models/requisites.model'

async function getRequisites(id: number) {
	const requisitesInfo = await RequisitesModel.findAll({
		where: {
			business_id: id
		},
		attributes: ['id', 'business_id', 'type', 'inn', 'kpp', 'ogrn', 'bik', 'paymentAccount', 'bank']
	})
	return requisitesInfo
}

export { getRequisites }
