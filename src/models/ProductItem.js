import mongoose, {model, models, Schema} from "mongoose";

const BrandPriceSchema = new Schema({
  name: String,
  price: Number,
});

const ProductItemSchema = new Schema({
  image: {type: String},
  name: {type: String},
  description: {type: String},
  category: {type: mongoose.Types.ObjectId},
  basePrice: {type: Number},
  sizes: {type:[BrandPriceSchema]},
  brandPrices: {type:[BrandPriceSchema]},
}, {timestamps: true});

export const ProductItem = models?.ProductItem || model('ProductItem', ProductItemSchema);