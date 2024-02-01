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
      <div className="md:hidden">
        {/* <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        /> */}
      </div>
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
