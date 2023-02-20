import Link from "@docusaurus/Link";
import { clsx } from "clsx";
import React from "react";

type HomepageLinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  buttonText: string;
};

const HomePageLinkList: HomepageLinkItem[] = [
  {
    title: "Developer Docs",
    description: (
      <>
        From <strong>general architecture</strong> to{" "}
        <strong>code examples</strong> and individual code snippets
        explanations, everything necessary to understand and contribute to the
        Graasp project
      </>
    ),
    Svg: require("@site/static/img/home-developer.svg").default,
    buttonText: "Go to Docs !",
  },
  {
    title: "User Resources",
    description: (
      <>
        End-user centered documentation, describing <strong>features</strong>{" "}
        and proposing <strong>learning scenarios</strong>.
      </>
    ),
    Svg: require("@site/static/img/home-user-resources.svg").default,
    buttonText: "Learn how to use Graasp!",
  },
];

const HomepageLink = ({ title, description, Svg }: HomepageLinkItem) => {
  return (
    <div className="mx-auto my-4 max-w-md md:max-w-lg border rounded-lg hover:ring ring-indigo-500 hover:ease-in-out duration-300">
      <Link
        to={"developer/intro"}
        className="no-underline text-current hover:no-underline hover:text-current"
      >
        <div className="p-4">
          <div className="black">
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <div className="my-2">
            <div className="flex gap-4 justify-center">
              <Svg className={"flex-grow-1"} role="img" />
              <p className="my-auto">{description}</p>
            </div>
          </div>
          {/* <Link
            className="button button--block button--lg"
            to="developer/intro"
          >
            {buttonText}
          </Link> */}
        </div>
      </Link>
    </div>
  );
};

const HomepageLinks = () => {
  return (
    <div className="place-content-center">
      {HomePageLinkList.map((link) => (
        <HomepageLink {...link} />
      ))}
    </div>
  );
};
export default HomepageLinks;
