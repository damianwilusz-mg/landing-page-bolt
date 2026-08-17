import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  FlaskConical,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Menu,
  Moon,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

type Language = 'en' | 'pl';
type Theme = 'light' | 'dark';

type Copy = {
  nav: { about: string; expertise: string; experience: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    primary: string;
    secondary: string;
    availability: string;
    location: string;
  };
  proof: { label: string; value: string }[];
  about: { eyebrow: string; title: string; body: string; note: string };
  expertise: { eyebrow: string; title: string; cards: { title: string; text: string; tags: string[] }[] };
  experience: { eyebrow: string; title: string; roles: { company: string; role: string; period: string; description: string; points: string[] }[] };
  process: { eyebrow: string; title: string; steps: { number: string; title: string; text: string }[] };
  contact: { eyebrow: string; title: string; body: string; button: string };
  footer: string;
};

const content: Record<Language, Copy> = {
  en: {
    nav: { about: 'About', expertise: 'Expertise', experience: 'Experience', contact: 'Let’s talk' },
    hero: {
      eyebrow: 'Software quality, thoughtfully engineered',
      title: 'I make software feel',
      titleAccent: 'reliably effortless.',
      description: 'QA engineer focused on finding what others miss, building confidence into every release, and making digital products better for the people who use them.',
      primary: 'Explore my work',
      secondary: 'Get in touch',
      availability: 'Available for new opportunities',
      location: 'Rzeszów, Poland · Remote friendly',
    },
    proof: [
      { value: '3+', label: 'years in QA' },
      { value: '16', label: 'automation & API skills' },
      { value: '99%', label: 'curiosity, always' },
    ],
    about: {
      eyebrow: 'A quality mindset',
      title: 'Beyond finding bugs. Building trust.',
      body: 'I bring a calm, analytical approach to complex products. From the first acceptance criteria to the final regression check, I connect the details so teams can ship with clarity.',
      note: 'Good testing is invisible when it works. The confidence it creates is not.',
    },
    expertise: {
      eyebrow: 'What I do best',
      title: 'A practical toolkit for better releases.',
      cards: [
        { title: 'Manual testing', text: 'Deep exploratory and functional testing that keeps real user scenarios at the centre.', tags: ['Exploratory', 'Regression', 'UX review'] },
        { title: 'Automation', text: 'Reliable UI and API checks that give teams fast feedback without the noise.', tags: ['Cypress', 'Playwright', 'Bash'] },
        { title: 'API & data', text: 'Confident validation across endpoints, integrations and the data behind the interface.', tags: ['Postman', 'MySQL', 'Docker'] },
      ],
    },
    experience: {
      eyebrow: 'Selected experience',
      title: 'Quality across the whole product journey.',
      roles: [
        { company: 'PanelAlpha', role: 'Software Tester', period: '2023 — now', description: 'Working across manual testing, automation and customer issue analysis to keep a fast-moving product stable.', points: ['Cypress & Playwright automation for UI flows and APIs', 'Root-cause analysis of customer-reported issues', 'QA ownership in an Agile / Scrum environment'] },
        { company: 'ModulesGarden', role: 'Manual Software Tester', period: '2022 — 2023', description: 'Improved the reliability of hosting platforms through focused functional testing and close collaboration with developers.', points: ['Functional testing across WHMCS, cPanel and Plesk', 'Clear bug reports and release feedback', 'Prioritising issues with developers and project managers'] },
      ],
    },
    process: {
      eyebrow: 'How I work',
      title: 'Curious first. Precise always.',
      steps: [
        { number: '01', title: 'Understand', text: 'I ask the right questions and map the experience before I touch a test case.' },
        { number: '02', title: 'Challenge', text: 'I explore happy paths, edge cases and the moments real users might struggle with.' },
        { number: '03', title: 'Communicate', text: 'I turn findings into clear, actionable context that helps the whole team move forward.' },
      ],
    },
    contact: { eyebrow: 'Have a product to improve?', title: 'Let’s make it feel solid.', body: 'If you value thoughtful testing, clear communication and software your users can trust, I would love to hear from you.', button: 'Start a conversation' },
    footer: 'QA engineer · software quality advocate',
  },
  pl: {
    nav: { about: 'O mnie', expertise: 'Specjalizacje', experience: 'Doświadczenie', contact: 'Kontakt' },
    hero: {
      eyebrow: 'Jakość oprogramowania, przemyślana od podstaw',
      title: 'Sprawiam, że software działa',
      titleAccent: 'po prostu pewnie.',
      description: 'Jestem testerem QA. Znajduję to, co łatwo przeoczyć, buduję pewność przed każdym wdrożeniem i pomagam tworzyć produkty lepsze dla ich użytkowników.',
      primary: 'Poznaj moje doświadczenie',
      secondary: 'Napisz do mnie',
      availability: 'Otwarty na nowe możliwości',
      location: 'Rzeszów, Polska · Praca zdalna',
    },
    proof: [
      { value: '3+', label: 'lat w QA' },
      { value: '16', label: 'umiejętności automatyzacji i API' },
      { value: '99%', label: 'ciekawości, zawsze' },
    ],
    about: {
      eyebrow: 'Podejście do jakości',
      title: 'Nie tylko znajduję błędy. Buduję zaufanie.',
      body: 'Do złożonych produktów podchodzę spokojnie i analitycznie. Od pierwszych kryteriów akceptacji po końcową regresję łączę szczegóły, aby zespół mógł wdrażać pewnie.',
      note: 'Dobre testy są niewidoczne, gdy działają. Pewność, którą dają — już nie.',
    },
    expertise: {
      eyebrow: 'W czym jestem najlepszy',
      title: 'Praktyczny zestaw narzędzi do lepszych wdrożeń.',
      cards: [
        { title: 'Testy manualne', text: 'Dokładne testy eksploracyjne i funkcjonalne, zawsze z perspektywą prawdziwego użytkownika.', tags: ['Eksploracyjne', 'Regresja', 'UX review'] },
        { title: 'Automatyzacja', text: 'Stabilne testy UI i API, które szybko dają zespołowi wartościowy feedback.', tags: ['Cypress', 'Playwright', 'Bash'] },
        { title: 'API i dane', text: 'Pewna walidacja endpointów, integracji oraz danych stojących za interfejsem.', tags: ['Postman', 'MySQL', 'Docker'] },
      ],
    },
    experience: {
      eyebrow: 'Wybrane doświadczenie',
      title: 'Jakość na całej drodze produktu.',
      roles: [
        { company: 'PanelAlpha', role: 'Tester oprogramowania', period: '2023 — obecnie', description: 'Łączę testy manualne, automatyzację i analizę zgłoszeń klientów, dbając o stabilność szybko rozwijanego produktu.', points: ['Automatyzacja UI i API w Cypress oraz Playwright', 'Analiza przyczyn problemów zgłaszanych przez klientów', 'Odpowiedzialność za QA w środowisku Agile / Scrum'] },
        { company: 'ModulesGarden', role: 'Manual Software Tester', period: '2022 — 2023', description: 'Podnosiłem niezawodność platform hostingowych poprzez testy funkcjonalne i bliską współpracę z deweloperami.', points: ['Testy funkcjonalne WHMCS, cPanel i Plesk', 'Czytelne zgłoszenia błędów i feedback przed wydaniem', 'Ustalanie priorytetów z deweloperami i PM-ami'] },
      ],
    },
    process: {
      eyebrow: 'Jak pracuję',
      title: 'Najpierw ciekawość. Zawsze precyzja.',
      steps: [
        { number: '01', title: 'Rozumiem', text: 'Zadaję właściwe pytania i poznaję doświadczenie użytkownika, zanim powstanie pierwszy test.' },
        { number: '02', title: 'Sprawdzam', text: 'Badam ścieżki główne, skrajne przypadki i momenty, w których użytkownik może się zatrzymać.' },
        { number: '03', title: 'Komunikuję', text: 'Zamieniam znaleziska w jasny kontekst, który pomaga całemu zespołowi działać.' },
      ],
    },
    contact: { eyebrow: 'Masz produkt do poprawy?', title: 'Zadbajmy o jego pewność.', body: 'Jeśli cenisz uważne testy, jasną komunikację i software, któremu użytkownicy mogą zaufać — chętnie Cię poznam.', button: 'Rozpocznij rozmowę' },
    footer: 'tester QA · ambasador jakości oprogramowania',
  },
};

const expertiseIcons = [FlaskConical, Code2, Database];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const copy = content[language];

  const toggleLanguage = (): void => setLanguage((current: Language) => current === 'en' ? 'pl' : 'en');
  const toggleTheme = (): void => setTheme((current: Theme) => current === 'light' ? 'dark' : 'light');

  return (
    <div className={`app ${theme}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Home"><span className="brand-mark"><ShieldCheck size={19} /></span><span>QA<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{copy.nav.about}</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>{copy.nav.expertise}</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>{copy.nav.experience}</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{copy.nav.contact}<ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={toggleLanguage} aria-label="Change language"><Globe2 size={17} /><span>{language.toUpperCase()}</span></button>
          <button className="icon-button" onClick={toggleTheme} aria-label="Change theme">{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen((open: boolean) => !open)} aria-label="Open menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{copy.hero.eyebrow}</div>
            <h1>{copy.hero.title}<br /><em>{copy.hero.titleAccent}</em></h1>
            <p className="hero-description">{copy.hero.description}</p>
            <div className="hero-actions"><a className="button button-dark" href="#expertise">{copy.hero.primary}<ArrowUpRight size={17} /></a><a className="text-link" href="#contact">{copy.hero.secondary}<ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span><span className="status-dot" />{copy.hero.availability}</span><span className="meta-separator" />{copy.hero.location}</div>
          </div>
          <div className="hero-visual" aria-label="Quality assurance dashboard illustration">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="dashboard-card main-card"><div className="card-topline"><span className="mini-label">RELEASE HEALTH</span><span className="live-pill"><span />LIVE</span></div><div className="score-row"><strong>98.4</strong><span>/ 100</span><div className="score-ring"><svg viewBox="0 0 42 42"><circle className="ring-bg" cx="21" cy="21" r="15.5" /><circle className="ring-progress" cx="21" cy="21" r="15.5" /></svg><Check size={14} /></div></div><div className="chart"><span className="chart-label">QUALITY TREND</span><svg viewBox="0 0 300 82" preserveAspectRatio="none"><path className="chart-area" d="M0 68 C20 67 26 49 49 56 S75 46 93 49 S114 26 136 37 S160 48 177 30 S204 36 219 22 S244 30 262 13 S283 22 300 5 V82 H0Z" /><path className="chart-line" d="M0 68 C20 67 26 49 49 56 S75 46 93 49 S114 26 136 37 S160 48 177 30 S204 36 219 22 S244 30 262 13 S283 22 300 5" /></svg></div><div className="check-list"><span><Check size={13} /> API checks</span><span><Check size={13} /> UI regression</span><span><Check size={13} /> Data integrity</span></div></div>
            <div className="float-card bug-card"><span className="float-icon orange"><Terminal size={15} /></span><div><strong>0 critical bugs</strong><small>Last release</small></div></div>
            <div className="float-card test-card"><span className="float-icon green"><Play size={14} fill="currentColor" /></span><div><strong>1,284 tests</strong><small>Executed this month</small></div></div>
            <div className="visual-caption"><span>01</span><span>quality is a journey</span></div>
          </div>
        </section>

        <section className="proof-strip"><div className="section-shell proof-inner">{copy.proof.map((item) => <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}<div className="proof-message"><Sparkles size={17} /> <span>Making the complex<br />feel simple.</span></div></div></section>

        <section className="about section-shell two-column" id="about"><div className="section-marker">01 <span>/</span> {copy.about.eyebrow}</div><div className="about-content"><h2>{copy.about.title}</h2><p className="large-copy">{copy.about.body}</p><p className="quote">“{copy.about.note}”</p></div></section>

        <section className="expertise section-shell" id="expertise"><div className="section-heading"><div className="section-marker">02 <span>/</span> {copy.expertise.eyebrow}</div><h2>{copy.expertise.title}</h2></div><div className="expertise-grid">{copy.expertise.cards.map((card, index) => { const Icon = expertiseIcons[index]; return <article className="expertise-card" key={card.title}><div className="card-number">0{index + 1}</div><div className="expertise-icon"><Icon size={22} /></div><h3>{card.title}</h3><p>{card.text}</p><div className="tag-list">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>; })}</div></section>

        <section className="experience section-shell" id="experience"><div className="section-heading experience-heading"><div className="section-marker">03 <span>/</span> {copy.experience.eyebrow}</div><h2>{copy.experience.title}</h2></div><div className="timeline">{copy.experience.roles.map((role, index) => <article className="timeline-item" key={role.company}><div className="timeline-index">0{index + 1}</div><div className="timeline-main"><div className="role-header"><div><h3>{role.company}</h3><p>{role.role}</p></div><span>{role.period}</span></div><p className="role-description">{role.description}</p><ul>{role.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul></div></article>)}</div></section>

        <section className="process section-shell"><div className="section-heading"><div className="section-marker">04 <span>/</span> {copy.process.eyebrow}</div><h2>{copy.process.title}</h2></div><div className="process-grid">{copy.process.steps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

        <section className="contact section-shell" id="contact"><div className="contact-glow" /><div className="section-marker">05 <span>/</span> {copy.contact.eyebrow}</div><div className="contact-content"><h2>{copy.contact.title}</h2><p>{copy.contact.body}</p><a className="button button-light" href="mailto:hello@qa-portfolio.com">{copy.contact.button}<ArrowUpRight size={17} /></a></div><div className="contact-decoration"><Layers3 size={68} strokeWidth={0.7} /></div></section>
      </main>

      <footer className="site-footer section-shell"><div className="footer-brand"><span className="brand-mark"><ShieldCheck size={16} /></span><span>QA<span className="brand-dot">.</span></span><small>{copy.footer}</small></div><div className="footer-links"><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="https://github.com" aria-label="GitHub"><Github size={18} /></a><a href="mailto:hello@qa-portfolio.com" aria-label="Email"><ArrowUpRight size={18} /></a></div><span className="footer-year">© 2024</span></footer>
    </div>
  );
}

export default App;
