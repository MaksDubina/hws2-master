import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            return newState.sort((a, b) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)) // need to fix
        }
        case 'check': {

            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
