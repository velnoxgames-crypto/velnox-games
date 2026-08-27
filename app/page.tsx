
import Link from "next/link";
import { games } from "@/data/games";
import CartButton from "@/components/CartButton";
import AddToCartCardButton from "@/components/AddToCartCardButton";



const categories = [
  "Acción",
  "Terror",
  "RPG",
  "Aventura",
  "Carreras",
  "Deportes",
];


const memberships = [
  {
    id: 1,
    name: "Netflix",
    categoria: "Streaming",
    description: "Series, películas y contenido exclusivo.",
    precio: "Desde $10.000",
    href: "/membresias",
    icon: "🎬",
    badge: "STREAMING",
  },

  {
    id: 2,
    name: "Xbox Game Pass",
    categoria: "Gaming",
    description: "Cientos de juegos para Xbox y PC.",
    precio: "Desde $19.900",
    href: "/membresias",
    icon: "🎮",
    badge: "GAMING",
  },

  {
    id: 3,
    name: "ChatGPT Plus",
    categoria: "IA",
    description: "Inteligencia artificial avanzada.",
    precio: "Desde $25.000",
    href: "/membresias",
    icon: "🤖",
    badge: "IA",
  },
];
export default async function Home() {


const featuredGames = games
  .filter((game)=>game.destacado)
  .slice(0,4);


return (

<main className="min-h-screen bg-[#07070a] text-white">

{/* HERO */}


<section className="relative overflow-hidden border-b border-white/10">


<div className="
absolute inset-0 
bg-[radial-gradient(circle_at_75%_40%,rgba(0,200,255,0.16),transparent_35%)]
"/>



<div className="
relative mx-auto grid max-w-7xl 
items-center gap-12 px-6 py-24 
md:grid-cols-2 md:py-32
">





<div>


<div className="
mb-5 inline-flex rounded-full 
border border-cyan-400/20 
bg-cyan-400/10 px-4 py-2 
text-xs font-semibold text-cyan-300
">

🎮 TU NUEVA TIENDA DIGITAL

</div>





<h2 className="
text-5xl font-black 
leading-[1.05] tracking-tight 
md:text-7xl
">

JUEGA.

<br/>


<span className="
bg-gradient-to-r 
from-cyan-300 via-blue-400 
to-violet-500 
bg-clip-text text-transparent
">

DESCUBRE.

</span>


<br/>

DISFRUTA.


</h2>




<p className="
mt-6 max-w-xl 
text-lg leading-8 
text-zinc-400
">

Videojuegos digitales para tu PC, streaming,
música, software e inteligencia artificial
en un solo lugar.

</p>





<form
action="/catalogo"
method="GET"
className="
mt-8 flex max-w-xl overflow-hidden 
rounded-2xl border border-white/10 
bg-white/5 p-2
"
>


<input

name="buscar"

placeholder="Busca GTA, Resident Evil..."

className="
flex-1 bg-transparent px-4 
py-3 text-white outline-none
"

/>



<button
className="
rounded-xl bg-cyan-400 
px-6 py-3 font-bold text-black
"
>

Buscar

</button>


</form>




<div className="mt-8 flex gap-4">


<Link
href="/catalogo"
className="
rounded-xl bg-cyan-400 
px-6 py-3 font-bold text-black
"
>

Ver catálogo →

</Link>



<a
href="#ofertas"
className="
rounded-xl border border-white/10 
bg-white/5 px-6 py-3 font-semibold
"
>

Ofertas

</a>


</div>



</div>





{/* IMAGEN HERO */}


<div className="relative hidden md:block">


<div className="
absolute -inset-10 rounded-full 
bg-cyan-500/20 blur-3xl
"/>



<div className="
relative aspect-[4/3] 
overflow-hidden rounded-3xl 
border border-cyan-400/20
bg-[#08111f]
">


<img

src="/velnox.png"

alt="Velnox Games"

className="
absolute inset-0 h-full w-full 
object-cover opacity-80
"

/>



<div className="
absolute inset-0 
bg-gradient-to-t 
from-black/80 via-transparent 
to-transparent
"/>



<div className="
absolute bottom-8 left-8 
flex flex-wrap gap-3
">


<span className="
rounded-full border border-cyan-400/40 
bg-cyan-400/10 px-4 py-2 
text-xs font-bold text-cyan-200
">

🎮 Juegos directo a tu pc

</span>


<span className="
rounded-full border border-cyan-400/40 
bg-cyan-400/10 px-4 py-2 
text-xs font-bold text-cyan-200
">

🎬 Streaming

</span>


<span className="
rounded-full border border-cyan-400/40 
bg-cyan-400/10 px-4 py-2 
text-xs font-bold text-cyan-200
">

🤖 IA y sofware

</span>



</div>


</div>


</div>




</div>

</section>
{/* CATEGORÍAS */}

<section
  id="categorias"
  className="mx-auto max-w-7xl px-6 py-12"
>


<div className="mb-8">

<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
Explora
</p>


<h3 className="mt-2 text-3xl font-black">
Categorías
</h3>


<p className="mt-3 text-zinc-400">
Encuentra juegos y servicios según lo que buscas.
</p>

</div>





<div className="
grid 
grid-cols-2 
gap-5 
sm:grid-cols-3 
md:grid-cols-6
">


{categories.map((category)=>(


<Link

key={category}

href={`/catalogo?categoria=${category}`}

className="
group
flex
h-32
flex-col
items-center
justify-center
rounded-2xl
border
border-white/10
bg-[#0d1324]
transition
hover:-translate-y-2
hover:border-cyan-400/40
hover:bg-cyan-400/10
"

>


<span className="
text-lg
font-black
text-white
group-hover:text-cyan-300
">

{category}

</span>


<span className="
mt-2
text-xs
text-zinc-500
">

Ver juegos

</span>


</Link>


))}


</div>


</section>








{/* MEMBRESÍAS */}


<section

id="membresias"

className="
mx-auto 
max-w-7xl 
px-6 
py-12
"

>



<div className="
mb-8 
flex 
items-end 
justify-between
">


<div>


<p className="
mb-2
text-sm
font-bold
uppercase
tracking-[0.2em]
text-cyan-400
">

Servicios digitales

</p>



<h3 className="
text-3xl
font-black
">

Membresías

</h3>



<p className="
mt-3
text-zinc-400
">

Streaming, música, gaming e inteligencia artificial.

</p>


</div>




<Link

href="/membresias"

className="
hidden
text-sm
font-bold
text-cyan-400
hover:text-cyan-300
sm:block
"

>

Ver todas →

</Link>


</div>






<div className="
grid
gap-6
md:grid-cols-3
">


{memberships.map((membership)=>(


<Link

key={membership.id}

href={membership.href}

className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#0d0d12]
p-8
transition
hover:-translate-y-2
hover:border-cyan-400/40
hover:shadow-xl
"

>



<div className="
flex
items-start
justify-between
">


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-white/5
text-3xl
"

>

{membership.icon}

</div>



<span className="
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-3
py-1
text-xs
font-black
text-cyan-300
">

{membership.badge}

</span>



</div>






<h4 className="
mt-8
text-3xl
font-black
">

{membership.name}

</h4>





<p className="
mt-3
text-zinc-400
leading-7
">

{membership.description}

</p>





<div className="
mt-8
font-bold
text-cyan-400
">

Ver planes →

</div>



</Link>


))}


</div>



</section>
{/* JUEGOS DESTACADOS */}

<section className="mx-auto max-w-7xl px-6 py-12">


<div className="mb-8 flex items-end justify-between">


<div>

<p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
Selección Velnox
</p>


<h3 className="text-3xl font-black">
Juegos destacados
</h3>


<p className="mt-3 text-zinc-400">
Los títulos más buscados por nuestros jugadores.
</p>


</div>



<Link
href="/catalogo"
className="
hidden
text-sm
font-bold
text-cyan-400
sm:block
"
>

Ver todos →

</Link>


</div>





<div className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
">


{featuredGames.map((game)=>(


<article

key={game.id}

className="
group
overflow-hidden
rounded-2xl
border
border-white/10
bg-[#0d0d12]
transition
hover:-translate-y-2
hover:border-cyan-400/40
"

>



<Link href={`/juego/${game.id}`}>



<div className="
relative
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
  "
/>



<div className="
absolute
inset-0
bg-gradient-to-t
from-black/90
via-transparent
to-transparent
"/>



<div className="
absolute
bottom-5
left-5
right-5
">


<p className="
text-xs
font-bold
uppercase
text-cyan-300
">

{game.categoria}

</p>



<h4 className="
mt-2
text-xl
font-black
">

{game.nombre}

</h4>


</div>



</div>



</Link>






<div className="p-5">


<p className="
text-2xl
font-black
text-cyan-400
">

${game.precio.toLocaleString("es-CO")}

</p>



<div className="mt-5">

<AddToCartCardButton game={game}/>

</div>



</div>





</article>


))}


</div>


</section>








{/* OFERTAS */}


<section

id="ofertas"

className="
mx-auto
max-w-7xl
px-6
py-12
"

>



<div className="mb-8">


<p className="
text-sm
font-bold
uppercase
tracking-[0.2em]
text-cyan-400
">

Promociones

</p>



<h3 className="
mt-2
text-3xl
font-black
">

Ofertas especiales

</h3>



<p className="
mt-3
text-zinc-400
">

Aprovecha descuentos en servicios digitales.

</p>


</div>






<div className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
">


{[

{
nombre:"Crunchyroll",
imagen:"/logos/crunchyroll.png",
antes:"$45.000",
ahora:"$30.000",
descuento:"-33%"
},


{
  id: 1,
  nombre: "Grand Theft Auto V",
  imagen: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  categoria: "Mundo abierto",
  antes:"$40.000",
  ahora: "$29.900",
  
},


{
nombre:"PlayStation Plus Deluxe",
imagen:"/logos/playstation.png",
antes:"$90.000",
ahora:"$75.000",
descuento:"-17%"
}



].map((oferta)=>(


<div

key={oferta.nombre}

className="
relative
rounded-3xl
border
border-white/10
bg-[#0d0d12]
p-8
transition
hover:-translate-y-2
hover:border-cyan-400/40
"

>



<span className="
absolute
right-5
top-5
rounded-full
bg-cyan-400
px-3
py-1
text-xs
font-black
text-black
">

{oferta.descuento}

</span>



<img

src={oferta.imagen}

alt={oferta.nombre}

className="
h-16
w-16
object-contain
"

/>



<h4 className="
mt-6
text-2xl
font-black
">

{oferta.nombre}

</h4>




<div className="
mt-4
flex
items-center
gap-3
">


<p className="
text-zinc-500
line-through
">

{oferta.antes}

</p>



<p className="
text-2xl
font-black
text-cyan-400
">

{oferta.ahora}

</p>



</div>





<Link

href="/membresias"

className="
mt-6
inline-block
rounded-xl
bg-cyan-400
px-5
py-3
font-bold
text-black
"

>

Comprar ahora

</Link>



</div>


))}


</div>


</section>








{/* FOOTER */}


<footer className="
mt-16
border-t
border-white/10
">


<div className="
mx-auto
max-w-7xl
px-6
py-10
flex
flex-col
gap-6
sm:flex-row
sm:justify-between
">


<div>

<p className="font-black tracking-wide">
VELNOX GAMES
</p>


<p className="
mt-2
text-sm
text-zinc-500
">

Tu próxima aventura comienza aquí.

</p>


</div>




<p className="
text-sm
text-zinc-500
">

© 2026 Velnox Games. Todos los derechos reservados.

</p>



</div>


</footer>
</main>

);

}