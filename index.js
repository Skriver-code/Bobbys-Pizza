function Navibar() {
    return (
        <nav className="title">
            <h1>Bobbys Pizza Bix</h1>
            <hr className="red-line" />
           
        </nav>
    );
}

function Composability() {
return(
    <div className="price">
        <h3>Price</h3>
<p>
    6 slices; 80 kr.
</p>

<p>   
     8 slices; 110 kr.
</p>
</div>
)

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
       
        <Composability />
    </div>
);




ReactDOM.render(
    <div>
        <Navibar />
        
        <p>{page}</p>
    </div>
    , document.getElementById("root"))


   
function RenderingList(){
return(<footer>Skriver-Code. All rights reserved.</footer>);
}

ReactDOM.render(<RenderingList />, document.getElementById("rendering"))
