import Link from "next/link";
import { games } from "@/data/games";
import { getGameInfo } from "@/lib/rawg";
import AddToCartCardButton from "@/components/AddToCartCardButton";


export default async function JuegoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;



  const game = games.find(
    (item) => item.id === Number(id)
  );




  if (!game) {

    return (

      <main className="
      min-h-screen
      bg-[#050505]
      text-white
      flex
      items-center
      justify-center
      ">

        <div className="text-center">

          <h1 className="text-4xl font-black">
            Juego no encontrado
          </h1>


          <Link
            href="/catalogo"
            className="
            mt-6
            inline-block
            rounded-xl
            bg-cyan-400
            px-6
            py-3
            font-bold
            text-black
            "
          >

            Volver al catálogo

          </Link>


        </div>


      </main>

    );

  }






  const apiGame = await getGameInfo(
    game.nombre
  );





  const imagen =
    apiGame?.portada ||
    game.imagen ||
    "/games/placeholder.jpg";






  return (

    <main className="
    min-h-screen
    bg-[#050505]
    px-6
    py-12
    text-white
    ">


      <div className="
      mx-auto
      max-w-6xl
      ">



        <Link
          href="/catalogo"
          className="
          font-bold
          text-cyan-400
          "
        >

          ← Volver al catálogo

        </Link>







        <div className="
        mt-10
        grid
        gap-10
        md:grid-cols-2
        ">





          {/* IMAGEN */}

          <div className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#101014]
          ">


            <img

              src={imagen}

              alt={game.nombre}

              className="
              h-full
              w-full
              object-cover
              "

            />


          </div>









          {/* INFORMACIÓN */}


          <div>


            <p className="
            text-sm
            font-bold
            uppercase
            text-cyan-400
            ">

              {game.categoria}

            </p>





            <h1 className="
            mt-4
            text-5xl
            font-black
            ">

              {game.nombre}

            </h1>







            {game.descripcion && (

              <p className="
              mt-6
              text-zinc-400
              ">

                {game.descripcion}

              </p>

            )}








            {apiGame && (

              <div className="
              mt-6
              space-y-2
              text-zinc-400
              ">


                <p>
                  ⭐ Rating: {apiGame.rating}
                </p>


                <p>
                  📅 Lanzamiento: {apiGame.fecha}
                </p>


                <p>
                  🎮 Plataformas:
                  {" "}
                  {apiGame.plataformas.join(", ")}
                </p>


              </div>

            )}









            <p className="
            mt-8
            text-4xl
            font-black
            text-cyan-400
            ">

              $
              {game.precio.toLocaleString("es-CO")}

            </p>








            {/* CARRITO */}

            <div className="
            mt-8
            max-w-sm
            ">

              <AddToCartCardButton
                game={game}
              />

            </div>





          </div>





        </div>





      </div>





    </main>

  );

}