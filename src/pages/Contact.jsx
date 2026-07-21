import { useEffect } from 'react';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/contact.css';
import '../../css/footer.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact · SEK';
  }, []);

  return (
    <InnerPageLayout>
      <section className="contact-hero" aria-label="Contact">
        <img src="/sections/images/cta.jpg" alt="" className="contact-hero__img js-parallax" data-parallax="0.1" />
        <div className="contact-hero__overlay" aria-hidden="true"></div>
        <div className="contact-hero__content">
          <p className="contact-hero__label">Contact</p>
          <h1 className="contact-hero__title">Tell us the story<br />you want to inhabit</h1>
          <p className="contact-hero__desc">A residence, a gathering place, a room remade by light. Wherever your vision begins, we are here to listen with care.</p>
        </div>
      </section>

      <section className="contact-main" data-section-reveal>
        <div className="inner-wrap">
          <div className="contact-main__grid">
            <div className="contact-form-wrap section-reveal">
              <div className="contact-form__header">
                <h2 className="contact-form__title">Write to us</h2>
                <p className="contact-form__desc">Share a few lines of your dream. We will answer within two business days, with the same attention we give every work.</p>
              </div>
              <form className="contact-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-field__row">
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" name="first-name" className="contact-field__input" required autoComplete="given-name" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-field__label" htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" name="last-name" className="contact-field__input" required autoComplete="family-name" />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="contact-field__input" required autoComplete="email" />
                </div>
                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="project-type">What are you imagining</label>
                  <select id="project-type" name="project-type" className="contact-field__select">
                    <option value="residential">A home to cherish</option>
                    <option value="commercial">A place of gathering</option>
                    <option value="interiors">An interior transformed</option>
                    <option value="other">Something else entirely</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="message">Describe the feeling you seek</label>
                  <textarea id="message" name="message" className="contact-field__textarea" required></textarea>
                </div>
                <button type="submit" className="contact-submit">
                  <span className="contact-submit__text">Send with care</span>
                  <span className="contact-submit__icon" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 1.5L7 5L3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            <aside className="contact-aside">
              <div className="contact-aside__visual section-reveal">
                <img src="/sections/images/master.jpg" alt="SEK team on site" className="contact-aside__img js-parallax" data-parallax="0.12" />
              </div>
              <div className="contact-aside__panel section-reveal">
                <h2 className="contact-aside__title">Our ateliers</h2>
                <ul className="contact-offices">
                  <li className="contact-office">
                    <span className="contact-office__num">01</span>
                    <div className="contact-office__body">
                      <h3 className="contact-office__city">Los Angeles</h3>
                      <p className="contact-office__address">1200 Wilshire Boulevard, Suite 400<br />Los Angeles, CA 90017</p>
                      <a href="tel:+13105550142" className="contact-office__link">+1 310 555 0142</a>
                    </div>
                  </li>
                  <li className="contact-office">
                    <span className="contact-office__num">02</span>
                    <div className="contact-office__body">
                      <h3 className="contact-office__city">Miami</h3>
                      <p className="contact-office__address">1001 Brickell Bay Drive, Suite 2700<br />Miami, FL 33131</p>
                      <a href="tel:+13055550187" className="contact-office__link">+1 305 555 0187</a>
                    </div>
                  </li>
                  <li className="contact-office">
                    <span className="contact-office__num">03</span>
                    <div className="contact-office__body">
                      <h3 className="contact-office__city">New York</h3>
                      <p className="contact-office__address">450 Park Avenue, 28th Floor<br />New York, NY 10022</p>
                      <a href="tel:+12125550203" className="contact-office__link">+1 212 555 0203</a>
                    </div>
                  </li>
                </ul>
                <div className="contact-direct">
                  <p className="contact-direct__label">A first word</p>
                  <a href="mailto:hello@sek.build" className="contact-direct__email">hello@sek.build</a>
                  <a href="tel:+18005557351" className="contact-direct__phone">+1 800 555 SEK1</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
