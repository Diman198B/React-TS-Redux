import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { todoReducer } from './todoReducer'

export const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer
})
//Получаем тип reducer, для типизации хука useSelector
export type RootState = ReturnType<typeof rootReducer>
