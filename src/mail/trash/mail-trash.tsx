'use client'
import { searchFilter } from '@/utils/search-filter'
import { Mail } from '../components/mail'
import { accounts } from '../data'
import { useStoreMail } from '../store/use-store-mails'

interface MailTrash {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  search?: string
}
const MailTrash = ({ defaultLayout, defaultCollapsed, search }: MailTrash) => {
  const mailsTrash = useStoreMail((state) => state.trash)
  return (
    <div>
      <Mail
        accounts={accounts}
        mails={searchFilter(mailsTrash, search) ?? mailsTrash}
        navCollapsedSize={4}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </div>
  )
}

export default MailTrash
