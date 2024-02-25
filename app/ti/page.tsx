import { CSSProperties } from "react";
import TIIconsPages from "../components/ti-icons";
import { Metadata } from "next";

const TechologiesPage = () => {
  return (
    <div>
      <h1 className="mb-2 text-center font-sans text-4xl md:text-2xl">
        Technologies
      </h1>
      <br />
      <TIIconsPages />

      <div className="my-5 animate-rotate-x ">
        <div>
          <h1 className="mb-4 text-3xl sm:text2xl text-center">Javascript</h1>
          <div className="flex flex-wrap justify-around gap-5">
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-accent text-accent-content border-4 border-accent animate-ping animate-once"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">Javascript</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950 animate-spin animate-once"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">Angular</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950 animate-spin animate-once"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">React JS</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950 animate-spin animate-once"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">Next.js</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 animate-bounce animate-twice">
        <div>
          <h1 className="mb-10 text-3xl sm:text2xl text-center">
            Java - Kotlin
          </h1>
          <div className="mt-10 flex flex-wrap justify-around gap-5">
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">Java</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950"
                style={
                  {
                    "--value": 90,
                  } as CSSProperties
                }
              >
                90%
              </span>
              <h1 className="text-center">Kotlin</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950"
                style={
                  {
                    "--value": 80,
                  } as CSSProperties
                }
              >
                80%
              </span>
              <h1 className="text-center">Spring Boot</h1>
            </div>
            <div>
              <span
                className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950"
                style={
                  {
                    "--value": 70,
                  } as CSSProperties
                }
              >
                70%
              </span>
              <h1 className="text-center">Quarkus</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Asin Portfolio - Technologies",
  description: "View my skills and my work. Technologies I use.",
};

export default TechologiesPage;
