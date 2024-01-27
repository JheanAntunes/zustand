'use client'
import { Button } from '@/components/ui/button'
import { useGrumpyStore } from '@/hooks/useReduxLikePatterns'

const ReduxLikePatterns = () => {
  const grumpiness = useGrumpyStore((state) => state.grumpiness)
  const dispatch = useGrumpyStore((state) => state.dispatch)
  const handleClickIncrease = () => {
    dispatch({ type: 'INCREASE', payload: { qtd: 1 } })
  }
  const handleClickDecrease = () => {
    dispatch({ type: 'DECREASE', payload: { qtd: 1 } })
  }
  return (
    <div>
      <h2>A quantidade de {grumpiness}</h2>
      <Button onClick={handleClickIncrease}>Adicionar</Button>
      <Button onClick={handleClickDecrease}>Diminuir</Button>
    </div>
  )
}

export default ReduxLikePatterns
