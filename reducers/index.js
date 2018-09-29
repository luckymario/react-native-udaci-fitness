import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

function entries (sate = {}, action) {
	switch (action.type) {
		case RECEIVE_ENTRIES:
			return {
				...state,
				entries
			}

		case ADD_ENTRY:
			return {
				...state,
				...action.entry
			}

		default:
			return state
	}
}

export default entries