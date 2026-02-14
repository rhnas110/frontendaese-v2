import { XIcon } from "@heroicons/react/solid";
import tw from "tailwind-styled-components";

import { Tab, useTabContext } from "../../../context/tab-context";
import { getFileIcon } from "../../../utils/file-icon";

import { Tooltip } from "../../_ui/tooltip";
import { Image } from "../../elements/image";

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
  relative
  flex-grow-0
  max-w-xs
  min-w-0
  overflow-hidden
  select-none
`;

const TabTitle = tw.span`
  overflow-hidden
  whitespace-nowrap
  text-overflow
  ellipsis
  flex-grow
  min-w-0
`;

const TabItem: React.FC<{ tab: Tab }> = ({ tab }) => {
  const { activeTab, setActiveTab, removeTab } = useTabContext();
  const icon = getFileIcon(tab.title);

  return (
    <Container
      data-tab-id={tab.id}
      className={`${
        activeTab === tab.id
          ? "bg-[#1e1e1e] text-yellow_vs"
          : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
      }`}
      onClick={() => setActiveTab(tab.id)}
    >
      {icon && (
        <Image
          src={icon}
          alt={`${tab.title} icon`}
          className="mr-1 bg-transparent w-7 h-7"
        />
      )}
      <Tooltip content={tab.title} className="text-gray-400">
        <TabTitle>{tab.title}</TabTitle>
      </Tooltip>
      <Tooltip content="Close" className="text-gray-400" withArrow>
        <button className="flex-shrink-0 w-6 ml-4 rounded hover:bg-neutral-600">
          <XIcon
            onClick={(e) => {
              e.stopPropagation();
              removeTab(tab.id);
            }}
          />
        </button>
      </Tooltip>
    </Container>
  );
};

export default TabItem;
