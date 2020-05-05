import React from "react";
import ReactMarkdown from "react-markdown";
import { css } from "emotion";

const RichText = ({ text }) => {
  const stepSize = 2;
  const stepLineHeight = 1.5;

  const richText = css`
    ol {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 1.5em;

      li {
        counter-increment: step-counter;
        position: relative;
        padding-left: ${stepSize + 1}em;
        line-height: ${stepLineHeight}em;

        & + li {
          margin-top: 1em;
        }
      }

      li::before {
        content: counter(step-counter);
        position: absolute;
        left: 0;
        top: -${(stepSize - stepLineHeight) / 2}em;
        width: ${stepSize}em;
        height: ${stepSize}em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid grey;
        border-radius: 50%;
        color: blue;
        background-color: lightblue;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
  `;

  return <ReactMarkdown source={text} className={richText} />;
};
export default RichText;
