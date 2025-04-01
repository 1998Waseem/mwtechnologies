import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              About <span className="text-primary-custom">MW Technologies</span>
            </h2>
            <p className="text-muted">Learn more about our company and what drives us to deliver excellence</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 about-img">
            <div className="position-relative">
              <div
                className="bg-primary-custom position-absolute"
                style={{ width: "90%", height: "90%", bottom: "-20px", right: "-20px", zIndex: 0 }}
              ></div>
              <div className="position-relative" style={{ zIndex: 1 }}>
                <Image
                  src="/about1.jpg?height=500&width=600"
                  alt="About MW Technologies"
                  width={600}
                  height={500}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
            <h3 className="fw-bold mb-4">We Are A Leading Technology Company</h3>
            <p className="mb-4">
              MW Technologies is a forward-thinking technology company dedicated to providing innovative solutions for
              businesses of all sizes. With our expertise and passion for technology, we help our clients navigate the
              digital landscape and achieve their goals.
            </p>
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="me-3 text-primary-custom">
                    <i className="bi bi-check-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Innovative Solutions</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="me-3 text-primary-custom">
                    <i className="bi bi-check-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Expert Team</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="me-3 text-primary-custom">
                    <i className="bi bi-check-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Client-Focused</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="me-3 text-primary-custom">
                    <i className="bi bi-check-circle-fill fs-4"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Quality Assurance</h5>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-4">
              Our mission is to empower businesses through technology, providing tailored solutions that drive growth,
              efficiency, and innovation.
            </p>
            <a href="#services" className="btn btn-primary-custom px-4 py-2">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

