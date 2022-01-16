import {
  Box,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Slice } from "../slice";
import { Tool } from "../types";

interface ToolbarProps {
  tools: Array<Tool>;
  selectedTool: Slice["selectedTool"];
  onChange: (tool: Slice["selectedTool"]) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ tools, selectedTool, onChange }) => {
  function createTools(tools: Array<Tool>, menu: boolean = false) {
    const Item = menu ? MenuItem : ListItem;
    return tools.map((ele, i) => (
      <Item>
        {ele.children ? (
          <Menu>
            {({ isOpen }) => (
              <MenuButton
                isActive={selectedTool.type === ele.type}
                as={IconButton}
                aria-label={ele.description}
                rightIcon={<BsArrowRight />}
                onClick={() => onChange(ele)}
              >
                {<ele.Icon />}
              </MenuButton>
            )}
            {createTools(ele.children, true)}
          </Menu>
        ) : (
          <Tooltip
            label={ele.description}
            openDelay={1500}
            hasArrow
            placement="right"
            padding="0.5rem"
            beha
          >
            <IconButton
              isActive={selectedTool.type === ele.type}
              boxShadow={`2px 2px 4px 0 var(--chakra-colors-gray-300),
                          -2px -2px 4px 0 var(--chakra-colors-gray-100)`}
              _active={{
                boxShadow: `inset 2px 2px 8px 0 var(--chakra-colors-gray-300),
                            inset -2px -2px 1px 0 var(--chakra-colors-gray-100)`,
              }}
              variant="ghost"
              aria-label={ele.description}
              onClick={() => onChange(ele)}
            >
              <ele.Icon />
            </IconButton>
          </Tooltip>
        )}
      </Item>
    ));
  }

  return (
    <UnorderedList
      className="grid grid-cols-1 gap-2 rounded p-2"
      listStyleType="none"
    >
      {createTools(tools)}
    </UnorderedList>
  );
};

export default Toolbar;
