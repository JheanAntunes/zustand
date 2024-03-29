'use client'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/use-toast'
import { Mail } from '@/mail/data'
import { Trash2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useStoreMail } from '../store/use-store-mails'

interface ButtonTrashProps {
  mail: Mail | null
}

const ButtonTrash = ({ mail }: ButtonTrashProps) => {
  const mailTrash = useStoreMail((state) => state.trash)
  const setDeleteMail = useStoreMail((state) => state.deleteMail)
  const pathname = usePathname()
  const type = pathname === '/archives' ? 'archives' : 'mail'
  const isFindMailTrash = () => {
    return mailTrash.find((trash) => trash.id === mail?.id) ? true : false
  }
  const { toast } = useToast()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={!mail || isFindMailTrash()}
          onClick={() => {
            if (mail && !isFindMailTrash()) {
              toast({
                title: 'e-mail enviado para lixeira',
                description:
                  'você pode navegar para página de lixeira e encontrar esse e-mail.'
              })
              setDeleteMail(type, mail.id)
            }
          }}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Move to trash</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Move to trash</TooltipContent>
    </Tooltip>
  )
}

export default ButtonTrash
