import { Helmet } from 'react-helmet'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import Exness1 from './Page/Exness1.jsx'
import Exness2 from './Page/Exness2.jsx'
import Exness3 from './Page/Exness3.jsx'
import Exness4 from './Page/Exness4.jsx'
import Exness5 from './Page/Exness5.jsx'
import Exness6 from './Page/Exness6.jsx'
import Exness7 from './Page/Exness7.jsx'
import Terms from './Terms/Terms.jsx'
import Contact from './Terms/Contact.jsx'
import Disclaimer from './Terms/Disclaimer.jsx'
import Overview from './Overview.jsx'
function App() {
  return(
    <div>
        <Helmet>
       <title>Guide to Become a pro in trading cryptocurrency</title>
      <meta name="description"
    content="Join Exness with our complete beginner guide. Learn to trade forex and become a pro trader."
  />
  <meta property="og:title" content="Start Trading with Exness" />
  <meta property="og:description" content="Learn how to trade forex with Exness and become a pro trader" />
  <meta property="og:url" content="https://yourdomain.com/" />
     </Helmet> 
       <BrowserRouter basename = "/Exnesspartner">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/home" element ={<Home/>}/>
            <Route path = "/exness2" element ={<Exness2/>}/>
             <Route path = "/exness3" element ={<Exness3/>}/>
             <Route path = "/exness4" element ={<Exness4/>}/>
              <Route path = "/exness5" element ={<Exness5/>}/>
              <Route path = "/exness6" element ={<Exness6/>}/>
               <Route path = "/exness7" element ={<Exness7/>}/>
          <Route path = "/terms" element = {<Terms/>}/>
             <Route path = "/Overview" element = {<Overview/>}/>
          <Route path = '/disclaimer' element = {<Disclaimer/>}/>
             <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
