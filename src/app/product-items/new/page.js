'use client';
import Left from "@/components/icons/Left";
import Right from "@/components/icons/Right";
import EditableImage from "@/components/layout/EditableImage";
import ProductItemForm from "@/components/layout/ProductItemForm";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import {redirect} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";

export default function NewProductItemPage() {

  const [redirectToItems, setRedirectToItems] = useState(false);
  const {loading, data} = useProfile();

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/product-items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
      if (response.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving this product item',
      success: 'Saved',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/product-items');
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data) {
    return 'No profile found.';
  }

  return (
    <section className="mt-8">
      <UserTabs />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={'/product-items'} className="button">
          <Left />
          <span>Show all product items</span>
        </Link>
      </div>
      <ProductItemForm productItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}