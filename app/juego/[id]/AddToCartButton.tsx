"use client";

import { useState } from "react";
import Link from "next/link";
import type { Game } from "@/data/games";
import { useCart } from "@/context/CartContext";
export default function AddToCartCardButton({
  game,
}: {
  game: Game;
}) {
  const { addToCart, isInCart } = useCart();
  const [showOptions, setShowOptions] = useState(false);

  const added = isInCart(game.id);

  const handleAddToCart = () => {
    addToCart(game);
    setShowOptions(true);
  };

  // JUSTO DESPUÉS DE AGREGAR
  if (showOptions) {
    return (
      <div className="space-y-2">
        <p className="text-center text-sm font-bold text-emerald-400">
          ✓ Juego añadido al carrito
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/carrito"
            className="rounded-xl bg-cyan-400 px-3 py-3 text-center text-sm font-black text-black transition hover:bg-cyan-300"
          >
            Comprar
          </Link>

          <button
            onClick={() => setShowOptions(false)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Seguir comprando
          </button>
        </div>
      </div>
    );
  }

  // SI YA ESTABA AGREGADO ANTERIORMENTE
  if (added) {
    return (
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/carrito"
          className="rounded-xl bg-cyan-400 px-3 py-3 text-center text-sm font-black text-black transition hover:bg-cyan-300"
        >
          Comprar
        </Link>

        <button
          disabled
          className="cursor-default rounded-xl bg-emerald-500 px-3 py-3 text-sm font-bold text-black"
        >
          ✓ Añadido
        </button>
      </div>
    );
  }

  // BOTÓN NORMAL
  return (
    <button
      onClick={handleAddToCart}
      className="w-full rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:bg-cyan-300"
    >
      🛒 Añadir al carrito
    </button>
  );
}