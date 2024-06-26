import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Get Your Best<br />
          Gadgets<br />
          &nbsp;
          <span className="text-primary">
          EveryWhere
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-md">
          Level up your tech life! We offer the latest electronics at competitive prices, 
          from cutting-edge smartphones and laptops to immersive TVs and smart home devices. 
          Shop our curated selection and discover the perfect gadgets to elevate your entertainment, 
          productivity, and connectivity.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            <Link href="/products">
              Order now
              <Right />
            </Link>
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        {/* <Image src={'/electronics.jpg'} layout={'fill'} objectFit={'contain'} alt={'electronics'} /> */}
        <Image src={'/electronics.jpg'} height={500} width={500} alt={'electronics'} className="m-12 rounded-md"/>
      </div>
    </section>
  );
}