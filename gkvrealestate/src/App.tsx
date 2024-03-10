import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css"
import ImageGallery from "./components/ImageGallery/ImageGallery";
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <h1 className="flex mt-4 justify-evenly text-white text-5xl">GKVRealEstate</h1>
      {/**Image Gallery uses some async fns */}
      {/** @ts-expect-error*/}
      <ImageGallery/>
      <AboutPage/>
    </div>
  )
}

export default App
