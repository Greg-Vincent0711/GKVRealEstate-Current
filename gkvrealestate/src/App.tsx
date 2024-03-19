import "./App.css"
import AboutPage from "./components/AboutPage/AboutPage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import logo from "../gkvrealestate.svg"

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
        <div className="flex items-center justify-center w-screen md:mt-12 z-2 h-24 3xl:h-0">
          <img src={logo} className="xl:mt-4 sm:mt-6 sm:p-4 2xl:p-10 3xl:w-2/6 "/>
        </div>
        <div className="flex flex-col h-3/6 md:mt-14 sm:mt-8 2xl:justify-evenly z-3">
          <ImageGallery/>
      </div>
        <div 
        className="flex flex-col z-3 xl:mt-0 -mt-10 mobile-sm:mt-0 mobile-md:-mt-20 mobile-lg:-mt-32 lg:-mt-28 sm:mt-20 md:mt-4 2xl:mt-80 2xl:pt-12">
          <AboutPage/>
        </div>
    </div>
  )
}

export default App
