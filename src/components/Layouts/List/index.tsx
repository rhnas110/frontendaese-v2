import { FC } from "react";
import { ILoveTypeScript } from "../../../types";

const List: FC<{ list: ILoveTypeScript }> = ({ list }) => {
  return (
    <div className="grid grid-cols-2 gap-1 mt-4 text-sm xs:grid-cols-3 text-brown_vs">
      {list &&
        list.map((item: ILoveTypeScript, index: number) => (
          <div key={index} className="flex mb-2 gap-x-4">
            {item.logo}
            <code>{item.name}</code>
          </div>
        ))}
    </div>
  );
};

export default List;
