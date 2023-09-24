import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend: React",
    Svg: require("@site/static/img/react.svg").default,
    description: <>+ Redux, styled-components, TypeScript, webpack 💅🏻 </>,
  },
  {
    title: "Backend: Node",
    Svg: require("@site/static/img/nodejs.svg").default,
    description: <> + Express, TypeScript</>,
  },
  {
    title: "And more",
    Svg: require("@site/static/img/mongo.svg").default,
    description: (
      <>
        MongoDB, Google Calendar API, Google OAuth2 API, yarn workspaces, Jest,
        React Testing Libray, Custom CLI
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
