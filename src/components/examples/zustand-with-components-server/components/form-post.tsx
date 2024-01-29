import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { actionFormPost } from '../actions'

const FormPost = () => {
  const acessibilidadeIdTitle = 'titlePost'
  const acessibilidadeIdDescription = 'descriptionPost'

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Adicionar Post</CardTitle>
          <CardDescription>
            Agradecemos por você está criando seu post em nosso site...
          </CardDescription>
        </CardHeader>
        <form action={actionFormPost}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor={acessibilidadeIdTitle}>Título</Label>
                <Input
                  id={acessibilidadeIdTitle}
                  name={acessibilidadeIdTitle}
                  aria-required
                  required
                  placeholder="Título do post"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor={acessibilidadeIdDescription}>Descrição</Label>
                <Textarea
                  id={acessibilidadeIdDescription}
                  name={acessibilidadeIdDescription}
                  aria-required
                  required
                  placeholder="sua mensagem aqui"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button type="submit">Publicar</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}

export default FormPost
