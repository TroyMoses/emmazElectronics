'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import ProductItem from "@/components/products/ProductItem";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HomeProducts() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/product-items').then(res => {
      res.json().then(productItems => {
        setBestSellers(productItems.slice(-9));
      });
    });
  }, []);
  return (
    <section className="">
      {/* <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div> */}
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Sellers'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}