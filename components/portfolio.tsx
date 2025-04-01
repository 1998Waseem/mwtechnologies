"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const categories = ["ALL", "Wordpress", "Graphic Design", "UX/UI Design", "Web Development", "Meta Ads", "Google Ads"]

  const [activeCategory, setActiveCategory] = useState("ALL")

  const projects = [
    {
      title: "Wordpress",
      category: "Portfolio & Business Website",
      image: "/Wordpress.png?height=300&width=400",
    },
    {
      title: "UX/UI Design",
      category: "Web Design",
      image: "/UIUX.png?height=300&width=400",
    },
    {
      title: "Mobile App Interface",
      category: "Mobile App Development",
      image: "/mobileapp.png?height=300&width=400",
    },
    {
      title: "Graphic Design",
      category: "Brand Identity Package",
      image: "/GD.png?height=300&width=400",
    },
    {
      title: "Social Media Campaign",
      category: "Meta Ads",
      image: "/SM.png?height=300&width=400",
    },
    {
      title: "Google Advertising",
      category: "Google Ads",
      image: "/Googled.png?height=300&width=400",
    },
    {
      title: "Blog Website",
      category: "Wordpress & SEO",
      image: "/SEO.png?height=300&width=400",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      image: "/webdev.png?height=300&width=400",
    },
  ]

  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              Our <span className="text-primary-custom">Portfolio</span>
            </h2>
            <p className="text-muted mb-4">Explore our recent projects and see how we've helped businesses succeed</p>

            {/* Category Tabs */}
            <div className="portfolio-filter mb-5">
              <ul className="nav nav-pills justify-content-center flex-wrap gap-2">
                {categories.map((category, index) => (
                  <li key={index} className="nav-item">
                    <button
                      className={`nav-link px-4 py-2 ${activeCategory === category ? "active bg-primary-custom" : ""}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="img-fluid w-100"
                />
                <div className="portfolio-overlay">
                  <div className="text-center text-white">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                    <a href="#" className="btn btn-light btn-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p>No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-primary-custom px-4 py-2">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

