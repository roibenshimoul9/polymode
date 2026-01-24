
import { Model3D } from './types';

export const MODELS: Model3D[] = [
  {
    id: 'fidget-vortex',
    name: 'פידג\'ט בצורות תלת מימדי',
    category: 'פידג\'טים',
    price: 35.00,
    originalPrice: 40.00,
    rating: 5.0,
    reviewsCount: 24,
    images: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800&h=600', // תמונה תקינה לטעינה מיידית
      'pictures/fidget.jpg', // נתיב מקומי לבדיקה שלך
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    description: 'סדרת פידג\'טים גאומטריים מהפנטים הכוללת צורות משושה וריבוע בשכבות משולבות. המודל יוצר אפקט ויזואלי של עומק אינסופי (Vortex) בעת משחק. מותאם להדפסה בצבעים מתחלפים.',
    fileFormat: ['STL', 'STEP'],
    vertices: '52k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk (משי) כחול-סגול / Magic PLA'
  },
  {
    id: '1',
    name: 'רונין סייברפאנק',
    category: 'דמויות',
    price: 165.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 128,
    images: [
      'https://picsum.photos/seed/cyber1/800/600',
      'https://picsum.photos/seed/cyber2/800/600'
    ],
    description: 'דמות סייברפאנק מפורטת במיוחד. כולל גרסה מיוחדת מותאמת להדפסת שרף (Resin). המודל כולל טקסטורות PBR איכותיות.',
    fileFormat: ['FBX', 'STL', 'OBJ'],
    vertices: '120k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'שרף (Resin) / Tough SLA'
  },
  {
    id: 'fidget-1',
    name: 'דרקון קריסטל מפרקי',
    category: 'פידג\'טים',
    price: 55.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    description: 'פידג\'ט דרקון גמיש במיוחד המודפס כיחידה אחת (Print-in-place). זז בצורה חלקה ומספק חוויה סנסורית מדהימה.',
    fileFormat: ['STL'],
    vertices: '85k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA משי (Silk) למראה זוהר'
  },
  {
    id: 'custom-diy',
    name: 'עיצוב אישי לפי דרישה',
    category: 'DIY',
    price: 0,
    rating: 5.0,
    reviewsCount: 12,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    description: 'זקוקים למודל ייחודי שאינו קיים בקטלוג? צוות Polymode כאן בשבילכם. אנו מציעים שירותי מידול ועיצוב בתלת-ממד בהתאמה אישית מלאה לפי שרטוט, תמונה או רעיון. צרו איתנו קשר לייעוץ ראשוני והצעת מחיר.',
    fileFormat: ['STL', 'STEP', 'OBJ'],
    vertices: 'בהתאם לעיצוב',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'בהתאמה אישית'
  }
];
