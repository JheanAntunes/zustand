import * as z from 'zod'

export const schemaFormSearch = z.object({
  search: z.string().min(1, 'Por favor, preencha o nome da pessoa')
})

export type SchemaFormSearch = z.infer<typeof schemaFormSearch>
