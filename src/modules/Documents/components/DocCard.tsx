import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";

interface IDocCard {
  to: string;
  title: string;
  image: string;
  description: string;
}

const DocCard: React.FC<IDocCard> = ({ to, title, image, description }) => {
  return (
    <LinkBox className="flex items-strech flex-col shadow rounded overflow-hidden">
      <Box className="w-full h-24">
        <Image
          className="w-full h-full bg-gray-500"
          fit="cover"
          src={image}
          alt={title + " logo"}
        />
      </Box>
      <Box className="p-2 flex flex-col items-stretch flex-grow">
        <Heading as="h4" size="md" className="w-full truncate">
          {title}
        </Heading>
        <Box className="flex justify-between items-stretch flex-grow">
          <Text size="xs" className="w-full text-gray-500">
            {description}
          </Text>
          <LinkOverlay className="self-end " as={Link} to={to}>
            <MdEditNote className="box-content p-3" />
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default DocCard;
