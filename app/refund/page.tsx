import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '@/components/legal/LegalDocument';

export const metadata: Metadata = {
  title: 'Refund Policy · Arrab',
  description:
    'Arrab Solutions Global Refund and Cancellation Policy — سياسة الاسترجاع والإلغاء.',
};

const toc = [
  { id: 'cancel', label: '1. Cancellation / إلغاء الاشتراك' },
  { id: 'eligible', label: '2. Eligible refunds / الحالات المؤهلة' },
  { id: 'non-eligible', label: '3. Non-eligible / الحالات غير المؤهلة' },
  { id: 'request', label: '4. How to request / آلية الطلب' },
  { id: 'processing', label: '5. Processing time / مدة المعالجة' },
  { id: 'app-stores', label: '6. App stores / متاجر التطبيقات' },
  { id: 'disputes', label: '7. Disputes / الاعتراض' },
  { id: 'rights', label: '8. Legal rights / حقوقك النظامية' },
  { id: 'changes', label: '9. Changes / التعديلات' },
  { id: 'contact', label: 'Contact / للتواصل معنا' },
];

export default function RefundPage() {
  return (
    <LegalDocument
      title="Refund Policy · Arrab"
      description="Arrab Solutions Global Refund and Cancellation Policy — سياسة الاسترجاع والإلغاء."
      active="refund"
      toc={toc}
      bilingual
    >
      <h1>
        <span className="legal-en">Refund and Cancellation Policy</span>
        <span className="title-ar legal-ar" lang="ar" dir="rtl">
          سياسة الاسترجاع والإلغاء
        </span>
      </h1>
      <p className="meta meta-en legal-en">Effective as of the date published on the
        website and app</p>
      <p className="meta meta-ar legal-ar" lang="ar" dir="rtl">سارية اعتباراً من تاريخ النشر على الموقع والتطبيق</p>
      <p className="meta meta-en legal-en">Last Updated: 12/10/2026</p>
      <p className="meta meta-ar legal-ar" lang="ar" dir="rtl">آخر تحديث: 12/10/2026</p>

      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        توضح هذه السياسة كيفية إلغاء اشتراكك في خدمات آراب سلوشنز جلوبال والحالات التي يحق لك فيها
        استرداد المبالغ المدفوعة، وذلك بما يتوافق مع نظام التجارة الإلكترونية ولوائحه التنفيذية في
        المملكة العربية السعودية.
      </p>
      <p className="lead legal-en">
        This Policy explains how to cancel your subscription to Arrab Solutions Global’s services and
        the circumstances under which you are entitled to a refund, in accordance with the E-Commerce
        Law and its implementing regulations in the Kingdom of Saudi Arabia.
      </p>

      <div className="note legal-en">Related: <Link href="/terms">Terms of Service</Link> · <Link href="/privacy">Privacy Policy</Link></div>
      <div className="note legal-ar" lang="ar" dir="rtl">ذات صلة: <Link href="/terms">شروط الاستخدام</Link> · <Link href="/privacy">سياسة الخصوصية</Link></div>

      <h2 id="cancel">
        <span className="legal-en">1. Cancelling Your Subscription</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          1. إلغاء الاشتراك
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يمكنك إلغاء اشتراكك في أي وقت ومن دون أي رسوم إضافية، وذلك من خلال إعدادات حسابك في الموقع أو
        التطبيق (الحساب ← الاشتراك ← إلغاء الاشتراك). عند الإلغاء، يستمر وصولك إلى الخدمة حتى نهاية
        دورة الفوترة الحالية التي سبق سدادها، ولن يُجدَّد الاشتراك تلقائياً بعد ذلك. وسنرسل إليك رسالة
        تأكيد على بريدك الإلكتروني المسجّل عند اكتمال الإلغاء.
      </p>
      <p className="legal-en">
        You may cancel your subscription at any time and at no additional charge through your account
        settings on the website or app (Account → Subscription → Cancel Subscription). Upon
        cancellation, your access to the Service continues until the end of the current billing cycle
        you have already paid for, and the subscription will not automatically renew thereafter. We will
        send a confirmation to your registered email address once the cancellation is complete.
      </p>

      <h2 id="eligible">
        <span className="legal-en">2. Eligible Refund Cases</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          2. الحالات المؤهلة للاسترداد
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        يحق لك طلب استرداد المبلغ المدفوع كاملاً في الحالات التالية:
      </p>
      <ul className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        <li>إذا قدّمت طلب الإلغاء خلال 14 يوماً من تاريخ أول عملية دفع ولم تستخدم الخدمة بشكل جوهري خلال تلك المدة.</li>
        <li>إذا تكرر خصم المبلغ عن طريق الخطأ (ازدواج الفوترة).</li>
        <li>إذا تعذّر علينا تقديم الخدمة المدفوعة لأسباب تقنية تعود لنا وتعذّر إصلاحها خلال مدة معقولة.</li>
        <li>إذا جرى خصم مبلغ بعد إلغاء اشتراكك بنجاح.</li>
      </ul>
      <p className="legal-en">You are entitled to a full refund of the amount paid in the following cases:</p>
      <ul className="legal-en">
        <li>
          If you submit a cancellation request within 14 days of your first payment and have not made
          substantial use of the Service during that period.
        </li>
        <li>If you were charged twice in error (duplicate billing).</li>
        <li>
          If we are unable to provide the paid Service due to a technical failure on our part that we
          cannot resolve within a reasonable time.
        </li>
        <li>If you were charged after you had successfully cancelled your subscription.</li>
      </ul>

      <h2 id="non-eligible">
        <span className="legal-en">3. Non-Eligible Cases</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          3. الحالات غير المؤهلة للاسترداد
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        لا يحق لك طلب استرداد المبلغ في الحالات التالية:
      </p>
      <ul className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        <li>بعد استخدام الخدمة استخداماً جوهرياً خلال دورة الفوترة الحالية.</li>
        <li>بعد انقضاء المدة المحددة في القسم السابق (14 يوماً) دون تقديم طلب.</li>
        <li>
          في حال إنهاء أو تعليق حسابك بسبب مخالفة شروط الاستخدام أو سياسة الاستخدام المقبول للذكاء
          الاصطناعي.
        </li>
        <li>عن الفترة المتبقية من دورة الفوترة بعد إلغاء الاشتراك، إذ يستمر وصولك إلى الخدمة حتى نهايتها.</li>
      </ul>
      <p className="legal-en">You are not entitled to a refund in the following cases:</p>
      <ul className="legal-en">
        <li>After substantial use of the Service during the current billing cycle.</li>
        <li>
          After the period specified in the previous section (14 days) has lapsed without a request
          being submitted.
        </li>
        <li>
          If your account is terminated or suspended due to a violation of the Terms of Service or the
          AI Acceptable Use Policy.
        </li>
        <li>
          For the remaining part of a billing cycle after you cancel, since your access to the Service
          continues until its end.
        </li>
      </ul>

      <h2 id="request">
        <span className="legal-en">4. How to Request a Refund</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          4. آلية تقديم طلب الاسترداد
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        لتقديم طلب استرداد، يُرجى التواصل معنا عبر البريد الإلكتروني{' '}
        <a href="mailto:refund@arrabai.com">refund@arrabai.com</a> مع ذكر البريد الإلكتروني المسجّل في
        حسابك، وسبب الطلب، وتاريخ عملية الدفع. سنقوم بمراجعة طلبك والرد عليك خلال 5 أيام عمل. وقد نطلب
        منك معلومات إضافية للتحقق من الطلب، وسيتم إشعارك بالقرار وأسبابه عبر البريد الإلكتروني.
      </p>
      <p className="legal-en">
        To submit a refund request, please contact us at{' '}
        <a href="mailto:refund@arrabai.com">refund@arrabai.com</a>, including the email address
        registered to your account, the reason for the request, and the date of the payment. We will
        review your request and respond within 5 business days. We may ask you for additional
        information to verify the request, and you will be notified of the decision and its reasons by
        email.
      </p>

      <h2 id="processing">
        <span className="legal-en">5. Refund Processing Time</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          5. مدة معالجة المبالغ المرتجعة
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        عند الموافقة على طلبك، سيتم إعادة المبلغ كاملاً، شاملاً ضريبة القيمة المضافة، إلى وسيلة الدفع
        الأصلية التي استخدمتها خلال 5 أيام عمل من تاريخ الموافقة. وقد تختلف المدة الفعلية لظهور المبلغ
        في حسابك حسب مزود خدمة الدفع أو البنك الذي تتعامل معه.
      </p>
      <p className="legal-en">
        Once your request is approved, the full amount, including VAT, will be refunded to the original
        payment method you used within 5 business days of approval. The actual time for the amount to
        appear in your account may vary depending on your payment provider or bank.
      </p>

      <h2 id="app-stores">
        <span className="legal-en">6. Payments Made Through App Stores</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          6. المدفوعات عبر متاجر التطبيقات
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        إذا اشتركت عبر متجر تطبيقات تابع لجهة خارجية (مثل App Store أو Google Play)، فإن الإلغاء
        والاسترداد يخضعان لسياسات تلك الجهة، وعليك تقديم الطلب من خلالها مباشرة.
      </p>
      <p className="legal-en">
        If you subscribed through a third-party app store (such as the App Store or Google Play),
        cancellation and refunds are subject to that provider’s policies, and you must submit your
        request to them directly.
      </p>

      <h2 id="disputes">
        <span className="legal-en">7. Disputed Charges</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          7. الاعتراض على المبالغ المخصومة
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        نشجعك على التواصل معنا أولاً قبل تقديم اعتراض لدى البنك أو مزود الدفع، لنتمكن من حل المشكلة
        بأسرع وقت ممكن.
      </p>
      <p className="legal-en">
        We encourage you to contact us first before filing a dispute with your bank or payment
        provider, so that we can resolve the issue as quickly as possible.
      </p>

      <h2 id="rights">
        <span className="legal-en">8. Your Legal Rights</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          8. حقوقك النظامية
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        لا تؤثر هذه السياسة على أي حقوق مقررة لك بموجب نظام التجارة الإلكترونية أو أي أنظمة أخرى سارية
        في المملكة العربية السعودية، وفي حال وجود تعارض بين هذه السياسة والأنظمة المعمول بها، تُطبَّق
        الأنظمة.
      </p>
      <p className="legal-en">
        This Policy does not affect any rights you have under the E-Commerce Law or any other applicable
        laws of the Kingdom of Saudi Arabia, and in the event of any conflict between this Policy and
        applicable laws, the applicable laws prevail.
      </p>

      <h2 id="changes">
        <span className="legal-en">9. Changes to This Policy</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          9. التعديلات على هذه السياسة
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        قد نُحدّث هذه السياسة من وقت لآخر، وسننشر أي تعديل جوهري على هذه الصفحة مع تحديث تاريخ &quot;آخر
        تحديث&quot;. ولا تسري التعديلات على المدفوعات التي تمت قبل تاريخ نشرها.
      </p>
      <p className="legal-en">
        We may update this Policy from time to time, and we will post any material update on this page
        along with an updated “Last Updated” date. Updates do not apply to payments made before they were
        published.
      </p>

      <h2 id="contact">
        <span className="legal-en">Contact Us</span>
        <span className="legal-ar" lang="ar" dir="rtl">
          للتواصل معنا
        </span>
      </h2>
      <p className="bilingual-ar legal-ar" lang="ar" dir="rtl">
        لأي استفسار بخصوص هذه الوثيقة، يُرجى التواصل عبر البريد الإلكتروني{' '}
        <a href="mailto:refund@arrabai.com">refund@arrabai.com</a> أو عبر وسائل التواصل الموضحة في
        الموقع الرسمي أو التطبيق.
      </p>
      <p className="legal-en">
        For any inquiries regarding this document, please contact us at{' '}
        <a href="mailto:refund@arrabai.com">refund@arrabai.com</a> or through the contact channels
        listed on our official website or app.
      </p>

      <p className="footer legal-en">© 2026 Arrab Solutions Global. All rights reserved. Related: <Link href="/terms">Terms of Service</Link> · <Link href="/privacy">Privacy Policy</Link>.</p>
      <p className="footer legal-ar" lang="ar" dir="rtl">© 2026 آراب سلوشنز جلوبال. جميع الحقوق محفوظة. ذات صلة: <Link href="/terms">شروط الاستخدام</Link> · <Link href="/privacy">سياسة الخصوصية</Link>.</p>
    </LegalDocument>
  );
}
