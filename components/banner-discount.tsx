import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Get a 20% discount </h2>
            <h3 className="text-lg text-gray-500 font-semibold">On your first purchase</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="/products" className={buttonVariants()}>Buy now</Link>

            </div>
        </div>

       
    );
}

export default BannerDiscount;
