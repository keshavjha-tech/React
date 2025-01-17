
import Chai from "./chai"

function App() {

//app jsx me ek hi element return kr skte hai toh aap div me wrap kar skte ho 
 //yaha react hume bs ek hi component return krne deta h 
    //isliye hum fragment k use krte h jo single component ki trh behave krta h pr uske andr kitne bhi component likh skte hai
    //ya div tag ka bhi use kr skte h but prefer fragment tag(<></>)
  return (
    <> 
    <h1>Chai aur react</h1>
   <Chai/>
   </>

  )
}

export default App

