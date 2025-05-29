import  First from "./first"


function App() {
  

  return ( //This <> </> is called fragment since a single component can be passed through App.jsx so we nedd to wrap it in a single component.
    <>
      <h1>React with Vite</h1>
     <First/>
      <p>Second React Practice</p>
    </>
  )
}

export default App
