
export interface Model3D {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  description: string;
  fileFormat: string[];
  vertices: string;
  isOnSale: boolean;
  isPrintReady?: boolean;
  recommendedMaterial?: string;
}

export type Category = 'הכל' | 'דמויות' | 'אביזרים' | 'יודאיקה' | 'DIY' | 'קבצי הדפסת תלת מימד';

export type PurchaseType = 'דיגיטלי' | 'פיזי';

export interface CartItem extends Model3D {
  quantity: number;
  purchaseType: PurchaseType;
}
