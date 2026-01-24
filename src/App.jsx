import Topbar from "./components/Topbar"
import Content from "./components/Content"


function App() {
   
  const data=[
    { 
     
      words:" to the bron fox jumping over a lazy dog",
      button:"Satisfied",
      color: "blue"
    },
    { 
      
      words:" lorem ispe sdhj ksdnsi",
      button:"Unsatisfied",
      color: "gray"
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verified",
      color: "Green"
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verifiedd",
      color: "Pink"
    },
    { 
    
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verified",
      color: "Green"
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Satisified",
      color: "skyblue"
    },
  ]

  return (
   <div className="h-screen w-full">
<Topbar/>
<Content user={data}/>
   </div>
  )
}

export default App
