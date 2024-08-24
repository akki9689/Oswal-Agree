
import HeroSection from './components/home/HeroSection'
// import Protection from './components/home/Protection'
import './App.css'
import OurVision from './components/Home/OurVision'
// import {protectionData} from './data/home/protectionData'

const App = () => {
    return (
        <div className='w-screen min-h-screen font-open-sans overflow-x-hidden'>
            <HeroSection />
            <OurVision />

        </div>
    )

}

export default App
