import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/"
          >
            Read the Docs
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/SwitchbackTech/compass"
            style={{ color: "hsl(0, 0%, 95%)", borderColor: "hsl(0, 0%, 95%)" }}
          >
            Read the Code
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
      title={`${siteConfig.title}`}
      description="Docs for Compass Calendar"
    >
      <HomepageHeader />
    </Layout>
  );
}
