import Link from "next/link";
import style from "../styles/Menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu(){

    const cart = useAppContext();

    function handlerOpenCart(){
        cart.openCart()
    }

    return(
        <nav className={style.menu}>
            <div>
                <Link legacyBehavior href='/'>
                    <a className={style.link}>Home</a>
                </Link>
                <Link legacyBehavior href='/store'>
                    <a className={style.link}>Store</a>
                </Link>
                <Link legacyBehavior href='/faq'>
                    <a className={style.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a className={style.link} href="#" onClick={handlerOpenCart}> Cart ({cart.getNumberOfItems()})</a>
            </div>
        </nav>
    );
}