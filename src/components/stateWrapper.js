import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    closeCart: () => {},
    addItemToCard: (item) => {},
    getNumberOfItems: () => {},
});

export default function StateWrapper({ children }){

    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function handlerOpenCart(){
        setIsOpen(true);
    };

    function handlerCloseCart(){
        setIsOpen(false);
    };

    function handlerAddItemToCart(item){
        const temp = [...items];
        const found = temp.find(product => product.id === item.id);

        if(found){
            found.qty++;
        }else{
            item.qty = 1;
            temp.push(item);
        }

        setItems([...temp]);
    };

    function handlerNumberOfItems(){
        const total = items.reduce((acc, item) => acc + item.qty, 0);

        return total;
    };

    return (
        <AppContext.Provider value={{
            isOpen,
            items,
            openCart: handlerOpenCart,
            closeCart: handlerCloseCart,
            addItemToCard: handlerAddItemToCart,
            getNumberOfItems: handlerNumberOfItems,
        }}>
            {children}

        </AppContext.Provider>
    );
};

export function useAppContext(){
    return useContext(AppContext);
};