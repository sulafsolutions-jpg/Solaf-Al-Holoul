/* =====================================================================
 * Solaf Al-Holoul — All written copy lives here, separated from code.
 * ---------------------------------------------------------------------
 * - Arabic (ar) is the PRIMARY language.
 * - English (en) mirrors the exact reference layout text verbatim.
 * - Components must read from this file only — no hardcoded strings.
 * - Logo: place "الشعار الاساسي.png" in public/images/ to override
 *   the fallback SVG logo everywhere (navbar / footer / favicon).
 * =================================================================== */

export type Language = 'ar' | 'en';

export const LOGO = {
  /** Primary logo file (user-provided). Drop the file with this exact name. */
  primaryPng: './images/logo1.png',
  /** Fallback logo (vector recreation of the gold/navy Sulaf mark). */
  fallbackSvg: './images/logo1.svg',
  alt: {
    ar: 'سلاف الحلول — Solaf Al-Holoul',
    en: 'Solaf Al-Holoul — سلاف الحلول',
  } as Record<Language, string>,
};

export const content = {
  ar: {
    nav: {
      links: [
        { id: 'home', label: 'الرئيسية' },
        { id: 'about', label: 'من نحن' },
        { id: 'services', label: 'خدماتنا' },
        { id: 'initiatives', label: 'الموارد' },
        { id: 'purpose', label: 'القطاعات' },
        { id: 'contact', label: 'تواصل معنا' },
      ],
      langToggle: 'EN',
      langToggleLabel: 'التبديل إلى الإنجليزية',
    },
    hero: {
      badge: 'استشارات متميزة',
      titleA: 'الارتقاء بتميّز المؤسسات',
      titleB: 'عبر الحكمة الاستراتيجية',
      description:
        'تقدّم سلاف الحلول خدمات استشارية رفيعة المستوى مصممة لتحويل التحديات إلى فرص نمو استراتيجية للمؤسسات الرائدة.',
      primaryCta: 'اطلب الخدمة',
      secondaryCta: 'رؤيتنا',
      imageAlt: 'فريق من الاستشاريين يتعاونون حول طاولة اجتماعات حديثة',
    },
    about: {
      label: 'من نحن',
      title: 'شريكك نحو النجاح الاستراتيجي',
      paragraphs: [
        'نشأت سلاف الحلول برسالة واضحة: إعادة تعريف الاستشارات المؤسسية عبر المزج بين أفضل الممارسات العالمية والفهم المحلي العميق.',
        'نؤمن بأن النمو الحقيقي مستدام وأخلاقي، ومتجذّر في أسس استراتيجية متينة.',
      ],
      stats: [
        { value: '+15', label: 'عاماً من التميّز' },
        { value: '+200', label: 'مشروع ناجح' },
      ],
      moreLink: 'تعرّف أكثر على منهجيتنا',
      imageAlt: 'منحوتة معدنية ذهبية مجردة',
      certifiedBadge: 'حلول معتمدة بجودة موثوقة',
    },
    services: {
      label: 'خدماتنا',
      title: 'خبرات استشارية شاملة',
      items: [
        {
          icon: 'strategy',
          title: 'التخطيط الاستراتيجي',
          description: 'تطوير خرائط طريق متينة مصممة خصيصاً لأهداف مؤسستك الفريدة وظروف السوق.',
        },
        {
          icon: 'operations',
          title: 'التميّز التشغيلي',
          description: 'تحسين العمليات الداخلية لتعظيم الكفاءة وتقليل الهدر ورفع جودة المخرجات.',
        },
        {
          icon: 'culture',
          title: 'الثقافة المؤسسية',
          description: 'بناء بيئات عالية الأداء عبر تطوير القيادات وإدارة التغيير.',
        },
        {
          icon: 'digital',
          title: 'التحول الرقمي',
          description: 'توظيف أحدث التقنيات للبقاء في المقدمة ضمن اقتصاد عالمي رقمي متزايد.',
        },
      ],
    },
    purpose: {
      label: 'الاستراتيجية والجوهر',
      title: 'تحديد غايتنا',
      tabs: [
        { id: 'vision', label: 'رؤيتنا' },
        { id: 'mission', label: 'رسالتنا' },
        { id: 'values', label: 'قيمنا' },
      ],
      panels: {
        vision: {
          heading: 'رؤيتنا',
          quote:
            '“أن نكون المحفّز الإقليمي الأكثر موثوقية للتميّز المؤسسي، وأن نرسّخ إرثاً من النمو الاستراتيجي والنزاهة المهنية.”',
        },
        mission: {
          heading: 'رسالتنا',
          quote:
            '“تمكين المؤسسات عبر حلول استراتيجية عملية تمزج بين المعايير العالمية والفهم المحلي لتحقيق أثر مستدام.”',
        },
        values: {
          heading: 'قيمنا',
          quote: '“النزاهة، والتميّز، والشراكة، والاستدامة — قيمنا التي توجّه كل قرار وكل التزام.”',
        },
      },
    },
    initiatives: {
      label: 'مبادرات رئيسية',
      title: 'قيادة مبادرات التأثير العالمي',
      items: [
        {
          index: '01',
          title: 'المواءمة مع رؤية 2030',
          description: 'دمج الأهداف الاستراتيجية الوطنية في الأطر المؤسسية للتميّز المحلي.',
        },
        {
          index: '02',
          title: 'أطر الاستدامة',
          description: 'صياغة استراتيجيات الحوكمة البيئية والاجتماعية لضمان الاستمرارية والمسؤولية المجتمعية.',
        },
        {
          index: '03',
          title: 'التميّز عبر الحدود',
          description: 'توسيع الجودة التشغيلية عبر الأسواق الدولية بمعايير موحدة.',
        },
      ],
      viewAll: 'عرض كل المبادرات',
      featuredBadge: 'مشروع مميز',
      impactLabel: 'نطاق التأثير',
      impactValue: 'أسواق دولية ومحلية',
      imageAlt: 'اجتماع قيادي حول استراتيجية التأثير',
    },
    team: {
      label: 'خبراؤنا',
      title: 'نخبة من الاستشاريين',
      description: 'فريق من الكفاءات الاستشارية يقود التحول الاستراتيجي لمؤسستك.',
      button: 'احجز استشارة',
      imageAlt: 'صورة خبير استشاري',
    },
    contact: {
      title: 'جاهز لتحويل استراتيجيتك؟',
      description: 'تواصل مع خبرائنا اليوم للحصول على استشارة سرية حول تحديات مؤسستك.',
      button: 'احجز استشارة',
      phone: '+966 55 851 9293',
      email: 'consult@sulafsolutions.com',
      website: 'www.solaf-al-holouL.com',
    },
    footer: {
      brandName: 'سلاف الحلول',
      brandNameEn: 'سلاف الحلول',
      description:
        'تقديم خبرات استشارية متميزة مع التركيز على النمو الاستراتيجي والتميّز والشراكة لمؤسسات الأعمال حول العالم.',
      columns: [
        {
          title: 'خدماتنا',
          links: ['التخطيط الاستراتيجي', 'التميّز التشغيلي', 'الثقافة المؤسسية', 'التحول الرقمي'],
        },
        {
          title: 'القطاعات',
          links: ['الجهات الحكومية', 'الخدمات المالية', 'الرعاية الصحية', 'الطاقة والصناعة'],
        },
        {
          title: 'الموارد',
          links: ['الرؤى والدراسات', 'منهجيتنا', 'قصص النجاح', 'المدونة'],
        },
        {
          title: 'الشركة',
          links: ['من نحن', 'قيادتنا', 'الوظائف', 'تواصل معنا'],
        },
        {
          title: 'روابط سريعة',
          links: ['الرئيسية', 'خدماتنا', 'مبادراتنا', 'احجز استشارة'],
        },
        {
          title: 'شبكتنا العالمية',
          links: ['الرياض — المقر الرئيسي', 'دبي', 'لندن', 'سنغافورة'],
        },
      ],
      contactTitle: 'تواصل معنا',
      address: 'مكة المكرمة، المملكة العربية السعودية',
      phone: '+966 55 851 9293',
      email: 'contact@sulafsolutions.com',
      legalTitle: 'قانوني',
      legal: ['سياسة الخصوصية', 'شروط الخدمة', 'الامتثال'],
      copyright: '© 2026 سلاف الحلول — جميع الحقوق محفوظة.',
    },
  },
  en: {
    nav: {
      links: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'services', label: 'Services' },
        { id: 'initiatives', label: 'Resources' },
        { id: 'purpose', label: 'Industries' },
        { id: 'contact', label: 'Contact' },
      ],
      langToggle: 'ع',
      langToggleLabel: 'Switch to Arabic',
    },
    hero: {
      badge: 'Premium Consulting',
      titleA: 'Elevating Enterprise',
      titleB: 'Excellence Through Strategic Wisdom',
      description:
        'Solaf Al-Holoul provides high-tier consulting services designed to transform challenges into strategic growth opportunities for leading organizations.',
      primaryCta: 'Request Service',
      secondaryCta: 'Our Vision',
      imageAlt: 'Team of consultants collaborating around a modern meeting table',
    },
    about: {
      label: 'About Us',
      title: 'Partnering For Your Strategic Success',
      paragraphs: [
        'Solaf Al-Holoul emerged with a clear mission to redefine corporate consulting by blending global best practices with profound local insight.',
        'We believe that true growth is sustainable, ethical, and rooted in solid strategic foundations.',
      ],
      stats: [
        { value: '15+', label: 'Years Excellence' },
        { value: '200+', label: 'Successful Projects' },
      ],
      moreLink: 'Learn more about our methodology',
      imageAlt: 'Abstract gold metal sculpture',
      certifiedBadge: 'Quality Certified Solutions Provider',
    },
    services: {
      label: 'Our Services',
      title: 'Comprehensive Consulting Expertise',
      items: [
        {
          icon: 'strategy',
          title: 'Strategic Planning',
          description:
            "Developing robust roadmaps tailored to your organization's unique goals and market conditions.",
        },
        {
          icon: 'operations',
          title: 'Operational Excellence',
          description:
            'Optimizing internal processes to maximize efficiency, reduce waste, and improve output quality.',
        },
        {
          icon: 'culture',
          title: 'Organizational Culture',
          description:
            'Building high-performance environments through leadership development and change management.',
        },
        {
          icon: 'digital',
          title: 'Digital Transformation',
          description:
            'Leveraging cutting-edge technology to stay ahead in an increasingly digital global economy.',
        },
      ],
    },
    purpose: {
      label: 'Strategy & Core',
      title: 'Defining Our Purpose',
      tabs: [
        { id: 'vision', label: 'Vision' },
        { id: 'mission', label: 'Mission' },
        { id: 'values', label: 'Values' },
      ],
      panels: {
        vision: {
          heading: 'Our Vision',
          quote:
            '"To become the most trusted regional catalyst for institutional excellence, fostering a legacy of strategic growth and professional integrity."',
        },
        mission: {
          heading: 'Our Mission',
          quote:
            '"To empower organizations with practical strategic solutions that blend global standards with local insight for lasting impact."',
        },
        values: {
          heading: 'Our Values',
          quote:
            '"Integrity, excellence, partnership, and sustainability — the values guiding every decision we make."',
        },
      },
    },
    initiatives: {
      label: 'Key Initiatives',
      title: 'Leading Global Impact Initiatives',
      items: [
        {
          index: '01',
          title: 'Vision 2030 Alignment',
          description: 'Integrating national strategic goals into corporate frameworks for local excellence.',
        },
        {
          index: '02',
          title: 'Sustainability Frameworks',
          description: 'Crafting ESG strategies that ensure long-term viability and social responsibility.',
        },
        {
          index: '03',
          title: 'Cross-Border Excellence',
          description: 'Expanding operational quality across international markets with unified standards.',
        },
      ],
      viewAll: 'View All Initiatives',
      featuredBadge: 'Featured Project',
      impactLabel: 'Impact Scope',
      impactValue: 'International & Local Markets',
      imageAlt: 'Leadership strategy meeting',
    },
    team: {
      label: 'Our Experts',
      title: 'Meet Our Consultants',
      description: 'A team of consulting professionals driving your strategic transformation.',
      button: 'Book Consultation',
      imageAlt: 'Consultant profile photo',
    },
    contact: {
      title: 'Ready to transform your strategy?',
      description:
        'Contact our experts today for a confidential consultation about your organizational challenges.',
      button: 'Book A Consultation',
      phone: '+966 55 851 9293',
      email: 'consult@sulafsolutions.com',
      website: 'www.sulafsolutions.com',
    },
    footer: {
      brandName: 'SOLAF AL-HOLOUL',
      brandNameEn: 'SOLAF AL-HOLOUL',
      description:
        'Providing premium consulting expertise with a focus on strategic growth, excellence, and partnership for enterprises worldwide.',
      columns: [
        {
          title: 'OUR SERVICES',
          links: ['Strategic Planning', 'Operational Excellence', 'Organizational Culture', 'Digital Transformation'],
        },
        {
          title: 'INDUSTRIES',
          links: ['Government', 'Financial Services', 'Healthcare', 'Energy & Industry'],
        },
        {
          title: 'RESOURCES',
          links: ['Insights', 'Our Methodology', 'Case Studies', 'Blog'],
        },
        {
          title: 'COMPANY',
          links: ['About Us', 'Leadership', 'Careers', 'Contact'],
        },
        {
          title: 'QUICK LINKS',
          links: ['Home', 'Services', 'Initiatives', 'Book Consultation'],
        },
        {
          title: 'GLOBAL NETWORK',
          links: ['Riyadh — HQ', 'Dubai', 'London', 'Singapore'],
        },
      ],
      contactTitle: 'CONTACT US',
      address: 'Riyadh, Kingdom of Saudi Arabia',
      phone: '+966 55 851 9293',
      email: 'contact@sulafsolutions.com',
      legalTitle: 'LEGAL',
      legal: ['Privacy Policy', 'Terms of Service', 'Compliance'],
      copyright: '© 2026 SOLAF AL-HOLOUL. All rights reserved.',
    },
  },
} as const;

export type Content = (typeof content)['en'];
