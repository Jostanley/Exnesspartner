import {Link,useNavigate} from 'react-router-dom'
function Contact(){
  const navigate = useNavigate()
  const handlecancel = ()=>{
    navigate(-1)
  }
  return (
    <div className = "Terms_container">
      <div className = "Terms_header">
         <div className = "Terms_header2">
        <h2 className = "Terms_h2">Contact</h2>
        <p onClick = {handlecancel}>back</p>
          </div>
          </div>
<p className = "Terms_p">
If you have questions about our Privacy Policy or Disclaimer, contact us at:
<div>
<Link to = "mailto =ejikejostanley@gmail.com">Email</Link>
<p>
Website: https://www.ejistan.com
</p>
</div>

        </p>
    
    </div>
    )
}
export default Contact