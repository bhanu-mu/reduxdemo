import { useSelector, useDispatch } from "react-redux";

const CakeContainer=()=>{
    const numofcakes= useSelector((state)=>state.numOfCakes);
    const dispatch= useDispatch();

    const buyCake = () => {
      dispatch({type:'BUY_CAKE'});

    }
    return (
        <div>
          <h1> Cakeshop</h1>
          <h2>Num of cakes {numofcakes}</h2>
          
    
        <button onClick={buyCake}>Buy a cake</button>
        
       
        </div>
    )
}

export default CakeContainer;