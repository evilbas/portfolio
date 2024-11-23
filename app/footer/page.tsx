const FooterPage = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="flex justify-between w-full">
          <aside>
            <p>
              Abdoulaye BA.
              <br />© 2024
            </p>
          </aside>
          <div>
            <a
              target="_blank"
              href="https://www.system3p.online"
              className="link hover:text-cyan-200"
            >
              Official System3P
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
