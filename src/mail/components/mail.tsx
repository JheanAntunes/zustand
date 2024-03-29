'use client'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { AccountSwitcher } from '@/mail/components/account-switcher'
import { MailDisplay } from '@/mail/components/mail-display'
import { MailList } from '@/mail/components/mail-list'
import { Nav } from '@/mail/components/nav'
import { Mail } from '@/mail/data'
// import { useMail } from '@/mail/use-mail'
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { useStoreMail } from '../store/use-store-mails'
import Search from './search'

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  // const [mail] = useMail()
  const selected = useStoreMail((state) => state.selected)
  const trash = useStoreMail((state) => state.trash)
  const archives = useStoreMail((state) => state.archives)
  const pathname = usePathname()
  const isActiveLink = (href: string) => pathname === href

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
          }}
          onExpand={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
          }}
          className={cn(
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out'
          )}
        >
          <div
            className={cn(
              'flex h-[52px] items-center justify-center',
              isCollapsed ? 'h-[52px]' : 'px-2'
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Inbox',
                label: '128',
                icon: Inbox,
                variant: isActiveLink('/') ? 'default' : 'ghost',
                href: '/'
              },
              {
                title: 'Drafts',
                label: '9',
                icon: File,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Sent',
                label: '',
                icon: Send,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Junk',
                label: '23',
                icon: ArchiveX,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Trash',
                label: `${trash.length}`,
                icon: Trash2,
                variant: isActiveLink('/trash') ? 'default' : 'ghost',
                href: '/trash'
              },
              {
                title: 'Archive',
                label: `${archives.length}`,
                icon: Archive,
                variant: isActiveLink('/archives') ? 'default' : 'ghost',
                href: '/archives'
              }
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Social',
                label: '972',
                icon: Users2,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Updates',
                label: '342',
                icon: AlertCircle,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Forums',
                label: '128',
                icon: MessagesSquare,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Shopping',
                label: '8',
                icon: ShoppingCart,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              },
              {
                title: 'Promotions',
                label: '21',
                icon: Archive,
                variant: isActiveLink('#') ? 'default' : 'ghost',
                href: '#'
              }
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <Search />
            <TabsContent value="all" className="m-0">
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <MailList items={mails.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <MailDisplay
            mail={mails.find((item) => item.id === selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
