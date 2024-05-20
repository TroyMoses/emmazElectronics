'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import ProductItem from "@/components/products/ProductItem";
import {useEffect, useState} from "react";

export default function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/product-items').then(res => {
      res.json().then(productItems => setProductItems(productItems));
    });
  }, []);
  return (
    <section className="mt-8">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
            {productItems.filter(item => item.category === c._id).map(item => (
              <ProductItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}