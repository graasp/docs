import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import HomepageLinks from "../components/HomepageLinks";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero bg-gradient-to-br from-[#C658D033] via-[#FFFFFF33] to-[#56B0F833]",
        styles.heroBanner
      )}
    >
      <div className="container flex flex-col items-center">
        <h1 className="hero__title font-extrabold w-max text-transparent bg-clip-text bg-gradient-to-br from-[#56B0F8] from-10% via-[#5050D2] to-90% to-[#C658D0]">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">
          Browse <span className={styles.emphText}>documentation</span>, Read{" "}
          <span className={styles.emphText}>news</span>, Enrich your Graasp{" "}
          <span className={styles.emphText}>experience</span>
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Home"}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
