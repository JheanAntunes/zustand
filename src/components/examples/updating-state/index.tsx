'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { usePersonStore } from '@/hooks/usePersonStore'

const ExampleUpdatingState = () => {
  const updatingFirstName = usePersonStore((state) => state.updatingFirstName)
  const updatingLastName = usePersonStore((state) => state.updatingLastName)
  const handleOnChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatingFirstName(e.currentTarget.value)
  }
  const handleOnChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatingLastName(e.currentTarget.value)
  }
  return (
    <form className="space-y-2">
      <Label htmlFor="firstName">Nome</Label>
      <Input
        type="text"
        placeholder="Nome"
        id="firstName"
        onChange={handleOnChangeFirstName}
      />
      <Label htmlFor="lastName">Sobrenome</Label>
      <Input
        type="text"
        placeholder="Sobrenome"
        id="lastName"
        onChange={handleOnChangeLastName}
      />
      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default ExampleUpdatingState
