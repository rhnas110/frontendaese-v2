import { FC } from "react";
import { History as HistoryInterface } from "./interface";
import { Label } from "../Input/Label";

export const History: FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index} className="mb-2">
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Label />
            </div>
            <div className="flex-grow">{entry.command}</div>
          </div>

          <div
            className="leading-none whitespace-pre-wrap text-brown_vs"
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
