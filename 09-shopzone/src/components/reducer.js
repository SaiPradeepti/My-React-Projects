export const reducer = (state,action) => {
    let newCart;
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
        case 'addToCart':
            state.products.forEach(item=>{
                if(item.id === action.payload.id){
                        if(!state.cart.some(item=>item.id===action.payload.id)){
                            item.count = 1;
                            newCart =  [ ...state.cart, item ];
                        }            
                }
            })
            return {
                ...state,
                cart: newCart,
            }
        case 'removeFromCart':
            newCart = state.cart.filter(item=>item.id !== action.payload.id);
            return {
                ...state,
                cart: newCart,
            }
        case 'changeCount':
            newCart = state.cart.map(item=>{
                if(item.id===action.payload.id){                    
                    if(action.payload.operation === 'increment')
                        return { ...item, count: item.count+1}
                    else if(action.payload.operation === 'decrement')
                        return { ...item, count: item.count-1}
                }
                return item;
            }).filter((item) => item.count > 0)
            return {
                ...state,
                cart: newCart,
            }
        case 'calTotalItems':
            const sum = state.cart.reduce((totalCount,currentItem) => totalCount + currentItem.count, 0) ;
            return {
                ...state,
                totalItems: sum,
            }
        case 'calTotalAmount':
            const totalSum = (state.cart.reduce((totalAmount,currentItem) => totalAmount + (currentItem.count * currentItem.price), 0)).toFixed(2);
            return {
                ...state,
                totalAmount: totalSum,
            }
        case 'addExistingCart':
            newCart = [];
            if(action.payload.existingCart)
                newCart = action.payload.existingCart;
            return {
                ...state,
                cart: newCart,
            }
        default:
            return {...state}
    }
}