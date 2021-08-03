import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
const edjsHTML = require("editorjs-html");
import style from "./style.module.css";

export default function Blogitem({ blg }) {
  function contentHtml() {
    const edjsParser = edjsHTML();
    const html = edjsParser.parseBlock(JSON.parse(blg.content).blocks[0]);
    return { __html: html };
  }

  return (
    <div className="col-md-8 align-self-center">
      <Card.Body className="px-0">
        <div className="row">
          <div className="col">
            {blg?.user?.first && (
              <Card.Text className={`${style.author} mb-0`}>
                {blg.user.first} {blg.user.last}
              </Card.Text>
            )}
            <Card.Title className={`fw-bolder ${style.title} mb-1 fs-4`}>
              <Link href={`/blogs/${blg.slug}`}>
                <a className="">{blg.title}</a>
              </Link>
            </Card.Title>
            <Card.Text className={`${style.subTitle}`}>
              <Link href={`/blogs/${blg.slug}`}>
                <a>
                  <div dangerouslySetInnerHTML={contentHtml()} />
                </a>
              </Link>
            </Card.Text>
          </div>
          <Link href={`/blogs/${blg.slug}`}>
            <a className="col-lg-3">
              <Image
                src={
                  blg.image
                    ? blg.image.formats.small.url
                    : "/images/event-default.png"
                }
                layout="responsive"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </div>
      </Card.Body>
    </div>
  );
}
