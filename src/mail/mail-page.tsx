import { cookies } from 'next/headers'

import WrapperDataMail from './components/wrapper-data-mail'
interface Props {
  search?: string
}
export default function MailPage({ search }: Props) {
  const layout = cookies().get('react-resizable-panels:layout')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="hidden flex-col md:flex">
        <WrapperDataMail
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          search={search}
        />
      </div>
    </>
  )
}
