export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              Contact <span className="text-primary-custom">Us</span>
            </h2>
            <p className="text-muted">Get in touch with us for any inquiries or to discuss your project</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="contact-info">
              <h3 className="mb-4">Get In Touch</h3>
              <p className="mb-4">
                We'd love to hear from you. Contact us using the information below or fill out the form to send us a
                message.
              </p>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h5 className="mb-0">Our Location</h5>
                  <p className="mb-0 text-muted">Arcade Tower Bahria Town Rawalpindi, Pakistan</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h5 className="mb-0">Email Us</h5>
                  <p className="mb-0 text-muted">mwtechnologies@proton.me</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h5 className="mb-0">Call Us</h5>
                  <p className="mb-0 text-muted">+92 3369715173</p>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/1DvZHhPms6/">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://wa.me/+923369715173">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/mwtechologies1998/about/?viewAsMember=true">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/its_mw_technologies?igsh=MWdtMDNwYWtnOTNoeA==">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@mw_technologies?_t=ZS-8v9BLxWt9YA&_r=1">
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card card-custom p-4">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom py-3 px-4 w-100">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

