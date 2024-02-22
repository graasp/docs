import Link from "@docusaurus/Link";
import React from "react";

type HomepageLinkItem = {
  title: string;
  key: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  to: string;
};

const HomePageLinkList: HomepageLinkItem[] = [
  {
    title: "Latest News",
    key: "news",
    description: (
      <>
        Latest <strong>News</strong> from the development team. Fresh out the
        oven, see what is new and all the goodies we have in store for you.
      </>
    ),
    Svg: require("@site/static/img/home-news-feed.svg").default,
    to: "blog",
  },
  {
    title: "Developer Docs",
    key: "docs",
    description: (
      <>
        From <strong>general architecture</strong> to{" "}
        <strong>code examples</strong> and individual code snippets
        explanations, everything necessary to understand and contribute to the
        Graasp project
      </>
    ),
    Svg: require("@site/static/img/home-developers.svg").default,
    to: "developer/intro",
  },
  {
    title: "User Resources",
    key: "users",
    description: (
      <>
        End-user centered documentation, describing <strong>features</strong>{" "}
        and proposing <strong>learning scenarios</strong>.
      </>
    ),
    Svg: require("@site/static/img/home-users.svg").default,
    to: "user/intro",
  },
];

const HomepageLink = ({ title, description, Svg, to }: HomepageLinkItem) => {
  return (
    <div className="mx-auto mb-4 last:mb-0 max-w-md md:max-w-lg border rounded-lg hover:ring ring-indigo-500 hover:ease-in-out duration-300">
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
              <Svg
                className="flex-grow-1 flex-shrink-0 w-24 h-24 md:w-36 md:h-36"
                role="img"
              />
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
    <div className="place-content-center p-4">
      {HomePageLinkList.map((link) => (
        <HomepageLink key={link.key} {...link} />
      ))}
    </div>
  );
};
export default HomepageLinks;
