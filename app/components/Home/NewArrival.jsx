// components
import Image from "next/image";

// assest
import CollectOne from "@/app/assets/CollectionOne.png";
import CollectionTwo from "@/app/assets/CollectionTwo.png";
import CollectionThree from "@/app/assets/CollectionThree.png";
import CollectionFour from "@/app/assets/CollectionFour.png";
// components
import Container from "../Container";
import RedIcon from "../RegIcon";

function NewArrival() {
  return (
    <Container>
      <div className="mt-14 mx-8">
        <RedIcon name={"Featured"} />
        <h1 className="font-semibold text-4xl mt-12">New Arrival</h1>
        <div className="flex flex-col lg:flex-row relative gap-x-11 gap-y-12 lg:gap-y-0 mt-14">
          <div className="bg-black relative">
            <Image src={CollectOne} alt="..." width={450} height={460} className="w-[450px] h-[460px] object-cover" />
            <div className="absolute text-white/85 bottom-5 left-4">
              <h1 className="text-2xl">Trendy Girls Fashion Collection</h1>
              <p>Discover stylish outfits designed to inspire girls</p>
              <p>Shop Now</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-0 bg-black pl-6 max-w-[570px] w-full">
              <div className="text-white/85">
                <h1 className="text-2xl font-semibold">Woman's Collection</h1>
                <p>Featured Woman's collections that gives you another vibe</p>
                <span>Shop Now</span>
              </div>

              <Image src={CollectionTwo} alt="..." />
            </div>
            <div className="flex flex-col md:flex-row lg:items-start items-center gap-6 mt-6 lg:justify-center">
              <div className="bg-black flex items-center justify-center w-[270px] relative">
                <Image src={CollectionThree} className="w-[250px] h-[250px] object-cover" alt="..." />
                <div className="absolute text-white/85 left-4 bottom-4">
                    <h1 className="text-2xl">New Arrivals for Girls</h1>
                    <p>Fresh fashion trends made for modern girls</p>
                    <p>Shop Now</p>
                </div>
              </div>
              <div className="bg-black flex items-center justify-center w-[270px] relative">
                <Image src={CollectionFour} className="w-[250px] h-[250px] object-cover" alt="..." />
                <div className="absolute text-white/85 left-4 bottom-4">
                    <h1 className="text-2xl">Fresh New Styles</h1>
                    <p>Trendy looks for fashionable young girls</p>
                    <p>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NewArrival
