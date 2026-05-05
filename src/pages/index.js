import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function OutlineHeroButton({ href, children }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      className="button button--outline button--secondary button--lg"
      href={href}
      style={{
        color: hovered ? "hsl(222, 35%, 18%)" : "hsl(0, 0%, 95%)",
        borderColor: "hsl(0, 0%, 95%)",
        backgroundColor: hovered ? "hsl(0, 0%, 95%)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

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
          <OutlineHeroButton href="https://github.com/SwitchbackTech/compass">
            Read the Code
          </OutlineHeroButton>
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
