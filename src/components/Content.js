import { BackGarden, Garage, HouseFront } from './index'

function App() {
  return (
    <div className="content">
      <header className="content-header">
        <div className="media_container">
          <div className="media_card">
            <HouseFront />
          </div>
          <div className="media_card">
            <Garage />
          </div>
          <div className="media_card">
            <BackGarden />
          </div>
        </div>
      </header>
    </div>
  )
}
export default App

