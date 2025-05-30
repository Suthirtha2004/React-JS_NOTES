import  First from "./first"


function App() {
  const username ="archer";//username is the expression // In evaluated expression we give the varaible injection and this evaluated expression is done by bable

  return ( //This <> </> is called fragment since a single component can be /passed through App.jsx so we nedd to wrap it in a single component.
    //What if we want to add variable ? We should do it in {variable} so we can easilt do it yjis is called evaluated expression
    <>
      <h1>React with Vite</h1>
     <First/>
      <p>Second React Practice {username}</p> 
    </>
  )
}

export default App
