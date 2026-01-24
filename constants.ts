
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
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281836/6_uw0bpf.png', // תמונה תקינה לטעינה מיידית
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281837/7%D7%AA%D7%9E%D7%95%D7%A0%D7%946_ofbygj.png', // נתיב מקומי לבדיקה שלך
    
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
    name: 'פידגט מרובע היפנוטי',
    category: 'פידג\'טים',
    price: 35.00,
    rating: 4.9,
    reviewsCount: 128,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281832/2_uwagt1.png',
    ],
    description: 'פידג\'ט גאומטרי מרגיע המבוסס על תנועה סיבובית של ריבועים משולבים. העיצוב יוצר אשליה אופטית היפנוטית בזמן המשחק ומספק חוויה סנסורית נעימה. קל להדפסה ואינו דורש תמיכות.',
    fileFormat: ['STL', 'OBJ'],
    vertices: '35k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA בצבעים ניגודיים'
  },
  {
    id: 'fidget-1',
    name: 'קונוס ספירלה ',
    category: 'פידג\'טים',
    price: 55.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281831/%D7%AA%D7%9E%D7%95%D7%A0%D7%941_u4arvl.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769282456/%D7%91%D7%92%D7%9B_jfa6ar.png'
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
   {
    id: 'fidget-4',
    name: 'פידגט משושה היפנוטי ',
    category: 'פידג\'טים',
    price: 40.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281833/3_lcpnlj.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281834/4_wuuzbh.png'
    ],
    description: 'פידג\'ט דרקון גמיש במיוחד המודפס כיחידה אחת (Print-in-place). זז בצורה חלקה ומספק חוויה סנסורית מדהימה.',
    fileFormat: ['STL'],
    vertices: '85k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA משי (Silk) למראה זוהר'
  },
];
