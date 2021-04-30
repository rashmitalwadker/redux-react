const initialState = {
    cardData: []


}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...State,
                cardData: action.data

            }
            break;
        default:
            return state

    }
}