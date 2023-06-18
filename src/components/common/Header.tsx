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
} from "./Header.styled";

interface IForm {
  keyword: string;
}

function Header() {
  const { scrollY } = useScroll();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const popularMatch: PathMatch<string> | null = useMatch("/");
  const nowPlayingMatch: PathMatch<string> | null = useMatch("/now-playing");
  const upComingMatch: PathMatch<string> | null = useMatch("/upcoming");

  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();

  const toggleSearch = () => {
    if (isSearchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setIsSearchOpen((prev) => !prev);
  };

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
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: isSearchOpen ? -205 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search for movie or tv show..."
          />
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;
