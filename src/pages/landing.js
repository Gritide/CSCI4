import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App()
{
    return(
        <div>
            <h1>PROBLEM STATEMENT</h1>
            <button>
                <Link to={{
                    pathname: "/welcome"}}>
                        MY Code
                </Link>
                </button>

        </div>
    )
}