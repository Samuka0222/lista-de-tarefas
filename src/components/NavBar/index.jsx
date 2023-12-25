import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import MenuButton from "./MenuButton";
import {
  faCircleUser,
  faClipboardCheck,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ toggleDialog }) => {
  return (
    <nav className="flex my-3">
      <ul className="flex justify-center items-center gap-5 text-xl">
        <LinkButton
          link={"/"}
          children={<FontAwesomeIcon icon={faClipboardCheck} />}
        />
        <LinkButton
          link={"notes"}
          children={<FontAwesomeIcon icon={faNoteSticky} />}
        />
        <MenuButton
          action={() => toggleDialog()}
          children={<FontAwesomeIcon icon={faCircleUser} />}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
