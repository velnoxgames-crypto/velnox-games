"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/carrito"
      className="relative rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40"
    >
      🛒

      {mounted && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-bold text-black">
          {cartCount}
        </span>
      )}
    </Link>
  );
}