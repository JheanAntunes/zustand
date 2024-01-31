import MailArchives from '@/mail/archives/mail-archives'
import { cookies } from 'next/headers'

const PageArchives = () => {
  const layout = cookies().get('react-resizable-panels:layout')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <main>
      <MailArchives
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </main>
  )
}

export default PageArchives
