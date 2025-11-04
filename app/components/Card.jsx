import Image from "next/image"
import { Heart, Eye, Star } from "lucide-react";
// assest
// import product from "@/app/assets/CollectionOne.png"

function Card({ image, price, descount }) {
    return (
        <div className="relative  mt-6 ">
            <div className="bg-gray-200 rounded-2xl p-3">
                <Image src={image} width={200} height={200} className="transition-transform duration-300 hover:scale-90" />
                <div className="absolute top-2 right-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Heart />
                    </div>
                    <div className="w-8 h-8 mt-2 rounded-full bg-white flex items-center justify-center">
                        <Eye />
                    </div>
                </div>
            </div>
            <h1 className="text-xl font-semibold text-black/70">Women Collections</h1>
            <div className="flex items-center gap-2 text-base font-semibold">
                <p className="text-red-400">{price}</p>
                <p className="text-gray-400 line-through">{descount}</p>
            </div>
            <div className="flex ">
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
            </div>
        </div>
    )
}

export default Card
