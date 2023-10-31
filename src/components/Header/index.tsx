import { useState } from "react";
import {
  Link,
  NavigateFunction,
  PathMatch,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import { faSearch, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Circle,
  Col,
  Hamburger,
  Input,
  Item,
  Items,
  Logo,
  Nav,
  Search,
  SearchButton,
} from "./styled";

interface IForm {
  keyword: string;
}

function Header() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const popularMatch: PathMatch<string> | null = useMatch("/");
  const nowPlayingMatch: PathMatch<string> | null = useMatch("/now_playing");
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

        <Items isMenuOpen={isMenuOpen}>
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
            <Link to="now_playing">
              NOW PLAYING {nowPlayingMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("keyword", { required: true, minLength: 1 })}
            placeholder="Search"
          />
          <SearchButton>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </SearchButton>
        </Search>
        <Hamburger onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </Hamburger>
      </Col>
    </Nav>
  );
}

export default Header;
