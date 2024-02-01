import MailArchives from '@/mail/archives/mail-archives'
import { cookies } from 'next/headers'

type Props = {
  searchParams: {
    search?: string
    [key: string]: string | string[] | undefined
  }
}

export const metadata = {
  title: 'Archives',
  description: 'Seus e-mails que estão arquivados.'
}

const PageArchives = ({ searchParams }: Props) => {
  const layout = cookies().get('react-resizable-panels:layout')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  const { search } = searchParams

  return (
    <main>
      <MailArchives
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        search={search}
      />
    </main>
  )
}

export default PageArchives
