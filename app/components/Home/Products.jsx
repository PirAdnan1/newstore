// components
import Card from "../Card"
import Container from "../Container"
import RedIcon from "../RegIcon"

// assets
import CollectionOne from "@/app/assets/CollectionOne.png"


function Products() {
    return (
        <Container>
            <div className="my-4">
                <RedIcon name={"Our Products"}/>
            </div>
            <div className="grid md:grid-cols-4 gap-1 justify-center mx-4">
                <Card image={CollectionOne} price={"160"} descount={"120"} />
                <Card image={CollectionOne} price={"160"} descount={"120"} />
                <Card image={CollectionOne} price={"160"} descount={"120"} />
                <Card image={CollectionOne} price={"160"} descount={"120"} />
            </div>
        </Container>
    )
}

export default Products
