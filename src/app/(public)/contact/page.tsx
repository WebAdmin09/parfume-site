import './contact.css'
const ContactPage = () => {
  return (
    <div className="container">
      <div className="wrapper__contact">
        <h1 className="contact__heading">
          Our company contact information!
        </h1>
        <div className='contact__wrapper-item'>
          <span className="contact-span">By email:</span>
          <h5 className="contact-h5">parfume@email.com</h5>
          <span className="contact-span">By phone:</span>
          <h5 className="contact-h5">1-800-645-9251</h5>
          <span className="contact-span">By Fax:</span>
          <h5 className="contact-h5">645-925-6131</h5>
        </div>
      </div>
    </div>
  )
}

export default ContactPage