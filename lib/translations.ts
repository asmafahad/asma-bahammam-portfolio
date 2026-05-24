export type Locale = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      volunteering: 'Volunteering',
      projects: 'Projects',
      certificates: 'Certificates',
      skills: 'Skills',
      awards: 'Awards',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Asma Bahammam',
      headline: 'Software Engineering Student blending UX, Product Thinking, and Vibe Coding — leading a technical literature initiative that humanizes technology.',
      tagline: 'SWE Student | UX | Product Management | Data Science | Vibe Coding',
      ctaViewProjects: 'View Projects',
      ctaContact: 'Contact Me',
      ctaDownloadCv: 'Download CV',
    },
    about: {
      title: 'About Me',
      subtitle: 'Who I Am',
      paragraph1: 'I am a Software Engineering student at Princess Nourah Bint Abdulrahman University with a deep passion for the intersection of technology, design, and product thinking. I believe that technology should not just be functional, but also intuitive, elegant, and human.',
      paragraph2: 'Through my roles at the Apple Developer Academy, Elm Student Club, and as Editor-in-Chief of Saturday Newspaper, I actively blend engineering rigor with creative communication. I love building digital products from the ground up, designing engaging user experiences, and exploring new horizons in data science and swift coding.',
      statFollowers: 'Followers',
      statConnections: 'Connections',
      statProjects: 'Projects',
      statCertificates: 'Certifications',
    },
    education: {
      title: 'Education',
      subtitle: 'My Academic Journey',
      items: [
        {
          institution: 'Princess Nourah Bint Abdulrahman University',
          degree: "Bachelor's Degree in Computer Software Engineering",
          period: 'Jul 2024 – Aug 2028 (Expected)',
          details: 'Studying software engineering and practicing its lifecycle — from requirements analysis and system design, through implementation and testing, to deployment and maintenance.'
        },
        {
          institution: 'Apple Developer Academy | TUWAIQ',
          degree: 'Apple Foundation Program',
          period: 'Feb 2025 – Mar 2025',
          details: 'Intensive training in Swift, SwiftUI, iOS Development, UI/UX Design, and Challenge-Based Learning (CBL). Built collaborative projects using agile methodologies.'
        }
      ]
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional & Leadership Roles',
      items: [
        {
          role: 'Lead of Research & Content Writing Unit',
          company: 'Elm (Elm Company)',
          period: 'Mar 2026 – Present',
          description: "Producing and publishing Elm's newsletters in collaboration with the company's in-house experts — translating their field experience into technical content for the wider community."
        },
        {
          role: 'Product Manager (Internship)',
          company: 'Rushd رشد',
          period: 'Dec 2025 – Present',
          description: 'Owning the product lifecycle, defining features, conducting user research, and coordinating between design and development teams to ship user-centric products.'
        },
        {
          role: 'Editor-in-Chief | رئيسة التحرير',
          company: 'جريدة السبت (Saturday Newspaper)',
          period: 'Aug 2024 – Present',
          description: 'In Saturday Newspaper, we publish technical literature... the space that takes technical people to a wider horizon beyond technology, and brings ordinary readers closer to it.'
        }
      ]
    },
    volunteering: {
      title: 'Volunteering',
      subtitle: 'Giving Back to the Community',
      items: [
        {
          role: 'Leader of Saturday Newspaper',
          org: 'TechMinds Club',
          period: 'Aug 2024 – Present',
          description: 'Directing editorial operations and publishing creative tech content to bridge the gap between technical complexity and literature.'
        },
        {
          role: 'Design Track Mentor',
          org: 'Tuwaiq Academy',
          period: 'Mar 2024',
          description: 'Mentored junior developers and designers during the Junior Web Applications Challenge, guiding them through UX research and high-fidelity prototyping.'
        },
        {
          role: 'GDGC Technical Member',
          org: 'Google Developer Groups at PNU',
          period: 'Aug 2024 – Present',
          description: 'Contributing to programming workshops and organizing community events.'
        },
        {
          role: 'Co-Leader of Technical Development',
          org: 'Cybersecurity Club (CYSC)',
          period: 'Aug 2025 – Present',
          description: 'Leading technical initiatives and developing interactive workshops.'
        },
        {
          role: 'Technical Committee Member',
          org: 'Ihtiwaa Volunteer Foundation',
          period: 'Feb 2025 – May 2025',
          description: 'Developed and maintained digital assets and supported technical logistics for community-driven volunteering campaigns.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'My Creative & Technical Work',
      filterAll: 'All',
      filterTech: 'Software & Code',
      filterDesign: 'UI/UX Design',
      filterWriting: 'Product & Writing',
      viewLive: 'Live Demo',
      viewCase: 'View Project',
      items: [
        {
          title: 'Saturday Newspaper Initiative',
          categories: ['Tech', 'Design'],
          tech: ['UI', 'UX', 'Editorial', 'Claude Code', 'Antigravity', 'Data Science'],
          desc: 'A literary-technical initiative that takes the technical to a horizon broader than technology itself — and brings the everyday reader closer to it.',
          link: 'https://saturday-news.netlify.app',
          image: '/projects/saturday-newspaper-cover.jpg',
          isLive: true,
          linkKind: 'demo'
        },
        {
          title: 'Productivity App — AI Behavior Coach',
          categories: ['Design', 'Writing'],
          tech: ['Figma', 'AI / Behavior Analysis', 'UX Research', 'Agile SDLC', 'Product Design'],
          desc: 'An AI-powered productivity app that goes beyond task lists — it tracks behavior, analyzes patterns, and surfaces personalized growth suggestions. End-to-end case study covering problem framing, SDLC, architecture, requirements, Gantt timeline, user flows, and high-fidelity UI.',
          link: '/projects/productivity-app.pdf',
          image: '/projects/productivity-app-cover.jpg',
          isLive: true,
          linkKind: 'case'
        }
      ]
    },
    certificates: {
      title: 'Licenses & Certifications',
      subtitle: 'Continuous Professional Development',
      googleUxTitle: 'Google UX Design Professional Certificate',
      googleUxIssuer: 'Google / Coursera',
      googleUxDate: 'Oct 2023',
      googleUxDesc: 'Comprehensive 8-course series covering foundational UX research, wireframing, high-fidelity prototyping in Figma, usability testing, and designing for social good.',
      showCredential: 'Show Credential',
      viewBadge: 'View Badge',
      viewPdf: 'Preview Cert',
      googleUxCredentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/3T2REN4E66MJ',
      googleUxBadgeUrl: 'https://www.credly.com/badges/82a88417-2c36-4382-a64b-87c262de8df2/linked_in_profile',
      items: [
        {
          name: 'Data Analyst NanoDegree',
          issuer: 'Udacity',
          date: 'Jan 2026',
          skills: 'Python, NumPy, Data Analysis',
          link: 'https://www.udacity.com/certificate/e/741bcd32-e688-11f0-a33d-13920914ce95'
        },
        {
          name: 'Programming for Data Science with Python',
          issuer: 'Udacity',
          date: 'Nov 2025',
          skills: 'Python, Pandas, SQL, Git',
          link: 'https://www.udacity.com/certificate/e/f6456da2-8bf4-11f0-9d5f-672fc319e3f1'
        },
        {
          name: 'Product Manager NanoDegree',
          issuer: 'Udacity',
          date: 'Jun 2025',
          skills: 'Product Roadmapping, Market Research, PRDs',
          link: 'https://www.udacity.com/certificate/e/788f37ec-469b-11f0-965c-fb2c3e4b21f4'
        },
        {
          name: 'Apple Foundation Program Certificate',
          issuer: 'Apple Developer Academy | TUWAIQ',
          date: 'Feb 2025',
          skills: 'Swift, SwiftUI, iOS Development, CBL',
          link: ''
        },
        {
          name: 'Programming Fundamentals in Swift',
          issuer: 'Meta',
          date: 'Jan 2025',
          skills: 'Swift Syntax, Control Flow, OOP',
          link: 'https://www.coursera.org/account/accomplishments/verify/X8FKJFDBVDLX'
        },
        {
          name: 'Future Intelligence Programmers',
          issuer: 'SDAIA',
          date: 'Jan 2024',
          skills: 'AI Concepts, Python Foundations',
          link: ''
        },
        {
          name: 'UI and UX Design Bootcamp',
          issuer: 'Tuwaiq Academy',
          date: 'Jul 2023',
          skills: 'Wireframing, User Flows, Prototyping',
          link: ''
        },
        {
          name: 'Java Programming Basics',
          issuer: 'Tuwaiq Academy',
          date: 'Sep 2022',
          skills: 'Java Core, OOP, Logic building',
          link: ''
        },
        {
          name: 'Day One Program',
          issuer: 'Misk Skills',
          date: 'Aug 2022',
          skills: 'Professional Workplace Readiness',
          link: ''
        }
      ]
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'What I Bring to the Table',
      categories: {
        languages: 'Programming Languages',
        dataScience: 'Data Science & Analysis',
        design: 'UI/UX & Graphic Design',
        aiTools: 'AI Tools',
        tools: 'Developer Tools & Platforms',
        pm: 'Product & Methodology',
        soft: 'Soft Skills & Communication',
      }
    },
    awards: {
      title: 'Honors & Awards',
      subtitle: 'Recognitions & Achievements',
      hackathonTitle: '1st Place — Arabic Language Hackathon',
      hackathonIssuer: 'Ministry of Culture (MOCX) | وزارة الثقافة',
      hackathonDate: 'Sep 2024',
      hackathonDesc: 'Won the first-place prize at the national Arabic Language Hackathon (#هاكثون_لغتنا_هويتنا) for designing and pitching an innovative technical solution that integrates Arabic language preservation with modern software and user experiences.',
    },
    contact: {
      title: 'Connect With Me',
      subtitle: "Let's Build Something Beautiful",
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      formName: 'Name',
      formEmail: 'Email Address',
      formMsg: 'Message',
      formSend: 'Send Message',
      formSending: 'Sending...',
      formSuccess: 'Thank you! Your message has been sent successfully.',
      formError: 'Something went wrong. Please try again.',
      ctaText: 'Open for internships, UI/UX designs, Swift development, and content collaboration.',
    }
  },
  ar: {
    nav: {
      about: 'عني',
      education: 'التعليم',
      experience: 'الخبرات',
      volunteering: 'التطوع',
      projects: 'المشاريع',
      certificates: 'الشهادات',
      skills: 'المهارات',
      awards: 'الجوائز',
      contact: 'اتصل بي',
    },
    hero: {
      greeting: 'أهلاً بك، أنا',
      name: 'أسمَاء باهمَّام',
      headline: 'أستكشف التقاطع بين التقنية، والتصميم، والفكرة… حيث تتحوّل التفاصيل الصغيرة إلى تجربة متكاملة',
      tagline: 'swe student | ux | product manegement | data science | vibe coding',
      ctaViewProjects: 'عرض المشاريع',
      ctaContact: 'تواصل معي',
      ctaDownloadCv: 'تحميل السيرة الذاتية',
    },
    about: {
      title: 'من أنا',
      subtitle: 'عن هويتي المهنية',
      paragraph1: 'أنا طالبة هندسة برمجيات بجامعة الأميرة نورة بنت عبد الرحمن، لدي شغف عميق يربط بين التقنية، والتصميم، والتفكير المنتج. أؤمن بأن التقنية لا يجب أن تكون وظيفية فحسب، بل سهلة، أنيقة، وتخدم الجانب الإنساني.',
      paragraph2: 'من خلال أدواري في أكاديمية مطوري آبل، ونادي علم الطلابي، ورئاستي لتحرير جريدة السبت، أعمل بنشاط على مزج دقة الهندسة بالكتابة الإبداعية. أحب بناء المنتجات الرقمية من الصفر، وتصميم واجهات مستخدم متميزة، واستكشاف آفاق جديدة في علوم البيانات ولغة سويفت.',
      statFollowers: 'متابع',
      statConnections: 'جهات اتصال',
      statProjects: 'مشاريع',
      statCertificates: 'شهادة مهنية',
    },
    education: {
      title: 'التعليم',
      subtitle: 'مسيرتي الأكاديمية',
      items: [
        {
          institution: 'جامعة الأميرة نورة بنت عبد الرحمن',
          degree: 'بكالوريوس في هندسة برمجيات الحاسب',
          period: 'يوليو 2024 – أغسطس 2028 (تاريخ تخرج متوقع)',
          details: 'دراسة هندسة البرمجيات وتطبيق دورة حياتها من تحليل المتطلبات وتصميم الأنظمة، مرورًا بالبرمجة والاختبار، وصولًا إلى النشر والصيانة.'
        },
        {
          institution: 'أكاديمية مطوري آبل | طويق',
          degree: 'برنامج آبل التأسيسي (Apple Foundation Program)',
          period: 'فبراير 2025 – مارس 2025',
          details: 'تدريب مكثف في تطوير تطبيقات iOS باستخدام Swift و SwiftUI، وتصميم تجربة المستخدم (UI/UX)، ومنهجية التعلم القائم على التحدي (CBL).'
        }
      ]
    },
    experience: {
      title: 'الخبرات المهنية',
      subtitle: 'الأدوار القيادية والمهنية',
      items: [
        {
          role: 'قائدة وحدة البحث وكتابة المحتوى',
          company: 'علم (شركة علم)',
          period: 'مارس 2026 – الحالي',
          description: 'إعداد ونشر نشرات علم بالتعاون مع خبراء الشركة، وصياغة محتوى تقني يربط القارئ بتجارب الميدان.'
        },
        {
          role: 'مديرة منتج (تدريب)',
          company: 'رشد Rushd',
          period: 'ديسمبر 2025 – الحالي',
          description: 'إدارة دورة حياة المنتج، تحديد الخصائص، إجراء أبحاث تجربة المستخدم، والتنسيق بين فرق التصميم والتطوير لإطلاق منتجات ممتازة.'
        },
        {
          role: 'رئيسة تحرير جريدة السبت',
          company: 'جريدة السبت',
          period: 'أغسطس 2024 – الحالي',
          description: 'في جريدة السبت ننشر أدباً تقنياً... المساحة التي تأخذ التقني إلى ما هو أرحب من التقنية، و تقرّب القارئ العادي منها.'
        }
      ]
    },
    volunteering: {
      title: 'العمل التطوعي',
      subtitle: 'العطاء والمساهمة المجتمعية',
      items: [
        {
          role: 'قائدة جريدة السبت',
          org: 'نادي عقول التقنية',
          period: 'أغسطس 2024 – الحالي',
          description: 'إدارة العمليات التحريرية ونشر محتوى تقني إبداعي يربط بين الأدب والعلوم الرقمية.'
        },
        {
          role: 'مرشدة في مسار التصميم',
          org: 'أكاديمية طويق',
          period: 'مارس 2024',
          description: 'إرشاد وتدريب الناشئين في مسار التصميم خلال تحدي تطبيقات الويب للناشئين، والتوجيه في بحوث وتصميم الواجهات.'
        },
        {
          role: 'عضو تقني في GDGC',
          org: 'مجموعة مطوري جوجل في جامعة الأميرة نورة',
          period: 'أغسطس 2024 – الحالي',
          description: 'المساهمة في تقديم الورش البرمجية وتنظيم الفعاليات.'
        },
        {
          role: 'نائبة رئيسة لجنة التطوير التقني',
          org: 'نادي الأمن السيبراني (CYSC)',
          period: 'أغسطس 2025 – الحالي',
          description: 'توجيه المبادرات التقنية وتطوير الورش التفاعلية.'
        },
        {
          role: 'عضو في اللجنة التقنية',
          org: 'مؤسسة احتواء التطوعية',
          period: 'فبراير 2025 – مايو 2025',
          description: 'تطوير المواد الرقمية وتوفير الدعم الفني واللوجستي للحملات والمبادرات التطوعية المجتمعية.'
        }
      ]
    },
    projects: {
      title: 'المشاريع',
      subtitle: 'أعمالي البرمجية والتصميمية',
      filterAll: 'الكل',
      filterTech: 'برمجة وتطوير',
      filterDesign: 'تصميم تجربة المستخدم',
      filterWriting: 'إدارة ومنتجات',
      viewLive: 'زيارة الموقع',
      viewCase: 'عرض المشروع',
      items: [
        {
          title: 'مبادرة جريدة السبت',
          categories: ['Tech', 'Design'],
          tech: ['UI', 'UX', 'تحرير', 'Claude Code', 'Antigravity', 'علم البيانات'],
          desc: 'مبادرة أدبية تقنية تُعنى بأخذ التقني لما هو أرحب من التقنية، وتقريب القارئ العادي منها.',
          link: 'https://saturday-news.netlify.app',
          image: '/projects/saturday-newspaper-cover.jpg',
          isLive: true,
          linkKind: 'demo'
        },
        {
          title: 'تطبيق الإنتاجية الذكي',
          categories: ['Design', 'Writing'],
          tech: ['Figma', 'ذكاء اصطناعي', 'بحوث تجربة المستخدم', 'Agile SDLC', 'تصميم منتج'],
          desc: 'تطبيق إنتاجية مدعوم بالذكاء الاصطناعي يتجاوز قوائم المهام — يتتبّع السلوك، يحلّل الأنماط، ويقدّم اقتراحات تطوير شخصية. دراسة حالة متكاملة تغطّي تأطير المشكلة، دورة حياة التطوير، المعمارية، المتطلبات، مخطط جانت، تدفق المستخدم، وتصميم الواجهات عالية الدقة.',
          link: '/projects/productivity-app.pdf',
          image: '/projects/productivity-app-cover.jpg',
          isLive: true,
          linkKind: 'case'
        }
      ]
    },
    certificates: {
      title: 'الشهادات والاعتمادات المهنية',
      subtitle: 'التطوير والتعلم المستمر',
      googleUxTitle: 'شهادة محترف تصميم تجربة المستخدم من جوجل',
      googleUxIssuer: 'جوجل / كورسيرا',
      googleUxDate: 'أكتوبر 2023',
      googleUxDesc: 'سلسلة مكثفة من 8 دورات تغطي أساسيات بحوث تجربة المستخدم، تخطيط الواجهات، بناء النماذج عالية الدقة في Figma، واختبارات القابلية للاستخدام، والتصميم للنفع العام.',
      showCredential: 'عرض الشهادة',
      viewBadge: 'عرض الشارة',
      viewPdf: 'معاينة الشهادة',
      googleUxCredentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/3T2REN4E66MJ',
      googleUxBadgeUrl: 'https://www.credly.com/badges/82a88417-2c36-4382-a64b-87c262de8df2/linked_in_profile',
      items: [
        {
          name: 'شهادة محلل بيانات (Data Analyst)',
          issuer: 'Udacity',
          date: 'يناير 2026',
          skills: 'Python, NumPy, Data Analysis',
          link: 'https://www.udacity.com/certificate/e/741bcd32-e688-11f0-a33d-13920914ce95'
        },
        {
          name: 'البرمجة لعلوم البيانات باستخدام بايثون',
          issuer: 'Udacity',
          date: 'نوفمبر 2025',
          skills: 'Python, Pandas, SQL, Git',
          link: 'https://www.udacity.com/certificate/e/f6456da2-8bf4-11f0-9d5f-672fc319e3f1'
        },
        {
          name: 'شهادة مدير منتج (Product Manager)',
          issuer: 'Udacity',
          date: 'يونيو 2025',
          skills: 'Product Roadmapping, Market Research, PRDs',
          link: 'https://www.udacity.com/certificate/e/788f37ec-469b-11f0-965c-fb2c3e4b21f4'
        },
        {
          name: 'شهادة برنامج آبل التأسيسي',
          issuer: 'أكاديمية مطوري آبل | طويق',
          date: 'فبراير 2025',
          skills: 'Swift, SwiftUI, iOS Development, CBL',
          link: ''
        },
        {
          name: 'أساسيات البرمجة بلغة سويفت',
          issuer: 'Meta',
          date: 'يناير 2025',
          skills: 'Swift Syntax, Control Flow, OOP',
          link: 'https://www.coursera.org/account/accomplishments/verify/X8FKJFDBVDLX'
        },
        {
          name: 'برنامج مبرمجي ذكاء المستقبل',
          issuer: 'سدايا SDAIA',
          date: 'يناير 2024',
          skills: 'AI Concepts, Python Foundations',
          link: ''
        },
        {
          name: 'معسكر تصميم واجهات وتجربة المستخدم',
          issuer: 'أكاديمية طويق',
          date: 'يوليو 2023',
          skills: 'Wireframing, User Flows, Prototyping',
          link: ''
        },
        {
          name: 'أساسيات لغة جافا java',
          issuer: 'أكاديمية طويق',
          date: 'سبتمبر 2022',
          skills: 'Java Core, OOP, Logic building',
          link: ''
        },
        {
          name: 'برنامج اليوم الأول',
          issuer: 'مسك المهارات Misk',
          date: 'أغسطس 2022',
          skills: 'Professional Workplace Readiness',
          link: ''
        }
      ]
    },
    skills: {
      title: 'المهارات والخبرات',
      subtitle: 'الأدوات والتقنيات التي أتقنها',
      categories: {
        languages: 'لغات البرمجة',
        dataScience: 'علوم وتحليل البيانات',
        design: 'واجهات وتجربة المستخدم والديزاين',
        aiTools: 'أدوات الذكاء الاصطناعي',
        tools: 'أدوات المطورين والمنصات',
        pm: 'إدارة المنتجات والمنهجيات',
        soft: 'المهارات الشخصية والتواصل',
      }
    },
    awards: {
      title: 'الجوائز والتكريمات',
      subtitle: 'التقدير والإنجازات الوطنية',
      hackathonTitle: 'المركز الأول — هاكثون احتضان اللغة العربية',
      hackathonIssuer: 'وزارة الثقافة | MOCX',
      hackathonDate: 'سبتمبر 2024',
      hackathonDesc: 'الفوز بالجائزة الكبرى والمركز الأول على مستوى المملكة في هاكثون اللغة العربية تحت شعار #هاكثون_لغتنا_هويتنا، عن ابتكار وتصميم حل تقني يدمج بين إثراء المحتوى العربي وهندسة البرمجيات مع أفضل واجهات وتجربة للمستخدم.',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنصنع معاً تجربة رقمية استثنائية',
      emailLabel: 'البريد الإلكتروني',
      githubLabel: 'جيت هاب',
      linkedinLabel: 'لينكد إن',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formMsg: 'الرسالة',
      formSend: 'إرسال الرسالة',
      formSending: 'جاري الإرسال...',
      formSuccess: 'شكراً لك! تم إرسال رسالتك بنجاح.',
      formError: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      ctaText: 'متاحة لفرص التدريب التعاوني، وتصميم تجربة المستخدم (UI/UX)، وتطوير تطبيقات Swift، وصناعة المحتوى التقني.',
    }
  }
};

export const skillGroups = {
  languages: [
    { name: 'Swift', icon: 'swift' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'SQL', icon: 'sql' },
  ],
  dataScience: [
    { name: 'Pandas', icon: 'pandas' },
    { name: 'NumPy', icon: 'numpy' },
    { name: 'Data Analysis', icon: 'chart' },
  ],
  design: [
    { name: 'Figma', icon: 'figma' },
    { name: 'UI Design', icon: 'palette' },
    { name: 'UX Research', icon: 'search' },
    { name: 'Wireframing', icon: 'layout' },
    { name: 'Graphic Design', icon: 'pen' },
  ],
  aiTools: [
    { name: 'Claude Code', icon: 'brain' },
    { name: 'Antigravity', icon: 'brain' },
    { name: 'Prompt Engineering', icon: 'sparkles' },
    { name: 'Vibe Coding', icon: 'sparkles' },
  ],
  tools: [
    { name: 'VS Code', icon: 'code' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Xcode', icon: 'code' },
    { name: 'Web Development', icon: 'globe' },
    { name: 'iOS Development', icon: 'smartphone' },
  ],
  pm: [
    { name: 'Product Management', icon: 'briefcase' },
    { name: 'Challenge-Based Learning (CBL)', icon: 'target' },
    { name: 'Agile & Scrum', icon: 'users' },
  ],
  soft: [
    { name: 'Leadership / القيادة', icon: 'award' },
    { name: 'Creative Writing / الكتابة الإبداعية', icon: 'book' },
    { name: 'Problem Solving / حل المشكلات', icon: 'zap' },
  ]
};
