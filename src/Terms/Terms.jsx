import {useNavigate} from 'react-router-dom'
function Terms(){
  const navigate = useNavigate()
  const handlecancel = ()=>{
    navigate(-1)
  }
  return(
    <div>
    <div className = "Terms_header">
       <div className = "Terms_header2">
     <h2 className = "Terms_h2">Terms and Conditions</h2> 
     <p onClick ={handlecancel}>back</p>
     </div>
     </div>
<p className = "Terms_p">
By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use the website.


---

<h3 className = "Exness_h4">1. Affiliate Disclosure</h3>

This website is an independent affiliate of Exness. We may earn a commission when you click on affiliate links and sign up or perform qualifying actions on Exness's platform. However, this does not affect the integrity or quality of the information provided.


---

<h3 className = "Exness_h4">2. No Financial Advice</h3>

The content on this website is for informational and educational purposes only. We are not financial advisors, and nothing on this site should be interpreted as investment or financial advice. Always do your own research and consult a licensed financial advisor before making financial decisions.


---

<h3 className = "Exness_h4">3. Use of the Website</h3>

You agree to use this website only for lawful purposes. You are strictly prohibited from:

Using this website in a way that may harm or impair our service.

Attempting unauthorized access to secure parts of the website.

Copying or redistributing content without permission.



---

<h3 className = "Exness_h4">4. Intellectual Property</h3>

All content on this website, including articles, logos, graphics, and images, is the intellectual property of [Your Name or Brand Name], unless stated otherwise. You may not reproduce, distribute, or use any content without written permission.


---

<h3 className = "Exness_h4">5. Affiliate Links</h3>

Some links on this website are affiliate links, which means we may receive compensation if you sign up or trade through them. We only promote services we believe are trustworthy and useful to our audience.


---

<h3 className = "Exness_h4">6. Third-Party Websites</h3>

We are not responsible for the content, services, or actions of Exness or any third-party websites we link to. You agree that using any third-party services is at your own risk.


---

<h3 className = "Exness_h4">7. Limitation of Liability</h3>

We strive to provide accurate and up-to-date information, but we do not guarantee the accuracy, completeness, or reliability of any content. We shall not be liable for any loss or damage arising from your use of the website or reliance on any content herein.


---

<h3 className = "Exness_h4">8. Changes to the Terms</h3>

We reserve the right to update or change these Terms and Conditions at any time. You are encouraged to review this page periodically. Continued use of the website after changes constitutes acceptance of the new terms.
 </p>
    </div>
    )
}
export default Terms