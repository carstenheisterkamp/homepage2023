import { NavLink } from "react-router-dom";

interface INavItemProps {
    target: string
    name: string
    class: string
}

const NavItem = (props: INavItemProps) => {
    return(
        <NavLink 
            className={props.class}
            to={props.target}
            preventScrollReset={true}
        >
            {props.name}
        </NavLink>
    )
}

export default NavItem