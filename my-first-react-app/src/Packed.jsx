function Item({name, isPacked}){
    return <li className = "item" > {name}</li>
}

function Packed() {
    return(
        <section>
            <h1>Sally Ride's Packing</h1>

            <ul>
                <Item
                name="Space suit"
                isPacked={true} 
                />
            </ul>

            <ul>
                <Item
                name="Helmet with a golden leaf"
                isPacked={true} 
                />
            </ul>


             <ul>
                <Item
                name="Photo pf Tam"
                isPacked={false} 
                />
            </ul>
        </section>
    )
}

export default Packed;