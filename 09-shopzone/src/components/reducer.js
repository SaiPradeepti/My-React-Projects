export const reducer = (state,action) => {

    switch(action.type){
        case 'setErrorTrue':
            state.error = true;
            return {
                ...state
            }
        case 'setProducts':
            state.products = action.payload.data;
            state.loading = false;
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}