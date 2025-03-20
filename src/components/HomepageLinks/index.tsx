import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import React from "react";

type HomepageLinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  to: string;
};

const HomePageLinkList = [
  {
    key: "news",
    title: translate({
      id: "pages.home.latestNews",
      message: "Latest News",
      description: "Title for the latest news section",
    }),
    description: translate({
      id: "pages.home.latestNews.description",
      message:
        "Latest News from the development team. Fresh out the oven, see what is new and all the goodies we have in store for you.",
      description: "Description for the latest news section",
    }),
    Svg: require("@site/static/img/home-news-feed.svg").default,
    to: "blog",
  },
  {
    key: "users",
    title: translate({
      id: "pages.home.userResources",
      message: "User Resources",
      description: "Title for the user resources section",
    }),
    description: translate({
      id: "pages.home.userResources.description",
      message:
        "End-user centered documentation, describing features and proposing learning scenarios.",
      description: "Description for the user resources section",
    }),
    Svg: require("@site/static/img/home-users.svg").default,
    to: "user/intro",
  },
  {
    key: "docs",
    title: translate({
      id: "pages.home.developerDocs",
      message: "Developer Docs",
      description: "Title for the developer docs section",
    }),
    description: translate({
      id: "pages.home.developerDocs.description",
      message:
        "From general architecture to code examples and individual code snippets explanations, everything necessary to understand and contribute to the Graasp project",
      description: "Description for the developer docs section",
    }),
    Svg: require("@site/static/img/home-developers.svg").default,
    to: "developer/intro",
  },
] as const;

const HomepageLink = ({ title, description, Svg, to }: HomepageLinkItem) => {
  return (
    <div className="max-w-md md:max-w-lg border rounded-lg hover:ring ring-indigo-500 hover:ease-in-out duration-300">
      <Link
        to={to}
        className="no-underline text-current hover:no-underline hover:text-current"
      >
        <div className="p-4">
          <div className="black">
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <div className="my-2">
            <div className="flex gap-4 justify-center">
              <Svg className="flex-grow-1 flex-shrink-0 w-24 h-24 md:w-36 md:h-36" />
              <p className="my-auto">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const HomepageLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center justify-items-center items-stretch p-4 w-fit mx-auto">
      {HomePageLinkList.map(({ key, ...link }) => (
        <HomepageLink key={key} {...link} />
      ))}
    </div>
  );
};
export default HomepageLinks;
