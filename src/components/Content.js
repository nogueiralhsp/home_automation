import Garage from './GarageRoom'

function App() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>Maincontent goes here</h1>
        <div>
          <h3>Room 1</h3>
        </div>
        <div>
          <h3>Room 2</h3>
        </div>
        <div className="media_container">
          <div className="media_card">
            <Garage />
          </div>
          <div className="media_card">
            <Garage />
          </div>
          <div className="media_card">
            <Garage />
          </div>
        </div>
      </header>
    </div>
  )
}
export default App

