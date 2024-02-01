import { SchemaFormSearch, schemaFormSearch } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import useSearch from './use-search'
const useSearchForm = () => {
  const { paramsSearch, pathname, replace } = useSearch()

  const form = useForm<SchemaFormSearch>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormSearch),
    defaultValues: {
      search: ''
    }
  })

  const valueFieldSearch = form.watch('search')

  const setSearchURL = (query: string) => {
    paramsSearch.set('search', query)
    replace(`${pathname}?${paramsSearch.toString()}`)
  }

  const debounceSearch = useDebouncedCallback(
    () => setSearchURL(valueFieldSearch),
    1000
  )

  useEffect(() => {
    debounceSearch()
  }, [debounceSearch, valueFieldSearch])

  const onSubmit: SubmitHandler<SchemaFormSearch> = (dataForm) => {
    console.log('Data: ', dataForm)
  }

  return { form, onSubmit }
}

export default useSearchForm
