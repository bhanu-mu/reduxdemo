
const initialStateCake={
    numOfCakes:150
}
const Cakereducerfn=(state=initialStateCake,action)=>{

    Switch(action.type){
    
        case 'BUY_CAKE': return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        case 'RET_CAKE':return{
            ...state,
            numOfCakes:state.numOfCakes+1
        }
}
}