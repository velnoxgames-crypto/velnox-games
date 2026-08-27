import Link from "next/link";
import { games } from "@/data/games";
import AddToCartCardButton from "@/components/AddToCartCardButton";


const categories = [
  "Todos",
  "Acción",
  "Terror",
  "RPG",
  "Aventura",
  "Carreras",
  "Deportes",
  "Shooter",
  "Supervivencia",
  "Pelea",
  "Indie",
  "Mundo abierto",
];


export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{
    buscar?: string;
    categoria?: string;
  }>;
}) {
 const params = await searchParams;


const buscar =
  params.buscar?.toLowerCase() || "";


const categoriaActual =
  decodeURIComponent(
    params.categoria || "Todos"
  );

  const filteredGames = games.filter((game) => {

  const nombre = game.nombre.toLowerCase();
  const categoria = game.categoria.toLowerCase();


  const coincideBusqueda =
    nombre.includes(buscar);


  const coincideCategoria =
    categoriaActual === "Todos" ||
    categoria.includes(
      categoriaActual.toLowerCase()
    );


  return coincideBusqueda && coincideCategoria;

});




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
      max-w-7xl
      ">



        <div className="mb-10">


          <p className="
          text-sm
          font-bold
          uppercase
          tracking-[0.3em]
          text-cyan-400
          ">
            Velnox Games
          </p>



          <h1 className="
          mt-3
          text-5xl
          font-black
          ">
            Catálogo de juegos
          </h1>



          <p className="
          mt-4
          text-zinc-400
          ">
            Encuentra los mejores videojuegos.
          </p>



          <Link
            href="/"
            className="
            mt-6
            inline-block
            font-bold
            text-cyan-400
            "
          >
            ← Volver al inicio
          </Link>


        </div>





        {/* BUSCADOR */}

        <form
          action="/catalogo"
          className="mb-8"
        >

          <input

            name="buscar"

            defaultValue={buscar}

            placeholder="Buscar GTA, Resident Evil..."

            className="
            w-full
            max-w-xl
            rounded-xl
            border
            border-white/10
            bg-[#101014]
            px-5
            py-4
            text-white
            outline-none
            focus:border-cyan-400
            "

          />


        </form>







        {/* FILTROS */}


        <div className="
        mb-10
        flex
        flex-wrap
        gap-3
        ">


          {categories.map((category)=>(


            <Link

              key={category}


            href={
  category === "Todos"
  ? "/catalogo"
  : `/catalogo?categoria=${encodeURIComponent(category)}`
}
              className={`
              rounded-full
              px-5
              py-2
              font-bold
              transition

              ${
                categoriaActual === category
                ?
                "bg-cyan-400 text-black"
                :
                "border border-white/10 text-zinc-300 hover:border-cyan-400"
              }

              `}

            >

              {category}

            </Link>


          ))}


        </div>







        <p className="
        mb-6
        text-zinc-400
        ">

          Mostrando:

          <span className="
          ml-2
          font-bold
          text-white
          ">

            {filteredGames.length}

          </span>

          juegos

        </p>









        <div className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        ">


          {filteredGames.map((game)=>(



            <article

              key={game.id}

              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#101014]
              transition
              hover:-translate-y-2
              hover:border-cyan-400/40
              "

            >




              <Link href={`/juego/${game.id}`}>

                <div className="
                aspect-[3/4]
                overflow-hidden
                bg-zinc-900
                ">


                  <img

                    src={
                      game.imagen ||
                      "/games/placeholder.jpg"
                    }


                    alt={game.nombre}


                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                    "

                  />


                </div>

              </Link>








              <div className="p-5">



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
                  mt-3
                  min-h-[55px]
                  text-xl
                  font-black
                  hover:text-cyan-400
                  ">

                    {game.nombre}

                  </h2>

                </Link>





                <p className="
                mt-3
                text-2xl
                font-black
                text-cyan-400
                ">

                  $
                  {game.precio.toLocaleString("es-CO")}

                </p>





                <div className="mt-5">

                  <AddToCartCardButton
                    game={game}
                  />

                </div>




              </div>



            </article>


          ))}



        </div>



      </div>



    </main>

  );

}