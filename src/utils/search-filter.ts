import { Mail } from '@/mail/data'

export const searchFilter = (mails: Mail[], search?: string) => {
  if (!search) return null
  return mails.filter(
    (mail) => mail.name.includes(search) || mail.email.includes(search)
  )
}
