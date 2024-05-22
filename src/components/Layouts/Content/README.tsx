import { useTabContext } from "../../../context/TabContext";

export const README = () => {
  const { addTab } = useTabContext();
  return (
    <div className="py-32">
      <h1 className="text-4xl font-bold text-center text-gray-300">readme</h1>
      <div className="text-center text-brown_vs">
        <span>cd </span>
        <code
          className="italic underline cursor-pointer underline-offset-2"
          onClick={() => addTab({ id: "home", title: "Home.ts" })}
        >
          ./src/pages/Home
        </code>
      </div>
    </div>
  );
};
