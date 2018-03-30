export const reducer = (state = [0, 0, 0, 0], action) => {
    switch (action.type) {
        case 'INCREMENT':

            return state.map((t, index) => {
                if (action.index === index) {
                    return ++t
                } else {
                    return t
                }
            })

        default:
            return state
    }
}