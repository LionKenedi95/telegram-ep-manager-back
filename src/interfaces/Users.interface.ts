import { ParentInput } from './ParentInput.interface'
import { BusinessInterface } from './Businesses.interface'

interface UserInterface {
	user_id: string
	first_name: string
	last_name: string
	username: string
	businesses?: BusinessInterface[]
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
	user_id: string
}

export { UserInterface, CreateUserInput, GetUserInput }
