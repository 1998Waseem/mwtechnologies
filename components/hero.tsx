import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="hero-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
              Innovative <span className="text-primary-custom">Technology</span> Solutions for Your Business
            </h1>
            <p className="lead mb-4">
              We provide cutting-edge technology services to help your business grow and succeed in the digital era.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link href="#contact" className="btn btn-primary-custom btn-lg px-4 me-2">
                Get Started
              </Link>
              <Link href="#services" className="btn btn-outline-primary-custom btn-lg px-4">
                Our Services
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="position-relative" style={{ width: "400px", height: "400px" }}>
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "var(--primary)",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "350px",
                  height: "350px",
                  border: "2px dashed var(--primary)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              ></div>
              <div
                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                style={{ width: "300px", height: "300px", zIndex: 2 }}
              >
                <div className="text-center text-white">
                  <h2 className="display-4 fw-bold">MW</h2>
                  <p className="h5">TECHNOLOGIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

