'use client'
import { accounts } from '@/mail/data'
import { searchFilter } from '@/utils/search-filter'
import { useStoreMail } from '../store/use-store-mails'
import { Mail } from './mail'

interface WrapperDataMail {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  search?: string
}

const WrapperDataMail = ({
  defaultLayout,
  defaultCollapsed,
  search
}: WrapperDataMail) => {
  const mails = useStoreMail((state) => state.mails)
  return (
    <>
      <Mail
        accounts={accounts}
        mails={searchFilter(mails, search) ?? mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </>
  )
}

export default WrapperDataMail
