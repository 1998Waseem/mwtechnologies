"use client"

import { useEffect, useState } from "react"

// Circular Progress Component
const CircularProgress = ({ percentage, color, size = 150 }: { percentage: number; color: string; size?: number }) => {
  const [progress, setProgress] = useState(0)

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  // SVG parameters
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const dash = (progress * circumference) / 100

  return (
    <div className="circular-progress position-relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e6e6e6" strokeWidth={strokeWidth} />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>

      {/* Percentage text */}
      <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ width: "100%" }}>
        <span className="fw-bold" style={{ fontSize: size / 5 }}>
          {progress}%
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  const skills = [
    { name: "Web Development", percentage: 95, color: "var(--primary)" },
    { name: "Mobile Development", percentage: 90, color: "var(--primary)" },
    { name: "Cloud Solutions", percentage: 85, color: "var(--primary)" },
    { name: "Cybersecurity", percentage: 80, color: "var(--primary)" },
    { name: "Data Analytics", percentage: 85, color: "var(--primary)" },
    { name: "IT Consulting", percentage: 90, color: "var(--primary)" },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="fw-bold mb-3">
              Our <span className="text-primary-custom">Skills</span>
            </h2>
            <p className="text-muted">We have expertise in various technology domains to deliver exceptional results</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                className="bg-primary-custom position-absolute"
                style={{ width: "90%", height: "90%", top: "-20px", left: "-20px", zIndex: 0 }}
              ></div>
              <div className="position-relative bg-dark-custom p-5 text-white" style={{ zIndex: 1 }}>
                <h3 className="mb-4">Why Choose Our Expertise?</h3>
                <p className="mb-4">
                  At MW Technologies, we pride ourselves on our technical expertise and commitment to excellence. Our
                  team of skilled professionals stays up-to-date with the latest technologies and industry trends to
                  deliver innovative solutions.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3 text-primary-custom">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>Experienced team of technology experts</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3 text-primary-custom">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>Continuous learning and skill development</div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3 text-primary-custom">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>Industry-recognized certifications</div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="me-3 text-primary-custom">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                      <div>Proven track record of successful projects</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              {skills.map((skill, index) => (
                <div key={index} className="col-6 col-md-4 text-center">
                  <div className="mb-3 d-flex justify-content-center">
                    <CircularProgress percentage={skill.percentage} color={skill.color} size={130} />
                  </div>
                  <h5 className="mb-0">{skill.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

