import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import ConstructionSvg from '@site/static/img/undraw_under_construction.svg';

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, 'text--center padding--lg')}>
      <div className="container">
        {/* <ConstructionSvg className={styles.featureSvg} role="img" /> */}
        <Heading as="h2" style={{ marginTop: '1rem' }}>
          🚧 This page is under construction
        </Heading>
        <p>
          We're building exciting things! Check back soon for awesome features, project highlights,
          and robot interactions from the RAIL Lab.
        </p>
      </div>
    </section>
  );
}