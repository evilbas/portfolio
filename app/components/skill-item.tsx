import { CSSProperties } from "react";

const SkillItem = ({
  progression,
  name,
}: {
  progression: number;
  name: string;
}) => {
  return (
    <div className="mt-5">
      <span
        className="mb-1 radial-progress text-center text-wrap text-sm bg-blue-950 text-primary-content border-4 border-blue-950 animate-spin animate-once"
        style={
          {
            "--value": 100,
          } as CSSProperties
        }
      >
        {progression}%
      </span>
      <h1 className="text-center">{name}</h1>
    </div>
  );
};

export default SkillItem;
