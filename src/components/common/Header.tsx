import { Link, PathMatch, useMatch } from "react-router-dom";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";

import {
  Circle,
  Col,
  Item,
  Items,
  Logo,
  Nav,
  navVariants,
} from "./Header.styled";

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
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
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
    </Nav>
  );
}

export default Header;
