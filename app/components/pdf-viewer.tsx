"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ pdfUrl }: { pdfUrl: any }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="m-auto w-auto">
        <Viewer fileUrl={pdfUrl} />
      </div>
    </Worker>
  );
};

export default PDFViewer;
