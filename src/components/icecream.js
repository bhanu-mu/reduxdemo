import { useSelector, useDispatch } from "react-redux";

const Icecreamcontainer=()=>{
    const numoficecreams=useSelector((state)=>state.numOfIcecreams);
    const dispatch= useDispatch()
    const buyIcecream = () => {
        dispatch({type:'BUY_ICECREAM'});
    }

    return(
    <div>
      
      
    <h2>Num of Icecreams {numoficecreams}</h2>

    
    <button onClick={buyIcecream}> Buy an Icecream</button>
   
    </div>)
};
  


export default Icecreamcontainer;