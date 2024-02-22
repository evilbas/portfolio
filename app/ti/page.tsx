import { CSSProperties } from "react";
import TIIconsPages from "../components/ti-icons";

const TechologiesPage = () => {
  return (
    <div>
      <h1 className="mb-2 text-center font-sans text-4xl">Technologies</h1>

      <TIIconsPages />
      <table className="table w-full">
        <thead>
          <tr>
            <th>Technologies</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>
              <span
                className="radial-progress bg-blue-950 text-primary-content border-4 border-blue-950"
                style={
                  {
                    "--value": 70,
                  } as CSSProperties
                }
              >
                70%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TechologiesPage;
