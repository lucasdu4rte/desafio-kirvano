'use client'

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(value => ++value)
  }
  const decrement = () => {
    setCounter(value => value > 1 ? --value : value)
  }
  return (
    <div className="flex items-center gap-2 w-20">
      <button
        className="bg-slate-200 rounded px-2 py-1 w-10"
        onClick={decrement}
      >
        -
      </button>
      <div className="tabular-nums">{counter}</div>
      <button
        className="bg-slate-200 rounded px-2 py-1 w-10"
        onClick={increment}
      >
        +
      </button>
    </div>
  )
}
