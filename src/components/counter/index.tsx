'use client'

import { useCounterStore } from '@/hooks/store'

const Counter = () => {
  //observando somente o estado count, se outros estados forem alterado, esse componente não é renderizado novamente.
  const counter = useCounterStore((stateCounter) => stateCounter.count)
  return (
    <div>
      <h2 className="font-mono text-xl font-bold">{counter}</h2>
    </div>
  )
}

export default Counter
