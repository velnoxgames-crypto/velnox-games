"use client";

import { useState } from "react";


export default function MembresiasPage() {


  const [categoria, setCategoria] = useState("Todos");

  const [seleccionado, setSeleccionado] = useState<any>(null);



  const servicios = [


    // STREAMING

    {
      nombre: "Netflix",
      categoria: "Streaming",
      imagen: "/logos/netflix.png",
      descripcion: "Series, películas y contenido exclusivo.",
      planes: [
        {
          nombre: "Cuenta compartida",
          precio: "$10.000",
          duracion: "30 días",
        },
        {
          nombre: "Cuenta completa",
          precio: "$49.900",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Amazon Prime",
      categoria: "Streaming",
      imagen: "/logos/prime.png",
      descripcion: "Películas, series y beneficios Prime.",
      planes: [
        {
          nombre: "Pantalla",
          precio: "$8.000",
          duracion: "30 días",
        },
        {
          nombre: "Cuenta completa",
          precio: "$15.500",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "HBO Max",
      categoria: "Streaming",
      imagen: "/logos/hbo.png",
      descripcion: "Estrenos, series y películas.",
      planes: [
        {
          nombre: "Pantalla",
          precio: "$7.900",
          duracion: "30 días",
        },
        {
          nombre: "Cuenta completa",
          precio: "$19.900",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Disney+",
      categoria: "Streaming",
      imagen: "/logos/disney.png",
      descripcion: "Disney, Marvel, Pixar y Star.",
      planes: [
        {
          nombre: "Pantalla",
          precio: "$10.000",
          duracion: "30 días",
        },
        {
          nombre: "Cuenta completa",
          precio: "$25.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Paramount+",
      categoria: "Streaming",
      imagen: "/logos/paramount.png",
      descripcion: "Contenido premium y entretenimiento.",
      planes: [
        {
          nombre: "Cuenta compartida",
          precio: "$8.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "IPTV",
      categoria: "Streaming",
      imagen: "/logos/iptv.png",
      descripcion: "Canales en vivo, deportes y entretenimiento.",
      planes: [
        {
          nombre: "1 mes",
          precio: "$8.900",
          duracion: "30 días",
        },
        {
          nombre: "3 meses",
          precio: "$25.900",
          duracion: "90 días",
        },
      ],
    },


    {
      nombre: "Claro Video Win+",
      categoria: "Streaming",
      imagen: "/logos/claro.png",
      descripcion: "Deportes y entretenimiento premium.",
      planes: [
        {
          nombre: "Cuenta completa",
          precio: "$30.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Crunchyroll Premium",
      categoria: "Streaming",
      imagen: "/logos/crunchyroll.png",
      descripcion: "Anime, películas y series exclusivas.",
      planes: [
        {
          nombre: "Pantalla",
          precio: "$8.000",
          duracion: "30 días",
        },
        {
          nombre: "Cuenta completa",
          precio: "$15.000",
          duracion: "30 días",
        },
      ],
    },



    // MUSICA


    {
      nombre: "Spotify Premium",
      categoria: "Música",
      imagen: "/logos/spotify.png",
      descripcion: "Música sin anuncios.",
      planes: [
        {
          nombre: "Cuenta Premium",
          precio: "$12.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "YouTube Premium",
      categoria: "Música",
      imagen: "/logos/youtube.png",
      descripcion: "Videos sin anuncios.",
      planes: [
        {
          nombre: "Cuenta Premium",
          precio: "$15.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Deezer Premium",
      categoria: "Música",
      imagen: "/logos/deezer.png",
      descripcion: "Millones de canciones.",
      planes: [
        {
          nombre: "Cuenta Premium",
          precio: "$10.000",
          duracion: "30 días",
        },
      ],
    },



    // SOFTWARE


    {
      nombre: "Canva Pro",
      categoria: "Software",
      imagen: "/logos/canva.png",
      descripcion: "Diseños profesionales.",
      planes: [
        {
          nombre: "Mensual",
          precio: "$9.900",
          duracion: "30 días",
        },
        {
          nombre: "Anual",
          precio: "$45.000",
          duracion: "1 año",
        },
      ],
    },


    {
      nombre: "Office 365",
      categoria: "Software",
      imagen: "/logos/office.png",
      descripcion: "Word, Excel y PowerPoint.",
      planes: [
        {
          nombre: "Office anual",
          precio: "$90.000",
          duracion: "1 año",
        },
        {
          nombre: "Correo personal",
          precio: "$160.000",
          duracion: "1 año",
        },
      ],
    },


    {
      nombre: "CapCut Pro",
      categoria: "Software",
      imagen: "/logos/capcut.png",
      descripcion: "Edición profesional de videos.",
      planes: [
        {
          nombre: "Cuenta Pro",
          precio: "$25.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "McAfee Antivirus",
      categoria: "Software",
      imagen: "/logos/mcafee.png",
      descripcion: "Protección digital.",
      planes: [
        {
          nombre: "Licencia",
          precio: "$60.000",
          duracion: "1 año",
        },
      ],
    },



    // IA


    {
      nombre: "ChatGPT Plus",
      categoria: "IA",
      imagen: "/logos/chatgpt.png",
      descripcion: "Inteligencia artificial avanzada.",
      planes: [
        {
          nombre: "Cuenta Plus",
          precio: "$25.000",
          duracion: "30 días",
        },
      ],
    },


    {
      nombre: "Gemini Pro",
      categoria: "IA",
      imagen: "/logos/gemini.png",
      descripcion: "IA avanzada de Google.",
      planes: [
        {
          nombre: "Cuenta Pro",
          precio: "$25.000",
          duracion: "30 días",
        },
      ],
    },



    // GAMING


    {
      nombre: "Xbox Game Pass",
      categoria: "Gaming",
      imagen: "/logos/xbox.png",
      descripcion: "Cientos de juegos para Xbox y PC.",
      planes: [
        {
          nombre: "30 días",
          precio: "$50.000",
          duracion: "30 días",
        },
        {
          nombre: "2 meses",
          precio: "$90.000",
          duracion: "60 días",
        },
      ],
    },


    {
      nombre: "PlayStation Plus",
      categoria: "Gaming",
      imagen: "/logos/playstation.png",
      descripcion: "Juega online y recibe juegos mensuales.",
      planes: [
        {
          nombre: "PS4 / PS5",
          precio: "$75.000",
          duracion: "1 año",
        },
      ],
    },


  ];



  const categorias = [
    "Todos",
    "Streaming",
    "Música",
    "Software",
    "IA",
    "Gaming",
  ];



  const serviciosFiltrados =
    categoria === "Todos"
      ? servicios
      : servicios.filter(
          (servicio) => servicio.categoria === categoria
        );



  return (

    <main className="min-h-screen bg-[#07070a] text-white">


      <section className="border-b border-white/10 px-6 py-16">

        <div className="mx-auto max-w-7xl">


          <a
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm"
          >
            ← Volver al inicio
          </a>


          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Servicios digitales
          </p>


          <h1 className="mt-4 text-5xl font-black">
            Membresías
          </h1>


          <p className="mt-4 text-zinc-400">
            Streaming, música, software e inteligencia artificial en un solo lugar.
          </p>


        </div>

      </section>




      <section className="mx-auto max-w-7xl px-6 py-12">


        <div className="mb-10 flex flex-wrap gap-3">

          {categorias.map((item)=>(

            <button
              key={item}
              onClick={()=>setCategoria(item)}
              className={`rounded-xl px-5 py-3 font-bold ${
                categoria===item
                ? "bg-cyan-400 text-black"
                : "border border-white/10 bg-white/5"
              }`}
            >
              {item}
            </button>

          ))}

        </div>




        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


        {serviciosFiltrados.map((servicio)=>(


          <div
            key={servicio.nombre}
            className="rounded-3xl border border-white/10 bg-[#0d0d12] p-8"
          >


            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="h-16 w-16 object-contain"
            />


            <h2 className="mt-6 text-3xl font-black">
              {servicio.nombre}
            </h2>


            <p className="mt-2 text-cyan-400">
              {servicio.categoria}
            </p>


            <p className="mt-4 text-zinc-400">
              {servicio.descripcion}
            </p>


            <p className="mt-5 text-xl font-black">
              Desde {servicio.planes[0].precio}
            </p>


            <button
              onClick={()=>setSeleccionado(servicio)}
              className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black"
            >
              Ver planes
            </button>


          </div>


        ))}


        </div>


      </section>




      {seleccionado && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">


          <div className="w-full max-w-md rounded-3xl bg-[#0d0d12] p-8">


            <div className="flex justify-between">

              <h2 className="text-3xl font-black">
                {seleccionado.nombre}
              </h2>


              <button onClick={()=>setSeleccionado(null)}>
                ✕
              </button>

            </div>



    {seleccionado.planes.map((plan:any)=>(

  <div
    key={plan.nombre}
    className="mt-5 rounded-xl border border-white/10 p-5"
  >

                <h3 className="font-bold">
                  {plan.nombre}
                </h3>


                <p className="text-2xl font-black text-cyan-400">
                  {plan.precio}
                </p>


               <a
  href={`https://wa.me/573245826840?text=${encodeURIComponent(
    `Hola Velnox 👋, quiero comprar ${seleccionado.nombre} - ${plan.nombre} por ${plan.precio}`
  )}`}
  target="_blank"
  className="mt-4 block rounded-xl bg-cyan-400 p-3 text-center font-bold text-black transition hover:bg-cyan-300"
>
  Comprar por WhatsApp
</a>

              </div>

            ))}


          </div>

        </div>

      )}


    </main>

  );

}