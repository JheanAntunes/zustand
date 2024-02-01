'use client'
import { searchFilter } from '@/utils/search-filter'
import { Mail } from '../components/mail'
import { accounts } from '../data'
import { useStoreMail } from '../store/use-store-mails'

interface MailArchivesProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  search?: string
}
const MailArchives = ({
  defaultLayout,
  defaultCollapsed,
  search
}: MailArchivesProps) => {
  const mailsArchives = useStoreMail((state) => state.archives)
  return (
    <div>
      <Mail
        accounts={accounts}
        mails={searchFilter(mailsArchives, search) ?? mailsArchives}
        navCollapsedSize={4}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
      />
    </div>
  )
}

export default MailArchives
