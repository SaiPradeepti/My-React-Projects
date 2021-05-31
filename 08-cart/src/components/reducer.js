export const reducer = (state,action) => {

    const calculateSum = () => {
        let sum = 0;
        const amountArr = state.list.map(item=>parseFloat(item.price)*item.amount);
        sum = amountArr.reduce((total,amount)=>total+amount,0);
        return sum;
    }

    
    switch(action.type){
        case 'endLoading':
            return{
                ...state,
                isLoading: false,
                list: action.payload.data
            }
        case 'removeItem':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload.id),
                totalAmount: calculateSum(),
            }
        case 'increaseAmount':
            
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
        case 'decreaseAmount':

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
        case 'calculateTotalAmount':
            return{
                ...state,
                totalAmount: calculateSum(),
            }
        case 'emptyCart':
            return {
                ...state,
                list: [],
                totalAmount: 0,
            }
        default:
            throw new Error('Error');
    }
}