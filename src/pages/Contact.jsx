import { useEffect } from 'react';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/contact.css';
import '../../css/footer.css';

const ENQUIRIES = [
  { label: 'General Enquiries', email: 'hello@sek.build' },
  { label: 'New Projects', email: 'projects@sek.build' },
  { label: 'Press', email: 'press@sek.build' },
  { label: 'Work With Us', email: 'careers@sek.build' },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/sek.build/' },
  { label: 'Email', href: 'mailto:hello@sek.build' },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact · SEK';
    document.body.classList.add('is-contact');
    return () => document.body.classList.remove('is-contact', 'bg-white');
  }, []);

  return (
    <InnerPageLayout>
      <section className="contact" aria-label="Contact">
        <div className="contact__wrap">
          <div className="contact__top">
            <div className="contact__info">
              <div className="contact__col contact__col--studio">
                <p className="contact__studio-name">SEK</p>
                <p className="contact__studio-line">1200 Wilshire Boulevard, Suite 400</p>
                <p className="contact__studio-line">Los Angeles, CA 90017</p>
                <a href="tel:+13105550142" className="contact__studio-line contact__link">
                  +1 310 555 0142
                </a>
              </div>

              <div className="contact__col contact__col--enquiries">
                {ENQUIRIES.map((item) => (
                  <div key={item.label} className="contact__enquiry">
                    <p className="contact__label">{item.label}</p>
                    <a href={`mailto:${item.email}`} className="contact__link contact__link--underline">
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="contact__col contact__col--follow">
                <p className="contact__label">Follow</p>
                <ul className="contact__socials">
                  {SOCIALS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="contact__link contact__link--underline"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="contact__manifesto">
                Authorial, multi-referential, polytropic — these are the hallmarks for which SEK is recognized. Every home, sanctuary, and landmark is shaped so it feels like art you can live inside.
              </p>
            </div>

            <div className="contact__visual">
              <img
                src="/sections/images/detail.jpg"
                alt="Interior crafted by SEK"
                className="contact__img"
              />
            </div>
          </div>

          <div className="contact__bottom">
            <h1 className="contact__wordmark" aria-label="Contact">
              Contact
            </h1>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
