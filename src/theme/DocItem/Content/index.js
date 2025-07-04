import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import authors from "@site/blog/authors.yml";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Twitter from "@theme/Icon/Socials/Twitter";
import GitHub from "@theme/Icon/Socials/GitHub";

import X from "@theme/Icon/Socials/X";
import StackOverflow from "@theme/Icon/Socials/StackOverflow";
import LinkedIn from "@theme/Icon/Socials/LinkedIn";
import DefaultSocialIcon from "@theme/Icon/Socials/Default";
import Bluesky from "@theme/Icon/Socials/Bluesky";
import Instagram from "@theme/Icon/Socials/Instagram";
import Threads from "@theme/Icon/Socials/Threads";
import Youtube from "@theme/Icon/Socials/YouTube";
import Mastodon from "@theme/Icon/Socials/Mastodon";
import Twitch from "@theme/Icon/Socials/Twitch";

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

function AuthorTitle({ title }) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

function AuthorName({ name, as }) {
  if (!as) {
    return <span className={styles.authorName}>{name}</span>;
  } else {
    return (
      <Heading as={as} className={styles.authorName}>
        {name}
      </Heading>
    );
  }
}

const SocialPlatformConfigs = {
  twitter: { Icon: Twitter, label: "Twitter" },
  github: { Icon: GitHub, label: "GitHub", URL: "https://www.github.com/" },
  stackoverflow: { Icon: StackOverflow, label: "Stack Overflow" },
  linkedin: { Icon: LinkedIn, label: "LinkedIn", URL: "https://www.linkedin.com/in/" },
  x: { Icon: X, label: "X", URL: "https://x.com/" },
  bluesky: { Icon: Bluesky, label: "Bluesky" },
  instagram: { Icon: Instagram, label: "Instagram" },
  threads: { Icon: Threads, label: "Threads" },
  mastodon: { Icon: Mastodon, label: "Mastodon" },
  youtube: { Icon: Youtube, label: "YouTube" },
  twitch: { Icon: Twitch, label: "Twitch" },
};

function getSocialPlatformConfig(platformKey) {
  return (
    SocialPlatformConfigs[platformKey] ?? {
      Icon: DefaultSocialIcon,
      label: platformKey,
    }
  );
}

function DocAuthor({ as, author, className }) {
  const { name, title, url, imageURL, email, page } = author;

  const link =
    page?.permalink || url || (email && `mailto:${email}`) || undefined;

  const socials = Object.entries(author.socials ?? {});

  return (
    <div
      className={clsx(
        "avatar margin-bottom--sm",
        className,
        styles[`author-as-${as}`]
      )}
    >
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx("avatar__photo", styles.authorImage)}
            src={imageURL}
            alt={name}
          />
        </MaybeLink>
      )}

      {(name || title) && (
        <div className={clsx("avatar__intro", styles.authorDetails)}>
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <AuthorName name={name} as={as} />
              </MaybeLink>
            )}
          </div>
          {!!title && <AuthorTitle title={title} />}
          <div className="flex justify-start">
            {socials.map(([platform, link]) => {
              const { Icon, label, URL } = getSocialPlatformConfig(platform);
              console.log(label, URL);
              return (
                <Link
                  className={styles.authorSocialLink}
                  href={(URL || "") + link}
                  title={label}
                >
                  <Icon className={clsx(styles.authorSocialLink)} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function AuthorsSection({ className }) {
  const { frontMatter } = useDoc();

  if (!frontMatter.authors || frontMatter.authors.length === 0) {
    return null;
  }

  const authorDetails = frontMatter.authors.map((a) => {
    return authors[a];
  });

  const authorsCount = authorDetails.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authorDetails.every(({ name }) => !name);
  const singleAuthor = authorDetails.length === 1;
  return (
    <section>
      <h3>Contributors:</h3>
      <div
        className={clsx(
          "margin-top--md margin-bottom--sm",
          imageOnly ? styles.imageOnlyAuthorRow : "row",
          className
        )}
      >
        {authorDetails.map((author, idx) => (
          <div
            className={clsx(
              !imageOnly && (singleAuthor ? "col col--12" : "col col--6"),
              imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              "margin-bottom--sm"
            )}
            key={idx}
          >
            <DocAuthor
              author={{
                ...author,
                // Handle author images using relative paths
                imageURL: author.image_url,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
      <AuthorsSection />
    </div>
  );
}
