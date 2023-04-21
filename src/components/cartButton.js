import style from "../styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }){

    const cart = useAppContext();

    function handlerClick(){
        cart.addItemToCard(item);
    };

    return(
        <button className={style.button} onClick={handlerClick}>Add To Cart</button>
    )
}