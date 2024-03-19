import "./App.css"
import AboutPage from "./components/AboutPage/AboutPage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import logo from "../gkvrealestate.svg"

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
        {/* <h1 className="text-white text-4xl text-center m-4 2xl:mt-0 ">GKVRealEstate</h1> */}
        <div className="flex justify-center items-center w-screen z-2 h-24 3xl:h-16 ">
          <img src={logo} className="w-72 p-8"/>
        </div>
        <div className="flex flex-col h-3/6 2xl:justify-evenly z-3">
          <ImageGallery/>
      </div>
        <div 
        className="flex flex-col z-3 mt-8 mobile-sm:mt-6 mobile-md:mt-2 mobile-lg:-mt-20 sm:mt-20 md:mt-4 2xl:mt-96 2xl:pt-12">
          <AboutPage/>
        </div>
    </div>
  )
}

export default App
