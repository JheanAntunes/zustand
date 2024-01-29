import MailTrash from '@/mail/trash/mail-trash'
import { cookies } from 'next/headers'

const PageTrash = () => {
  const layout = cookies().get('react-resizable-panels:layout')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <main>
      <MailTrash
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </main>
  )
}

export default PageTrash
