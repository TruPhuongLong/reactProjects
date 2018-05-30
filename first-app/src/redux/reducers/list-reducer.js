import { typeAction } from '../actions/type-action';
import { initialState } from '../stores/state';

export const listReducer = (state = initialState.listReducerState, action) => {
    switch (action.type) {
        case typeAction.ADD:
            return {
                listCard: [...state.listCard, action.payload]
            }
        case typeAction.REMOVE:
            const listCard = state.listCard.filter(item => item.id !== action.id)
            return {
                listCard
            }
        default:
            return state;

    }
}