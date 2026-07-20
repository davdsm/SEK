import { useEffect, useRef } from 'react';
import usePreloader from '../hooks/usePreloader.js';
import useTextReveal from '../hooks/useTextReveal.js';
import useHomeScroll from '../hooks/useHomeScroll.js';
import '../../css/v2.css';

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

  const { hidden, removed } = usePreloader({ videoRef: seaVideoRef, imageRef: roomRef });

  useEffect(() => {
    document.title = 'SEK · Construction & Development';
    document.body.classList.add('is-home');
    return () => document.body.classList.remove('is-home', 'is-loading', 'bg-gold');
  }, []);

  useTextReveal(pageRef);
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

  return (
    <div ref={pageRef}>
      {/* ══ Preloader ═════════════════════════════════════════ */}
      {!removed && (
        <div className={`preloader${hidden ? ' is-hidden' : ''}`} role="status" aria-live="polite">
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

      {/* ══ Scroll intro ══════════════════════════════════════ */}
      <div className="scrolly" ref={scrollyRef}>
        <div className="stage">
          {/* Layer 1 · logo base — transparent, lets the beige body show through */}
          <div className="base">
            <svg className="logo logo-gold" viewBox="0 0 1080 291.68" xmlns="http://www.w3.org/2000/svg" aria-label="SEK">
              <use href="#sek-paths" />
            </svg>
            <p className="phrase" data-reveal="manual" ref={phraseRef}>L&rsquo;Art de construire et de r&eacute;nover</p>
          </div>

          {/* Layer 2 · ocean video (slides up at the end) */}
          <div className="ocean" ref={oceanRef}>
            <video className="sea" ref={seaVideoRef} src="/assets/manha-e-tarde.mp4" autoPlay muted loop playsInline />
          </div>

          {/* Layer 3 · dark logo that rises from the ocean */}
          <svg className="logo logo-dark" ref={logoDarkRef} viewBox="0 0 1080 291.68" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="#sek-paths" />
          </svg>

          {/* Layer 4 · the room (zooms into the arch) */}
          <img className="room" ref={roomRef} src="/assets/room.png" alt="" />

          {/* Scroll hint */}
          <div className="scroll-hint" ref={scrollHintRef} aria-hidden="true">
            <span className="scroll-hint-label">scroll</span>
            <span className="scroll-hint-line"></span>
          </div>
        </div>
      </div>

      {/* ══ O que fazemos · horizontal carousel ═══════════════ */}
      <section className="whatwedo" ref={whatwedoRef}>
        <div className="whatwedo-stage">
          <header className="whatwedo-head">
            <h2 data-reveal>Selected<br />Works</h2>
            <p data-reveal>A curated portfolio of residences, estates and landmark developments, with enduring architecture and refined interiors built to last and built to inspire.</p>
          </header>
          <div className="track" ref={trackRef}>
            <div className="card" style={{ '--h': '40vh' }}><img src="/assets/projects/01-facade-windows.jpg" alt="Residential façade detail" loading="lazy" /></div>
            <div className="card" style={{ '--h': '58vh' }}><img src="/assets/projects/02-site-cranes.jpg" alt="Tower cranes on an active site" loading="lazy" /></div>
            <div className="card" style={{ '--h': '34vh' }}><img src="/assets/projects/03-curved-tower.jpg" alt="Sculptural curved tower facade" loading="lazy" /></div>
            <div className="card" style={{ '--h': '72vh' }}><img src="/assets/projects/04-glass-cranes.jpg" alt="Glass tower rising under crane" loading="lazy" /></div>
            <div className="card" style={{ '--h': '48vh' }}><img src="/assets/projects/05-steel-frame.jpg" alt="Steel structural frame" loading="lazy" /></div>
            <div className="card" style={{ '--h': '80vh' }}><img src="/assets/projects/06-blueprint-detail.jpg" alt="Architect reviewing a blueprint" loading="lazy" /></div>
            <div className="card" style={{ '--h': '56vh' }}><img src="/assets/projects/07-rebar-crew.jpg" alt="Crew working on rebar at height" loading="lazy" /></div>
            <div className="card" style={{ '--h': '38vh' }}><img src="/assets/projects/08-glass-spire.jpg" alt="Glass spire facade" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ══ Manifesto · scroll-fill message ═══════════════════ */}
      <section className="manifesto" ref={manifestoRef}>
        <div className="manifesto-stage">
          <p className="manifesto-eyebrow">Our philosophy</p>
          <p className="manifesto-text" ref={manifestoTextRef}>Great construction is invisible. You feel it in the silence of a door, the warmth of stone, the way light moves through a room.</p>
        </div>
      </section>

      {/* shared SEK logo paths */}
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
    </div>
  );
}
