import React from "react";
import { Document, Page } from "react-pdf";

export const CVComponent = () => {
  const file = "/images/myCV.pdf";

  return (
    <div>
      <h1>My CV</h1>
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
