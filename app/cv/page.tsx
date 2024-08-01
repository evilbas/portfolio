"use client";

import PDFViewer from "../components/pdf-viewer";

const AboutPage = () => {
  return (
    <div id="cv" className="text-center">
      <h1 className="py-5 text-4xl font-bold text-cyan-800 text-center">
        Curriculum Vitae
      </h1>
      <PDFViewer pdfUrl="files/abdoulayebacv.pdf" />

      <button className="my-3 btn btn-neutral">
        <a href="files/asincv.pdf" download="asincv.pdf">
          Télécharcher mon CV
        </a>
      </button>
    </div>
  );
};

export default AboutPage;
