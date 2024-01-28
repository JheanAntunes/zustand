import { BearContextProvider } from '../context/bear-context'

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <BearContextProvider bears={0}>{children}</BearContextProvider>
    </>
  )
}

export default Provider
