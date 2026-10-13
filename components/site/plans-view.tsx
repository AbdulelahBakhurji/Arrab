'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { contactHref } from '@/lib/messages';
import { plansFor, type PlanAudience } from '@/lib/plans';
import { Shell } from './shell';
import { useSite } from './provider';

const audiences: PlanAudience[] = ['individual', 'family', 'organization'];

function money(halalas: number, language: 'en' | 'ar') {
  return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en', {
    maximumFractionDigits: 0,
  }).format(halalas / 100);
}

export function PlansView() {
  const { copy, language } = useSite();
  const [audience, setAudience] = useState<PlanAudience>('individual');
  const list = plansFor(audience);
  const labels: Record<PlanAudience, string> = {
    individual: copy.planIndividual,
    family: copy.planFamily,
    organization: copy.planTeams,
  };

  return (
    <Shell>
      <main className="page plans-page">
        <header className="page-intro">
          <p className="eyebrow">{copy.plansKicker}</p>
          <h1>{copy.plansTitle}</h1>
          <p>{copy.plansText}</p>
        </header>
        <div className="segment" role="tablist" aria-label={copy.plansKicker}>
          {audiences.map((item) => (
            <button key={item} type="button" role="tab" aria-selected={audience === item} className={audience === item ? 'on' : ''} onClick={() => setAudience(item)}>
              {labels[item]}
            </button>
          ))}
        </div>
        <div className="plan-grid">
          {list.map((plan) => {
            const name = language === 'ar' ? plan.nameAr : plan.name;
            const features = language === 'ar' ? plan.featuresAr : plan.features;
            const price = money(plan.priceHalalas, language);
            return (
              <article key={plan.id} className={plan.highlight ? 'plan highlight' : 'plan'}>
                <div className="plan-top">
                  <h2>{name}</h2>
                  {plan.badge && <span className="pill">{language === 'ar' ? plan.badgeAr : plan.badge}</span>}
                </div>
                <p className="plan-price">
                  <strong>{price}</strong>
                  <span>{plan.perSeat ? copy.perSeat : copy.perMonth}</span>
                </p>
                <p>{language === 'ar' ? plan.descriptionAr : plan.description}</p>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} strokeWidth={1.75} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className={plan.highlight ? 'btn btn-primary' : 'btn btn-ghost'} href={`${contactHref}?subject=${encodeURIComponent(`Arrab ${plan.name}`)}`}>
                  {copy.requestPlan}
                </a>
              </article>
            );
          })}
        </div>
        <p className="quiet plans-note">{copy.plansNote}</p>
      </main>
    </Shell>
  );
}
