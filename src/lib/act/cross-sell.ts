// Cross-sell utilities
export interface CrossSellApp {
  slug: string;
  name: string;
  reason: string;
  category: string;
  url?: string;
}

export interface CrossSellConfig {
  targetApp: string;
  message: string;
  ctaText: string;
  ctaUrl: string;
}

const CROSS_SELL_APPS: CrossSellApp[] = [
  {
    slug: "sat",
    name: "SAT",
    reason: "Sharpen test-taking strategy with another structured exam app.",
    category: "admissions",
  },
  {
    slug: "ielts",
    name: "IELTS",
    reason: "Build reading, writing, and timing discipline with a language test companion.",
    category: "language_cert",
  },
  {
    slug: "pmp",
    name: "PMP",
    reason: "Level up professional study habits with scenario-based project management prep.",
    category: "professional",
  },
];

export function getCrossSellApps(category: string): CrossSellApp[] {
  return CROSS_SELL_APPS.filter((app) => app.category === category);
}

export function getCrossSellConfig(currentSlug: string): CrossSellConfig | null {
  const target = CROSS_SELL_APPS.find((app) => app.slug !== currentSlug);
  if (!target) return null;

  return {
    targetApp: target.slug,
    message: `Also explore ${target.name} on Koydo.`,
    ctaText: "Try free",
    ctaUrl: target.url ?? `https://koydo-${target.slug}.koydo.app`,
  };
}
