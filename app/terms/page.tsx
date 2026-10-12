import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '@/components/legal/LegalDocument';

export const metadata: Metadata = {
  title: 'Terms of Service · Arrab',
  description:
    'Arrab Solutions Global Terms of Service — شروط الاستخدام governing use of our website, app, and AI services.',
};

const toc = [
  { id: 'eligibility', label: '1. Eligibility / الأهلية' },
  { id: 'service', label: '2. Service / وصف الخدمة' },
  { id: 'acceptable-use', label: '3. Acceptable use / الاستخدام المقبول' },
  { id: 'ip', label: '4. IP / المدخلات والمخرجات' },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service · Arrab"
      description="Arrab Solutions Global Terms of Service — شروط الاستخدام."
      active="terms"
      toc={toc}
      bilingual
    >
      <p className="eyebrow">Legal · قانوني</p>
      <h1>
        Terms of Service
        <span className="title-ar" lang="ar" dir="rtl">
          شروط الاستخدام
        </span>
      </h1>
      <p className="meta">
        Effective as of the date published on the website and app · سارية اعتباراً من تاريخ النشر على
        الموقع والتطبيق
      </p>
      <p className="meta">Last Updated: 12/10/2026 · آخر تحديث: 12/10/2026</p>

      <p className="bilingual-ar" lang="ar" dir="rtl">
        تحدد هذه الشروط أحكام استخدامك لموقع وتطبيق آراب سلوشنز جلوبال وما تقدمه الشركة من خدمات ذكاء
        اصطناعي، بما في ذلك النماذج التوليدية والمحادثة الآلية والواجهات البرمجية (API). باستخدامك
        للخدمة فإنك توافق على الالتزام بهذه الشروط.
      </p>
      <p className="lead">
        These Terms govern your use of the Arrab Solutions Global website and application and the AI
        services we provide, including generative models, conversational AI, and application
        programming interfaces (APIs). By using the Service, you agree to be bound by these Terms.
      </p>

      <div className="note">
        Related: <Link href="/privacy">Privacy Policy</Link> ·{' '}
        <Link href="/privacy">سياسة الخصوصية</Link>
      </div>

      <h2 id="eligibility">
        1. Eligibility and Account Registration
        <span lang="ar" dir="rtl">
          1. الأهلية وإنشاء الحساب
        </span>
      </h2>
      <p className="bilingual-ar" lang="ar" dir="rtl">
        يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام الخدمة بشكل مستقل، ويجوز للقُصّر بين 13 و 18 عاماً
        استخدامها بإشراف وموافقة ولي الأمر. أنت مسؤول عن دقة بيانات حسابك وسرية بيانات الدخول الخاصة
        بك، وعن جميع الأنشطة التي تتم من خلال حسابك.
      </p>
      <p>
        You must be at least 18 years old to use the Service independently. Minors between 13 and 18
        may use the Service under the supervision and consent of a parent or guardian. You are
        responsible for the accuracy of your account information, for keeping your login credentials
        confidential, and for all activity that occurs under your account.
      </p>

      <h2 id="service">
        2. Description of the Service
        <span lang="ar" dir="rtl">
          2. وصف الخدمة
        </span>
      </h2>
      <p className="bilingual-ar" lang="ar" dir="rtl">
        تقدم آراب سلوشنز جلوبال حلول ذكاء اصطناعي تشمل نماذج لغوية توليدية، مساعدين ومحادثات آلية
        (Chatbots)، وواجهات برمجية (API) لدمج هذه القدرات في أنظمة العملاء. قد تتغير ميزات الخدمة أو
        تُضاف أو تُزال أو يُوقف بعضها من وقت لآخر دون إشعار مسبق إذا استلزم ذلك تحسين الخدمة أو
        الامتثال للأنظمة المعمول بها.
      </p>
      <p>
        Arrab Solutions Global provides AI solutions including generative language models, AI
        assistants and chatbots, and application programming interfaces (APIs) for integrating these
        capabilities into customers’ systems. Service features may change, be added, removed, or
        discontinued from time to time without prior notice where necessary to improve the Service or
        comply with applicable regulations.
      </p>

      <h2 id="acceptable-use">
        3. Acceptable Use
        <span lang="ar" dir="rtl">
          3. الاستخدام المقبول
        </span>
      </h2>
      <p className="bilingual-ar" lang="ar" dir="rtl">
        يُحظر استخدام الخدمة في أي غرض غير قانوني أو ضار، بما يشمل على سبيل المثال لا الحصر: انتهاك
        حقوق الملكية الفكرية للغير، توليد محتوى مضلل أو منتحل للهوية، تطوير أو نشر برمجيات ضارة،
        محاولة الوصول غير المصرح به لأنظمتنا أو الهندسة العكسية للنماذج، واستخدام الخدمة لإيذاء
        القاصرين أو التحرش أو التمييز. تفاصيل إضافية واردة في سياسة الاستخدام المقبول للذكاء
        الاصطناعي الخاصة بنا.
      </p>
      <p>
        You may not use the Service for any unlawful or harmful purpose, including but not limited
        to: infringing the intellectual property rights of others, generating misleading or
        impersonating content, developing or distributing malware, attempting unauthorized access to
        our systems or reverse-engineering our models, and using the Service to harm minors, harass,
        or discriminate. Further detail is provided in our AI Acceptable Use Policy.
      </p>

      <h2 id="ip">
        4. Inputs, Outputs, and Intellectual Property
        <span lang="ar" dir="rtl">
          4. المدخلات والمخرجات وحقوق الملكية
        </span>
      </h2>
      <p className="bilingual-ar" lang="ar" dir="rtl">
        تحتفظ بحقوقك في المحتوى الذي تُدخله إلى الخدمة (المدخلات)، وتمنحنا ترخيصاً محدوداً لمعالجته
        بغرض تقديم الخدمة. نمنحك الحق في استخدام المخرجات الناتجة عن استخدامك للخدمة وفقاً لهذه
        الشروط، مع العلم أن المخرجات قد تتشابه مع مخرجات مستخدمين آخرين نظراً لطبيعة النماذج
        التوليدية. تبقى جميع الحقوق في النماذج والتقنية الأساسية للخدمة ملكاً لآراب سلوشنز جلوبال.
      </p>
      <p>
        You retain your rights in the content you input into the Service (Inputs), and you grant us
        a limited license to process it for the purpose of providing the Service. We grant you the
        right to use the outputs resulting from your use of the Service in accordance with these
        Terms, noting that outputs may be similar to outputs from other users given the nature of
        generative models. All rights in the models and the underlying technology of the Service
        remain the property of Arrab Solutions Global.
      </p>

      <p className="footer">
        © 2026 Arrab Solutions Global. All rights reserved. Related:{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalDocument>
  );
}
