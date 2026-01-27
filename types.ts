
export interface Model3D {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  description: string;
  fileFormat: string[];
  vertices: string;
  isOnSale: boolean;
  isPrintReady?: boolean;
  recommendedMaterial?: string;
  printFee?: number;
  createdAt: string; // ISO date string: YYYY-MM-DD
}

export type Category = 'הכל' | 'דגמים ודמויות תלת־ממד' | 'פידג\'טים' | 'אביזרים' | 'יודאיקה ולבית' | 'בעלי חיים' | 'DIY';

export type PurchaseType = 'דיגיטלי' | 'פיזי';

export interface CartItem extends Model3D {
  quantity: number;
  purchaseType: PurchaseType;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedAt: string;
}
