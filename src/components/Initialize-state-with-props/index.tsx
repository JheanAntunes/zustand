import BasicConsumer from './basic-consumer'
import Provider from './provider/provider'

const InitializeStateWithProps = () => {
  return (
    <div>
      <Provider>
        <BasicConsumer />
      </Provider>
    </div>
  )
}

export default InitializeStateWithProps
