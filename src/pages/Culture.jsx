import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/culture.css';
import '../../css/footer.css';

export default function Culture() {
  useEffect(() => {
    document.title = 'Culture · SEK Construction & Development';
  }, []);

  return (
    <InnerPageLayout>
      <section className="culture-hero" aria-label="Culture">
        <img src="/sections/images/master.jpg" alt="Craftsmen on a SEK construction site" className="culture-hero__img js-parallax" data-parallax="0.12" />
        <div className="culture-hero__overlay" aria-hidden="true"></div>
        <div className="culture-hero__content">
          <h1 className="culture-hero__title">Built on conviction.<br />Refined by experience.</h1>
        </div>
      </section>

      <section className="culture-story" data-section-reveal>
        <div className="inner-wrap">
          <div className="culture-story__grid">
            <div>
              <p className="culture-story__label section-reveal">Our Story</p>
              <h2 className="culture-story__heading section-reveal">Three decades shaping spaces that endure</h2>
              <p className="culture-story__text section-reveal">SEK began in 1989 with a single conviction: that exceptional architecture deserves builders who treat every joint, every surface, and every detail as part of a larger vision.</p>
              <p className="culture-story__text section-reveal">What started as a boutique residential firm in Los Angeles has grown into an international practice delivering private estates, commercial towers, and cultural landmarks across four continents.</p>
            </div>
            <div className="culture-timeline">
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">1989</span>
                <div>
                  <h3 className="culture-timeline__title">Founded in Los Angeles</h3>
                  <p className="culture-timeline__desc">Marcus Ellington establishes SEK with a focus on precision residential construction for architects and private clients.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">2004</span>
                <div>
                  <h3 className="culture-timeline__title">Commercial expansion</h3>
                  <p className="culture-timeline__desc">SEK opens its Miami office and begins delivering mixed use towers and hospitality projects throughout the Americas.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">2016</span>
                <div>
                  <h3 className="culture-timeline__title">International practice</h3>
                  <p className="culture-timeline__desc">Partnerships with leading architecture studios enable SEK to deliver landmark projects in Europe, the Middle East, and Asia Pacific.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">Today</span>
                <div>
                  <h3 className="culture-timeline__title">250+ projects worldwide</h3>
                  <p className="culture-timeline__desc">A team of 180 specialists united by a shared standard: build spaces that honor the architect&rsquo;s vision and the life that unfolds within them.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="culture-values" data-section-reveal>
        <div className="inner-wrap">
          <header className="culture-values__header">
            <h2 className="culture-values__title section-reveal">What we stand for</h2>
            <p className="culture-values__desc section-reveal">Three principles guide every project, from the first site visit to the final walkthrough.</p>
          </header>
          <div className="culture-values__grid">
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Precision</h3>
              <p className="culture-values__text">Tolerance is measured in millimeters. Our teams coordinate every trade with the rigor of a master watchmaker.</p>
            </article>
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L18 4M7 4h11v11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Craft</h3>
              <p className="culture-values__text">Stone, timber, bronze, and glass each demand a different hand. We invest in artisans who have spent decades mastering their materials.</p>
            </article>
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4L13.5 9.5H19.5L14.5 13L16.5 19L11 15.5L5.5 19L7.5 13L2.5 9.5H8.5L11 4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Integrity</h3>
              <p className="culture-values__text">Transparent timelines, honest budgets, and a commitment to standing behind every surface long after the keys are handed over.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="culture-gallery" data-section-reveal>
        <div className="inner-wrap">
          <header className="culture-gallery__header">
            <h2 className="culture-gallery__title section-reveal">Life at SEK</h2>
          </header>
          <div className="culture-gallery__grid">
            <figure className="culture-gallery__item culture-gallery__item--wide section-reveal">
              <img src="/sections/images/detail.jpg" alt="Architect reviewing plans on site" className="culture-gallery__img js-parallax" data-parallax="0.08" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--tall section-reveal">
              <img src="/sections/images/portfolio3.jpg" alt="Interior craftsmanship detail" className="culture-gallery__img js-parallax" data-parallax="0.14" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--half section-reveal">
              <img src="/sections/images/portfolio1.jpg" alt="Meridian Residence exterior" className="culture-gallery__img js-parallax" data-parallax="0.06" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--half section-reveal">
              <img src="/sections/images/portfolio2.jpg" alt="Arcadia Tower construction" className="culture-gallery__img js-parallax" data-parallax="0.1" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--third section-reveal">
              <img src="/sections/images/time.jpg" alt="Project timeline planning" className="culture-gallery__img" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--third section-reveal">
              <img src="/sections/images/cta.jpg" alt="SEK team on site" className="culture-gallery__img" />
            </figure>
            <figure className="culture-gallery__item culture-gallery__item--third section-reveal">
              <img src="/sections/images/portfolio4.jpg" alt="Sterling Pavilion facade" className="culture-gallery__img" />
            </figure>
          </div>
        </div>
      </section>

      <section className="culture-cta" data-section-reveal>
        <div className="inner-wrap">
          <div className="culture-cta__inner">
            <div className="culture-cta__visual section-reveal">
              <img src="/sections/images/cta.jpg" alt="SEK construction project" className="culture-cta__visual-img js-parallax" data-parallax="0.16" />
            </div>
            <div className="culture-cta__content section-reveal">
              <h2 className="culture-cta__title">Ready to build something extraordinary?</h2>
              <p className="culture-cta__desc">Whether you are an architect, developer, or private client, we would welcome the opportunity to discuss your next project.</p>
              <Link to="/contact" className="inner-btn inner-btn--light">
                <span className="inner-btn__text">Get in touch</span>
                <span className="inner-btn__icon" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1.5L7 5L3 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
