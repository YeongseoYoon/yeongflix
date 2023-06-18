import { useState } from "react";
import {
  Link,
  NavigateFunction,
  PathMatch,
  useMatch,
  useNavigate,
} from "react-router-dom";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useForm } from "react-hook-form";

import {
  Circle,
  Col,
  Input,
  Item,
  Items,
  Logo,
  Nav,
  Search,
  SearchButton,
} from "./Header.styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IForm {
  keyword: string;
}

function Header() {
  const { scrollY } = useScroll();

  const popularMatch: PathMatch<string> | null = useMatch("/");
  const nowPlayingMatch: PathMatch<string> | null = useMatch("/now-playing");
  const upComingMatch: PathMatch<string> | null = useMatch("/upcoming");

  const navAnimation = useAnimation();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y < 0.1) navAnimation.start("top");
    else navAnimation.start("scrolled");
  });

  const navigate: NavigateFunction = useNavigate();

  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <Nav>
      <Col>
        <Logo>
          <Link to="/">YeongFlix</Link>
        </Logo>

        <Items>
          <Item>
            <Link to="/">
              POPULAR {popularMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="upcoming">
              UP COMING {upComingMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="now-playing">
              NOW PLAYING {nowPlayingMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            placeholder="Search"
          />
          <SearchButton>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </SearchButton>
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;
