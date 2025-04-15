import {Link,useNavigate} from 'react-router-dom'
function Overview({setHome}){
  const navigate = useNavigate()
  return(
    <div>
      <div className = "Terms_header">
        <div className = "Terms_header2">
        <h2 className = "Terms_h2">start trading width exness</h2>
        <p onClick ={()=>{
          navigate(-1)
        }}>back</p>
        </div>
      </div>
     <div className = "header">
          <div className ="link1">
        <Link to = '/home'>Overview</Link>
            </div>
            <div className = "link2">
             <Link to = '/terms'> Terms</Link>
             </div>
             <div className = "link3">
             <Link to = '/disclaimer'>disclaimer</Link>
             </div>
             <div className = "link4">
             <Link to = '/contact'>Contact</Link>
          </div>
          
        </div>
        </div>
    )
}
export default Overview