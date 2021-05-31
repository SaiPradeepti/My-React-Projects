export const reducer = (state,action) => {

    switch(action.type){
        case 'END_LOADING':
            return{
                ...state,
                isLoading: false,
                list: action.payload.data
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload.id),
            }
        case 'INCREASE_AMOUNT':
            
            return {
                ...state,
                list: state.list.map(item => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            amount: item.amount+1,                            
                        }
                    }
                    return item;
                }),
            }
        case 'DECREASE_AMOUNT':

            return {
                ...state,
                list: state.list.map(item => {
                    if(item.id === action.payload.id){
                        return {
                        ...item,
                        amount: item.amount-1,
                    }
                    }
                    return item;
                }),
            }
        case 'GET_TOTALS':
            let {totalAmount,itemCount} = state.list.reduce((cartTotal,cartItem)=>{
                const {price,amount} = cartItem;
                const itemTotalAmount = price * amount;
                cartTotal.totalAmount += itemTotalAmount;
                cartTotal.itemCount += amount;
                return cartTotal;
            },{
                totalAmount: 0,
                itemCount: 0,
            })
            totalAmount = parseFloat(totalAmount.toFixed(2))
            return{
                ...state,
                totalAmount,
                itemCount,
            }
        case 'EMPTY_CART':
            return {
                ...state,
                list: [],
                totalAmount: 0,
            }
        default:
            throw new Error('Error');
    }
}