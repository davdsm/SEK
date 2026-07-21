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
    document.title = 'Vision · SEK';
  }, []);

  return (
    <InnerPageLayout>
      <section className="culture-hero" aria-label="Culture">
        <img src="/sections/images/master.jpg" alt="Craftsmen on a SEK construction site" className="culture-hero__img js-parallax" data-parallax="0.12" />
        <div className="culture-hero__overlay" aria-hidden="true"></div>
        <div className="culture-hero__content">
          <h1 className="culture-hero__title">Built with feeling.<br />Held by craft.</h1>
        </div>
      </section>

      <section className="culture-story" data-section-reveal>
        <div className="inner-wrap">
          <div className="culture-story__grid">
            <div>
              <p className="culture-story__label section-reveal">Our Story</p>
              <h2 className="culture-story__heading section-reveal">A lifetime devoted to the poetry of place</h2>
              <p className="culture-story__text section-reveal">SEK began in 1989 with a quiet belief: that a home is not only structure, but a canvas for the life that will unfold inside it. Every joint, every surface, every breath of light belongs to a larger work of art.</p>
              <p className="culture-story__text section-reveal">From a small atelier in Los Angeles, we have grown into a practice that shapes private sanctuaries, cultural landmarks, and spaces meant to be felt as deeply as they are seen.</p>
            </div>
            <div className="culture-timeline">
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">1989</span>
                <div>
                  <h3 className="culture-timeline__title">A first brushstroke</h3>
                  <p className="culture-timeline__desc">Marcus Ellington founds SEK, drawn to the intimacy of residential craft and the architects who dream in light and form.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">2004</span>
                <div>
                  <h3 className="culture-timeline__title">The canvas widens</h3>
                  <p className="culture-timeline__desc">A Miami atelier opens. Towers, hospitality, and gathering places join the residences already close to our hearts.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">2016</span>
                <div>
                  <h3 className="culture-timeline__title">Stories across oceans</h3>
                  <p className="culture-timeline__desc">Hand in hand with leading studios, we carry that same tenderness for detail to Europe, the Middle East, and Asia Pacific.</p>
                </div>
              </article>
              <article className="culture-timeline__item section-reveal">
                <span className="culture-timeline__year">Today</span>
                <div>
                  <h3 className="culture-timeline__title">250+ works of living art</h3>
                  <p className="culture-timeline__desc">One hundred eighty hands, one shared devotion: to honor the architect&rsquo;s vision and the quiet life that will breathe within these walls.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="culture-values" data-section-reveal>
        <div className="inner-wrap">
          <header className="culture-values__header">
            <h2 className="culture-values__title section-reveal">What moves us</h2>
            <p className="culture-values__desc section-reveal">Three beliefs we return to, from the first sketch on site to the last soft closing of a door.</p>
          </header>
          <div className="culture-values__grid">
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Precision</h3>
              <p className="culture-values__text">Like a brush held still before the canvas, every millimeter matters. Beauty lives in the discipline of the hand.</p>
            </article>
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L18 4M7 4h11v11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Craft</h3>
              <p className="culture-values__text">Stone, timber, bronze, and glass each speak a different language. We work with artisans who have spent a lifetime learning how to listen.</p>
            </article>
            <article className="culture-values__card section-reveal">
              <span className="culture-values__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4L13.5 9.5H19.5L14.5 13L16.5 19L11 15.5L5.5 19L7.5 13L2.5 9.5H8.5L11 4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="culture-values__name">Integrity</h3>
              <p className="culture-values__text">Trust is part of the artwork. Honest timelines, open dialogue, and a promise to stand beside every surface long after the keys are yours.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="culture-gallery" data-section-reveal>
        <div className="inner-wrap">
          <header className="culture-gallery__header">
            <h2 className="culture-gallery__title section-reveal">Moments from the atelier</h2>
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
              <h2 className="culture-cta__title">Shall we begin a new composition?</h2>
              <p className="culture-cta__desc">Whether you are an architect, a dreamer of homes, or a guardian of culture, we would love to sit with your vision and help it take form.</p>
              <Link to="/contact" className="inner-btn inner-btn--light">
                <span className="inner-btn__text">Begin a conversation</span>
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
