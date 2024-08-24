
import HeroSection from  './components/home/HeroSection'
import Protection from './components/home/Protection'
import './App.css'
import {protectionData} from './data/home/protectionData'

const App=()=> {
 return(
  <div >
  <HeroSection />
   <Protection data={protectionData}/>
  </div>
 )
  
}

export default App
