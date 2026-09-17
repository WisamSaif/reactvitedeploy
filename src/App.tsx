import { useState, useEffect } from "react";
import logoImg from "@/imports/food-world-logo.png";
import brandLogosImg from "@/imports/brand-logos.jpeg";
import productSpecsImg from "@/imports/product-specs-prices.png";
import tahiniPourImg from "@/imports/WhatsApp_Image_2026-09-08_at_4.19.25_PM__1_.jpeg";
import halawaTahiniImg from "@/imports/WhatsApp_Image_2026-09-08_at_4.11.21_PM.jpeg";
import img13 from "@/imports/13.jpeg";
import img25 from "@/imports/25.jpg";
import img12 from "@/imports/12.jpeg";
import img07 from "@/imports/07.jpeg";
import img28 from "@/imports/28.jpg";
import img17 from "@/imports/17.jpg";
import halawaPlainHeroImg from "@/imports/halawa-plain-hero.jpg";
import halawaPistachioHeroImg from "@/imports/halawa-pistachio-hero.jpg";
import logoTahinaImg from "@/imports/logo-tahina.png";
import logoGezaeeImg from "@/imports/logo-gezaee-halawa.png";
import logoHalawaImg from "@/imports/logo-halawa.png";

type Lang = "en" | "ar";
type Page = "home" | "about" | "brands" | "products" | "news" | "contact";

// ─── COLOURS ────────────────────────────────────────────────────────────────
const CAP  = "#2a1508";   // deep cappuccino/espresso — nav, footer, page banners
const CAP2 = "#3d200f";   // slightly lighter espresso — hover states
const GREEN = "#1b4332";  // brand green — mid-page accent sections
const GOLD  = "#c8922a";
const CREAM = "#f8f4ec";
const SAGE  = "#52b788";
const LIGHT_SAGE = "#b7e4c7";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  en: {
    navHome:"Home",navAbout:"About Us",navBrands:"Brands",navProducts:"Products",navNews:"News",navContact:"Contact Us",
    footerTagline:"Bringing the finest Middle Eastern food staples to the Omani market — quality, heritage, and trust in every jar.",
    footerMadeInOman:"Made in Oman",footerQuickLinks:"Quick Links",footerContactTitle:"Contact",
    footerRights:"© 2026 Food World for Industry L.L.C. All rights reserved. — Salalah, Sultanate of Oman",
    addressLine1:"Raysut Industrial City (Madayn)",addressLine2:"Salalah — Sultanate of Oman",
    halalCertified:"Halal Certified",madeInOman:"Made in Oman",
    viewAllProducts:"View all products →",allNews:"All news →",learnAboutUs:"Learn about us →",ourAddress:"Our Address",
    heroBadge:"Raysut Industrial City · Salalah · Oman",
    heroLine1:"The Taste of",heroLineEm:"the Gulf,",heroLine3:"Delivered.",
    heroDesc:"Food World for Industry L.L.C imports premium tahini and halawa tahini from twelve trusted brands — bringing the authentic flavours of the Arab world to Omani tables.",
    ourProductsBtn:"Our Products",ourBrandsBtn:"Our Brands",
    stat1:"Partner Brands",stat2:"Core Products",stat3:"Halal Certified",stat4:"Quality Standard",
    featureCaption:"The Secret of Flavour... Is in Our Tahini",
    featureCompanyName:"Food World\nfor Industry L.L.C",
    featureP1:"Based in Salalah's Raysut Industrial City, we are Oman's dedicated importer of premium Middle Eastern food staples. From silky tahini to rich, golden halawa, every product in our catalogue is selected for authenticity and quality.",
    featureP2:"Our twelve partner brands — including Al Osool, Al Mazaj, Today, Al Fayrouz, Icon, and more — represent the finest names in the Arab food industry.",
    whatWeImport:"What We Import",ourFourProducts:"Our Products",
    halawaquoteEn:"When Quality Becomes a Taste",
    ourPartners:"Our Partners",twelveBrands:"Twelve Trusted Brands",
    galleryTag:"Our Moments",galleryTitle:"Real Food. Real Flavour.",
    galleryDesc:"A glimpse into the Gulf kitchens and tables our products are made for.",
    latestTag:"Latest",newsUpdatesTitle:"News & Updates",
    ctaTitle:"Ready to Partner With Us?",
    ctaDesc:"Contact our Salalah office to discuss wholesale inquiries, product availability, or brand partnerships.",
    ctaBtn:"Get in Touch",
    whoweare:"Who We Are",aboutTitle1:"About Food World",aboutTitle2:"for Industry L.L.C",
    ourStory:"Our Story",
    aboutP1:"Food World for Industry L.L.C (عالم الغذاء للصناعة ش.م.م) was founded with a single conviction: the Omani market deserves access to the finest traditional food products from across the Arab world, without compromise on quality or authenticity.",
    aboutP2:"Based in Salalah — the lush green capital of Dhofar — we operate from Raysut Industrial City (Madayn), one of Oman's premier industrial and logistics hubs. Our strategic location allows us to serve clients efficiently across the Sultanate.",
    aboutP3:"We focus on two cornerstone categories: tahini and halawa tahini — sourced from twelve partner brands. Every brand earns its place through rigorous quality evaluation, halal certification, and cultural authenticity.",
    logoCaption:"Our name and mark — the green flower of quality — represent our commitment to authentic Gulf food heritage, grounded in the Sultanate of Oman.",
    videoBadge:"Watch & Discover",videoTitle:"Discover the story behind our products",
    whatDrivesUs:"What Drives Us",ourValues:"Our Values",
    v1t:"Quality First",v1d:"Every product we carry has passed our quality screening — from raw ingredient sourcing to halal certification and shelf-stability testing.",
    v2t:"Cultural Authenticity",v2d:"We prioritize brands with deep roots in their local food traditions. Authentic stone-ground tahini and rich, traditional halawa — not approximations.",
    v3t:"Gulf Market Knowledge",v3d:"We understand the Omani and wider GCC consumer. Our portfolio reflects local taste preferences, dietary requirements, and packaging expectations.",
    whereWeAre:"Where We Are",salalahTitle:"Salalah, Oman",
    salalahDesc:"Salalah is the capital of the Dhofar Governorate — renowned for its lush khareef season, frankincense heritage, and strategic position at the southern tip of the Arabian Peninsula. It is an ideal base for food distribution across the Gulf.",
    brandsBadge:"Our Partners",brandsTitle:"Twelve Trusted Brands",
    brandsDesc:"Each brand in our portfolio is selected for quality, authenticity, and halal compliance.",
    fAll:"All",fTahini:"Tahini",fHalawa:"Halawa",
    productsBadge:"What We Import",productsTitle:"Our Products",
    productsDesc:"Two cornerstone products of the Middle Eastern pantry, sourced from twelve of the most trusted brands in the Arab world.",
    availableFrom:"Available from",partnerBrands:"partner brands",allGlance:"All Products at a Glance",
    specsBadge:"Our Products",specsTitle:"Product Specifications & Prices",specsDesc:"Premium quality tahini and halawa in different sizes to suit your needs.",
    tahiniName:"Tahini",tahiniAr:"طحينة",
    tahiniDesc:"Stone-ground sesame paste of uncompromising quality — pale gold, silky smooth, and rich with natural oils. Our liquid tahina range spans 200g, 450g, 900g, 8Kg, 10Kg, and 18Kg formats, sourced from brands that have mastered the craft over generations. A cornerstone of Gulf cuisine, used in everything from fatteh and falafel to desserts and dressings.",
    halawaPlainName:"Halawa (Plain)",halawaPlainAr:"سادة",
    halawaPlainDesc:"Rich, melt-in-the-mouth plain halawa tahini, crafted from the finest sesame paste for a smooth, traditional taste. Our halawa range spans 250g, 500g, 900g, and 14Kg formats, with additional catering packs at 700g, 1400g, 5Kg, and 6.5Kg. A beloved centrepiece of the Gulf dessert table.",
    halawaPistachioName:"Halawa (Pistachio)",halawaPistachioAr:"بالفستق",
    halawaPistachioDesc:"Rich, melt-in-the-mouth halawa tahini studded with whole pistachios, crafted from the finest sesame paste for a nutty, indulgent twist. Our halawa range spans 250g, 500g, 900g, and 14Kg formats, with additional catering packs at 700g, 1400g, 5Kg, and 6.5Kg. A beloved centrepiece of the Gulf dessert table.",
    packSizesBadge:"Our Packaging",packSizesTitle:"Brand Marks & Pack Weights",
    packSizesDesc:"Every product line carries its own quality mark, available in a range of pack sizes to suit retail and bulk needs.",
    packTahinaLabel:"Tahina",packTahinaSizes:"200g · 450g · 900g · 8kg · 10kg · 18kg",
    packGezaeeLabel:"Gezaee Halawa",packGezaeeSizes:"700g · 1400g · 5kg · 6.5kg · 14kg",
    packHalawaLabel:"Halawa",packHalawaSizes:"250g · 500g · 900g · 14kg",
    packHalawaExtra:"Various brands, additional packs (700g, 1400g, 5kg, 6.5kg, 14kg)",
    newsBadge:"Updates",newsTitle:"News & Announcements",
    n1tag:"Company News",n1date:"September 2026",n1title:"Food World for Industry Celebrates 12 Partner Brands",
    n1body:"We are proud to complete our full brand portfolio — twelve carefully selected partners including Al Osool, Al Mazaj, Today, Fall, Al Fayrouz, Gameel, Riyadah, Los Pinos, Icon, Soufi, Sit Al Habayeb, and Saed. Each brand was evaluated for quality, halal certification, and cultural fit with the Gulf market.",
    n2tag:"Market Update",n2date:"July 2026",n2title:"Rising Demand for Premium Tahini Across the GCC",
    n2body:"Consumer preference across GCC markets is shifting toward premium, natural tahini products. Food World for Industry is meeting this demand with expanded SKUs from Al Osool, Riyadah, and Icon — all stone-ground, preservative-free offerings Made in Oman.",
    n3tag:"Partnership",n3date:"May 2026",n3title:"New Partnership with Saed Foods Strengthens Our Portfolio",
    n3body:"Food World for Industry has signed a distribution agreement with Saed, adding their acclaimed halawa tahini products to our Salalah warehouse. This partnership opens a new channel for premium Gulf-market certified goods.",
    n4tag:"Operations",n4date:"February 2026",n4title:"Now Operating from Raysut Industrial City, Salalah",
    n4body:"Our new warehouse and operations hub at Raysut Industrial City (Madayn) in Salalah is fully operational. The facility includes cold-chain storage and full temperature-controlled logistics for all product categories.",
    contactBadge:"Reach Out",contactTitle:"Contact Us",contactHeading:"Get in Touch",
    contactDesc:"Whether you are a retailer, wholesaler, or brand looking to enter the Omani market, we welcome your inquiry. Our team in Salalah is ready to assist.",
    lAddress:"Address",lPhone:"Phone",lEmail:"Email",
    businessHours:"Business Hours",sunThu:"Sunday – Thursday",sunThuTime:"8:00 AM – 5:00 PM",
    friSat:"Friday – Saturday",closed:"Closed",tz:"Oman Standard Time (GMT+4)",
    followUs:"Follow Us",
  },
  ar: {
    navHome:"الرئيسية",navAbout:"من نحن",navBrands:"العلامات التجارية",navProducts:"المنتجات",navNews:"الأخبار",navContact:"اتصل بنا",
    footerTagline:"نوصل إليك أجود المواد الغذائية الشرق أوسطية — جودة وتراث وثقة في كل برطمان.",
    footerMadeInOman:"صُنع في عُمان",footerQuickLinks:"روابط سريعة",footerContactTitle:"تواصل معنا",
    footerRights:"© 2026 عالم الغذاء للصناعة ش.م.م. جميع الحقوق محفوظة. — صلالة، سلطنة عُمان",
    addressLine1:"مدينة رياط الصناعية (مدين)",addressLine2:"صلالة — سلطنة عُمان",
    halalCertified:"معتمد حلال",madeInOman:"صُنع في عُمان",
    viewAllProducts:"← عرض جميع المنتجات",allNews:"← جميع الأخبار",learnAboutUs:"← تعرف علينا أكثر",ourAddress:"عنواننا",
    heroBadge:"مدينة رياط الصناعية · صلالة · عُمان",
    heroLine1:"طعم الخليج...",heroLineEm:"يصل إليك،",heroLine3:"أينما كنتَ.",
    heroDesc:"عالم الغذاء للصناعة ش.م.م يستورد أجود أصناف الطحينة وحلاوة الطحينة من اثنتي عشرة علامة تجارية موثوقة — لتوصيل الأصالة والطعم العربي إلى موائد عُمان.",
    ourProductsBtn:"منتجاتنا",ourBrandsBtn:"علاماتنا التجارية",
    stat1:"علامة تجارية",stat2:"منتجات أساسية",stat3:"معتمد حلال",stat4:"معيار الخليج",
    featureCaption:"سر النكهة... في طحينتنا",
    featureCompanyName:"عالم الغذاء\nللصناعة ش.م.م",
    featureP1:"من مدينة رياط الصناعية في صلالة، نحن المستورد المتخصص في عُمان لأجود المواد الغذائية الشرق أوسطية. من الطحينة الناعمة إلى الحلاوة الذهبية الغنية، كل منتج في كتالوجنا مختار للأصالة والجودة.",
    featureP2:"علاماتنا التجارية الاثنتا عشرة — تشمل الأصول والمزاج وتوداي والفيروز وايقونة وغيرها — تمثل أرقى الأسماء في صناعة الغذاء العربي.",
    whatWeImport:"ماذا نستورد",ourFourProducts:"منتجاتنا",
    halawaquoteEn:"عندما تصبح الجودة مذاقاً",
    ourPartners:"شركاؤنا",twelveBrands:"اثنتا عشرة علامة تجارية موثوقة",
    galleryTag:"لحظاتنا",galleryTitle:"طعام حقيقي. نكهة حقيقية.",
    galleryDesc:"لمحة من مطابخ الخليج وموائده التي صُنعت منتجاتنا لأجلها.",
    latestTag:"آخر المستجدات",newsUpdatesTitle:"الأخبار والتحديثات",
    ctaTitle:"هل أنت مستعد للشراكة معنا؟",
    ctaDesc:"تواصل مع مكتبنا في صلالة لمناقشة استفسارات الجملة أو توافر المنتجات أو شراكات العلامة التجارية.",
    ctaBtn:"تواصل معنا",
    whoweare:"من نحن",aboutTitle1:"عن عالم الغذاء",aboutTitle2:"للصناعة ش.م.م",
    ourStory:"قصتنا",
    aboutP1:"تأسست شركة عالم الغذاء للصناعة ش.م.م بقناعة راسخة: يستحق السوق العُماني الوصول إلى أفضل المنتجات الغذائية التقليدية من جميع أنحاء العالم العربي، دون تنازل عن الجودة أو الأصالة.",
    aboutP2:"مقرها في صلالة — العاصمة الخضراء لظفار — تعمل الشركة من مدينة رياط الصناعية (مدين)، أحد أبرز المراكز الصناعية واللوجستية في عُمان. يُمكّننا موقعنا الاستراتيجي من خدمة عملائنا بكفاءة في جميع أنحاء السلطنة.",
    aboutP3:"نتخصص في فئتين رئيسيتين: الطحينة وحلاوة الطحينة — مصدرها اثنتا عشرة علامة تجارية مختارة بعناية. كل علامة تجارية تحتل مكانها بناءً على تقييم صارم للجودة وشهادة الحلال والأصالة الثقافية.",
    logoCaption:"اسمنا وشعارنا — زهرة الجودة الخضراء — يجسدان التزامنا بتراث الغذاء الخليجي الأصيل، بجذور راسخة في سلطنة عُمان.",
    videoBadge:"شاهد واكتشف",videoTitle:"اكتشف القصة وراء منتجاتنا",
    whatDrivesUs:"ما يحركنا",ourValues:"قيمنا",
    v1t:"الجودة أولاً",v1d:"لا تنازل أبداً. كل منتج نحمله اجتاز معايير الجودة لدينا — من مصادر المكونات الخام إلى شهادات الحلال واختبارات الاستقرار.",
    v2t:"الأصالة الثقافية",v2d:"نُولي الأولوية للعلامات التجارية ذات الجذور العميقة في تقاليدها الغذائية المحلية. طحينة أصيلة مطحونة على الحجر وحلاوة تقليدية غنية — لا بدائل.",
    v3t:"معرفة السوق الخليجي",v3d:"نفهم المستهلك العُماني ودول الخليج العربي. تعكس محفظتنا أذواق السوق المحلية والمتطلبات الغذائية وتوقعات التعبئة والتغليف.",
    whereWeAre:"أين نحن",salalahTitle:"صلالة، عُمان",
    salalahDesc:"صلالة هي عاصمة محافظة ظفار — تشتهر بموسم الخريف الأخضر وتراث تجارة اللبان وموقعها الاستراتيجي في أقصى جنوب شبه الجزيرة العربية. إنها قاعدة مثالية لتوزيع الغذاء عبر منطقة الخليج.",
    brandsBadge:"شركاؤنا",brandsTitle:"اثنتا عشرة علامة تجارية موثوقة",
    brandsDesc:"كل علامة تجارية في محفظتنا مختارة للجودة والأصالة والامتثال لمعايير الحلال.",
    fAll:"الكل",fTahini:"طحينة",fHalawa:"حلاوة",
    productsBadge:"ماذا نستورد",productsTitle:"منتجاتنا",
    productsDesc:"منتجان أساسيان من المطبخ الشرق أوسطي، مصدرهما اثنتا عشرة من أوثق العلامات التجارية في العالم العربي.",
    availableFrom:"متوفر من",partnerBrands:"علامات تجارية",allGlance:"كافة منتجاتنا دفعة واحدة",
    specsBadge:"منتجاتنا",specsTitle:"مواصفات المنتجات والأسعار",specsDesc:"طحينة وحلاوة عالية الجودة بأحجام مختلفة تناسب احتياجاتك.",
    tahiniName:"الطحينة",tahiniAr:"طحينة",
    tahiniDesc:"معجون سمسم مطحون على الحجر بجودة لا تُضاهى — ذهبي شاحب، ناعم كالحرير، غني بالزيوت الطبيعية. تمتد مجموعة الطحينة السائلة لدينا لتشمل أحجام 200 جم، 450 جم، 900 جم، 8 كجم، 10 كجم، و18 كجم، مصادرها من علامات تجارية أتقنت هذه الصنعة عبر أجيال. ركيزة أساسية في مطبخ الخليج، تُستخدم في كل شيء من الفتة والفلافل إلى الحلويات والتتبيلات.",
    halawaPlainName:"حلاوة طحينية (سادة)",halawaPlainAr:"سادة",
    halawaPlainDesc:"حلاوة طحينية سادة غنية تذوب في الفم، مصنوعة من أجود معجون السمسم لمذاق ناعم وتقليدي أصيل. تمتد مجموعة الحلاوة لدينا لتشمل أحجام 250 جم، 500 جم، 900 جم، و14 كجم، مع عبوات إضافية للتموين بأحجام 700 جم، 1400 جم، 5 كجم، و6.5 كجم. طبق أساسي محبوب على مائدة الحلويات الخليجية.",
    halawaPistachioName:"حلاوة طحينية (فستق)",halawaPistachioAr:"بالفستق",
    halawaPistachioDesc:"حلاوة طحينية غنية تذوب في الفم ومرصعة بحبات الفستق الكاملة، مصنوعة من أجود معجون السمسم لمذاق مكسّرات فاخر ومميز. تمتد مجموعة الحلاوة لدينا لتشمل أحجام 250 جم، 500 جم، 900 جم، و14 كجم، مع عبوات إضافية للتموين بأحجام 700 جم، 1400 جم، 5 كجم، و6.5 كجم. طبق أساسي محبوب على مائدة الحلويات الخليجية.",
    packSizesBadge:"عبواتنا",packSizesTitle:"العلامات المميزة وأحجام العبوات",
    packSizesDesc:"تحمل كل فئة من منتجاتنا علامة جودتها الخاصة، وتتوفر بمجموعة من أحجام العبوات لتناسب احتياجات التجزئة والجملة.",
    packTahinaLabel:"الطحينة",packTahinaSizes:"200 جم · 450 جم · 900 جم · 8 كجم · 10 كجم · 18 كجم",
    packGezaeeLabel:"حلاوة غذائي",packGezaeeSizes:"700 جم · 1400 جم · 5 كجم · 6.5 كجم · 14 كجم",
    packHalawaLabel:"حلاوة",packHalawaSizes:"250 جم · 500 جم · 900 جم · 14 كجم",
    packHalawaExtra:"علامات تجارية متعددة، عبوات إضافية (700 جم، 1400 جم، 5 كجم، 6.5 كجم، 14 كجم)",
    newsBadge:"آخر المستجدات",newsTitle:"الأخبار والإعلانات",
    n1tag:"أخبار الشركة",n1date:"سبتمبر 2026",n1title:"عالم الغذاء للصناعة يحتفل بـ 12 علامة تجارية شريكة",
    n1body:"يسعدنا الإعلان عن اكتمال محفظة علاماتنا التجارية — اثنتا عشرة شريكاً مختاراً بعناية تشمل الأصول والمزاج وتوداي والخريف والفيروز وجميل وريادة ولوس بينوس وايقونة وصوفي وست الحبايب وسائد.",
    n2tag:"تحديث السوق",n2date:"يوليو 2026",n2title:"تزايد الطلب على الطحينة الفاخرة عبر دول الخليج",
    n2body:"تتجه تفضيلات المستهلكين في أسواق دول مجلس التعاون الخليجي نحو منتجات الطحينة الطبيعية الفاخرة. تلبي عالم الغذاء للصناعة هذا الطلب بتوسيع مجموعة المنتجات من الأصول وريادة وايقونة — جميعها مطحون على الحجر وخالٍ من المواد الحافظة وصُنع في عُمان.",
    n3tag:"شراكة",n3date:"مايو 2026",n3title:"شراكة جديدة مع سائد تعزز محفظتنا",
    n3body:"وقّعت عالم الغذاء للصناعة اتفاقية توزيع مع سائد، مضيفةً منتجاتهم المتميزة من الحلاوة الطحينية إلى مستودعنا في صلالة. تفتح هذه الشراكة قناةً جديدة للسلع المعتمدة بمعايير السوق الخليجي.",
    n4tag:"عمليات",n4date:"فبراير 2026",n4title:"الآن نعمل من مدينة رياط الصناعية، صلالة",
    n4body:"مستودعنا ومركز عملياتنا الجديد في مدينة رياط الصناعية (مدين) بصلالة بات يعمل بكامل طاقته. المنشأة مجهزة بمرافق التبريد ولوجستيات التحكم في درجة الحرارة لجميع فئات المنتجات.",
    contactBadge:"تواصل معنا",contactTitle:"اتصل بنا",contactHeading:"تواصل معنا",
    contactDesc:"سواء كنت تاجراً بالتجزئة أو الجملة أو علامة تجارية تسعى للدخول إلى السوق العُماني، نرحب باستفسارك. فريقنا في صلالة مستعد للمساعدة.",
    lAddress:"العنوان",lPhone:"الهاتف",lEmail:"البريد الإلكتروني",
    businessHours:"ساعات العمل",sunThu:"الأحد – الخميس",sunThuTime:"8:00 ص – 5:00 م",
    friSat:"الجمعة – السبت",closed:"مغلق",tz:"توقيت عُمان القياسي (غرينتش +4)",
    followUs:"تابعونا",
  },
} as const;

type Tr = Record<keyof typeof T.en, string>;

// ─── STATIC DATA ────────────────────────────────────────────────────────────
const brands = [
  { name:"Al Osool",arabic:"الأصول",taglineEn:"High Quality",taglineAr:"عالي الجودة" },
  { name:"Al Mazaj",arabic:"المزاج",taglineEn:"Rich & Aromatic",taglineAr:"غني وعطري" },
  { name:"Today",arabic:"توداي",taglineEn:"Fresh Every Day",taglineAr:"طازج كل يوم" },
  { name:"Fall",arabic:"الخريف",taglineEn:"Seasonal Excellence",taglineAr:"تميز الموسم" },
  { name:"Al Fayrouz",arabic:"الفيروز",taglineEn:"Premium Quality",taglineAr:"جودة فائقة" },
  { name:"Gameel",arabic:"جميل",taglineEn:"Naturally Good",taglineAr:"طبيعي وجيد" },
  { name:"Riyadah",arabic:"ريادة",taglineEn:"Pioneering Taste",taglineAr:"طعم رائد" },
  { name:"Los Pinos",arabic:"لوس بينوس",taglineEn:"Mediterranean Craft",taglineAr:"حرفة متوسطية" },
  { name:"Icon",arabic:"ايقونة",taglineEn:"Iconic Flavors",taglineAr:"نكهات أيقونية" },
  { name:"Soufi",arabic:"صوفي",taglineEn:"Traditional & Pure",taglineAr:"تقليدي وصافي" },
  { name:"Sit Al Habayeb",arabic:"ست الحبايب",taglineEn:"Grandmother's Recipe",taglineAr:"وصفة الجدة" },
  { name:"Saed",arabic:"سائد",taglineEn:"Trusted Since Day One",taglineAr:"موثوق منذ البداية" },
];

function getProducts(t: Tr) {
  return [
    { name:t.tahiniName,arabicHint:t.tahiniAr,description:t.tahiniDesc,image:img13,imageAlt:"Overhead sandwich with tahini — Food World for Industry",brandNames:["Al Osool","Fall","Al Fayrouz","Riyadah","Icon","Sit Al Habayeb"] },
    { name:t.halawaPlainName,arabicHint:t.halawaPlainAr,description:t.halawaPlainDesc,image:halawaPlainHeroImg,imageAlt:"Plain halawa tahini block — Food World for Industry",brandNames:["Al Mazaj","Today","Gameel","Los Pinos","Soufi","Saed"] },
    { name:t.halawaPistachioName,arabicHint:t.halawaPistachioAr,description:t.halawaPistachioDesc,image:halawaPistachioHeroImg,imageAlt:"Pistachio halawa tahini cubes — Food World for Industry",brandNames:["Al Mazaj","Today","Gameel","Los Pinos","Soufi","Saed"] },
  ];
}

function getNews(t: Tr) {
  return [
    { date:t.n1date,tag:t.n1tag,title:t.n1title,excerpt:t.n1body,image:tahiniPourImg },
    { date:t.n2date,tag:t.n2tag,title:t.n2title,excerpt:t.n2body,image:img13 },
    { date:t.n3date,tag:t.n3tag,title:t.n3title,excerpt:t.n3body,image:img28 },
    { date:t.n4date,tag:t.n4tag,title:t.n4title,excerpt:t.n4body,image:img25 },
  ];
}

const galleryImages = [img12, img07, img13, img25, img28, img17];
const galleryAlts = [
  "Gulf family dining with tahini",
  "Grilled kebab platter with tahini poured",
  "Overhead sandwich with tahini spread",
  "Pistachio halawa on marble plate",
  "Plain halawa sesame on rustic wood",
  "Hands breaking pistachio halawa",
];

function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

// ─── SOCIAL ICONS (inline SVG) ───────────────────────────────────────────────
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

// ─── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-white/20 overflow-hidden text-xs font-semibold">
      <button onClick={() => setLang("en")} className={`px-3 py-1.5 transition-colors ${lang === "en" ? `bg-[${GOLD}] text-[${CAP}]` : "text-[#e8d5b0] hover:text-white"}`}
        style={lang === "en" ? { backgroundColor: GOLD, color: CAP } : {}}>EN</button>
      <button onClick={() => setLang("ar")} className={`px-3 py-1.5 transition-colors ${lang === "ar" ? "" : "text-[#e8d5b0] hover:text-white"}`}
        style={lang === "ar" ? { backgroundColor: GOLD, color: CAP } : {}}>عربي</button>
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ page, setPage, lang, setLang, t }: { page: Page; setPage: (p: Page) => void; lang: Lang; setLang: (l: Lang) => void; t: Tr }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links: { label: string; key: Page }[] = [
    { label:t.navHome,key:"home" },{ label:t.navAbout,key:"about" },{ label:t.navBrands,key:"brands" },
    { label:t.navProducts,key:"products" },{ label:t.navNews,key:"news" },{ label:t.navContact,key:"contact" },
  ];
  function navigate(key: Page) { setPage(key); setMenuOpen(false); scrollToTop(); }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg border-b border-white/10" style={{ backgroundColor: `${CAP}f5` }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <button onClick={() => navigate("home")} className="flex-shrink-0">
          <img src={logoImg} alt="Food World for Industry L.L.C" className="h-12 w-auto object-contain" />
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.key} onClick={() => navigate(l.key)}
              className="px-3 py-2 text-sm font-medium tracking-wide rounded transition-all duration-200"
              style={page === l.key ? { backgroundColor: GOLD, color: CAP } : { color: "#e8d5b0" }}
              onMouseEnter={(e) => { if (page !== l.key) (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { if (page !== l.key) (e.target as HTMLElement).style.color = "#e8d5b0"; }}>
              {l.label}
            </button>
          ))}
          <div className="ms-3"><LangToggle lang={lang} setLang={setLang} /></div>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button className="p-2" style={{ color: CREAM }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}/>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
            </div>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10" style={{ backgroundColor: CAP2 }}>
          {links.map((l) => (
            <button key={l.key} onClick={() => navigate(l.key)}
              className={`block w-full text-left px-6 py-4 text-sm font-medium border-b border-white/5 transition-colors ${lang === "ar" ? "text-right" : ""}`}
              style={{ color: page === l.key ? GOLD : "#e8d5b0" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer({ setPage, t }: { setPage: (p: Page) => void; t: Tr }) {
  function navigate(key: Page) { setPage(key); scrollToTop(); }
  const pageKeys: { key: Page; label: string }[] = [
    { key:"home",label:t.navHome },{ key:"about",label:t.navAbout },{ key:"brands",label:t.navBrands },
    { key:"products",label:t.navProducts },{ key:"news",label:t.navNews },{ key:"contact",label:t.navContact },
  ];

  return (
    <footer style={{ backgroundColor: CAP, color: "#e8d5b0" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-5"><img src={logoImg} alt="Food World for Industry L.L.C" className="h-12 w-auto object-contain" /></div>
          <p className="text-sm leading-relaxed opacity-80">{t.footerTagline}</p>
          <div className="mt-4 text-xs font-semibold tracking-widest uppercase" style={{ color: SAGE }}>{t.footerMadeInOman}</div>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-display font-semibold mb-4" style={{ color: CREAM }}>{t.footerQuickLinks}</h4>
          <div className="flex flex-col gap-2">
            {pageKeys.map((p) => (
              <button key={p.key} onClick={() => navigate(p.key)}
                className="text-sm text-left hover:opacity-100 transition-all w-fit opacity-75"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}>
                {p.label}
              </button>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4" style={{ color: CREAM }}>{t.footerContactTitle}</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3"><span className="mt-0.5 flex-shrink-0" style={{ color: GOLD }}>📍</span>
              <span className="opacity-75">{t.addressLine1}<br />{t.addressLine2}</span></div>
            <div className="flex gap-3"><span style={{ color: GOLD }}>📞</span>
              <a href="tel:+96896579702" className="opacity-75 hover:opacity-100 transition-opacity">+968 9657 9702</a></div>
            <div className="flex gap-3"><span style={{ color: GOLD }}>✉️</span>
              <a href="mailto:info@foodworldoman.com" className="opacity-75 hover:opacity-100 transition-opacity">info@foodworldoman.com</a></div>
          </div>

          {/* Social icons */}
          <div className="mt-6">
            <div className="text-xs tracking-widest uppercase font-semibold mb-3 opacity-60">{t.followUs}</div>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/foodworldom?stkn=ZXJhMndndW8zODJr" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" title="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#e8d5b0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; (e.currentTarget as HTMLElement).style.color = CAP; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#e8d5b0"; }}>
                <IconInstagram />
              </a>
              <a href="https://www.tiktok.com/@foodworldom?_r=1&_t=ZS-99aIE77JvmB" target="_blank" rel="noopener noreferrer"
                aria-label="TikTok" title="TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#e8d5b0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; (e.currentTarget as HTMLElement).style.color = CAP; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#e8d5b0"; }}>
                <IconTikTok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-5 text-center text-xs opacity-40 max-w-7xl mx-auto px-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {t.footerRights}
      </div>

      {/* Credit */}
      <div className="pb-6 text-center text-xs" style={{ opacity: 0.55 }}>
        Crafted and edited by{" "}
        <a href="https://snapsitecreations.carrd.co/" target="_blank" rel="noopener noreferrer"
          className="font-bold transition-opacity"
          style={{ color: GOLD }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = ""; }}>
          SNAPSITECREATIONS
        </a>
      </div>
    </footer>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function HomePage({ setPage, t }: { setPage: (p: Page) => void; t: Tr }) {
  const products = getProducts(t);
  const news = getNews(t);
  function navigate(key: Page) { setPage(key); scrollToTop(); }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: "#1a0d04" }}>
        <div className="absolute inset-0 geometric-pattern-light opacity-20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${img12})` }} />
        {/* warm cappuccino overlay — less heavy than before */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(42,21,8,0.82) 0%, rgba(61,32,15,0.55) 55%, rgba(30,15,4,0.25) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border" style={{ backgroundColor: `${GOLD}22`, borderColor: `${GOLD}55` }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: GOLD }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#e8c06a" }}>{t.heroBadge}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] mb-6" style={{ color: CREAM }}>
              {t.heroLine1}<br />
              <em style={{ color: GOLD }}>{t.heroLineEm}</em><br />
              {t.heroLine3}
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: LIGHT_SAGE }}>{t.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("products")} className="px-8 py-4 font-semibold rounded text-sm tracking-wide transition-colors"
                style={{ backgroundColor: GOLD, color: CAP }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e8c06a"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; }}>
                {t.ourProductsBtn}
              </button>
              <button onClick={() => navigate("brands")} className="px-8 py-4 font-semibold rounded text-sm tracking-wide transition-colors border"
                style={{ borderColor: SAGE, color: SAGE }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${SAGE}18`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                {t.ourBrandsBtn}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {([["12", t.stat1],["2", t.stat2],["100%", t.stat3],["GCC", t.stat4]] as [string,string][]).map(([num, label]) => (
              <div key={label} className="rounded-lg p-6 text-center transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="font-display text-4xl font-bold mb-1" style={{ color: GOLD }}>{num}</div>
                <div className="text-sm" style={{ color: LIGHT_SAGE }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Feature — company intro */}
      <section className="bg-[#f8f4ec] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img src={img07} alt="Grilled kebab platter with tahini being poured" className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,21,8,0.65) 0%, transparent 55%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: GOLD }}>{t.madeInOman}</div>
              <div className="font-display text-xl font-semibold" style={{ color: CREAM }}>{t.featureCaption}</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.whoweare}</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: GREEN }}>
              {t.featureCompanyName.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h2>
            <p className="leading-relaxed mb-5 text-[#5a7a65]">{t.featureP1}</p>
            <p className="leading-relaxed mb-8 text-[#5a7a65]">{t.featureP2}</p>
            <button onClick={() => navigate("about")} className="text-sm border-b pb-0.5 transition-colors" style={{ color: GREEN, borderColor: GREEN }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; (e.currentTarget as HTMLElement).style.borderColor = GOLD; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = GREEN; (e.currentTarget as HTMLElement).style.borderColor = GREEN; }}>
              {t.learnAboutUs}
            </button>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-20 bg-[#ede8dc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.whatWeImport}</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: GREEN }}>{t.ourFourProducts}</h2>
            </div>
            <button onClick={() => navigate("products")} className="text-sm border-b pb-0.5 transition-colors self-start md:self-auto" style={{ color: GREEN, borderColor: GREEN }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; (e.currentTarget as HTMLElement).style.borderColor = GOLD; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = GREEN; (e.currentTarget as HTMLElement).style.borderColor = GREEN; }}>
              {t.viewAllProducts}
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} onClick={() => navigate("products")} className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 bg-[#ede8dc] overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 end-3 text-xs px-2 py-1 rounded font-medium" style={{ backgroundColor: CAP, color: CREAM }}>{p.brandNames.length} {t.partnerBrands}</div>
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium mb-1 font-display italic" style={{ color: GOLD }}>{p.arabicHint}</div>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: GREEN }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed line-clamp-3 text-[#5a7a65]">{p.description.slice(0, 100)}…</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic full-width photo */}
      <section className="relative h-80 md:h-[420px] overflow-hidden">
        <img src={halawaTahiniImg} alt="Halawa tahini pistachio — Food World for Industry" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 flex items-center" style={{ background: `linear-gradient(to right, ${CAP}cc 0%, ${CAP}77 50%, transparent 100%)` }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="font-display text-3xl md:text-4xl font-semibold mb-2" style={{ color: GOLD }}>عالم الغذاء...</div>
            <div className="font-display text-2xl md:text-3xl font-semibold mb-4 max-w-sm" style={{ color: CREAM }}>عندما تصبح الجودة مذاقاً</div>
            <div className="text-base max-w-xs" style={{ color: LIGHT_SAGE }}>{t.halawaquoteEn}</div>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-[#f8f4ec] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.ourPartners}</p>
          <h2 className="font-display text-3xl font-semibold" style={{ color: GREEN }}>{t.twelveBrands}</h2>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <button onClick={() => navigate("brands")} className="block w-full bg-white border border-[#d4cfc3] rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-200"
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CAP; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#d4cfc3"; }}>
            <img src={brandLogosImg} alt="Our twelve partner brand logos — Food World for Industry" className="w-full h-auto object-contain rounded" />
          </button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-[#ede8dc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.galleryTag}</p>
            <h2 className="font-display text-4xl font-semibold mb-3" style={{ color: GREEN }}>{t.galleryTitle}</h2>
            <p className="text-[#5a7a65] max-w-xl mx-auto">{t.galleryDesc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-[#d4cfc3] group">
                <img src={img} alt={galleryAlts[i]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News teaser */}
      <section className="py-20 geometric-pattern-light" style={{ backgroundColor: GREEN }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.latestTag}</p>
              <h2 className="font-display text-4xl font-semibold" style={{ color: CREAM }}>{t.newsUpdatesTitle}</h2>
            </div>
            <button onClick={() => navigate("news")} className="text-sm border-b pb-0.5 transition-colors self-start md:self-auto" style={{ color: SAGE, borderColor: SAGE }}>{t.allNews}</button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {news.slice(0, 2).map((n) => (
              <div key={n.title} onClick={() => navigate("news")} className="rounded-lg overflow-hidden group cursor-pointer transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)"; }}>
                <div className="h-48 overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs rounded-full px-3 py-0.5" style={{ backgroundColor: `${GOLD}22`, color: "#e8c06a", border: `1px solid ${GOLD}44` }}>{n.tag}</span>
                    <span className="text-xs" style={{ color: SAGE }}>{n.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 leading-snug" style={{ color: CREAM }}>{n.title}</h3>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: LIGHT_SAGE }}>{n.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: GREEN }}>{t.ctaTitle}</h2>
          <p className="text-lg mb-8 text-[#5a7a65]">{t.ctaDesc}</p>
          <button onClick={() => navigate("contact")} className="px-10 py-4 font-semibold rounded text-sm tracking-wide transition-colors" style={{ backgroundColor: GREEN, color: CREAM }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = CAP; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GREEN; }}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
function AboutPage({ t }: { t: Tr }) {
  return (
    <div className="pt-20">
      <section className="geometric-pattern-light py-24 relative" style={{ backgroundColor: CAP }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.whoweare}</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold max-w-2xl leading-tight" style={{ color: CREAM }}>
            {t.aboutTitle1}<br />{t.aboutTitle2}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }} />
      </section>

      <section className="py-24 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold mb-6" style={{ color: GREEN }}>{t.ourStory}</h2>
            <p className="leading-relaxed mb-5 text-[#5a7a65]">{t.aboutP1}</p>
            <p className="leading-relaxed mb-5 text-[#5a7a65]">{t.aboutP2}</p>
            <p className="leading-relaxed text-[#5a7a65]">{t.aboutP3}</p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={img12} alt="Gulf family dining scene with tahini" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -start-5 rounded-lg p-4 shadow-xl" style={{ backgroundColor: GOLD }}>
              <div className="font-display text-xl font-bold" style={{ color: CAP }}>{t.madeInOman}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ede8dc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.videoBadge}</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: GREEN }}>{t.videoTitle}</h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ZfPOnhGfP-g"
                title={t.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                frameBorder={0}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 geometric-pattern-light" style={{ backgroundColor: CAP }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img src={logoImg} alt="Food World for Industry L.L.C" className="h-24 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: LIGHT_SAGE }}>{t.logoCaption}</p>
        </div>
      </section>

      <section className="py-20 bg-[#ede8dc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.whatDrivesUs}</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: GREEN }}>{t.ourValues}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {([["◈",t.v1t,t.v1d],["◈",t.v2t,t.v2d],["◈",t.v3t,t.v3d]] as [string,string,string][]).map(([icon,title,desc]) => (
              <div key={title} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4" style={{ color: GOLD }}>{icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: GREEN }}>{title}</h3>
                <p className="leading-relaxed text-sm text-[#5a7a65]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.whereWeAre}</p>
            <h2 className="font-display text-4xl font-semibold mb-6" style={{ color: GREEN }}>{t.salalahTitle}</h2>
            <p className="leading-relaxed mb-6 text-[#5a7a65]">{t.salalahDesc}</p>
            <div className="text-[#f8f4ec] rounded-lg p-6" style={{ backgroundColor: GREEN }}>
              <div className="font-display text-lg font-semibold mb-3">{t.ourAddress}</div>
              <p className="text-sm leading-relaxed" style={{ color: LIGHT_SAGE }}>{t.addressLine1}<br />{t.addressLine2}</p>
              <div className="mt-4 pt-4 border-t border-white/10 text-sm flex flex-col gap-1" style={{ color: LIGHT_SAGE }}>
                <div>📞 +968 9657 9702</div>
                <div>✉️ info@foodworldoman.com</div>
              </div>
            </div>
          </div>
          <div>
            <img src={img28} alt="Plain halawa sesame on wooden table" className="rounded-lg shadow-xl w-full h-[380px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── BRANDS PAGE ─────────────────────────────────────────────────────────────
function BrandsPage({ lang, t }: { lang: Lang; t: Tr }) {
  return (
    <div className="pt-20">
      <section className="geometric-pattern-light py-24 relative" style={{ backgroundColor: CAP }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.brandsBadge}</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight" style={{ color: CREAM }}>{t.brandsTitle}</h1>
          <p className="mt-4 max-w-xl leading-relaxed" style={{ color: LIGHT_SAGE }}>{t.brandsDesc}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }} />
      </section>

      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-[#d4cfc3] p-6 md:p-10 shadow-sm mb-14">
            <img src={brandLogosImg} alt="Our twelve partner brand logos — Food World for Industry" className="w-full h-auto object-contain rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <div key={b.name} className="bg-white rounded-lg border border-[#d4cfc3] p-6 hover:shadow-lg transition-all duration-200"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = CAP; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#d4cfc3"; }}>
                <div className="mb-4 pb-4 border-b border-[#ede8dc]">
                  <div className="font-display text-2xl font-bold leading-none mb-1" style={{ color: GREEN }}>{b.name}</div>
                  <div className="text-base font-medium" style={{ color: GOLD }}>{b.arabic}</div>
                </div>
                <p className="text-sm mb-4 italic text-[#5a7a65]">{lang === "ar" ? b.taglineAr : b.taglineEn}</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: SAGE }} />
                  <span className="text-xs text-[#5a7a65]">{t.halalCertified}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────
function ProductsPage({ t }: { t: Tr }) {
  const [active, setActive] = useState(0);
  const products = getProducts(t);
  const p = products[active];

  return (
    <div className="pt-20">
      <section className="geometric-pattern-light py-24 relative" style={{ backgroundColor: CAP }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.productsBadge}</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight" style={{ color: CREAM }}>{t.productsTitle}</h1>
          <p className="mt-4 max-w-xl leading-relaxed" style={{ color: LIGHT_SAGE }}>{t.productsDesc}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }} />
      </section>

      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {products.map((prod, i) => (
              <button key={prod.name} onClick={() => setActive(i)}
                className="p-4 rounded-lg border text-left transition-all duration-200"
                style={active === i ? { backgroundColor: CAP, color: CREAM, borderColor: CAP, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" } : { backgroundColor: "white", color: GREEN, borderColor: "#d4cfc3" }}>
                <div className="text-sm font-display italic mb-1" style={{ color: GOLD }}>{prod.arabicHint}</div>
                <div className="font-semibold text-sm">{prod.name}</div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl h-[420px] bg-[#ede8dc]">
              <img key={p.name} src={p.image} alt={p.imageAlt} className="w-full h-full object-cover fade-up" />
            </div>
            <div className="fade-up">
              <div className="font-display italic text-2xl mb-1" style={{ color: GOLD }}>{p.arabicHint}</div>
              <h2 className="font-display text-5xl font-semibold mb-6" style={{ color: GREEN }}>{p.name}</h2>
              <p className="leading-relaxed text-lg mb-8 text-[#5a7a65]">{p.description}</p>
              <div>
                <div className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.availableFrom} {p.brandNames.length} {t.partnerBrands}</div>
                <div className="flex flex-wrap gap-2">
                  {p.brandNames.map((b) => (
                    <span key={b} className="text-sm bg-white border border-[#d4cfc3] rounded-full px-4 py-1.5 font-medium transition-colors" style={{ color: GREEN }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-[#ede8dc]">
            <h3 className="font-display text-3xl font-semibold mb-8" style={{ color: GREEN }}>{t.allGlance}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((prod, i) => (
                <div key={prod.name} onClick={() => setActive(i)}
                  className="flex gap-4 p-5 rounded-lg border cursor-pointer transition-all duration-200"
                  style={active === i ? { backgroundColor: CAP, borderColor: CAP } : { backgroundColor: "white", borderColor: "#d4cfc3" }}>
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#ede8dc]">
                    <img src={prod.image} alt={prod.imageAlt} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-display italic text-sm" style={{ color: GOLD }}>{prod.arabicHint}</div>
                    <div className="font-display text-lg font-semibold" style={{ color: active === i ? CREAM : GREEN }}>{prod.name}</div>
                    <div className="text-xs mt-1" style={{ color: active === i ? LIGHT_SAGE : "#5a7a65" }}>{prod.brandNames.length} {t.partnerBrands}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-[#ede8dc]">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.packSizesBadge}</p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: GREEN }}>{t.packSizesTitle}</h3>
              <p className="text-[#5a7a65] max-w-xl mx-auto">{t.packSizesDesc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <img src={logoTahinaImg} alt="Tahina brand mark — Food World for Industry" className="h-24 w-24 object-contain mx-auto mb-5" />
                <h4 className="font-display text-xl font-semibold mb-2" style={{ color: GREEN }}>{t.packTahinaLabel}</h4>
                <p className="text-sm leading-relaxed text-[#5a7a65]">{t.packTahinaSizes}</p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <img src={logoGezaeeImg} alt="Gezaee Halawa brand mark — Food World for Industry" className="h-24 w-auto object-contain mx-auto mb-5" />
                <h4 className="font-display text-xl font-semibold mb-2" style={{ color: GREEN }}>{t.packGezaeeLabel}</h4>
                <p className="text-sm leading-relaxed text-[#5a7a65]">{t.packGezaeeSizes}</p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <img src={logoHalawaImg} alt="Halawa brand mark — Food World for Industry" className="h-24 w-24 object-contain mx-auto mb-5" />
                <h4 className="font-display text-xl font-semibold mb-2" style={{ color: GREEN }}>{t.packHalawaLabel}</h4>
                <p className="text-sm leading-relaxed text-[#5a7a65]">{t.packHalawaSizes}</p>
                <p className="text-xs leading-relaxed mt-3 italic" style={{ color: GOLD }}>{t.packHalawaExtra}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-[#ede8dc]">
            <div className="text-center mb-10">
              <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: GOLD }}>{t.specsBadge}</p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: GREEN }}>{t.specsTitle}</h3>
              <p className="text-[#5a7a65] max-w-xl mx-auto">{t.specsDesc}</p>
            </div>
            <div className="bg-white rounded-xl border border-[#d4cfc3] p-3 md:p-6 shadow-sm max-w-4xl mx-auto">
              <img src={productSpecsImg} alt="Product specifications and prices — Tahini and Halawa — Food World for Industry" className="w-full h-auto object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── NEWS PAGE ────────────────────────────────────────────────────────────────
function NewsPage({ t }: { t: Tr }) {
  const news = getNews(t);
  return (
    <div className="pt-20">
      <section className="geometric-pattern-light py-24 relative" style={{ backgroundColor: CAP }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.newsBadge}</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: CREAM }}>{t.newsTitle}</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }} />
      </section>

      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:col-span-3 h-64 md:h-auto bg-[#ede8dc]">
              <img src={news[0].image} alt={news[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs rounded-full px-3 py-0.5 font-medium border" style={{ backgroundColor: `${GOLD}18`, color: GOLD, borderColor: `${GOLD}44` }}>{news[0].tag}</span>
                <span className="text-xs text-[#5a7a65]">{news[0].date}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold mb-4 leading-snug" style={{ color: GREEN }}>{news[0].title}</h2>
              <p className="text-sm leading-relaxed text-[#5a7a65]">{news[0].excerpt}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.slice(1).map((n) => (
              <div key={n.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-[#ede8dc]">
                <div className="h-44 bg-[#ede8dc] overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs rounded-full px-3 py-0.5 font-medium" style={{ backgroundColor: `${GREEN}15`, color: GREEN }}>{n.tag}</span>
                    <span className="text-xs text-[#5a7a65]">{n.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 leading-snug" style={{ color: GREEN }}>{n.title}</h3>
                  <p className="text-sm leading-relaxed line-clamp-3 text-[#5a7a65]">{n.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE (no form) ───────────────────────────────────────────────────
function ContactPage({ t }: { t: Tr }) {
  return (
    <div className="pt-20">
      <section className="geometric-pattern-light py-24 relative" style={{ backgroundColor: CAP }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: GOLD }}>{t.contactBadge}</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: CREAM }}>{t.contactTitle}</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8f4ec]" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }} />
      </section>

      <section className="py-20 bg-[#f8f4ec]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold mb-4" style={{ color: GREEN }}>{t.contactHeading}</h2>
            <p className="text-[#5a7a65] max-w-xl mx-auto leading-relaxed">{t.contactDesc}</p>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon:"📍", label:t.lAddress, lines:[t.addressLine1, t.addressLine2], href:undefined },
              { icon:"📞", label:t.lPhone, lines:["+968 9657 9702"], href:"tel:+96896579702" },
              { icon:"✉️", label:t.lEmail, lines:["info@foodworldoman.com"], href:"mailto:info@foodworldoman.com" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center border border-[#ede8dc]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4" style={{ backgroundColor: `${CAP}15` }}>{item.icon}</div>
                <div className="font-display text-lg font-semibold mb-2" style={{ color: GREEN }}>{item.label}</div>
                {item.lines.map((line, i) => (
                  item.href
                    ? <a key={i} href={item.href} className="block text-sm text-[#5a7a65] hover:opacity-80 transition-opacity leading-relaxed">{line}</a>
                    : <p key={i} className="text-sm text-[#5a7a65] leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Business hours */}
          <div className="rounded-xl p-8 max-w-lg mx-auto geometric-pattern-light" style={{ backgroundColor: CAP }}>
            <h3 className="font-display text-xl font-semibold mb-5 text-center" style={{ color: CREAM }}>{t.businessHours}</h3>
            <div className="flex flex-col gap-3 text-sm" style={{ color: LIGHT_SAGE }}>
              <div className="flex justify-between gap-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <span>{t.sunThu}</span><span style={{ color: "#e8c06a" }}>{t.sunThuTime}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t.friSat}</span><span style={{ color: SAGE }}>{t.closed}</span>
              </div>
              <div className="mt-2 text-xs opacity-50 text-center">{t.tz}</div>
            </div>

            {/* Social links */}
            <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="text-xs tracking-widest uppercase font-semibold mb-4 opacity-60" style={{ color: CREAM }}>{t.followUs}</div>
              <div className="flex justify-center gap-4">
                {[
                  { href:"https://www.instagram.com/foodworldom?stkn=ZXJhMndndW8zODJr", icon:<IconInstagram />, label:"Instagram" },
                  { href:"https://www.tiktok.com/@foodworldom?_r=1&_t=ZS-99aIE77JvmB", icon:<IconTikTok />, label:"TikTok" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#e8d5b0" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; (e.currentTarget as HTMLElement).style.color = CAP; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#e8d5b0"; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <img src={logoImg} alt="Food World for Industry L.L.C" className="h-16 w-auto object-contain opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  useEffect(() => { scrollToTop(); }, [page]);
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-full flex flex-col bg-[#f8f4ec]">
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        {page === "home"     && <HomePage    setPage={setPage} t={t} />}
        {page === "about"    && <AboutPage   t={t} />}
        {page === "brands"   && <BrandsPage  lang={lang} t={t} />}
        {page === "products" && <ProductsPage t={t} />}
        {page === "news"     && <NewsPage    t={t} />}
        {page === "contact"  && <ContactPage t={t} />}
      </main>
      <Footer setPage={setPage} t={t} />
    </div>
  );
}
