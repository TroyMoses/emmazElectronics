'use client';
import DeleteButton from "@/components/DeleteButton";
import Left from "@/components/icons/Left";
import EditableImage from "@/components/layout/EditableImage";
import ProductItemForm from "@/components/layout/ProductItemForm";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import {redirect, useParams} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function EditProductItemPage() {

  const {id} = useParams();

  const [productItem, setProductItem] = useState(null);
  const [redirectToItems, setRedirectToItems] = useState(false);
  const {loading, data} = useProfile();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/product-items').then(res => {
      res.json().then(items => {
        const item = items.find(i => i._id === id);
        setProductItem(item);
      });
    });fetch('/api/profile').then(response => {
      response.json().then(data => {
        setUser(data);
        setIsAdmin(data.admin);
      })
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = {...data, _id:id};
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/product-items', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
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

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/product-items?_id='+id, {
        method: 'DELETE',
      });
      if (res.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
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
      <UserTabs isAdmin={isAdmin}/>
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={'/product-items'} className="button">
          <Left />
          <span>Show all product items</span>
        </Link>
      </div>
      <ProductItemForm productItem={productItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2">
        <div className="max-w-xs ml-auto pl-4">
          <DeleteButton
            label="Delete this product item"
            onDelete={handleDeleteClick}
          />
        </div>
      </div>
    </section>
  );
}