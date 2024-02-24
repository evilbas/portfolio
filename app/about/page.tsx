import PDFViewer from "../components/pdf-viewer";

const AboutPage = () => {
  return (
    <div className="text-center">
      <h1 className="m-2 text-center text-4xs">Currículum Vitae</h1>
      <PDFViewer pdfUrl="files/asincv.pdf" />

      <button className="my-3 btn btn-neutral">
        <a href="files/asincv.pdf" download="asincv.pdf">
          Télécharcher mon CV
        </a>
      </button>
    </div>
  );
};

export default AboutPage;
