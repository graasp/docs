import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import HomepageLinks from "../components/HomepageLinks";

import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  return (
    <header
      className={clsx(
        "hero bg-gradient-to-br from-[#C658D033] via-[#FFFFFF33] to-[#56B0F833]",
        styles.heroBanner
      )}
    >
      <div className="container flex flex-col items-center">
        <h1 className="hero__title font-extrabold w-max text-transparent bg-clip-text bg-gradient-to-br from-[#56B0F8] from-10% via-[#5050D2] to-90% to-[#C658D0]">
          {translate({
            id: "pages.home.title",
            description: "The homepage welcome message",
          })}
        </h1>
        <p className="hero__subtitle">
          <Translate
            id="pages.home.description"
            values={{
              docs: (
                <span className={styles.emphText}>
                  {translate({ id: "pages.home.description.docs" })}
                </span>
              ),
              news: (
                <span className={styles.emphText}>
                  {translate({ id: "pages.home.description.news" })}
                </span>
              ),
              experience: (
                <span className={styles.emphText}>
                  {translate({ id: "pages.home.description.experience" })}
                </span>
              ),
            }}
          >
            {"Browse {docs}, Read {news}, Enrich your {experience}"}
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        message: "pages.index.title",
        description: "The title of the home page",
      })}
      description={translate({
        message: "pages.index.description",
        description: "Content of the description of the home page",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
