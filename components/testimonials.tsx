import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Tech Innovations",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "MW Technologies transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO, Global Solutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with MW Technologies was a game-changer for our company. Their cloud solutions improved our efficiency and reduced costs significantly.",
    },
    {
      name: "Michael Brown",
      position: "Director, Digital Enterprises",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The cybersecurity implementation by MW Technologies provided us with peace of mind. Their proactive approach to security is commendable.",
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              Client <span className="text-primary-custom">Testimonials</span>
            </h2>
            <p className="text-muted">What our clients say about our services and solutions</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="card card-custom p-5 text-center">
                          <div className="d-flex justify-content-center mb-4">
                            <div
                              className="rounded-circle overflow-hidden"
                              style={{ width: "100px", height: "100px", border: "5px solid var(--primary)" }}
                            >
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <p className="mb-4 fst-italic">"{testimonial.quote}"</p>
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <p className="text-muted">{testimonial.position}</p>
                          <div className="text-primary-custom mt-2">
                            <i className="bi bi-star-fill mx-1"></i>
                            <i className="bi bi-star-fill mx-1"></i>
                            <i className="bi bi-star-fill mx-1"></i>
                            <i className="bi bi-star-fill mx-1"></i>
                            <i className="bi bi-star-fill mx-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-primary-custom rounded-circle p-3"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-primary-custom rounded-circle p-3"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

