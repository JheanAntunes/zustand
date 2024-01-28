'use client'
// Consumer component
import { useBearContext } from './context/bear-context'

function BasicConsumer() {
  const bears = useBearContext((s) => s.bears)
  const addBear = useBearContext((s) => s.addBear)
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  )
}
export default BasicConsumer
