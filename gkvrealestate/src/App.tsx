import "./App.css"
import AboutPage from "./components/AboutPage/AboutPage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
function App() {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <h1 className="text-white text-4xl text-center m-4">GKVRealEstate</h1>
      <ImageGallery/>
      <AboutPage/>
    </div>
  )
}

export default App
