'use client'
import { useCounterStore } from '@/hooks/store'
import { Button } from '../ui/button'

type ButtonIncrementCounterProps = {
  qtd?: number
}

type ButtonDescrementCounterProps = {
  qtd?: number
}

export const ButtonIncrementCounter = ({
  qtd
}: ButtonIncrementCounterProps) => {
  const incrementCounter = useCounterStore(
    (stateCounter) => stateCounter.setIncrementCount
  )

  console.log('Button render Increment ')

  const handleClick = () => {
    //add increment
    incrementCounter(qtd)
  }
  return <Button onClick={handleClick}>Incrementar número</Button>
}

export const ButtonDescrementCounter = ({
  qtd
}: ButtonDescrementCounterProps) => {
  const descrementCounter = useCounterStore(
    (stateCounter) => stateCounter.setDescrementCount
  )

  console.log('Button render Descrement ')

  const handleClick = () => {
    //add Descrement
    descrementCounter(qtd)
  }
  return <Button onClick={handleClick}>Descrementar número</Button>
}

export const ButtonResetCounter = () => {
  const resetCounter = useCounterStore(
    (stateCounter) => stateCounter.setResetCount
  )

  console.log('Button Reset ')

  const handleClick = () => {
    //reset
    resetCounter()
  }
  return <Button onClick={handleClick}>Resetar</Button>
}
