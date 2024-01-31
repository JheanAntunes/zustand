'use client'
import { Mail } from '../components/mail'
import { accounts } from '../data'
import { useStoreMail } from '../store/use-store-mails'

interface MailArchivesProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
}
const MailArchives = ({
  defaultLayout,
  defaultCollapsed
}: MailArchivesProps) => {
  const mailArchives = useStoreMail((state) => state.archives)
  return (
    <div>
      <Mail
        accounts={accounts}
        mails={mailArchives}
        navCollapsedSize={4}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </div>
  )
}

export default MailArchives
