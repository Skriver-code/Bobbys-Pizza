function Navibar() {
    return (
        <nav className="title">
            <h1>Bobbys Pizza Bix</h1>
            <hr className="red-line" />
        </nav>
    );
}


const page = (
    <div className="container" style={{ border: "2px solid #D2B48C", width: "50%", padding: "10px" }}>
        <h2>Pizza</h2>
        <nav>
            <ul>
                <li>Pepperoni Pizza</li>
                <li>Margarita Pizza</li>
                <li>Hawaii Pizza</li>
                <li>Vesuvio Pizza</li>
                <li>Vegetar Pizza</li>
                <li>Kebab Pizza</li>
            </ul>
        </nav>
        <h2>Kebab</h2>
        <nav>
            <ul>
                <li>Kebab Kylling</li>
                <li>Kebab Lamb</li>
                <li>Kebab Falaffel</li>
                
            </ul>
        </nav>
        <img src="./PixelPizza.webp" width="100px" />
    </div>
);




ReactDOM.render(
    <div>
        <Navibar />
        
        <p>{page}</p>
    </div>
    , document.getElementById("root"))



function RenderingList(){
return(<lu>Rendering a function</lu>);
}

ReactDOM.render(<RenderingList />, document.getElementById("rendering"))
