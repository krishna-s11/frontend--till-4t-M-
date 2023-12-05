import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import "./styles/legal.css"

const LegalPage = () => {
    const index = useParams().index;
    const protectKid = [
        "In our ongoing efforts at Swinxter to make your experience as enjoyable and safe as possible, we have created this document to help parents understand how to protect their children from inappropriate content on the Internet.",
        "To protect your family, the first step would be to install parental control software on your computer. The best known and most effective programs are CyberPatrol, Net Nanny and Safety Surf. Some of the Internet providers have content filtering included with their services. Please check with your Internet Service Provider if this option is offered.",
        "Parental control software blocks access to specific websites and online content. In most cases, when you purchase this type of software, it already contains a large list of sites inappropriate for children. You can then update this software on the manufacturer's website or, most of the time, the software update is done automatically.",
        "Another way this software works is to block sites using keywords, such as 'sex'. However, filtering apps aren't just about blocking access to adult content. You can configure the application to filter other topics such as: tobacco, drugs, alcohol, violence and racism.",
        "If your computer is shared by all family members (including children), you can set up a system to only filter adult content during certain hours; for example: when you are working and there is no one to supervise the children. You can also create different user accounts and access yours with a password, known only to you, to create restrictions.",
        "Some of these programs may also block your personal information, such as: name, address and telephone number from being sent from your computer. This is a great way to protect children from potential online predators.",
        "Several programs allow you to create different levels of security and filtering based on different ages of computer users. You can do high security and harsh filtering for children, but when you log in you can set the system to not filter anything.",
        "Also remember that by installing this type of software on your computer, you could also restrict children's access to legitimate sites. This is especially true when you rely on keywords (like “sex”) to block. Some of these keywords appear in legitimate news and information, so it's best to experiment with different settings by configuring the control filters.",
        "Installing filtering software is no guarantee that your children will be safe from inappropriate content on the internet. Every day floating windows appear, so it is important to keep your program up to date. Also, be informed about how your Internet is working, so you can check the sites visited by your family (use the “History” feature to display the list of sites visited by your browser).",
        "Explaining the dangers that exist on the Internet and supervising your children when they are on the Internet remain the best ways to protect them.",
    ]
  return (
    <>
    <Navbar />
    <div className='legal_page'>
    <div className="legal_container bg-light-grey py-8 px-6" style={{color: "#fff"}}>
      <div className="mb-20">
        <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
                {
                    index==="report"?
                    "Report abuse or sexual adverts":"Our Policies"
                }
            </h3>
        </div>
        {
           index==="compliance"?
          <> 
            <p style={{fontWeight: "600"}}>Duty to keep records in accordance with 18 USC 2257</p>
            <p style={{marginTop: "20px"}}>In compliance with the Federal Labeling and Record-Keeping Law (also known as 18 USC 2257), all models located within our domain were 18 years of age or older during the time of photography. All models' proof of age is held by the custodian of records, which is listed below, organized by producer. All content and images are in full compliance with the requirements of 18 USC 2257 and associated regulations.</p>
            <p style={{marginTop: "20px"}}>Pursuant to 18 USC § 2257 and its implementing regulations, all records required to be maintained are maintained by the following person:</p>
            <p style={{marginTop: "20px"}}>
                Custodian of Records<br/>
                Confirm ID, Inc.<br/>
                1615 S. Congress Avenue, Suite 103<br/>
                Delray Beach , FL 33445, USA<br/>
            </p>
            <p style={{marginTop: "20px"}}>The content of this site is reserved for an adult audience. Members and users have contractually declared to be 18 years of age or older at the time of photography.</p>
           </>:null
        }
        {
            index==="protect_kids"?
            <>
                <p style={{fontWeight: "600"}}>Protect your children: keep them away from adult sites</p>
                {
                    protectKid.map(d => {
                        return(
                            <p style={{marginTop: "10px"}}>{d}</p>
                        )
                    })
                }
                <p style={{marginTop: "20px"}}>Here are some sites where you will find parental control software:</p>
                <p>CyberPatrol</p>
                <a href='http://www.cyberpatrol.com'>http://www.cyberpatrol.com</a>
                <p style={{marginTop: "20px"}}>Safety Surf</p>
                <a href='http://www.cyberpatrol.com'>http://www.safekids.com/</a>
                <p style={{marginTop: "20px"}}>Sites providing reliable information regarding safety on the net; for both children and adults:</p>
                <p>GetNetWise.org:</p>
                <a href='http://www.cyberpatrol.com'>http://www.getnetwise.org/</a>
                <p style={{marginTop: "20px"}}>RestrictedToAdults.org:</p>
                <a href='http://www.cyberpatrol.com'>http://rtalabel.org/</a>
            </>
            :null
        }
        {
            index==="dating_safety"?
            <>
                <p style={{fontWeight: "600"}}>Please remember that:</p>
                <ol style={{marginTop: "20px", listStyle: "number", marginLeft: "20px"}}>
                    <li>Anyone capable of identity theft can falsify a dating ad.</li>
                    <li>There is no substitute for caution when communicating with a stranger who wants to meet you.</li>
                    <li>You should never include your last name, email address, home address, telephone number, place of work or any other identifying information in your Internet profile or in your first emails. Stop communicating with anyone who insists on personal or financial information or who tries to trick you into revealing it.</li>
                    <li>If you choose to have a one-on-one meeting with another member, you must always inform a family member or significant other of the meeting location and time of your return. Never accept someone to pick you up from your home. Always bring your own transportation and request to meet in a busy public place.</li>
                    <li>Swinxter does not do criminal background investigations.</li>
                </ol>
            </>
            :null
        }
        {
            index==="report"?
            <>
                <p>Under its Terms of Service , Swinxter prohibits its members from engaging in illegal acts such as prostitution, sex trafficking, and endangerment. Additionally, Swinxter prohibits its advertising providers from sending commercial emails and using other promotional methods that may violate applicable law and/or be inappropriate (e.g. general purpose sexually explicit material or website not intended for adults). If you are aware of any of the above activities, please contact us immediately using the form below so that we can investigate it and take further action, if appropriate. THANKS.</p>
                <select name="" id="" style={{backgroundColor: "#2A2D37", padding: "10px", marginTop: "40px", outline: "1px solid #777"}}>
                    <option value="">Abuse</option>
                    <option value="">Sexually explicit advertisements</option>
                    <option value="">Prostitution, Sex Trafficking and Endangerment</option>
                </select><br></br>
                <div>
                    <textarea style={{marginTop: "30px", padding: "10px", width: "413px", backgroundColor: "#2A2D37", height: "300px", outline: "1px solid #777"}}placeholder='Provide the details'/>
                </div>
                <button style={{padding: "8px 20px", background: "linear-gradient(46deg, #F79220 55.15%, #F94A2B 82%)", marginTop: "20px", width: "413px"}}>Report</button>
            </>
            :null
        }
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default LegalPage