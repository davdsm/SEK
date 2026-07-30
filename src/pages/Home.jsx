import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import usePreloader from '../hooks/usePreloader.js';
import useTextReveal from '../hooks/useTextReveal.js';
import useHomeScroll from '../hooks/useHomeScroll.js';
import useParallax from '../hooks/useParallax.js';
import useSectionReveal from '../hooks/useSectionReveal.js';
import Footer from '../components/Footer.jsx';
import PageEnter from '../components/PageEnter.jsx';
import { PROJECTS } from '../data/projects.js';
import { useSeo, organizationJsonLd, websiteJsonLd } from '../seo/useSeo.js';
import { SITE } from '../seo/site.js';
import '../../css/v2.css';
import '../../css/footer.css';
import '../../css/section-reveal.css';

const HOME_CARD_HEIGHTS = ['40vh', '58vh', '34vh', '72vh', '48vh', '80vh', '56vh', '38vh'];
const HOME_PROJECTS = PROJECTS.slice(0, 8);

export default function Home() {
  const pageRef = useRef(null);
  const scrollyRef = useRef(null);
  const roomRef = useRef(null);
  const oceanRef = useRef(null);
  const logoDarkRef = useRef(null);
  const phraseRef = useRef(null);
  const scrollHintRef = useRef(null);
  const whatwedoRef = useRef(null);
  const trackRef = useRef(null);
  const manifestoRef = useRef(null);
  const manifestoTextRef = useRef(null);
  const seaVideoRef = useRef(null);

  const { phase, removed } = usePreloader({ videoRef: seaVideoRef, imageRef: roomRef });
  const contentReady = phase === 'lift' || phase === 'done' || removed;

  useSeo({
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
    path: '/',
    image: SITE.ogImage,
    jsonLd: [organizationJsonLd(), websiteJsonLd()],
  });

  useEffect(() => {
    document.body.classList.add('is-home');
    return () => document.body.classList.remove('is-home', 'is-loading', 'bg-dark', 'bg-white');
  }, []);

  useTextReveal(pageRef);
  useParallax([removed]);
  useSectionReveal([removed]);
  useHomeScroll({
    scrollyRef,
    roomRef,
    oceanRef,
    logoDarkRef,
    phraseRef,
    scrollHintRef,
    whatwedoRef,
    trackRef,
    manifestoRef,
    manifestoTextRef,
    seaVideoRef,
  });

  const preloaderClass = [
    'preloader',
    phase === 'icon' || phase === 'exit' || phase === 'lift' ? 'is-icon-in' : '',
    phase === 'exit' || phase === 'lift' ? 'is-icon-out' : '',
    phase === 'lift' || phase === 'done' ? 'is-lifting' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={pageRef}>
      {!removed && (
        <div className={preloaderClass} role="status" aria-live="polite">
          <svg className="preloader-icon" viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <line className="pl-ground" x1="8" y1="128" x2="152" y2="128"/>
            <g className="pl-columns">
              <line x1="34" y1="122" x2="34" y2="70"/>
              <line x1="64" y1="122" x2="64" y2="70"/>
              <line x1="96" y1="122" x2="96" y2="70"/>
              <line x1="126" y1="122" x2="126" y2="70"/>
            </g>
            <path className="pl-arch" d="M28,70 L28,50 C28,28 52,12 80,12 C108,12 132,28 132,50 L132,70"/>
            <line className="pl-roof" x1="18" y1="70" x2="142" y2="70"/>
          </svg>
        </div>
      )}

      <PageEnter active={contentReady} className="page-enter--home">
        <div className="scrolly" ref={scrollyRef}>
          <div className="stage">
            <div className="base">
              <svg className="logo logo-gold" viewBox="0 0 1080 291.68" xmlns="http://www.w3.org/2000/svg" aria-label="SEK">
                <use href="#sek-paths" />
              </svg>
              <p className="phrase" data-reveal="manual" ref={phraseRef}>Where architecture becomes emotion</p>
            </div>

            <div className="ocean" ref={oceanRef}>
              <video className="sea" ref={seaVideoRef} src="/assets/manha-e-tarde.mp4" autoPlay muted loop playsInline />
            </div>

            <svg className="logo logo-dark" ref={logoDarkRef} viewBox="0 0 1080 291.68" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="#sek-paths" />
            </svg>

            <img
              className="room"
              ref={roomRef}
              src="/assets/room.png"
              alt="Luxury Mediterranean villa interior by SEK Construction overlooking the French Riviera"
            />

            <div className="scroll-hint" ref={scrollHintRef} aria-hidden="true">
              <span className="scroll-hint-label">scroll</span>
              <span className="scroll-hint-line"></span>
            </div>
          </div>
        </div>

        <section className="whatwedo" ref={whatwedoRef}>
          <div className="whatwedo-stage">
            <header className="whatwedo-head">
              <h2 data-reveal>Spaces<br />Remembered</h2>
              <p data-reveal>Each project is a quiet composition of light, material, and memory. Homes and landmarks shaped so they feel like art you can live inside.</p>
            </header>
            <div className="track" ref={trackRef}>
              {HOME_PROJECTS.map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="card"
                  style={{ '--h': HOME_CARD_HEIGHTS[i % HOME_CARD_HEIGHTS.length] }}
                  aria-label={`View project ${p.name}`}
                >
                  <img
                    src={p.img}
                    alt={`${p.name}, ${p.location}`}
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto" ref={manifestoRef}>
          <div className="manifesto-stage">
            <p className="manifesto-eyebrow">Our philosophy</p>
            <p className="manifesto-text" ref={manifestoTextRef}>We believe a building should move you. In the hush of a closing door, the warmth of stone under your hand, the way morning light writes itself across a wall.</p>
          </div>
        </section>

        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <g id="sek-paths">
              <path d="M90.83,127.28h182.97c22.35,0,40.41,6.82,54.17,20.46,13.64,13.64,20.46,31.82,20.46,54.55s-6.82,41.29-20.46,55.31c-13.77,13.89-31.82,20.84-54.17,20.84H26.81v-36.94h246.42c11.62,0,20.9-3.53,27.84-10.61,6.94-7.07,10.42-16.35,10.42-27.84s-3.48-21.02-10.42-28.22c-6.95-7.07-16.23-10.61-27.84-10.61H90.26c-22.35,0-40.35-6.82-53.98-20.46-13.76-13.64-20.64-31.82-20.64-54.55s6.88-41.42,20.64-55.31c13.64-13.76,31.63-20.65,53.98-20.65h246.99v36.93H90.83c-11.49,0-20.71,3.54-27.65,10.61-7.07,7.07-10.61,16.29-10.61,27.65s3.53,21.15,10.61,28.22c6.94,7.07,16.16,10.61,27.65,10.61Z"/>
              <path d="M398.24,50.19V13.25h314.43v36.93h-314.43ZM712.67,241.49v36.94h-314.42v-36.94s314.42,0,314.42,0ZM398.24,164.22v-36.94h248.51v36.94h-248.51Z"/>
              <polygon points="1064.37 13.25 1009.63 13.25 882.15 127.28 882.15 127.28 861.4 145.84 882.15 164.4 882.15 164.4 882.52 164.73 925.82 203.47 925.82 203.47 1009.63 278.43 1064.37 278.43 917.38 145.84 1064.37 13.25"/>
              <polygon points="808.89 127.28 808.89 117.42 808.89 13.25 771.95 13.25 771.95 278.43 808.89 278.43 808.89 204.28 808.89 164.4 808.89 127.28"/>
            </g>
          </defs>
        </svg>

        <Footer />
      </PageEnter>
    </div>
  );
}
