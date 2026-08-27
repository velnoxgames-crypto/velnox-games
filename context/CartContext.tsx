"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Game } from "@/data/games";


type CartContextType = {

  cartItems: Game[];

  addToCart: (game: Game) => void;

  removeFromCart: (gameId: number) => void;

  clearCart: () => void;

  cartCount: number;

  cartTotal: number;

  isInCart: (gameId: number) => boolean;

};



const CartContext = createContext<CartContextType | undefined>(
  undefined
);





export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [cartItems, setCartItems] = useState<Game[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);






  // CARGAR CARRITO

  useEffect(() => {


    const savedCart = localStorage.getItem(
      "velnox-cart"
    );


    if(savedCart){

      try{

        const parsedCart: Game[] =
          JSON.parse(savedCart);


        setCartItems(parsedCart);


      }catch{


        localStorage.removeItem(
          "velnox-cart"
        );


      }


    }


    setIsLoaded(true);



  }, []);








  // GUARDAR CARRITO

  useEffect(()=>{


    if(isLoaded){

      localStorage.setItem(
        "velnox-cart",
        JSON.stringify(cartItems)
      );


    }


  },[cartItems,isLoaded]);









  // AGREGAR AL CARRITO

  const addToCart = (game: Game)=>{


    setCartItems((currentItems)=>{


      const exists = currentItems.some(
        (item)=>item.id === game.id
      );



      if(exists){

        return currentItems;

      }



      return [
        ...currentItems,
        game
      ];


    });



  };









  // ELIMINAR

  const removeFromCart = (
    gameId:number
  )=>{


    setCartItems((currentItems)=>

      currentItems.filter(
        (item)=>item.id !== gameId
      )

    );


  };









  // VACIAR

  const clearCart = ()=>{


    setCartItems([]);


  };









  // VALIDAR SI EXISTE

  const isInCart = (
    gameId:number
  )=>{


    return cartItems.some(
      (item)=>item.id === gameId
    );


  };









  // CANTIDAD

  const cartCount =
    cartItems.length;









  // TOTAL

  const cartTotal =

    cartItems.reduce(

      (total,item)=>

        total + item.precio,

      0

    );










  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        removeFromCart,

        clearCart,

        cartCount,

        cartTotal,

        isInCart,

      }}

    >

      {children}


    </CartContext.Provider>


  );


}








export function useCart(){


  const context =
    useContext(CartContext);



  if(!context){

    throw new Error(
      "useCart debe utilizarse dentro de CartProvider"
    );

  }



  return context;


}