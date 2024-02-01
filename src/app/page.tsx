import MailPage from '@/mail/mail-page'

interface Props {
  searchParams: {
    search?: string
    [key: string]: string | string[] | undefined
  }
}
export default function Home({ searchParams }: Props) {
  const { search } = searchParams
  return (
    <main className="">
      <MailPage search={search} />
    </main>
  )
}
