'use client'
import { accounts } from '@/mail/data'
import { useMailStore } from '../use-mail'
import { Mail } from './mail'

interface WrapperDataMail {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
}

const WrapperDataMail = ({
  defaultLayout,
  defaultCollapsed
}: WrapperDataMail) => {
  const mails = useMailStore((state) => state.mails)
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
