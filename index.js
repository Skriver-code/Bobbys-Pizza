function Navibar() 
{
return (
    <nav className="navbar-toggler-icon">
            <a>Navigationbar</a>
            <span className="navbar-toggler-icon"></span>

    </nav>
)
}

const page =(
    <nav>
        <h1>Bobbys bizza bix</h1>
        <ul>
        <li>Peppyrone</li>
        <li>margar...</li>
        <li>Hawaii hell</li>
        </ul>
    </nav>
)



ReactDOM.render(
    <div>
        <Navibar />
        <h1 className="header">Hello Sarah</h1>
        <p>Did you bring the coconut?</p>
        <ul>
            <li>10k</li>
            <li>13.5k</li>
        </ul>
        <p>{page}</p>
    </div>
    , document.getElementById("root"))

