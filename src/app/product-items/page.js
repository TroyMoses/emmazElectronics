'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ProductItemsPage() {

  const [productItems, setProductItems] = useState([]);
  const {loading, data} = useProfile();

  useEffect(() => {
    fetch('/api/product-items').then(res => {
      res.json().then(productItems => {
        setProductItems(productItems);
      });
    })
  }, []);

  if (loading) {
    return 'Loading user info...';
  }

  if (!data) {
    return 'No profile found.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs />
      <div className="mt-8">
        <Link
          className="button flex"
          href={'/product-items/new'}>
          <span>Crete new product item</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit product item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {productItems?.length > 0 && productItems.map(item => (
            <Link
              key={item._id}
              href={'/product-items/edit/'+item._id}
              className="bg-gray-200 rounded-lg p-4"
            >
              <div className="relative">
                <Image
                  className="rounded-md"
                  src={item.image} alt={''} width={200} height={200} />
              </div>
              <div className="text-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}