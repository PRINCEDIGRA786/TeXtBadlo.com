export const depositmoney = (amount) => {
    return (dispatch) => {
        dispatch(
            {

                type: 'increment',

            }
        )
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch(
            {

                type: 'decrement',

            }
        )
    }
}
export const addtoCart = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: "addtoCart",
                payload: id,
            }
        )
    }
}