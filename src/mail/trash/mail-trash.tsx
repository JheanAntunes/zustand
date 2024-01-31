'use client'
import { Mail } from '../components/mail'
import { accounts } from '../data'
import { useStoreMail } from '../store/use-store-mails'

interface MailTrash {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
}
const MailTrash = ({ defaultLayout, defaultCollapsed }: MailTrash) => {
  const mailTrash = useStoreMail((state) => state.trash)
  return (
    <div>
      <Mail
        accounts={accounts}
        mails={mailTrash}
        navCollapsedSize={4}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </div>
  )
}

export default MailTrash
