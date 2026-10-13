export type PlanAudience = 'individual' | 'family' | 'organization';

export type Plan = {
  id: string;
  name: string;
  nameAr: string;
  audience: PlanAudience;
  priceHalalas: number;
  perSeat: boolean;
  seats?: number;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  highlight?: boolean;
  badge?: string;
  badgeAr?: string;
};

/** Public catalog from Arrab Studio. Prices are SAR halalas per month. Legacy plans are omitted. */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    nameAr: 'مجاني',
    audience: 'individual',
    priceHalalas: 0,
    perSeat: false,
    description: 'Your first month is free: start a studio and choose your first companion. After it, pick a paid plan to keep chatting.',
    descriptionAr: 'شهرك الأول مجاني: ابدأ الاستوديو واختر رفيقك الأول. بعده اختر خطة مدفوعة لتواصل المحادثة.',
    features: ['Included usage to start', 'Desktop studio', 'Stops when the allowance is used'],
    featuresAr: ['استخدام للبداية', 'الاستوديو على سطح المكتب', 'يتوقف عند نفاد الرصيد'],
  },
  {
    id: 'starter',
    name: 'Starter',
    nameAr: 'المبتدئ',
    audience: 'individual',
    priceHalalas: 8_000,
    perSeat: false,
    description: 'Daily companions for someone getting started.',
    descriptionAr: 'رفاق يوميون لمن يبدأ.',
    features: ['Monthly token cap', 'Included model credits', 'Desktop studio'],
    featuresAr: ['حد شهري للرموز', 'رصيد نماذج مضمّن', 'الاستوديو على سطح المكتب'],
  },
  {
    id: 'pro',
    name: 'Pro',
    nameAr: 'Pro',
    audience: 'individual',
    priceHalalas: 18_000,
    perSeat: false,
    highlight: true,
    badge: 'Most chosen',
    badgeAr: 'الأكثر اختياراً',
    description: 'Daily work for people who live in Arrab.',
    descriptionAr: 'عمل يومي لمن يعيش داخل عرّاب.',
    features: ['Larger monthly token pool', 'DeepSeek and other model credits', 'Priority model routing', 'Desktop studio'],
    featuresAr: ['رصيد رموز شهري أكبر', 'رصيد DeepSeek ونماذج أخرى', 'أولوية في توجيه النماذج', 'الاستوديو على سطح المكتب'],
  },
  {
    id: 'max',
    name: 'Max',
    nameAr: 'Max',
    audience: 'individual',
    priceHalalas: 39_500,
    perSeat: false,
    badge: 'Max',
    badgeAr: 'الأعلى',
    description: 'The largest individual monthly pool.',
    descriptionAr: 'أكبر رصيد شهري للأفراد.',
    features: ['Largest individual token pool', 'DeepSeek and other model credits', 'Priority routing'],
    featuresAr: ['أكبر رصيد رموز للأفراد', 'رصيد DeepSeek ونماذج أخرى', 'أولوية في التوجيه'],
  },
  {
    id: 'family_free',
    name: 'Family Free',
    nameAr: 'العائلة المجانية',
    audience: 'family',
    priceHalalas: 0,
    perSeat: false,
    seats: 3,
    badge: 'First month',
    badgeAr: 'الشهر الأول',
    description: 'A free first month for the household. After it, choose a paid family plan.',
    descriptionAr: 'شهر أول مجاني للعائلة. بعده اختر خطة عائلية مدفوعة.',
    features: ['Shared household usage', 'Up to 3 seats', 'PIN profiles and parental pause'],
    featuresAr: ['استخدام مشترك للأسرة', 'حتى ٣ مقاعد', 'ملفات برمز PIN وإيقاف أبوي'],
  },
  {
    id: 'family',
    name: 'Family 3',
    nameAr: 'العائلة ٣',
    audience: 'family',
    priceHalalas: 20_000,
    perSeat: false,
    seats: 3,
    description: 'One shared studio for a household of three.',
    descriptionAr: 'استوديو مشترك لأسرة من ثلاثة.',
    features: ['Shared tokens and credits', 'Up to 3 seats', '15 SAR DeepSeek and 50 SAR other credits'],
    featuresAr: ['رموز ورصيد مشتركان', 'حتى ٣ مقاعد', '١٥ ريال DeepSeek و٥٠ ريال لنماذج أخرى'],
  },
  {
    id: 'family_plus',
    name: 'Family 5',
    nameAr: 'العائلة ٥',
    audience: 'family',
    priceHalalas: 30_000,
    perSeat: false,
    seats: 5,
    highlight: true,
    badge: 'Family pick',
    badgeAr: 'اختيار العائلة',
    description: 'More room for a larger household.',
    descriptionAr: 'مساحة أوسع لأسرة أكبر.',
    features: ['Shared tokens and credits', 'Up to 5 seats', '25 SAR DeepSeek and 80 SAR other credits'],
    featuresAr: ['رموز ورصيد مشتركان', 'حتى ٥ مقاعد', '٢٥ ريال DeepSeek و٨٠ ريال لنماذج أخرى'],
  },
  {
    id: 'business',
    name: 'Business',
    nameAr: 'Business',
    audience: 'organization',
    priceHalalas: 40_000,
    perSeat: true,
    seats: 10,
    badge: '10 seats',
    badgeAr: '١٠ مقاعد',
    description: 'Pooled seats and credits for a growing company.',
    descriptionAr: 'مقاعد ورصيد مشترك لشركة تنمو.',
    features: ['400 SAR per seat', '15 million shared monthly tokens', 'Workforce and live map'],
    featuresAr: ['٤٠٠ ريال للمقعد', '١٥ مليون رمز شهري مشترك', 'إدارة الفريق والخريطة الحية'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    nameAr: 'Enterprise',
    audience: 'organization',
    priceHalalas: 70_000,
    perSeat: true,
    seats: 50,
    highlight: true,
    badge: '50 seats',
    badgeAr: '٥٠ مقعداً',
    description: 'The largest pooled allowance for a production team.',
    descriptionAr: 'أكبر رصيد مشترك لفريق يعمل يومياً.',
    features: ['700 SAR per seat', '80 million shared monthly tokens', 'Workforce and live map'],
    featuresAr: ['٧٠٠ ريال للمقعد', '٨٠ مليون رمز شهري مشترك', 'إدارة الفريق والخريطة الحية'],
  },
];

export function plansFor(audience: PlanAudience) {
  return plans.filter((plan) => plan.audience === audience);
}
