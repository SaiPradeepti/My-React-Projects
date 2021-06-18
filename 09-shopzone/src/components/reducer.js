import { ACTIONS } from "./context";

export const reducer = (state,action) => {
    let newCart;
    switch(action.type){
        case ACTIONS.SET_ERROR_TRUE:
            state.error = true;
            return {...state}
        case ACTIONS.SET_PRODUCTS:
            const data = action.payload.data;
            state.products = data;
            state.loading = false;
            state.categories =['All',...new Set(data.map(item=>item.category))];
            return {...state}
        case ACTIONS.SET_FILTER:
            state.filter = action.payload.filter;
            return {...state}
        case ACTIONS.SET_MSG_SUBMITTED:
            state.msgSubmitted = true;
            return {...state}
        case ACTIONS.SET_ICON_ID:
            return {
                ...state,
                iconId: action.payload
            }
        case ACTIONS.SET_SHOW_OVERLAY:
            return {
                ...state,
                showOverlay: true
            }
        case ACTIONS.SET_HIDE_OVERLAY:
            return {
                ...state,
                showOverlay: false
            }
        case ACTIONS.SET_FORM_INPUT:
            console.log(action.payload);
            const newFormInput = {
                ...state.formInput,
                [action.payload.name]: action.payload.value,
            }
            return{
                ...state,
                formInput: newFormInput,
            }
        case ACTIONS.TOGGLE_CART:
            return{
                ...state,
                showCart: !state.showCart,
            }
        case ACTIONS.ADD_TO_CART:
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
        case ACTIONS.REMOVE_FROM_CART:
            newCart = state.cart.filter(item=>item.id !== action.payload.id);
            return {
                ...state,
                cart: newCart,
            }
        case ACTIONS.CHANGE_COUNT:
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
        case ACTIONS.CAL_TOTAL_ITEMS:
            const sum = state.cart.reduce((totalCount,currentItem) => totalCount + currentItem.count, 0) ;
            return {
                ...state,
                totalItems: sum,
            }
        case ACTIONS.CAL_TOTAL_AMOUNT:
            const totalSum = (state.cart.reduce((totalAmount,currentItem) => totalAmount + (currentItem.count * currentItem.price), 0)).toFixed(2);
            return {
                ...state,
                totalAmount: totalSum,
            }
        case ACTIONS.ADD_EXISTING_CART:
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