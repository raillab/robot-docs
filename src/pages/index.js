// ===============================
// File: src/pages/index.js
// ===============================
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

// --- Small helper components ---
function Pill({ children }) {
  return <span className={styles.pill}>{children}</span>;
}

function CTAButtons() {
  return (
    <div className={styles.ctaRow}>
      <Link className={clsx('button button--secondary button--lg', styles.cta)} to="/docs/welcome">
        Start Exploring 🚀
      </Link>
      <Link className={clsx('button button--primary button--lg', styles.cta)} to="/docs/category/updating-this-site">
        Contribute 🛠️
      </Link>
      <Link className={clsx('button button--lg', styles.cta)} to="https://www.raillab.org/join/">
        Join the Lab 🥽
      </Link>
    </div>
  );
}

const robots = [
  { name: 'Pepper', emoji: '🤖', to: '/docs/category/pepper' },
  { name: 'Husky', emoji: '🚕', to: '/docs/category/husky' },
  { name: 'Unitree A1', emoji: '🐕', to: '/docs/category/a1-dog' },
  { name: 'BlueROV2', emoji: '🌊', to: '/docs/category/bluerov2' },
  { name: 'Drones', emoji: '🛩️', to: '/docs/category/drones' },
  { name: 'Yumi', emoji: '🦾', to: '/docs/category/yumi' },
];

function RobotCard({ name, emoji, to }) {
  return (
    <Link className={styles.robotCard} to={to}>
      <div className={styles.robotEmoji} aria-hidden>{emoji}</div>
      <div className={styles.robotName}>{name}</div>
    </Link>
  );
}

function RobotsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Meet the Fleet</h2>
        <p className={styles.sectionSubtitle}>
          Humanoids, quadrupeds, ground vehicles and underwater robots. Pick one and dive in.
        </p>
        <div className={styles.robotsGrid}>
          {robots.map((r) => (
            <RobotCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreeSteps() {
  return (
    <section className={clsx(styles.section, styles.altSection)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Zero to Robot in 3 Steps</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Get Set</h3>
            <p>Install the right SDKs, clone the template repos and run the quickstart notebooks.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Connect</h3>
            <p>Power on, connect over Wi-Fi/ethernet or tether, and run the health checks.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Explore</h3>
            <p>Try demo scripts, simulation scenarios and example missions before custom code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { label: 'Robots', value: '8+' },
    { label: 'Tutorials', value: '5+' },
    { label: 'Demos', value: '10+' },
    { label: 'Contributors', value: '20+' },
  ];
  return (
    <section className={styles.statsWrap}>
      <div className="container">
        <ul className={styles.stats}>
          {items.map((it) => (
            <li key={it.label}>
              <div className={styles.statValue}>{it.value}</div>
              <div className={styles.statLabel}>{it.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className={styles.heroInner}>
        <div className="container">
          <div className={styles.pillsRow}>
            <Pill>RAIL Lab</Pill>
            <Pill>Robotics, Autonomous Intelligence & Learning</Pill>
            <Pill>Johannesburg • South Africa</Pill>
          </div>
          <h1 className={styles.heroTitle}>RAIL Lab Robotics 🚀</h1>
          <p className={styles.heroSubtitle}>
            From simulation to real-world deployments — humanoids, quadrupeds, UGVs and ROVs.
          </p>
          <CTAButtons />
          <div className={styles.heroMarquee}>
            <span>Pepper • Husky • Unitree A1 • BlueROV2 • Drones • Sim & Bench •</span>
            <span aria-hidden> Pepper • Husky • Unitree A1 • BlueROV2 • Drones • Sim & Bench •</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Callouts() {
  const items = [
    {
      title: 'Safety First',
      text: 'Start every session with checklists, emergency stops, and clear roles.',
      // to: '/docs/category/safety',
      to: '#/',
      emoji: '🧯',
    },
    {
      title: 'Ready-to-Run Demos',
      text: 'Spin up navigation, manipulation and teleop demos in minutes.',
      to: '/docs/pepper/pepper-demos',
      emoji: '🎛️',
    },
    {
      title: 'Learn by Doing',
      text: 'Hands-on tutorials for perception, control and robot learning.',
      to: '/docs/pepper/pepper-projects',
      emoji: '📚',
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.callouts}>
          {items.map((c) => (
            <Link key={c.title} to={c.to} className={styles.callout}>
              <div className={styles.calloutEmoji}>{c.emoji}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className={styles.calloutLink}>Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className={clsx(styles.section, styles.footerCta)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Build with us</h2>
        <p className={styles.sectionSubtitle}>
          Found a bug? Wrote a guide? Have a demo to add? We love contributions.
        </p>
        <div className={styles.ctaRow}>
          <Link className="button button--secondary button--lg" to="https://github.com/raillab/robot-docs">
            Docs Github
          </Link>
          <Link className="button button--outline button--lg" to="https://www.raillab.org/contact/">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`RAIL Lab | Robot Documentation`}
      description="Explore the RAIL Lab robots — humanoids, quadrupeds, ground vehicles and submersibles">
      <Head>
        {/* Social/OG tweaks */}
        <meta property="og:title" content="RAIL Lab | Robot Docs" />
        <meta property="og:description" content="From simulation to the real world — learn, test, deploy." />
      </Head>
      <Hero />
      <main>
        <Stats />
        <RobotsGrid />
        <ThreeSteps />
        <Callouts />
        <FooterCTA />
      </main>
    </Layout>
  );
}