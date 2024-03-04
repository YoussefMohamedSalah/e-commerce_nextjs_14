"use client"

import { useEffect, useState } from "react";


const HTMLParser = (htmlString) => {
  const [parsedHTML, setParsedHTML] = useState(null);

  useEffect(
    () => {
      const parser = new DOMParser();
      const parsedDocument = parser.parseFromString(htmlString, "text/html");
      setParsedHTML(parsedDocument.body.innerHTML);
    },
    [htmlString]
  );

  return (
    <>
      {parsedHTML
        && <span dangerouslySetInnerHTML={{ __html: parsedHTML }} />
      }
    </>
  );
};

export default HTMLParser;
