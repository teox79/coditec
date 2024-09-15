import React from "react";
import ReactMarkdown from 'react-markdown';
import { Alignment } from "../../context/UiTypes";
import classNames from "classnames";

interface PageTitleProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; url?: string }[];
  alignDescription?: Alignment;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description, breadcrumbs, alignDescription = Alignment.Center }) => {

  const classNameDescription = classNames('mb-0', {
    'text-left': alignDescription === Alignment.Left,
    'text-center': alignDescription === Alignment.Center,
    'text-right': alignDescription === Alignment.Right,
  });

  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}</h1>
              <div className={classNameDescription}><ReactMarkdown >{description}</ReactMarkdown></div>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            {breadcrumbs?.map((breadcrumb, index) => (
              <li key={index} className={breadcrumb.url ? "" : "current"}>
                {breadcrumb.url ? (
                  <a href={breadcrumb.url}>{breadcrumb.label}</a>
                ) : (
                  breadcrumb.label
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default PageTitle;
