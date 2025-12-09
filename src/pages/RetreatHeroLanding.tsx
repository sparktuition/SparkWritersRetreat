import React from 'react'
import './RetreatHeroLanding.css'


const RetreatHeroLanding: React.FC = () => {
  return (
    <section className="retreat-hero-main">
      <div className="retreat-hero-overlay" />
      <div className="retreat-hero-content">
        <h1 className="retreat-hero-title big-title">The Spark Writers’ Retreat</h1>
        <p className="retreat-hero-desc big-desc">
          <span className="retreat-hero-highlight">Hosted by Spark Igniting Minds Publishing House</span>, is designed for writers who wish to create <strong>fiction, non-fiction, memoirs, biographies, poetry</strong>, or any book that seeks to <strong>inform, inspire, or illuminate a meaningful topic</strong>.
        </p>
      </div>
    </section>
  )
}

export default RetreatHeroLanding
