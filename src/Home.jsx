
import Exness1 from './Page/Exness1.jsx'
import Exness2 from './Page/Exness2.jsx'
import Exness3 from './Page/Exness3.jsx'
import Exness4 from './Page/Exness4.jsx'
import Exness5 from './Page/Exness5.jsx'
import Exness6 from './Page/Exness6.jsx'
import Exness7 from './Page/Exness7.jsx'
import {useState} from 'react'
import Overview from './Overview.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link,useNavigate} from 'react-router-dom'

function Home(){
  const navigate = useNavigate()
  const [home,setHome] = useState(false)
  return(
    <div className = "container">
        <div className = "header2">
           <div className = "Terms_header2">
         <div> 
         <FontAwesomeIcon icon = {faBars} color = "white" size = "2x" onClick = {()=>{
            navigate('/Overview')}}/>
        </div>
          <div className = "header_p">cryptocurrency  beginner to pro guide with exness</div>
        </div>
    </div>
     <div>
      <Exness1/>
       <Exness2/>
      <Exness3/>
      <Exness4/>
      <Exness5/>
      <Exness6/>
      <Exness7/>
     </div>
     
     
    </div>
    )
}
export default Home