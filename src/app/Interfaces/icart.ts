export interface Icart {
  numOfCartItems: number;
  data: cartData;
}

interface cartData {
  totalCartPrice: number;
  products: cartProduct[];
}

interface cartProduct {
  count: number;
  price: number;
  product: innerProduct;
}

interface innerProduct {
  id: string;
  imageCover: string;
  quantity: number;
  title: string;
  category: cartProductCatergory;
}
interface cartProductCatergory {
  name: string;
}
