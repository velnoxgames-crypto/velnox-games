"use client";

import Link from "next/link";
import { useState } from "react";
import CartButton from "@/components/CartButton";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-[#050505] text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">

     <div
  className="
  flex h-12 w-12 items-center justify-center
  rounded-xl
  bg-gradient-to-br
  from-cyan-400
  to-blue-600
  font-black
  text-xl
  text-black
  "
>
  VG
</div>
          <div>
            <h1 className="text-xl font-black">
              VELNOX
            </h1>

            <p className="text-xs font-bold tracking-widest text-cyan-400">
              GAMES
            </p>
          </div>

        </Link>



        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link href="/" className="hover:text-cyan-400">
            Inicio
          </Link>

          <Link href="/catalogo" className="hover:text-cyan-400">
            Juegos
          </Link>

          <Link href="/membresias" className="hover:text-cyan-400">
            Membresías
          </Link>

          <Link href="/#ofertas" className="hover:text-cyan-400">
            Ofertas
          </Link>

          <Link href="/#categorias" className="hover:text-cyan-400">
            Categorías
          </Link>

        </nav>



        <div className="flex items-center gap-3">

          <CartButton />


          {/* BOTON MOVIL */}
          <button
            onClick={()=>setOpen(!open)}
            className="rounded-xl border border-white/10 px-3 py-2 md:hidden"
          >
            ☰
          </button>

        </div>


      </div>



      {/* MENU MOVIL */}

      {open && (

        <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden">


          <Link href="/" onClick={()=>setOpen(false)}>
            Inicio
          </Link>


          <Link href="/catalogo" onClick={()=>setOpen(false)}>
            Juegos
          </Link>


          <Link href="/membresias" onClick={()=>setOpen(false)}>
            Membresías
          </Link>


          <Link href="/#ofertas" onClick={()=>setOpen(false)}>
            Ofertas
          </Link>


          <Link href="/#categorias" onClick={()=>setOpen(false)}>
            Categorías
          </Link>


        </nav>

      )}


    </header>
  );
}