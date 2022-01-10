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
import { Tool } from "../types";

interface IToolbarProps {
  tools: Array<Tool>;
}

const Toolbar: React.FC<IToolbarProps> = ({ tools }) => {
  function createTools(tools: Array<Tool>, menu: boolean = false) {
    const Item = menu ? MenuItem : ListItem;
    return tools.map((ele) => (
      <Item>
        {ele.children ? (
          <Menu>
            {({ isOpen }) => (
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                aria-label={ele.description}
                rightIcon={<BsArrowRight />}
              >
                {<ele.Icon />}
              </MenuButton>
            )}
            {createTools(ele.children, true)}
          </Menu>
        ) : (
          <Tooltip
            label={ele.description}
            openDelay={500}
            hasArrow
            placement="right"
            padding="0.5rem"
          >
            <IconButton
              isActive={Math.random() > 0.7}
              boxShadow={`2px 2px 4px 0 var(--chakra-colors-gray-300),
                          -2px -2px 4px 0 var(--chakra-colors-gray-100)`}
              _active={{
                boxShadow: `inset 2px 2px 8px 0 var(--chakra-colors-gray-300),
                            inset -2px -2px 1px 0 var(--chakra-colors-gray-100)`,
              }}
              variant="ghost"
              aria-label={ele.description}
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
