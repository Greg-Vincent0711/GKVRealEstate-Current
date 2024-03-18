import "./App.css"
import AboutPage from "./components/AboutPage/AboutPage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  return (
    <div className="h-screen">
        <div className="flex flex-col h-3/6">
          <h1 className="text-white text-4xl text-center m-4">GKVRealEstate</h1>
          <ImageGallery/>
      </div>
        <div 
        className="flex flex-col mt-8 mobile-sm:mt-6 mobile-md:mt-2 mobile-lg:-mt-20 sm:mt-20 md:mt-4 2xl:mt-72">
          <AboutPage/>
        </div>
    </div>
  )
}

export default App
