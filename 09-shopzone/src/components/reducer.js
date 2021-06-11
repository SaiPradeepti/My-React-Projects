export const reducer = (state,action) => {

    switch(action.type){
        case 'setErrorTrue':
            state.error = true;
            return {...state}
        case 'setProducts':
            const data = action.payload.data;
            state.products = data;
            state.loading = false;
            state.categories =['All',...new Set(data.map(item=>item.category))];
            return {...state}
        case 'setFilter':
            state.filter = action.payload.filter;
            return {...state}
        case 'msgSubmittedTrue':
            state.msgSubmitted = true;
            return {...state}
        case 'showOverlay':
            console.log('showing overlay')
            return {
                ...state,
                showOverlay: true
            }
        case 'hideOverlay':
            console.log('hiding overlay')
            return {
                ...state,
                showOverlay: false
            }
        default:
            return {...state}
    }
}