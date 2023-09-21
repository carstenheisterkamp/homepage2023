import PageTemplate from "../components/PageTemplate"
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <PageTemplate title='Error'>
            <div className="grid grid-cols-2 gap-2 pointer-events-none">
                <p>This Page does not exist</p>
                <NavLink         
                    to='/'
                    preventScrollReset={true}
                    >Go  Home!
                </NavLink>
            </div>
        </PageTemplate>
    )
}