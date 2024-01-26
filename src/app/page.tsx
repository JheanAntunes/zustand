import ExampleUpdatingState from '@/components/examples/updating-state'
import PersonName from '@/components/examples/updating-state/person-name'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PersonName />
      <ExampleUpdatingState />
    </main>
  )
}
