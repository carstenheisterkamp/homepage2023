import { NavLink } from "react-router-dom";

interface INavItemProps {
    target: string;
    name: string;
}

const NavItem = (props: INavItemProps) => {
    return(
        <NavLink 
            className={"text-2xl"}
            to={props.target}
            preventScrollReset={true}
        >
            {props.name}
        </NavLink>
    )
}

export default NavItem