import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { API_URL } from "@/config/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style.module.css";
import { Button } from "react-bootstrap";
const edjsHTML = require("editorjs-html");

export default function slug({ blg }) {
  const [loading, setLoading] = useState(false);
  function createMarkup() {
    const edjsParser = edjsHTML();
    const html = edjsParser.parse(JSON.parse(blg.content));
    return { __html: html.join(" ") };
  }

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-md-center pt-1 pb-2 text-start">
          <div className="form-group col-md-6 mb-2">
            <Link href={`/blogs/edit/${blg.id}`}>
              <a className="d-grid gap-2 mb-3 mt-3 font-robo">
                <Button className="rounded-3" variant="dark">
                  Edit
                </Button>
              </a>
            </Link>
            <div className="col p-2 font-robo mb-3">
              <div className="row align-items-center border-bottom pb-4">
                <Image
                  className="col rounded-circle"
                  src={
                    blg.user
                      ? blg.user.profile.formats.thumbnail.url
                      : "/images/event-default.png"
                  }
                  layout="fixed"
                  width={70}
                  height={70}
                />
                <div className="col">
                  <p className="mb-0 mt-2">
                    {blg.user ? blg.user.first : "John"}{" "}
                    {blg.user ? blg.user.last : "Doe"}
                  </p>
                  <p className="mt-0 mb-2 date">
                    {new Date(blg.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                  </p>
                </div>
                <div className={`col-lg-auto ${Style.socialTab}`}>
                  <div className="row">
                    {blg?.user?.twitter && (
                      <a className="col-auto p-0 mx-2" href={blg.user.twitter}>
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                      </a>
                    )}
                    {blg?.user?.facebook && (
                      <a className="col-auto p-0 mx-2" href={blg.user.facebook}>
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                      </a>
                    )}
                    {blg?.user?.instagram && (
                      <a
                        className="col-auto p-0 mx-2"
                        href={blg.user.instagram}
                      >
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          size="lg"
                        />
                      </a>
                    )}
                    {blg?.user?.github && (
                      <a className="col-auto p-0 mx-2" href={blg.user.github}>
                        <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                      </a>
                    )}
                    {blg?.user?.linkedin && (
                      <a className="col-auto p-0 mx-2" href={blg.user.linkedin}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <h1 className="fw-bold col pb-2">{blg.title}</h1>
            <Image
              className="col align-self-center text-center"
              src={
                blg.image
                  ? blg.image.formats.medium.url
                  : "/images/event-default.png"
              }
              width={650}
              height={400}
            />
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/blogs/`);
  const blogs = await res.json();

  const paths = blogs.map((blg) => ({
    params: { slug: blg.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/blogs?slug=${slug}`);
  const blogs = await res.json();

  return {
    props: {
      blg: blogs[0],
    },
    revalidate: 1,
  };
}
