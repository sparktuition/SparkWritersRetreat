import React from 'react'
import './SparkPresentation.css'

const SparkPresentation: React.FC = () => {
  return (
    <section className="spark-presentation-main">
      <div className="spark-presentation-overlay" />
      <div className="spark-presentation-content">
        {/* Logo/Brand Section */}
        <div className="spark-logo-container">
          <div className="spark-logo">
            <img src="/icons/logo.jpg" alt="Spark Igniting Minds Logo" className="spark-logo-img" />
          </div>
              </div>

        {/* Main Heading */}
        <div className="spark-presentation-header">
          <h2 className="spark-presenter">Spark Igniting Minds Presents</h2>
          <h1 className="spark-title">
            SPARK WRITERS RETREAT<br />
            <span className="spark-year">2026</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="spark-subtitle">
          Transform Your Writing Journey in the Mountains of Himalayas
        </p>

       
      </div>
    </section>
  )
}

export default SparkPresentation
