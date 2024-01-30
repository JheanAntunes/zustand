'use client'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Mail } from '@/mail/data'
import { Archive } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useMailStore } from '../use-mail'

interface ButtonArchiveProps {
  mail: Mail | null
}

const ButtonArchive = ({ mail }: ButtonArchiveProps) => {
  const setArchiveMail = useMailStore((state) => state.setArchive)
  const mailArchives = useMailStore((state) => state.archives)
  const pathname = usePathname()
  const type = pathname === '/trash' ? 'trash' : 'mail'
  const isFindMailArchives = () => {
    return mailArchives.find((archive) => archive.id === mail?.id)
      ? true
      : false
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={!mail || isFindMailArchives()}
          onClick={() => {
            if (mail && !isFindMailArchives()) {
              setArchiveMail(type, mail.id)
            }
          }}
        >
          <Archive className="h-4 w-4" />
          <span className="sr-only">Archive</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Move to archive</TooltipContent>
    </Tooltip>
  )
}

export default ButtonArchive
