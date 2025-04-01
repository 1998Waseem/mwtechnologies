import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-custom ${
        isScrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/logo.png" alt="MW Technologies Logo" width={50} height={50} className="me-2" />
          <span className="fw-bold">MW TECHNOLOGIES</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#testimonials">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary-custom ms-lg-3 px-4" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

