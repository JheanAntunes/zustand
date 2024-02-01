import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useSearch = () => {
  const search = useSearchParams()
  const paramsSearch = new URLSearchParams(search)
  const pathname = usePathname()
  const { replace } = useRouter()
  return {
    paramsSearch,
    pathname,
    replace
  }
}

export default useSearch
