import { XIcon } from "@heroicons/react/solid";
import { Tab, useTabContext } from "../../../context/TabContext";
import { getFileIcon } from "../../../utils/fileIcon";
import { Image } from "../../Elements/Image";
import tw from "tailwind-styled-components";

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
  flex-shrink-0
  flex-grow-0
  max-w-xs
  min-w-0
  overflow-hidden
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
    // ADD TOOLTIP AGAR KETIKA DI HOVER TITLE NYA JELAS
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
      <TabTitle>{tab.title}</TabTitle>
      <XIcon
        className="flex-shrink-0 w-6 ml-4 hover:bg-gray-600 hover:rounded"
        onClick={(e) => {
          e.stopPropagation();
          removeTab(tab.id);
        }}
      />
    </Container>
  );
};

export default TabItem;
