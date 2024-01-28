import { BearContextProvider } from '../context/bear-context'

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <BearContextProvider>{children}</BearContextProvider>
    </>
  )
}

export default Provider
