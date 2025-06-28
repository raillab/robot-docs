// src/pages/index.js (RAIL Lab homepage using default Docusaurus template)

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to the RAIL Lab Robot Docs
        </Heading>
        <p className="hero__subtitle">
          Robotics, Autonomous Intelligence & Learning — from simulation to the real world 🤖
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome">
            Start Exploring the Robots 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`RAIL Lab | Robot Documentation`}
      description="Explore documentation for all robots in the RAIL Lab – from quadrupeds to humanoids and submersibles">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <div className="container padding--lg">
          <h2>About the RAIL Lab</h2>
          <p>
            The RAIL (Robotics, Autonomous Intelligence and Learning) Lab is a South African AI research group dedicated to building smart, collaborative robots. This site documents our robots, platforms, tools, and projects—helping current and future members contribute faster.
          </p>
        </div> */}
      </main>
    </Layout>
  );
}