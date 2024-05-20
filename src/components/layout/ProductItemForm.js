import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import EditableImage from "@/components/layout/EditableImage";
import ProductItemPriceProps from "@/components/layout/ProductItemPriceProps";
import {useEffect, useState} from "react";

export default function ProductItemForm({onSubmit,productItem}) {
  const [image, setImage] = useState(productItem?.image || '');
  const [name, setName] = useState(productItem?.name || '');
  const [description, setDescription] = useState(productItem?.description || '');
  const [basePrice, setBasePrice] = useState(productItem?.basePrice || '');
  const [sizes, setSizes] = useState(productItem?.sizes || []);
  const [category, setCategory] = useState(productItem?.category || '');
  const [categories, setCategories] = useState([]);
  const [
    brandPrices,
    setBrandPrices,
  ] = useState(productItem?.brandPrices || []);

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={ev =>
        onSubmit(ev, {
          image,name,description,basePrice,sizes,brandPrices,category,
        })
      }
      className="mt-8 max-w-2xl mx-auto">
      <div
        className="md:grid items-start gap-4"
        style={{gridTemplateColumns:'.3fr .7fr'}}>
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Item name</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
          />
          <label>Category</label>
          <select value={category} onChange={ev => setCategory(ev.target.value)}>
            {categories?.length > 0 && categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
          <label>Base price</label>
          <input
            type="text"
            value={basePrice}
            onChange={ev => setBasePrice(ev.target.value)}
          />
          <ProductItemPriceProps name={'Sizes'}
                              addLabel={'Add item size price'}
                              props={sizes}
                              setProps={setSizes} />
          <ProductItemPriceProps name={'Brands'}
                              addLabel={'Add item brand prices'}
                              props={brandPrices}
                              setProps={setBrandPrices}/>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}