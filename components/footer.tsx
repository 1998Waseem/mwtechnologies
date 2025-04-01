import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-4">
              <Link href="/" className="d-flex align-items-center text-white text-decoration-none">
                <Image src="/logo.png" alt="MW Technologies Logo" width={50} height={50} className="me-2" />
                <span className="fs-4 fw-bold">MW TECHNOLOGIES</span>
              </Link>
            </div>
            <p className="text-white-50 mb-4">
              Providing innovative technology solutions to help businesses thrive in the digital world.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white-50 text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#portfolio" className="text-white-50 text-decoration-none">
                  Portfolio
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
            <h5 className="text-white mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Mobile Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Cloud Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Cybersecurity
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="text-white-50 mb-4">
              Subscribe to our newsletter to receive updates and news about our services.
            </p>
            <div className="mb-3">
              <input type="email" className="form-control mb-2" placeholder="Your Email" />
              <button className="btn btn-primary-custom w-100">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-white-50" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              &copy; {new Date().getFullYear()} MW Technologies. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50">
              <a href="#" className="text-white-50 text-decoration-none">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-white-50 text-decoration-none ms-2">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

