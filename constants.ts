import { Model3D } from './types';

export const MODELS: Model3D[] = [
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
      'https://picsum.photos/seed/cyber2/800/600',
      'https://picsum.photos/seed/cyber3/800/600'
    ],
    description: 'דמות סייברפאנק מפורטת במיוחד. כולל גרסה מיוחדת מותאמת להדפסת שרף (Resin). המודל כולל טקסטורות PBR איכותיות.',
    fileFormat: ['FBX', 'STL', 'OBJ'],
    vertices: '120k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'שרף (Resin) / Tough SLA'
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
  },
  {
    id: '2',
    name: 'רכב עתידני Neo-Tokyo',
    category: 'אביזרים',
    price: 85.00,
    rating: 4.7,
    reviewsCount: 64,
    images: [
      'https://picsum.photos/seed/car1/800/600',
      'https://picsum.photos/seed/car2/800/600'
    ],
    description: 'מודל רכב בעיצוב עתידני נקי. מושלם למשחקי מחשב או כפריט אספנות מודפס.',
    fileFormat: ['OBJ', 'BLEND'],
    vertices: '45k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA משי (Silk)'
  },
  {
    id: '7',
    name: 'מנורת שבעת הקנים מודרנית',
    category: 'יודאיקה',
    price: 195.00,
    originalPrice: 250.00,
    rating: 5.0,
    reviewsCount: 42,
    images: [
      'https://picsum.photos/seed/menorah1/800/600',
      'https://picsum.photos/seed/menorah2/800/600'
    ],
    description: 'עיצוב גאומטרי מודרני למנורה. אופטימלי להדפסה בחומרים דמויי מתכת או פליז.',
    fileFormat: ['STL', 'OBJ'],
    vertices: '85k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA מטאלי / נחושת'
  },
  {
    id: '8',
    name: 'בית מזוזה "שדי" מינימליסטי',
    category: 'יודאיקה',
    price: 40.00,
    rating: 4.8,
    reviewsCount: 89,
    images: [
      'https://picsum.photos/seed/mezuzah1/800/600'
    ],
    description: 'בית מזוזה מעוצב בקווים נקיים. כולל חריץ פנימי מותאם לקלף סטנדרטי.',
    fileFormat: ['STL', 'STEP'],
    vertices: '12k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG לבן / שרף שקוף'
  },
  {
    id: '5',
    name: 'מארז ארגזי מד"ב',
    category: 'אביזרים',
    price: 45.00,
    originalPrice: 70.00,
    rating: 4.8,
    reviewsCount: 215,
    images: [
      'https://picsum.photos/seed/props1/800/600',
      'https://picsum.photos/seed/props1b/800/600'
    ],
    description: '10 וריאציות של ארגזי מדע בדיוני. גאומטריה פשוטה שהופכת אותם למושלמים למתחילים בהדפסה.',
    fileFormat: ['FBX', 'STL'],
    vertices: '2k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'כל סוג של PLA'
  }
];