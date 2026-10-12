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
  { id: 'ip', label: '4. IP / المُدخلات والمخرجات' },
  { id: 'billing', label: '5. Billing / الاشتراكات والفوترة' },
  { id: 'disclaimers', label: '6. Disclaimers / إخلاء المسؤولية' },
  { id: 'termination', label: '7. Termination / الإنهاء' },
  { id: 'changes', label: '8. Changes / تعديل الشروط' },
  { id: 'law', label: '9. Governing law / القانون الحاكم' },
  { id: 'contact', label: 'Contact / للتواصل معنا' },
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
      <h1>
        <span className="legal-en">Terms of Service</span>
        <span className="title-ar legal-ar" lang="ar" dir="rtl">
          شروط الاستخدام
        </span>
      </h1>
      <p className="meta meta-en legal-en">Effective as of the date published on the
        website and app</p>
      <p className="meta meta-ar legal-ar" lang="ar" dir="rtl">سارية اعتباراً من تاريخ النشر على الموقع والتطبيق</p>
      <p className="meta meta-en legal-en">Last Updated: 12/10/2026</p>
      <p className="meta meta-ar legal-ar" lang="ar" dir="rtl">آخر تحديث: 12/10/2026</p>

      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        تحدد هذه الشروط أحكام استخدامك لموقع وتطبيق آراب سلوشنز جلوبال وما تقدمه الشركة من خدمات ذكاء
        اصطناعي، بما في ذلك النماذج التوليدية والمحادثة الآلية والواجهات البرمجية (API). باستخدامك
        للخدمة فإنك توافق على الالتزام بهذه الشروط.
      </p>
      <p className="lead legal-en">
        These Terms govern your use of the Arrab Solutions Global website and application and the AI
        services we provide, including generative models, conversational AI, and application
        programming interfaces (APIs). By using the Service, you agree to be bound by these Terms.
      </p>

      <div className="note legal-en">Related: <Link href="/privacy">Privacy Policy</Link></div>
      <div className="note legal-ar" lang="ar" dir="rtl">ذات صلة: <Link href="/privacy">سياسة الخصوصية</Link></div>

      <h2 id="eligibility">
        <span className="legal-en">1. Eligibility and Account Registration</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          1. الأهلية وإنشاء الحساب
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام الخدمة بشكل مستقل، ويجوز للقُصر بين 13 و18 عاماً
        استخدامها بإشراف وموافقة ولي الأمر. أنت مسؤول عن دقة بيانات حسابك وسرية بيانات الدخول الخاصة
        بك، وعن جميع الأنشطة التي تتم من خلال حسابك.
      </p>
      <p className="legal-en">
        You must be at least 18 years old to use the Service independently. Minors between 13 and 18
        may use the Service under the supervision and consent of a parent or guardian. You are
        responsible for the accuracy of your account information, for keeping your login credentials
        confidential, and for all activity that occurs under your account.
      </p>

      <h2 id="service">
        <span className="legal-en">2. Description of the Service</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          2. وصف الخدمة
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        تقدم آراب سلوشنز جلوبال حلول ذكاء اصطناعي تشمل نماذج لغوية توليدية، مساعدين ومحادثات آلية
        (Chatbots)، وواجهات برمجية (API) لدمج هذه القدرات في أنظمة العملاء. قد تتغير ميزات الخدمة أو
        تُضاف أو تُزال أو يُوقف بعضها من وقت لآخر دون إشعار مسبق إذا استلزم ذلك تحسين الخدمة أو
        الامتثال لأنظمة معمول بها.
      </p>
      <p className="legal-en">
        Arrab Solutions Global provides AI solutions including generative language models, AI
        assistants and chatbots, and application programming interfaces (APIs) for integrating these
        capabilities into customers&apos; systems. Service features may change, be added, removed, or
        discontinued from time to time without prior notice where necessary to improve the Service or
        comply with applicable regulations.
      </p>

      <h2 id="acceptable-use">
        <span className="legal-en">3. Acceptable Use</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          3. الاستخدام المقبول
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يُحظر استخدام الخدمة في أي غرض غير قانوني أو ضار، بما يشمل على سبيل المثال لا الحصر: انتهاك
        حقوق الملكية الفكرية للغير، توليد محتوى مضلل أو منتحل الهوية، تطوير أو نشر برمجيات ضارة،
        محاولة الوصول غير المصرح به لأنظمتنا أو الهندسة العكسية للنماذج، واستخدام الخدمة لإيذاء
        القاصرين أو التحرش أو التمييز. تفاصيل إضافية واردة في سياسة الاستخدام المقبول للذكاء
        الاصطناعي الخاصة بنا.
      </p>
      <p className="legal-en">
        You may not use the Service for any unlawful or harmful purpose, including but not limited
        to: infringing the intellectual property rights of others, generating misleading or
        impersonating content, developing or distributing malware, attempting unauthorized access to
        our systems or reverse-engineering our models, and using the Service to harm minors, harass,
        or discriminate. Further detail is provided in our AI Acceptable Use Policy.
      </p>

      <h2 id="ip">
        <span className="legal-en">4. Inputs, Outputs, and Intellectual Property</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          4. المُدخلات والمخرجات وحقوق الملكية
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        تحتفظ بحقوقك في المحتوى الذي تُدخله إلى الخدمة (المُدخلات)، وتمنحنا ترخيصاً محدوداً لمعالجته
        بغرض تقديم الخدمة. نمنحك الحق في استخدام المخرجات الناتجة عن استخدامك للخدمة وفقاً لهذه
        الشروط، مع العلم أن المخرجات قد تتشابه مع مخرجات مستخدمين آخرين نظراً لطبيعة النماذج
        التوليدية. تبقى جميع الحقوق في النماذج والتقنية الأساسية للخدمة ملكاً لآراب سلوشنز جلوبال.
      </p>
      <p className="legal-en">
        You retain your rights to the content you submit to the Service (&quot;Inputs&quot;) and grant
        us a limited license to process it for the purpose of providing the Service. We grant you the
        right to use Outputs generated through your use of the Service in accordance with these Terms,
        noting that Outputs may be similar to outputs received by other users due to the nature of
        generative models. All rights in the underlying models and technology of the Service remain
        the property of Arrab Solutions Global.
      </p>

      <h2 id="billing">
        <span className="legal-en">5. Subscriptions and Billing</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          5. الاشتراكات والفوترة
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        قد تتطلب بعض ميزات الخدمة اشتراكاً مدفوعاً يُجدد تلقائياً في نهاية كل دورة فوترة ما لم يُلغَ
        قبل تاريخ التجديد. الأسعار قابلة للتغيير مع إشعار مسبق مناسب. المبالغ المدفوعة غير قابلة
        للاسترداد إلا في الحالات التي يقتضيها النظام المعمول به في المملكة العربية السعودية.
      </p>
      <p className="legal-en">
        Certain features of the Service may require a paid subscription that automatically renews at
        the end of each billing cycle unless cancelled before the renewal date. Prices are subject to
        change with reasonable prior notice. Amounts paid are non-refundable except as required by
        applicable law in the Kingdom of Saudi Arabia.
      </p>

      <h2 id="disclaimers">
        <span className="legal-en">6. Disclaimers and Limitation of Liability</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          6. إخلاء المسؤولية وحدود المسؤولية
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        تُقدَّم الخدمة &quot;كما هي&quot; دون أي ضمانات من أي نوع. قد تُنتج أنظمة الذكاء الاصطناعي
        مخرجات غير دقيقة أو غير مكتملة، ولا يجوز الاعتماد عليها كبديل عن استشارة مهنية (طبية أو
        قانونية أو مالية). إلى أقصى حد يسمح به النظام، لا تتحمل آراب سلوشنز جلوبال المسؤولية عن أي
        أضرار غير مباشرة أو تبعية ناتجة عن استخدام الخدمة.
      </p>
      <p className="legal-en">
        The Service is provided &quot;as is&quot; without warranties of any kind. AI systems may
        produce inaccurate or incomplete outputs and should not be relied upon as a substitute for
        professional (medical, legal, or financial) advice. To the maximum extent permitted by law,
        Arrab Solutions Global shall not be liable for any indirect or consequential damages arising
        from use of the Service.
      </p>

      <h2 id="termination">
        <span className="legal-en">7. Termination</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          7. الإنهاء
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يجوز لنا تعليق أو إنهاء وصولك إلى الخدمة في حال مخالفة هذه الشروط أو سياسة الاستخدام المقبول،
        ويجوز لك إنهاء استخدامك للخدمة أو إلغاء اشتراكك في أي وقت من خلال إعدادات حسابك.
      </p>
      <p className="legal-en">
        We may suspend or terminate your access to the Service in the event of a breach of these Terms
        or the Acceptable Use Policy. You may stop using the Service or cancel your subscription at
        any time through your account settings.
      </p>

      <h2 id="changes">
        <span className="legal-en">8. Changes to These Terms</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          8. تعديل الشروط
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يجوز لنا تحديث هذه الشروط من وقت لآخر، وسيتم نشر أي تعديلات جوهرية على الموقع والتطبيق مع
        تحديث تاريخ &quot;آخر تحديث&quot; أعلاه. استمرارك في استخدام الخدمة بعد سريان التعديلات يُعد
        موافقة عليها.
      </p>
      <p className="legal-en">
        We may update these Terms from time to time. Material changes will be posted on our website
        and app with an updated &quot;Last Updated&quot; date above. Your continued use of the Service
        after such changes take effect constitutes acceptance of them.
      </p>

      <h2 id="law">
        <span className="legal-en">9. Governing Law and Dispute Resolution</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          9. القانون الحاكم وتسوية النزاعات
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        نخدم عملاءنا ومستخدمينا حول العالم، إلا أن هذه الشروط تخضع وتُفسَّر وفقاً لأنظمة المملكة
        العربية السعودية باعتبارها دولة تأسيس وتسجيل آراب سلوشنز جلوبال (س.ت. 7053712191)، وتختص
        محاكم المملكة بالفصل في أي نزاع ينشأ عنها، دون إخلال بحق أي طرف في اللجوء إلى التسوية الودية
        أولاً. لا يُخل ما سبق بأي حقوق حماية للمستهلك ذات طابع إلزامي قد تتمتع بها بموجب أنظمة بلد
        إقامتك، متى كانت تلك الأنظمة تمنحك حقوقاً لا يجوز التنازل عنها بالاتفاق.
      </p>
      <p className="legal-en">
        We serve customers and users around the world, however these Terms are governed by and
        construed in accordance with the laws of the Kingdom of Saudi Arabia, as the country of
        incorporation and registration of Arrab Solutions Global (CR No. 7053712191). The courts of
        the Kingdom shall have jurisdiction over any dispute arising from these Terms, without
        prejudice to either party&apos;s right to first seek amicable settlement. Nothing above limits
        any mandatory consumer protection rights you may have under the laws of your country of
        residence, to the extent those laws grant you rights that cannot be waived by agreement.
      </p>

      <h2 id="contact">
        <span className="legal-en">Contact Us</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          للتواصل معنا
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        لأي استفسار بخصوص هذه الوثيقة، يرجى التواصل عبر البريد الإلكتروني الموضح في الموقع الرسمي أو
        التطبيق.
      </p>
      <p className="legal-en">
        For any inquiries regarding this document, please contact us via the email address listed on
        our official website or app:{' '}
        <a href="mailto:legal@arrabai.com">legal@arrabai.com</a>.
      </p>

      <p className="footer legal-en">© 2026 Arrab Solutions Global. All rights reserved. Related: <Link href="/privacy">Privacy Policy</Link>.</p>
      <p className="footer legal-ar" lang="ar" dir="rtl">© 2026 آراب سلوشنز جلوبال. جميع الحقوق محفوظة. ذات صلة: <Link href="/privacy">سياسة الخصوصية</Link>.</p>
    </LegalDocument>
  );
}
