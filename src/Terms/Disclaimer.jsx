import {useNavigate} from 'react-router-dom'
function Disclaimer() {
  const navigate = useNavigate()
  const handlecancel = ()=>{
    navigate(-1)
  }
  return(
    <div>
      <div className = "Terms_header">
         <div className = "Terms_header2">
        <h2 className = "Terms_h2">Disclaimer</h2>
        <p onClick= {handlecancel}>back</p>
        </div>
        </div>
        <p className = "Terms_p">
          ejistan.com is an independent affiliate site and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Exness or any of its subsidiaries.

All content is for educational and informational purposes only and should not be considered as financial advice.


---

<h4 className = "Exness_h4">Trading Risk</h4>

Forex and CFD trading involve high risk and may not be suitable for all investors. You could lose all your capital. Always trade responsibly and seek advice from a licensed financial advisor.


---

<h4 className = "Exness_h4">Accuracy of Information</h4>

We aim to provide accurate and up-to-date information, but we do not guarantee the completeness or correctness of any content. You use the information on this site at your own risk.


---

<h4 className = "Exness_h4">Affiliate Earnings</h4>

We may earn commissions from qualifying actions made through affiliate links. This supports the operation of our website at no additional cost to you.

        </p>
      
    </div>
    )
}
export default Disclaimer