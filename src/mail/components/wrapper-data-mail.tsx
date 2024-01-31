'use client'
import { accounts } from '@/mail/data'
import { useStoreMail } from '../store/use-store-mails'
import { Mail } from './mail'

interface WrapperDataMail {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
}

const WrapperDataMail = ({
  defaultLayout,
  defaultCollapsed
}: WrapperDataMail) => {
  const mails = useStoreMail((state) => state.mails)
  return (
    <>
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </>
  )
}

export default WrapperDataMail
