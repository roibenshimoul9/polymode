
import { Model3D } from './types';

export const PRINT_FEE = 90.00;

// Removed daysAgo helper since we use static dates now

export const MODELS: Model3D[] = [
  {
    id: 'custom-designed-mezuzah',
    name: 'מזוזה בעיצוב אישי',
    category: 'יודאיקה ולבית',
    price: 59.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781729154/1E19CBAB-A315-4C2D-AF1C-0D585347798F_zy1gsr.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781729153/8FD80AEB-A37D-44DD-9258-39D1CD9C5D9F_lkglji.png'
    ],
    description: 'בית מזוזה מעוצב בעיצוב מודרני ואלגנטי, הניתן להתאמה אישית מלאה. מודפס בתלת-ממד ברמת גימור יוצאת דופן. המזוזה משלבת הידור ומסורת עם מראה נקי המעניק סגנון ייחודי לכל פתח וכניסה.',
    fileFormat: ['STL'],
    vertices: '55k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / PETG',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'custom-designed-netla',
    name: 'נטלה מעוצבת בעיצוב אישי',
    category: 'יודאיקה ולבית',
    price: 59.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375974/AFDC081C-32FA-40F2-8AA9-88DDBE45D529_yflvt6.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377176/IMG_4192_cht4u5.png'
    ],
    description: 'נטלה (ספל נטילת ידיים) מעוצבת הניתנת להתאמה אישית מלאה. מודפסת בתלת-ממד ברמת גימור גבוהה, המשלבת מסורת עם חדשנות. ניתן לבחור צבעים ייחודיים ולהוסיף חריטת שם או הקדשה אישית.',
    fileFormat: ['STL'],
    vertices: '85k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG / PLA',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'designed-key-hanger',
    name: 'מתלה למפתחות מעוצב',
    category: 'יודאיקה ולבית',
    price: 79.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375974/C60A01C5-8E6F-46FC-A649-508D729EEFEE_heyybb.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377178/6BA7EA08-305C-429E-B8EA-9D8B7D546C11_dnikib.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377178/temp_2_dniyom.png'
    ],
    description: 'מתלה מפתחות מעוצב לקיר, מודפס בתלת-ממד. משלב עיצוב מודרני ואלגנטי עם פונקציונליות מושלמת לסדר בכניסה לבית, לשמור על המפתחות מאורגנים ולהוסיף חן לקיר.',
    fileFormat: ['STL'],
    vertices: '60k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA / PETG',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'dog-bowl-designed',
    name: 'קערה מעוצבת לכלב',
    category: 'בעלי חיים',
    price: 79.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375974/5422A719-8183-4B68-9624-8C3393B6BACD_dnc33z.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377175/temp_aglsve.png'
    ],
    description: 'קערה מעוצבת לכלב מודפסת בתלת-ממד, המשלבת פונקציונליות עם מראה מודרני מיוחד. מותאמת לארוחות יומיומיות של חיית המחמד שלכם ומכניסה טאץ׳ עיצובי לבית.',
    fileFormat: ['STL'],
    vertices: '75k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG / PLA',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'stone-pattern-planter',
    name: 'אדנית לעציץ דגם אבן',
    category: 'יודאיקה ולבית',
    price: 69.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375974/1E5D6775-9B4E-4BA7-8CDD-1D32161608E0_brf8or.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377177/4E793025-4405-4E0C-9241-9952ED067259_qzruwn.png'
    ],
    description: 'אדנית לעציץ בעיצוב דמוי אבן טבעית מודפסת בתלת-ממד. שילוב מושלם של מראה כפרי ואותנטי עם טכנולוגיה מודרנית. מתאימה לשימוש פנים ומוסיפה טאץ\' עיצובי מיוחד לכל צמח.',
    fileFormat: ['STL'],
    vertices: '120k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Marble / Stone',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'home-stand-decorative',
    name: 'מעמד HOME לבית',
    category: 'יודאיקה ולבית',
    price: 79.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375990/5FBE3572-FA1A-412D-8E8F-C63AD0B86128_xgb1sl.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377177/CAAB55DC-75C0-42B7-A651-70E3CC25ABEE_hx1zcu.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377176/IMG_4180_c1rjxv.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377178/IMG_4178_jzx5cx.jpg'
    ],
    description: 'מעמד דקורטיבי לבית בעיצוב המילה HOME, מודפס בתלת-ממד. פריט עיצוב נקי ומרשים שמתאים לכל קונסולה או מדף, ומוסיף חום ואווירה ביתית נעימה. מושלם כמתנה מקורית או לשדרוג העיצוב בבית.',
    fileFormat: ['STL'],
    vertices: '40k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'decorative-home-tray',
    name: 'מגש דקורטיבי לבית',
    category: 'יודאיקה ולבית',
    price: 99.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781375974/D6C96A18-5368-4830-B563-3144937A221B_mfcrgi.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377177/temp_3_mkgkow.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1781377177/93CADD21-242B-4340-BBC4-755CBC26D474_prghoe.png'
    ],
    description: 'מגש דקורטיבי ויוקרתי מודפס בתלת-ממד. פריט עיצובי מרשים ופונקציונלי שיוסיף טאץ\' מודרני לחלל הבית. מושלם להגשה, לארגון פריטים על השולחן או כפריט נוי אלגנטי לעיצוב פנים.',
    fileFormat: ['STL'],
    vertices: '80k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / Marble',
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: 'car-honeycomb-keychain',
    name: 'מחזיק מפתחות לרכב לכל סוגי הרכבים דגם כוורת',
    category: 'מוצרים לרכב',
    price: 35.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780420247/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-06-02_201031_srm9rr.png',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780420200/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-06-02_200932_vie1z7.png'
    ],
    description: 'מחזיק מפתחות מעוצב בדוגמת כוורת (Honeycomb) יוקרתית וספורטיבית, המותאם אישית לכל סוגי הרכבים. קל משקל, עמיד במיוחד ובעל מראה תלת-ממדי ייחודי שישדרג את צרור המפתחות שלכם.',
    fileFormat: ['STL'],
    vertices: '45k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG / PLA Silk',
    createdAt: '2026-06-01'
  },
  {
    id: 'car-spinner-keychain',
    name: 'מחזיק ספינר למפתחות לכל סוגי הרכבים',
    category: 'מוצרים לרכב',
    price: 35.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780419259/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-06-02_194714_tgtzgj.png'
    ],
    description: 'מחזיק מפתחות ספינר ייחודי וממכר המתאים לכל סוגי הרכבים ומחזיקי המפתחות. מושלם לסיבוב והפגת מתחים בזמן נהיגה, שהייה בפקקים או סתם בשעות הפנאי. פריט חובה לחובבי רכב ועיצוב אישי!',
    fileFormat: ['STL'],
    vertices: '64k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / PETG (עמיד וחזק)',
    createdAt: '2026-06-01'
  },
  {
    id: 'netanyahu-crown-statue',
    name: 'פסלון בנימין נתניהו עם כתר',
    category: 'דגמים ודמויות תלת־ממד',
    price: 99.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780419251/IMG_4076_uj1jf0.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780419251/IMG_4075_u0rvcv.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1780419251/IMG_4074_ysre0n.jpg'
    ],
    description: 'פסלון דיוקן ייחודי ומשעשע של בנימין נתניהו מעוטר בכתר. הדגם מודפס ברמת דיוק ורזולוציה גבוהה במיוחד, פריט עיצוב יוצא דופן למשרד, לבית או כמתנה בלתי נשכחת.',
    fileFormat: ['STL'],
    vertices: '180k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'Silk Gold (משי זהב) / Marble PLA',
    createdAt: '2026-06-01'
  },
  {
    id: 'ps5-wall-mount',
    name: 'מתקן תלייה על הקיר לסוני פלייסטיישן',
    category: 'אביזרים',
    price: 40.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769545574/IMG_2995_n6ykla.jpg'
    ],
    description: 'מתקן תלייה איכותי וחזק המיועד להתקנה קלה של קונסולת ה-PlayStation על הקיר. פתרון מושלם לחיסכון במקום, שמירה על אוורור מקסימלי לקונסולה ומראה נקי ומודרני לפינת הגיימינג שלך. מעוצב לעמידות מרבית.',
    fileFormat: ['STL'],
    vertices: '95k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PETG / PLA+ (לחוסן מבני)',
    createdAt: '2026-06-01'
  },
  {
    id: 'dog-leash-rack-custom',
    name: 'מתקן תלייה לרצועה של הכלב עם שם מותאם אישית',
    category: 'בעלי חיים',
    price: 60.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769542883/a275ad11-4889-4789-ba66-f9808ecf7299_tbjqqy.jpg'
    ],
    description: 'מתקן תלייה מעוצב ופרקטי לרצועה של הכלב, הכולל אפשרות להוספת שם הכלב בהתאמה אישית. פתרון מושלם לארגון פינת הכניסה בבית ומתנה נהדרת לכל בעל כלב. חזק, עמיד ומעוצב בטוב טעם.',
    fileFormat: ['STL'],
    vertices: '72k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / PETG',
    createdAt: '2026-05-30' // נוסף אתמול
  },
  {
    id: 'home-door-sign-judaica',
    name: 'שלט לבית (ניתן לבחור במגוון צבעים)',
    category: 'יודאיקה ולבית',
    price: 70.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769542884/650b8513-5f1d-459f-93f2-2c6d6d49c867_v0xxmn.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769542883/B6AEF012-A079-4AAE-9EAC-18CD14C55EEE_nbpizl.jpg'
    ],
    description: 'שלט כניסה מעוצב ומרשים לבית. ניתן להזמין במגוון שילובי צבעים וטקסטורות לבחירתכם. עיצוב נקי ויוקרתי שמוסיף חן לכל דלת כניסה.',
    fileFormat: ['STL'],
    vertices: '88k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'PLA Silk / Marble',
    createdAt: '2026-05-29' // נוסף לפני יומיים
  },
  {
    id: 'hamsa-set-premium',
    name: 'חמסות עם מחזיקי מפתחות ומעמד, וחמסה גדולה',
    category: 'יודאיקה ולבית',
    price: 0,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769541688/IMG_2988_2_eb35gj.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769541688/IMG_2992_kt4z9v.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769541688/IMG_2991_s6j3na.jpg'
    ],
    description: 'סט יודאיקה מרהיב הכולל חמסה גדולה דקורטיבית להצבה על המעמד, בתוספת חמסות קטנות המשמשות כמחזיקי מפתחות תואמים. עיצוב ייחודי המשלב מסורת עם נגיעה מודרנית. מתנה מושלמת לחנוכת בית, משרד חדש או אירועים משפחתיים.',
    fileFormat: ['STL'],
    vertices: '220k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'Silk Gold / Marble PLA / Wood PLA',
    createdAt: '2026-05-27' // נוסף לפני 4 ימים
  },
  {
    id: 'b2-bomber-plane',
    name: 'מטוס B2 מפציץ',
    category: 'דגמים ודמויות תלת־ממד',
    price: 50.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769289210/%D7%99%D7%94%D7%97%D7%98%D7%99_g6goa3.png'
    ],
    description: 'דגם מפורט ומרהיב של המפציץ האסטרטגי החמקן B-2 Spirit. העיצוב משחזר את הקימורים הייחודיים והמראה העתידני של המטוס. פריט חובה לכל חובב תעופה או אספן דגמים צבאיים.',
    fileFormat: ['STL'],
    vertices: '125k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'Matte Black PLA / Galaxy Black',
    createdAt: '2024-01-10'
  },
  {
    id: 'judaica-blessing-candlesticks',
    name: 'פמוטים עם ברכה',
    category: 'יודאיקה ולבית',
    price: 150.00,
    printFee: 0.00,
    rating: 5.0,
    reviewsCount: 0,
    images: [
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769291612/IMG_2891_ec0txc.jpg',
      'https://res.cloudinary.com/djv6v984k/image/upload/v1769291611/IMG_2892_frrtws.jpg'
    ],
    description: 'פמוטי שבת מעוצבים הכוללים את ברכת הדלקת הנרות בחזית המודל. עיצוב אלגנטי המשלב מסורת יהודית עם טכנולוגיה מודרנית. ניתן לבחור במגוון צבעים מרהיבים, כולל טקסטורת שיש (Marble) יוקרתית או צבעי משי (Silk) מבריקים. מתנה מדהימה לחגים, שבתות, חתונה או חנוכת בית.',
    fileFormat: ['STL'],
    vertices: '185k',
    isOnSale: false,
    isPrintReady: true,
    recommendedMaterial: 'Marble PLA / Silk Gold / White Matte',
    createdAt: '2024-01-15'
  },
  {
    id: 'apple-watch-magsafe-stand',
    name: 'מעמד אפל וואטש ומג סייף לאייפון',
    category: 'אביזרים',
    price: 60.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PLA Silk / Matte PLA למראה פרימיום',
    createdAt: '2024-01-20'
  },
  {
    id: 'fidget-poker-chip',
    name: 'גיטון פידגט',
    category: 'פידג\'טים',
    price: 25.00,
    printFee: 0,
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
    recommendedMaterial: 'PLA Silk / PETG למגע חלק ועמידות',
    createdAt: '2024-01-25'
  },
  {
    id: 'hair-dryer-stand',
    name: 'מעמד לפן',
    category: 'אביזרים',
    price: 55.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PETG (עמיד יותר בחום למקרה שהפן עדיין חם)',
    createdAt: '2023-12-15'
  },
  {
    id: 'fidget-clicker',
    name: 'קליקר פידגט',
    category: 'פידג\'טים',
    price: 25.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PLA / PETG (לחיצה עמידה יותר)',
    createdAt: '2023-12-20'
  },
  {
    id: 'fidget-vortex',
    name: 'פידג\'ט בצורות תלת מימדי',
    category: 'פידג\'טים',
    price: 45.00,
    printFee: 0.00,
    originalPrice: 50.00,
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
    recommendedMaterial: 'PLA Silk (משי) כחול-סגול / Magic PLA',
    createdAt: '2023-11-30'
  },
  {
    id: 'dog-treat-spinner',
    name: 'משחק חטיפים מסתובב לכלב',
    category: 'בעלי חיים',
    price: 90.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PETG (בטוח למזון ועמיד יותר מפני נשיכות)',
    createdAt: '2023-12-05'
  },
  {
    id: 'fidget-formula-wheel',
    name: 'הגה פורמולה with הילוכים',
    category: 'פידג\'טים',
    price: 40.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PLA Silk שחור או פחם למראה ספורטיבי',
    createdAt: '2024-02-01'
  },
  {
    id: '1',
    name: 'פידגט מרובע היפנוטי',
    category: 'פידג\'טים',
    price: 40.00,
    printFee: 0.00,
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
    recommendedMaterial: 'PLA בצבעים ניגודיים',
    createdAt: '2023-10-10'
  },
  {
    id: 'fidget-1',
    name: 'קונוס ספירלה',
    category: 'פידג\'טים',
    price: 40.00,
    printFee: 0.00,
    originalPrice: 60.00,
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
    recommendedMaterial: 'PLA משי (Silk) למראה זוהר',
    createdAt: '2023-10-05'
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
    recommendedMaterial: 'בהתאמה אישית',
    createdAt: '2023-01-01'
  },
  {
    id: 'fidget-4',
    name: 'פידגט משושה היפנוטי',
    category: 'פידג\'טים',
    price: 48.00,
    printFee: 0.00,
    originalPrice: 55.00,
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
    recommendedMaterial: 'PLA משי (Silk) למראה זוהר',
    createdAt: '2023-10-01'
  }
];
