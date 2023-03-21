import {createStore} from 'redux';

const initialState={
    numOfCakes:150,
    numOfIcecreams:150
}



const reducerFn=(state=initialState,action) =>{

//synchronous function 

switch(action.type){
    
    case 'BUY_CAKE': return{
        ...state,
        numOfCakes:state.numOfCakes-1
    };

    case 'BUY_ICECREAM': return{
        ...state,
        numOfIcecreams:state.numOfIcecreams-1
    };

    default : return state;
}

    
};

const store= createStore(reducerFn);

export default store;