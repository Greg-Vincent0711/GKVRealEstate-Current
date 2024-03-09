import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css"
import ImageGallery from "./components/ImageGallery/ImageGallery";
function App() {
  return (
    <div className="flex flex-col">
      <h1 className="flex mt-4 justify-center text-white text-5xl">GKVRealEstate</h1>
      <ImageGallery/>
      <AboutPage/>
    </div>
  )
}

export default App
