import React from 'react'
import './RetreatHeroTwoColumn.css'

const RetreatHeroTwoColumn: React.FC = () => {
  return (
    <section className="retreat-hero retreat-section">
      <div className="retreat-hero-grid retreat-inner">
          <div className="retreat-copy">
          

          <h1 className="retreat-title">Step Into a World Where Creativity Awakens</h1>

          <p className="retreat-paragraph">
           This retreat is more than a workshop — it is a nurturing creative journey that helps you transform your ideas into powerful manuscripts. With experienced mentors guiding you at every step, you will learn not just how to write a book, but how to become an author.   </p>
          <p className="retreat-paragraph">
          Exclusive Bonus:<strong>Participants also receive free ISBN and personalised publishing advice from Spark Igniting Minds Publishing House — a rare opportunity for writers ready to take the next big leap towards publishing.</strong></p>
        </div>

        <div className="retreat-image">
          <img
             src="/SparkWritersRetreat/jpg (20).jpg"
            alt="Mountain landscape"
          />
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroTwoColumn
