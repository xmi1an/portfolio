import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: "Python",
    Svg: require("@site/static/img/python.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/python"}
        >
          Python Practicals
        </Link>
      </>
    ),
  },
  {
    title: "PHP",
    Svg: require("@site/static/img/php.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/php"}
        >
          PHP Practicals
        </Link>
      </>
    ),
  },
  {
    title: "Java",
    Svg: require("@site/static/img/java.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/java"}
        >
          Java Practicals
        </Link>
      </>
    ),
  },
  {
    title: "ASP.NET",
    Svg: require("@site/static/img/dotnet.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/dotnet"}
        >
          ASP.NET Practicals
        </Link>
      </>
    ),
  },
  {
    title: "C Language",
    Svg: require("@site/static/img/c.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/c-language"}
        >
          C Practicals
        </Link>
      </>
    ),
  },
  {
    title: "C++",
    Svg: require("@site/static/img/cpp.svg").default,
    description: (
      <>
        <Link
          className={"button button--secondary button--lg"}
          to={"docs/category/cpp"}
        >
          C++ Practicals
        </Link>
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
