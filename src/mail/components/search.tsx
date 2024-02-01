import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useSearchForm from '@/hooks/use-search-form'
import { Search as IconSearch } from 'lucide-react'
import { useId } from 'react'

const Search = () => {
  const acessibilidadeID = useId()
  const { form, onSubmit } = useSearchForm()

  return (
    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={acessibilidadeID} className="sr-only">
                  Nome
                </FormLabel>
                <FormControl>
                  <search className="relative">
                    <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Nome"
                      type="text"
                      className="pl-8"
                      {...field}
                      id={acessibilidadeID}
                    />
                  </search>
                </FormControl>
                <FormDescription>
                  também pode pesquisar pelo email.
                </FormDescription>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default Search
