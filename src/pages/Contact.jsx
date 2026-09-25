import { useEffect } from 'react';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import { useSeo, breadcrumbJsonLd } from '../seo/useSeo.js';
import { SITE } from '../seo/site.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/contact.css';
import '../../css/footer.css';

export default function Contact() {
  const { t } = useLocale();

  const socials = [
    { label: t('footer.instagram'), href: 'https://www.instagram.com/sek.build/' },
    { label: t('contact.email'), href: `mailto:${SITE.email}` },
  ];

  useSeo({
    title: t('contact.seoTitle'),
    description: t('contact.seoDescription'),
    path: '/contact',
    jsonLd: [
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: t('contact.title'), path: '/contact' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact SEK Construction',
        url: `${SITE.url}/contact`,
        mainEntity: {
          '@type': 'HomeAndConstructionBusiness',
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.locality,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.country,
          },
        },
      },
    ],
  });

  useEffect(() => {
    document.body.classList.add('is-contact');
    return () => document.body.classList.remove('is-contact', 'bg-white');
  }, []);

  return (
    <InnerPageLayout>
      <section className="contact" aria-label={t('contact.aria')}>
        <div className="contact__wrap">
          <div className="contact__top">
            <div className="contact__info">
              <div className="contact__col contact__col--studio">
                <p className="contact__studio-name">SEK</p>
                <p className="contact__studio-line">585 Route de la Revère</p>
                <p className="contact__studio-line">06360 Èze</p>
                <a href="tel:+33629761142" className="contact__studio-line contact__link">
                  06 29 76 11 42
                </a>
              </div>

              <div className="contact__col contact__col--enquiries">
                <div className="contact__enquiry">
                  <p className="contact__label">{t('contact.email')}</p>
                  <a
                    href="mailto:contact@sek-construction.com"
                    className="contact__link contact__link--underline"
                  >
                    contact@sek-construction.com
                  </a>
                </div>
                <div className="contact__enquiry">
                  <p className="contact__label">{t('contact.telephone')}</p>
                  <a href="tel:+33629761142" className="contact__link contact__link--underline">
                    06 29 76 11 42
                  </a>
                </div>
              </div>

              <div className="contact__col contact__col--follow">
                <p className="contact__label">{t('contact.follow')}</p>
                <ul className="contact__socials">
                  {socials.map((item) => (
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

              <p className="contact__manifesto">{t('contact.manifesto')}</p>
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
            <h1 className="contact__wordmark" aria-label={t('contact.title')}>
              {t('contact.title')}
            </h1>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
