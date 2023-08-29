import Block from './components/block' 
import './styles.css'

function App() {

  return (
    <>
      <h1 className="header">TCT Tech Center</h1>
      <div className='section'>
        <div className='subsection'>
          <div className='title'>Basic Tools:</div>
          <Block 
            title='Feeds and Speeds Calculator' 
            descr='Calculate ChipLoad, Cutting Speed'
            URL='https://tct-tech.github.io/fs-calc'
          />
        </div>
        <div className='subsection'>
          <div className='title'>ProX2CNC by Impex:</div>
          <div className='blockRow'>
            <Block 
              title='Impex Data Processor' 
              descr='Process Raw Data from ProX2CNC, generates CPK, Max/Avg/Std Dev...'
              URL='https://tct-tech.github.io/impex-data-processor'
            />
            <Block 
              title='Grid DXF Generator' 
              descr='Generates DXFs for Grid Patterns with the correct drill order'
              URL='https://tct-tech.github.io/grid-generator'
            />
          </div>
        </div>
        <div className='subsection'>
          <div className='title'>Database:</div>
          <Block 
            title='Inventory' 
            descr='Manage and track inventory of drills, monitor stock levels, record item details, and availability.'
            URL='https://tct-inventory.fly.dev/catalog'
          />
        </div>
      </div>
    </>
  )
}

export default App

