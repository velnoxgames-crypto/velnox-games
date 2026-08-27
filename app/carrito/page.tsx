"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function CarritoPage() {


  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();



  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");



  const whatsappNumber = "573156642398";




  const handleWhatsAppOrder = () => {


    if (
      !customerName.trim() ||
      !customerEmail.trim() ||
      !customerPhone.trim() ||
      !paymentMethod
    ) {

      alert("Por favor completa los datos obligatorios.");

      return;

    }




    const gamesList = cartItems

      .map(
        (game) =>
          `• ${game.nombre} — $${game.precio.toLocaleString("es-CO")}`
      )

      .join("\n");






    const message = `Hola, quiero realizar un pedido en Velnox Games 🎮


DATOS DEL CLIENTE


Nombre: ${customerName}

Correo: ${customerEmail}

WhatsApp: ${customerPhone}

Método de pago: ${paymentMethod}



JUEGOS


${gamesList}



TOTAL:

$${cartTotal.toLocaleString("es-CO")}



${notes.trim() ? `Observaciones: ${notes}` : ""}



Quedo atento(a) para continuar con la compra.`;





    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



    window.open(
      whatsappUrl,
      "_blank"
    );


  };







  return (


    <main className="min-h-screen bg-[#050505] px-6 py-12 text-white">


      <div className="mx-auto max-w-6xl">





        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">


          <div>


            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">

              Velnox Games

            </p>



            <h1 className="text-4xl font-black">

              Tu carrito

            </h1>



            <p className="mt-3 text-zinc-400">

              {cartCount === 1
                ? "1 juego seleccionado"
                : `${cartCount} juegos seleccionados`
              }

            </p>


          </div>




          <Link

            href="/catalogo"

            className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            font-semibold
            hover:border-cyan-400/40
            hover:text-cyan-400
            "

          >

            ← Seguir comprando

          </Link>



        </div>








        {
        cartItems.length === 0 ? (



          <div className="
          rounded-3xl
          border
          border-white/10
          bg-[#101014]
          px-6
          py-20
          text-center
          ">



            <div className="text-6xl">

              🛒

            </div>




            <h2 className="mt-6 text-2xl font-black">

              Tu carrito está vacío

            </h2>



            <p className="mt-3 text-zinc-500">

              Explora nuestro catálogo y agrega tus juegos favoritos.

            </p>




            <Link

              href="/catalogo"

              className="
              mt-8
              inline-block
              rounded-xl
              bg-cyan-400
              px-7
              py-3
              font-black
              text-black
              "

            >

              Ver juegos

            </Link>



          </div>



        ) : (



          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">






            <div>


              <div className="space-y-4">


                {cartItems.map((game)=>(


                  <article

                    key={game.id}

                    className="
                    flex
                    gap-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#101014]
                    p-4
                    "

                  >




                    <Link

                      href={`/juego/${game.id}`}

                      className="
                      h-32
                      w-24
                      flex-shrink-0
                      overflow-hidden
                      rounded-xl
                      bg-zinc-900
                      "

                    >



                      <img

                        src={game.imagen || "/games/placeholder.jpg"}

                        alt={game.nombre}

                        className="
                        h-full
                        w-full
                        object-cover
                        "

                      />



                    </Link>








                    <div className="flex flex-1 flex-col justify-between">



                      <div>



                        <p className="
                        text-xs
                        font-bold
                        uppercase
                        text-cyan-400
                        ">

                          {game.categoria}

                        </p>





                        <Link href={`/juego/${game.id}`}>



                          <h2 className="
                          mt-1
                          text-xl
                          font-bold
                          hover:text-cyan-400
                          ">

                            {game.nombre}

                          </h2>



                        </Link>





                        <p className="
                        mt-2
                        text-sm
                        text-zinc-500
                        ">

                          {game.descripcion}

                        </p>



                      </div>








                      <div className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      ">



                        <p className="
                        text-xl
                        font-black
                        text-cyan-400
                        ">


                          $
                          {game.precio.toLocaleString("es-CO")}


                        </p>





                        <button


                          onClick={() =>
                            removeFromCart(game.id)
                          }


                          className="
                          rounded-lg
                          border
                          border-red-500/20
                          bg-red-500/10
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-red-400
                          "


                        >

                          Eliminar


                        </button>



                      </div>





                    </div>




                  </article>


                ))}



              </div>






              <button

                onClick={clearCart}

                className="
                mt-5
                text-sm
                font-semibold
                text-zinc-500
                hover:text-red-400
                "

              >

                Vaciar carrito

              </button>









              <div className="
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-[#101014]
              p-6
              ">



                <h2 className="text-2xl font-black">

                  Datos del comprador

                </h2>





                <div className="mt-6 grid gap-5 sm:grid-cols-2">



                  <input

                    placeholder="Nombre completo"

                    value={customerName}

                    onChange={(e)=>setCustomerName(e.target.value)}

                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"

                  />




                  <input

                    placeholder="WhatsApp"

                    value={customerPhone}

                    onChange={(e)=>setCustomerPhone(e.target.value)}

                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"

                  />




                  <input

                    placeholder="Correo"

                    value={customerEmail}

                    onChange={(e)=>setCustomerEmail(e.target.value)}

                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"

                  />





                  <select

                    value={paymentMethod}

                    onChange={(e)=>setPaymentMethod(e.target.value)}

                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"

                  >


                    <option value="">
                      Método de pago
                    </option>


                    <option>
                      Nequi
                    </option>


                    <option>
                      Daviplata
                    </option>


                  </select>



                </div>






                <textarea

                  value={notes}

                  onChange={(e)=>setNotes(e.target.value)}

                  placeholder="Observaciones"

                  className="
                  mt-5
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  p-4
                  "

                />




              </div>





            </div>








            <aside className="
            h-fit
            rounded-3xl
            border
            border-white/10
            bg-[#101014]
            p-6
            ">


              <h2 className="text-2xl font-black">

                Resumen

              </h2>




              <p className="mt-6 text-zinc-400">

                Productos: {cartCount}

              </p>





              <p className="
              mt-6
              text-3xl
              font-black
              text-cyan-400
              ">

                $
                {cartTotal.toLocaleString("es-CO")}

              </p>




              <button

                onClick={handleWhatsAppOrder}

                className="
                mt-7
                w-full
                rounded-xl
                bg-cyan-400
                py-4
                font-black
                text-black
                "

              >

                Continuar pedido →

              </button>



            </aside>





          </div>


        )}



      </div>


    </main>


  );

}