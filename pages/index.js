import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my blog space. Join me on my journey as I take a massive
          leap into the unknown with a career change from Teacher to Front End
          Web Developer
        </p>
        <p>
          If you like what you read and would like to know more, please visit{" "}
          <a
            className={utilStyles.socialmedialinks}
            href="https://alanabarrettfrew.com"
          >
            {""}my website</a>
             or find me on:
          <span>{""}
            <a
              className={utilStyles.socialmedialinks}
              href="https://twitter.com/AlanaBF81"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className={utilStyles.socialmedialinks}
              href="https://github.com/AlanaBF"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className={utilStyles.socialmedialinks}
              href="https://www.linkedin.com/in/alanabarrettfrew"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
        </p>
      </section>
      <section className={`${utilStyles.blogcard} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
