export const reducer = (state,action) => {
    switch(action.type){
        case 'endLoading':
            return{
                ...state,
                isLoading: false,
                list: action.payload.data
            }
        default:
            throw new Error('Error');
    }
}