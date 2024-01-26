'use client'
import { usePersonStore } from '@/hooks/usePersonStore'
const PersonName = () => {
  const firstName = usePersonStore((state) => state.firstName)
  const lastName = usePersonStore((state) => state.lastName)
  console.log('Render PersonName when click key')
  return (
    <section>
      <h1>Nome: {`${firstName} ${lastName}`} </h1>
      <p>Obrigado por enviar seu cadastro...</p>
    </section>
  )
}

export default PersonName
