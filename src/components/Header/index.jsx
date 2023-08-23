import { Link } from "react-router-dom";
import { ContentHeader, UnoderedList, BoxIcon } from "./style";

import { Button } from "@chakra-ui/react";

import HomeIcon from "../../assets/Icons/home.svg";
import TablesIcon from "../../assets/Icons/tables.svg";
import VerticalLine from "../../assets/Icons/vertical_line.svg";
import SidebarIcon from "../../assets/Icons/sidebar.svg";

export default function Header() {
  return (
    <>
      <ContentHeader>
        <UnoderedList>
          <li>
            <BoxIcon w="4.063rem" h="4.063rem">
              <img src={SidebarIcon} />
            </BoxIcon>
          </li>
          <li>
            <img src={VerticalLine} />
          </li>
          <li>
            <Link to="/">
              <BoxIcon>
                <img src={HomeIcon} alt="home" />
              </BoxIcon>
            </Link>
          </li>
          <li>
            <Link to="/tables">
              <BoxIcon>
                <img src={TablesIcon} alt="Tables" />
              </BoxIcon>
            </Link>
          </li>
          <li>
            <img src={VerticalLine} />
          </li>
          <li></li>
        </UnoderedList>
        <Button
          bg={"#000"}
          color={"#fff"}
          height={"3.938rem"}
          borderRadius={"10px"}
          w={"10.063rem"}
          fontSize={"1.6rem"}
          fontWeight={"medium"}
        >
          Create
        </Button>
      </ContentHeader>
    </>
  );
}
