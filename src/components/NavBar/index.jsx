import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import MenuButton from "./MenuButton";
import { 
    faCircleUser, 
    faClipboardCheck, 
    faGear, 
    faNoteSticky 
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ toggleDialog }) => {

    return (
        <nav className="flex my-3">
            <ul className="flex justify-center items-center gap-5 text-xl">
                <LinkButton
                    link={"todo-list"}
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
                <MenuButton 
                    action={() => toggleDialog()}    
                    children={<FontAwesomeIcon icon={faGear} />}
                />
            </ul>
        </nav>
    )
}

export default NavBar;