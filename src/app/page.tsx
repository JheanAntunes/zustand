import Counter from '@/components/counter'
import {
  ButtonDescrementCounter,
  ButtonIncrementCounter,
  ButtonResetCounter
} from '@/components/counter/buttons-counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
      <h3>Ações</h3>
      <div className="flex gap-8">
        <ButtonIncrementCounter />
        <ButtonDescrementCounter />
      </div>
      <ButtonResetCounter />
    </main>
  )
}
