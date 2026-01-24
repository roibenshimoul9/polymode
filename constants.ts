
import { Model3D } from './types';

export const PRINT_FEE = 90.00;

export const MODELS: Model3D[] = [
  {
    id: 'apple-watch-magsafe-stand',
    name: 'מעמד אפל וואטש ומג סייף לאייפון',
    category: 'אביזרים',
    price: 85.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769288939/%D7%97%D7%97%D7%97_jwwufl.png'
    ],
    description: 'מעמד יוקרתי ומעוצב המשלב טעינה ל-Apple Watch וטעינת MagSafe לאייפון. פתרון אלגנטי לשולחן העבודה או לשידת הלילה, השומר על הסדר ומציג את המכשירים בזווית צפייה נוחה. עוצב בדיוק מרבי למעבר כבלים נקי ומראה נקי על השולחן.',
    fileFormat: ['STL'],
    vertices: '145k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / Matte PLA למראה פרימיום'
  },
  {
    id: 'fidget-poker-chip',
    name: 'גיטון פידגט',
    category: 'פידג\'טים',
    price: 35.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769288644/%D7%97%D7%97_iv7yyq.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769288262/%D7%97%D7%A3%D7%97_vxxzu6.png'
    ],
    description: 'גיטון פידג\'ט (Poker Chip) בעיצוב יוקרתי ומספק. מורכב מחלקים מגנטיים המאפשרים סיבוב, החלקה ותקתוק נעים במיוחד. מושלם להפגת מתחים, שיפור הריכוז ותעסוקה לידיים בזמן עבודה או לימודים.',
    fileFormat: ['STL'],
    vertices: '65k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / PETG למגע חלק ועמידות'
  },
  {
    id: 'hair-dryer-stand',
    name: 'מעמד לפן',
    category: 'אביזרים',
    price: 50.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769287799/%D7%9C%D7%9C%D7%9C_zvc1ws.png'
    ],
    description: 'מעמד ארגונומי ומעוצב למייבש שיער (פן). פתרון מושלם לארגון חדר האמבטיה או שולחן האיפור. עוצב להתאמה למגוון רחב של דגמי מייבשי שיער, כולל מקום לכבל המזנה. יציב ועמיד מאוד.',
    fileFormat: ['STL'],
    vertices: '110k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG (עמיד יותר בחום למקרה שהפן עדיין חם)'
  },
  {
    id: 'fidget-clicker',
    name: 'קליקר פידגט',
    category: 'פידג\'טים',
    price: 30.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769286620/%D7%93%D7%92_nwwz6k.png'
    ],
    description: 'קליקר פידג\'ט קומפקטי וממכר המדמה לחיצה על מתג מכני. מושלם להפגת מתחים, שיפור הריכוז ותעסוקה לידיים. עיצוב ארגונומי שמתאים בדיוק לכיס או לכף היד.',
    fileFormat: ['STL'],
    vertices: '45k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA / PETG (לחיצה עמידה יותר)'
  },
  {
    id: 'fidget-vortex',
    name: 'פידג\'ט בצורות תלת מימדי',
    category: 'פידג\'טים',
    price: 35.00,
    originalPrice: 40.00,
    rating: 5.0,
    reviewsCount: 24,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281836/6_uw0bpf.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281837/7%D7%AA%D7%9E%D7%95%D7%A0%D7%946_ofbygj.png',
    ],
    description: 'סדרת פידג\'טים גאומטריים מהפנטים הכוללת צורות משושה וריבוע בשכבות משולבות. המודל יוצר אפקט ויזואלי של עומק אינסופי (Vortex) בעת משחק. מותאם להדפסה בצבעים מתחלפים.',
    fileFormat: ['STL', 'STEP'],
    vertices: '52k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk (משי) כחול-סגול / Magic PLA'
  },
  {
    id: 'dog-treat-spinner',
    name: 'משחק חטיפים מסתובב לכלב',
    category: 'בעלי חיים',
    price: 60.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769286619/%D7%AA%D7%AA_locaxd.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769286620/%D7%93%D7%A9%D7%92_itzmxj.png'
    ],
    description: 'מתקן האכלה ומשחק אינטראקטיבי לכלבים. הכלב צריך לסובב את המכלים כדי לגרום לחטיפים ליפול החוצה. מעסיק את הכלב לאורך זמן ומעודד פעילות קוגניטיבית. בנוי מחלקים עמידים הניתנים לשטיפה.',
    fileFormat: ['STL'],
    vertices: '180k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG (בטוח למזון ועמיד יותר מפני נשיכות)'
  },
  {
    id: 'fidget-formula-wheel',
    name: 'הגה פורמולה עם הילוכים',
    category: 'פידג\'טים',
    price: 45.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281835/5_guhhwg.png'
    ],
    description: 'פידג\'ט הגה פורמולה 1 ייחודי הכולל הילוכים מתקתקים. חוויה סנסורית מושלמת לחובבי רכב ומהירות. עוצב במיוחד לתנועה חלקה וסיפוק מרבי בכל לחיצה וסיבוב.',
    fileFormat: ['STL'],
    vertices: '120k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk שחור או פחם למראה ספורטיבי'
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
    name: 'קונוס ספירלה',
    category: 'פידג\'טים',
    price: 55.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281831/%D7%AA%D7%9E%D7%95%D7%A0%D7%941_u4arvl.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769282456/%D7%91%D7%92%D7%9B_jfa6ar.png'
    ],
    description: 'מודל קונוס ספירלי ייחודי המיועד למשחק והפגת מתחים. המבנה האווירודינמי שלו מאפשר תנועה חלקה וסיבוב ממושך.',
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
  },
  {
    id: 'fidget-4',
    name: 'פידגט משושה היפנוטי',
    category: 'פידג\'טים',
    price: 40.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 342,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281833/3_lcpnlj.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769281834/4_wuuzbh.png'
    ],
    description: 'גרסת המשושה היוקרתית של סדרת הפידג\'טים ההיפנוטיים. מבנה חזק ותנועה סימטרית מושלמת.',
    fileFormat: ['STL'],
    vertices: '85k',
    isOnSale: true,
    isPrintReady: true,
    recommendedMaterial: 'PLA משי (Silk) למראה זוהר'
  }
];
