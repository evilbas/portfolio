import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaSymfony } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiQuarkus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const TIIconsPages = ({
  color = "black",
  size = 6,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <ul className="mt-5 flex flex-wrap gap-4 justify-center">
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <IoLogoJavascript fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaNodeJs fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaReact fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <TbBrandNextjs color={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaAngular fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaJava fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <TbBrandKotlin color={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiSpringboot fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiQuarkus fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaPhp fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaSymfony fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaLaravel fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiCsharp fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaGitSquare fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <FaDocker fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiKubernetes fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiPostgresql fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <DiMysql fill={color} />
      </li>
      <li className={`text-${size}xl sm:text-${size - 2}xl`}>
        <SiMongodb fill={color} />
      </li>
    </ul>
  );
};

export default TIIconsPages;
