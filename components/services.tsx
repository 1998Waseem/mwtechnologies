export default function Services() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      description:
        "Custom website development using the latest technologies to create responsive, user-friendly websites.",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android devices.",
    },
    {
      icon: "bi-cloud",
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration, and management to optimize your business operations.",
    },
    {
      icon: "bi-shield-check",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and vulnerabilities.",
    },
    {
      icon: "bi-graph-up",
      title: "Data Analytics",
      description: "Advanced data analysis and visualization to help you make informed business decisions.",
    },
    {
      icon: "bi-gear",
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business goals and objectives.",
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              Our <span className="text-primary-custom">Services</span>
            </h2>
            <p className="text-muted">We offer a wide range of technology services to meet your business needs</p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card card-custom h-100 p-4">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

