import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css"
import ImageGallery from "./components/ImageGallery/ImageGallery";
function App() {
  return (
    <div className=" flex flex-col justify-center overflow-y-auto">
      <h1 className="mt-4 flex flex-col items-center text-white text-5xl">GKVRealEstate</h1>
      <ImageGallery/>
      {/* <div className="mt-10"> */}
        <AboutPage/>
      {/* </div> */}
    </div>
  )
}

export default App
