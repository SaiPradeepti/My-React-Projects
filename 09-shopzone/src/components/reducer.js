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
        case 'setIconId':
            return {
                ...state,
                iconId: action.payload
            }
        case 'showOverlay':
            return {
                ...state,
                showOverlay: true
            }
        case 'hideOverlay':
            return {
                ...state,
                showOverlay: false
            }
        case 'setFormInput':
            console.log(action.payload);
            const newFormInput = {
                ...state.formInput,
                [action.payload.name]: action.payload.value,
            }
            return{
                ...state,
                formInput: newFormInput,
            }
        case 'toggleCart':
            return{
                ...state,
                showCart: !state.showCart,
            }
        default:
            return {...state}
    }
}

