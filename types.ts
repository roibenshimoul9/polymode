
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
}

export type Category = 'הכל' | 'דגמים ודמויות תלת־ממד' | 'פידג\'טים' | 'אביזרים' | 'יודאיקה' | 'בעלי חיים' | 'DIY';

export type PurchaseType = 'דיגיטלי' | 'פיזי';

export interface CartItem extends Model3D {
  quantity: number;
  purchaseType: PurchaseType;
}

// Added User interface to fix import errors in components/LoginModal.tsx and components/PersonalArea.tsx
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedAt: string;
}
