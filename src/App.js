import React from "react"
import Info from "./components/info.js"
import About from "./components/about.js"
import Interest from "./components/interest.js"
import Footer from "./components/footer.js"

export default function App(){
  return(
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}