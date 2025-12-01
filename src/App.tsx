import "./App.css"
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-primary text-5xl xl:text-7xl font-bold">Track and Store</h1>
          <p className="m-6">Never lose track of your things again.</p>
          <div className="mt-6">
            <Button className="mr-4">Get Started</Button>
            <Button variant={"secondary"}>Learn More</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
