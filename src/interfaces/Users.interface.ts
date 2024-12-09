import { ParentInput } from './ParentInput.interface'
import { BusinessInterfaceDB } from './Businesses.interface'

interface UserInterfaceDB {
	user_id: string
	first_name: string
	last_name: string
	username: string
	businesses?: BusinessInterfaceDB[]
}

interface CreateUserInput extends ParentInput {
	user: {
		id: number
		first_name: string
		last_name: string
		username: string
		language_code: string
		is_premium: boolean
		allows_write_to_pm: boolean
		photo_url: string
	}
}

interface GetUserInput extends ParentInput {
	userId: string
}

export { UserInterfaceDB, CreateUserInput, GetUserInput }
