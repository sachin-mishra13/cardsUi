import Topbar from "./components/Topbar"
import Content from "./components/Content"


function App() {
   
  const data=[
    { 
     
      words:" to the bron fox jumping over a lazy dog",
      button:"Satisfied",
      color: "blue",
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      
      words:" lorem ispe sdhj ksdnsi",
      button:"Unsatisfied",
      color: "gray",
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D'
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verified",
      color: "Green"
      ,
      img:'https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D'
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verifiedd",
      color: "Pink",
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
    },
    { 
    
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Verified",
      color: "Green",
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
    },
    { 
      
      words:" abs sggs dnkjbskh sdhjshjdh",
      button:"Satisified",
      color: "skyblue",
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'
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
