export type TrendDirection = "rising" | "stable" | "declining" | "booming";

export interface MarketTrend {
  field: string;
  pastTrend: string;
  futureTrend: string;
  studyExpectation: string;
  direction: TrendDirection;
  salaryRange: string;
}

const trends: Record<string, MarketTrend> = {
  // ===== HEALTH & MEDICAL =====
  medicine: {
    field: "Medicine & Surgery",
    direction: "booming",
    pastTrend: "Kenya faced a doctor-to-patient ratio of 1:16,000 (2019-2024). Government invested heavily in county hospitals and the Universal Health Coverage (UHC) pilot. COVID-19 massively increased demand. Salaries for interns rose from KES 100K to KES 150K+.",
    futureTrend: "By 2030, Kenya plans to hire 20,000+ healthcare workers under UHC. Telemedicine and AI diagnostics will create hybrid roles. Specialists in oncology, cardiology, and emergency medicine will be in extreme demand. Expect 30%+ job growth.",
    studyExpectation: "6-year intensive program with anatomy, physiology, pharmacology, pathology, and clinical rotations. Expect long hours, hospital attachments from Year 3, and a mandatory 1-year internship. Requires resilience and dedication.",
    salaryRange: "KES 150,000 - 800,000/month",
  },
  pharmacy: {
    field: "Pharmacy",
    direction: "rising",
    pastTrend: "Pharmaceutical sector grew 8% annually (2019-2024). Kenya became East Africa's pharma manufacturing hub. Community pharmacies expanded rapidly in urban and peri-urban areas. Regulatory roles at Pharmacy & Poisons Board increased.",
    futureTrend: "Local drug manufacturing will boom with AfCFTA trade agreements. Clinical pharmacy roles in hospitals will double. Pharmaceutical research and biotechnology will create premium positions. Online pharmacy platforms will create tech-pharma hybrid roles.",
    studyExpectation: "5-year program covering pharmaceutical chemistry, pharmacology, pharmacognosy, and clinical pharmacy. Includes industrial attachments and hospital rotations. Heavy lab work and research projects.",
    salaryRange: "KES 80,000 - 400,000/month",
  },
  nursing: {
    field: "Nursing",
    direction: "booming",
    pastTrend: "Massive global nursing shortage benefited Kenyan nurses — UK, USA, Canada actively recruited. Local demand rose with county hospital expansion. Specialized nurses (ICU, theatre) commanded premium pay. Kenya deployed 5,000+ nurses to counties (2020-2024).",
    futureTrend: "International recruitment will intensify — 50,000+ nurses needed globally by 2030. Mental health nursing, geriatric care, and community health will be top specializations. Remote patient monitoring roles emerging. Salaries projected to rise 40%.",
    studyExpectation: "4-year degree with clinical placements from Year 2. Covers medical-surgical nursing, pediatrics, obstetrics, community health. Expect shift work during placements. Emotional resilience essential.",
    salaryRange: "KES 50,000 - 250,000/month",
  },
  dental: {
    field: "Dental Surgery",
    direction: "rising",
    pastTrend: "Kenya had only ~1,200 dentists for 50M+ people (2019-2024). Private dental clinics grew 15% annually. Cosmetic dentistry became a high-demand niche. Government added dental units in Level 4+ hospitals.",
    futureTrend: "Demand for orthodontics and implantology will surge. Dental tourism from the region will grow. Digital dentistry (3D printing, CAD/CAM) will transform practice. Projected 25% job growth by 2030.",
    studyExpectation: "6-year program with heavy practical components. Covers oral anatomy, prosthetics, oral surgery, and orthodontics. Dental simulation labs from Year 3. Requires fine motor skills and patience.",
    salaryRange: "KES 120,000 - 600,000/month",
  },
  clinical_medicine: {
    field: "Clinical Medicine",
    direction: "booming",
    pastTrend: "Clinical officers became the backbone of Kenya's healthcare, especially in rural areas. Government employed 8,000+ clinical officers (2019-2024). Scope of practice expanded to include minor surgeries and specialized care.",
    futureTrend: "UHC rollout will create 15,000+ clinical officer positions. Specializations in dermatology, ophthalmology, and anesthesia will be premium. Community health integration will expand roles significantly.",
    studyExpectation: "3-year diploma or 4-year degree covering anatomy, medicine, surgery, pediatrics, and obs/gyn. Intensive clinical rotations in hospitals. Expect to be the first point of care in many facilities.",
    salaryRange: "KES 40,000 - 150,000/month",
  },
  medical_lab: {
    field: "Medical Laboratory Sciences",
    direction: "rising",
    pastTrend: "COVID-19 testing infrastructure massively expanded lab capacity. Kenya's lab network grew from 200 to 500+ accredited labs. Molecular diagnostics and genomics labs established. Lab technologists became essential healthcare workers.",
    futureTrend: "Point-of-care testing, AI-assisted diagnostics, and genomic medicine will transform the field. Research labs for tropical diseases will expand. Private lab chains will create management opportunities. 20% growth projected.",
    studyExpectation: "4-year degree covering hematology, microbiology, parasitology, clinical chemistry, and molecular biology. Heavy practical lab work from Year 2. Attention to detail and accuracy are critical.",
    salaryRange: "KES 45,000 - 200,000/month",
  },
  public_health: {
    field: "Public Health",
    direction: "rising",
    pastTrend: "Post-COVID, public health gained massive recognition. Kenya expanded community health programs. Epidemiologists and health economists became highly sought. NGOs and international orgs increased hiring by 35%.",
    futureTrend: "Climate-health, pandemic preparedness, and digital health surveillance will be priority areas. County-level public health positions will triple. Global health consultancy opportunities will expand significantly.",
    studyExpectation: "4-year program covering epidemiology, biostatistics, environmental health, health policy, and program management. Field research and community placements are integral. Data analysis skills essential.",
    salaryRange: "KES 50,000 - 300,000/month",
  },
  radiography: {
    field: "Radiography & Imaging",
    direction: "rising",
    pastTrend: "Kenya invested in CT, MRI, and ultrasound equipment across counties. Radiographers remain critically understaffed. Private imaging centers grew 20% annually. Tele-radiology emerged as a service model.",
    futureTrend: "AI-assisted diagnostics will augment radiographers, not replace them. Interventional radiology will be a premium specialty. Nuclear medicine and PET-CT roles will emerge. 30% growth expected.",
    studyExpectation: "4-year program covering radiation physics, anatomy, imaging techniques, and radiation safety. Clinical rotations in imaging departments. Understanding of technology and patient care needed.",
    salaryRange: "KES 60,000 - 250,000/month",
  },
  nutrition: {
    field: "Nutrition & Dietetics",
    direction: "rising",
    pastTrend: "Rising lifestyle diseases (diabetes, obesity) increased demand. Corporate wellness programs hired nutritionists. Government integrated nutrition into primary healthcare. Social media created opportunities for nutrition influencers.",
    futureTrend: "Personalized nutrition using genetic data will emerge. Sports nutrition and clinical dietetics will grow. Food industry regulations will require more food scientists. Telehealth nutrition consultations will expand.",
    studyExpectation: "4-year degree covering biochemistry, food science, clinical nutrition, community nutrition, and dietetic practice. Hospital and community placements. Combines science with counseling skills.",
    salaryRange: "KES 40,000 - 180,000/month",
  },

  // ===== LAW =====
  law: {
    field: "Law (LLB)",
    direction: "stable",
    pastTrend: "Kenya produced 2,000+ law graduates annually (2019-2024), leading to competition. However, specialized areas (cyber law, intellectual property, tax) thrived. Alternative dispute resolution grew. Devolution created demand for county legal officers.",
    futureTrend: "Tech law, data protection (following Kenya's Data Protection Act), and environmental law will boom. Legal tech startups will create new roles. Regional integration (EAC) will need trade law experts. AI will automate routine legal research.",
    studyExpectation: "4-year LLB followed by Kenya School of Law (1 year) and pupilage (1 year). Covers constitutional, criminal, commercial, and international law. Moot court competitions and legal clinics. Heavy reading and analytical writing.",
    salaryRange: "KES 50,000 - 500,000/month",
  },

  // ===== ENGINEERING =====
  civil_engineering: {
    field: "Civil Engineering",
    direction: "rising",
    pastTrend: "Kenya's infrastructure boom — SGR, expressways, affordable housing — drove massive demand. Construction sector grew 6% annually. Green building practices emerged. BIM technology adoption increased.",
    futureTrend: "Affordable housing program (500,000 units) will sustain demand for a decade. Smart city projects in Konza and other satellite towns. Sustainable/green construction will be mandatory. Infrastructure for renewable energy projects will grow.",
    studyExpectation: "5-year program covering structural analysis, geotechnical engineering, hydraulics, transportation, and construction management. Heavy math and physics. Site visits and industrial attachment in Year 4. CAD and BIM software skills required.",
    salaryRange: "KES 60,000 - 400,000/month",
  },
  electrical_engineering: {
    field: "Electrical & Electronic Engineering",
    direction: "booming",
    pastTrend: "Kenya's power expansion (Last Mile Connectivity, geothermal projects) drove demand. Renewable energy sector grew 25% annually. IoT and automation in manufacturing increased. Telecom infrastructure expanded with 5G trials.",
    futureTrend: "Electric vehicles, smart grids, and renewable energy will create thousands of roles. Kenya's goal of 100% clean energy by 2030 needs electrical engineers. Robotics and automation in manufacturing will surge. Highest engineering demand projected.",
    studyExpectation: "5-year program covering circuits, power systems, electronics, control systems, and telecommunications. Heavy lab work and projects. Programming skills (MATLAB, Python) increasingly important. Industrial attachment in Year 4.",
    salaryRange: "KES 65,000 - 450,000/month",
  },
  mechanical_engineering: {
    field: "Mechanical Engineering",
    direction: "stable",
    pastTrend: "Manufacturing sector employed 300,000+ Kenyans. Automotive assembly plants (VW, Simba Corp) increased hiring. HVAC industry grew with commercial construction. Maintenance engineering remained steady.",
    futureTrend: "Kenya's industrialization agenda (Buy Kenya, Build Kenya) will boost manufacturing. 3D printing and additive manufacturing will create specialized roles. Renewable energy equipment maintenance (wind turbines, solar) will grow. Automotive sector modernization.",
    studyExpectation: "5-year program covering thermodynamics, fluid mechanics, materials science, machine design, and manufacturing. Workshop practice from Year 1. CAD design and simulation tools. Industrial attachment mandatory.",
    salaryRange: "KES 55,000 - 350,000/month",
  },
  biomedical_engineering: {
    field: "Biomedical Engineering",
    direction: "booming",
    pastTrend: "Kenya imported 90%+ of medical equipment — creating demand for local maintenance. COVID-19 exposed the need for local medical device production. Hospital equipment management roles expanded.",
    futureTrend: "Local medical device manufacturing will be prioritized. Wearable health tech, prosthetics (3D-printed), and hospital information systems will boom. One of the fastest-growing engineering fields globally. Premium salaries expected.",
    studyExpectation: "5-year program combining engineering, biology, and medicine. Covers medical imaging, biomechanics, biomaterials, and clinical engineering. Hospital attachments alongside engineering labs. Interdisciplinary thinking essential.",
    salaryRange: "KES 70,000 - 400,000/month",
  },
  software_engineering: {
    field: "Software Engineering & Computer Science",
    direction: "booming",
    pastTrend: "Kenya's 'Silicon Savannah' produced unicorns and raised $1B+ in tech funding (2019-2024). M-Pesa ecosystem employed 10,000+ developers. Remote work opened global opportunities. Average dev salaries doubled.",
    futureTrend: "AI/ML engineers, cloud architects, and cybersecurity specialists will be the highest-paid tech roles. Kenya's digital economy projected to contribute 10% of GDP by 2030. Blockchain, fintech, and healthtech will drive innovation. Global remote roles will pay $50K-$150K.",
    studyExpectation: "4-year program covering programming, algorithms, data structures, databases, networking, and software design. Projects from Year 1. Hackathons and open-source contributions encouraged. Self-learning and adaptability are key.",
    salaryRange: "KES 80,000 - 800,000/month",
  },
  telecom_engineering: {
    field: "Telecommunications Engineering",
    direction: "rising",
    pastTrend: "5G rollout preparations and fiber optic expansion drove hiring. Safaricom, Airtel, and Telkom invested billions in infrastructure. Mobile money integration required network engineers. Satellite internet (Starlink) entered the market.",
    futureTrend: "5G deployment will need 5,000+ telecom engineers. IoT networks for smart agriculture and cities will expand. Space technology and satellite communications will grow. Network security will be critical.",
    studyExpectation: "5-year program covering signal processing, wireless communications, antenna design, and network engineering. Lab-intensive with simulation tools. Understanding of both hardware and software needed.",
    salaryRange: "KES 70,000 - 350,000/month",
  },

  // ===== IT & TECHNOLOGY =====
  information_technology: {
    field: "Information Technology",
    direction: "rising",
    pastTrend: "Digital transformation across all sectors created massive IT demand. Cloud computing adoption grew 40% annually. Cybersecurity incidents increased, driving security hiring. Government digitization (e-Citizen, Huduma) employed thousands.",
    futureTrend: "Every organization will need IT professionals. Cloud, DevOps, and cybersecurity will be top specializations. AI tools will augment IT roles, not replace them. IT support evolving to IT solutions architecture.",
    studyExpectation: "4-year degree covering networking, databases, web development, cybersecurity, and systems administration. Certifications (AWS, CompTIA, Cisco) add significant value. Practical projects and internships important.",
    salaryRange: "KES 50,000 - 400,000/month",
  },

  // ===== BUSINESS & COMMERCE =====
  business: {
    field: "Business & Commerce",
    direction: "stable",
    pastTrend: "Kenya's private sector grew steadily. E-commerce boomed (Jumia, Kilimall). SME sector employed 80% of workforce. CPA(K) and ACCA qualifications remained premium. Business analytics emerged as key differentiator.",
    futureTrend: "Digital business models will dominate. Data-driven decision-making will be mandatory. Sustainability reporting and ESG will create new roles. Entrepreneurship support ecosystem will expand. Fintech and insurtech will disrupt traditional business.",
    studyExpectation: "4-year program covering accounting, finance, marketing, management, and economics. Case studies and group projects. Industrial attachment in Year 3. Professional certifications recommended alongside degree.",
    salaryRange: "KES 40,000 - 300,000/month",
  },
  actuarial: {
    field: "Actuarial Science",
    direction: "rising",
    pastTrend: "Only ~200 qualified actuaries in East Africa created premium demand. Insurance penetration grew from 2.4% to 3.5%. Pension fund management expanded. Risk management became critical post-pandemic.",
    futureTrend: "Insurance penetration target of 10% by 2030 will need 1,000+ actuaries. Climate risk modeling will be a new frontier. Micro-insurance and insurtech will create innovative roles. One of the highest-paying careers in Kenya.",
    studyExpectation: "4-year program with heavy mathematics, statistics, probability, and financial modeling. Professional exams (IFoA/SOA) run alongside degree. Extremely challenging — expect a 30-40% pass rate. High rewards for persistence.",
    salaryRange: "KES 100,000 - 1,000,000/month",
  },
  finance: {
    field: "Finance & Banking",
    direction: "stable",
    pastTrend: "Kenya's banking sector remained profitable. Mobile banking disrupted traditional roles. Investment banking and private equity grew. Cryptocurrency trading entered the market. Financial literacy demand increased.",
    futureTrend: "Digital banking will be standard. Blockchain and DeFi will create new financial products. Green finance and carbon credits will be major growth areas. Financial planning and advisory will professionalize further.",
    studyExpectation: "4-year program covering corporate finance, investments, banking, financial modeling, and risk management. CFA preparation recommended. Excel and financial software proficiency essential. Internships at banks/firms critical.",
    salaryRange: "KES 50,000 - 500,000/month",
  },
  supply_chain: {
    field: "Supply Chain Management",
    direction: "rising",
    pastTrend: "COVID-19 disruptions highlighted supply chain importance. E-commerce logistics grew 50%. Kenya's position as East Africa's logistics hub strengthened. Port of Mombasa modernization increased efficiency.",
    futureTrend: "AfCFTA will transform cross-border logistics. Drone delivery and warehouse automation will emerge. Supply chain analytics and blockchain tracking will be standard. Green logistics will be required.",
    studyExpectation: "4-year program covering procurement, logistics, operations management, and supply chain analytics. CIPS/KISM certifications add value. Industrial attachments in manufacturing or logistics firms. Data analysis skills increasingly important.",
    salaryRange: "KES 45,000 - 300,000/month",
  },
  hr: {
    field: "Human Resource Management",
    direction: "stable",
    pastTrend: "HR shifted from administrative to strategic. Employee wellness programs expanded post-COVID. IHRM certification became important. HR tech tools adoption increased. Remote work policies needed HR expertise.",
    futureTrend: "People analytics and AI in recruitment will transform HR. Employee experience design will be a specialty. Diversity and inclusion roles will grow. Gig economy management will need HR frameworks.",
    studyExpectation: "4-year program covering organizational behavior, labor law, talent management, compensation, and HR analytics. IHRM membership recommended. Communication and interpersonal skills essential.",
    salaryRange: "KES 40,000 - 250,000/month",
  },

  // ===== EDUCATION =====
  education: {
    field: "Education & Teaching",
    direction: "stable",
    pastTrend: "CBC curriculum transition created demand for retrained teachers. Private school sector grew 10% annually. EdTech platforms (Eneza, M-Shule) emerged. Teacher salaries improved through CBA negotiations. STEM teachers remained scarce.",
    futureTrend: "Digital literacy teachers will be in high demand. Special needs education will grow significantly. International school expansion will offer premium salaries. Online tutoring platforms will create flexible income streams. STEM education emphasis will continue.",
    studyExpectation: "4-year BEd covering pedagogy, subject specialization, educational psychology, and teaching practice. Two teaching practice sessions in schools. Patience, creativity, and communication skills essential.",
    salaryRange: "KES 30,000 - 150,000/month",
  },

  // ===== AGRICULTURE =====
  agriculture: {
    field: "Agriculture & Food Science",
    direction: "rising",
    pastTrend: "Agriculture contributed 33% of GDP. Agritech startups raised $200M+. Export horticulture (flowers, avocados) grew 15% annually. Climate change adaptation became urgent. Value-addition in food processing expanded.",
    futureTrend: "Precision agriculture using drones, sensors, and AI will transform farming. Vertical farming and hydroponics will grow in urban areas. Climate-smart agriculture will be mandatory. Food security concerns will keep demand high. Agri-export opportunities with AfCFTA.",
    studyExpectation: "4-year program covering crop science, animal science, soil science, agricultural economics, and extension. Farm practicals from Year 1. Field research projects. Combines science with business acumen.",
    salaryRange: "KES 35,000 - 200,000/month",
  },
  veterinary: {
    field: "Veterinary Medicine",
    direction: "stable",
    pastTrend: "Livestock sector contributed 12% to GDP. Pet care industry grew 20% annually in urban areas. Disease surveillance (Rift Valley Fever, avian flu) remained critical. Wildlife conservation veterinary roles expanded.",
    futureTrend: "One Health approach linking animal, human, and environmental health will drive demand. Pet insurance and premium pet care will grow. Aquaculture veterinary services will expand. Livestock genetics and biotechnology will create research roles.",
    studyExpectation: "5-year program covering animal anatomy, pathology, pharmacology, surgery, and public health. Intensive clinical rotations at veterinary hospitals and farms. Field work in rural areas. Passion for animals essential.",
    salaryRange: "KES 50,000 - 250,000/month",
  },

  // ===== ARCHITECTURE & BUILT ENVIRONMENT =====
  architecture: {
    field: "Architecture & Urban Planning",
    direction: "rising",
    pastTrend: "Kenya's construction sector was 5th largest GDP contributor. Green building certifications increased. Affordable housing designs needed innovation. Smart city planning (Konza) created opportunities.",
    futureTrend: "Sustainable and climate-resilient architecture will be mandatory. PropTech and virtual reality in design will transform practice. Urban planning for growing cities will be critical. 3D-printed construction may emerge.",
    studyExpectation: "5-year program covering architectural design, structural systems, building technology, history, and urban planning. Studio-based learning with design critiques. Portfolio development critical. Combines creativity with technical precision.",
    salaryRange: "KES 60,000 - 400,000/month",
  },
  quantity_surveying: {
    field: "Quantity Surveying & Land Economics",
    direction: "rising",
    pastTrend: "Construction boom needed cost management expertise. Real estate development expanded. Government infrastructure projects required QS professionals. Property valuation services grew with mortgage market.",
    futureTrend: "BIM-based quantity surveying will be standard. Infrastructure financing advisory will grow. Real estate investment trusts (REITs) will need valuation experts. Dispute resolution in construction will expand.",
    studyExpectation: "4-year program covering construction economics, measurement, contract law, project management, and valuation. Site visits and measurement exercises. Attention to detail and strong math skills needed.",
    salaryRange: "KES 55,000 - 350,000/month",
  },

  // ===== MEDIA & COMMUNICATION =====
  journalism: {
    field: "Journalism & Mass Communication",
    direction: "declining",
    pastTrend: "Traditional media jobs declined as digital disrupted the industry. However, content creators and digital journalists thrived. Podcast and video content grew 300%. Social media management became a career. PR and corporate communication grew.",
    futureTrend: "AI will automate basic reporting. Video journalism and multimedia storytelling will dominate. Brand journalism and content marketing will be the growth area. Data journalism will be premium. Independent media platforms will create entrepreneurial opportunities.",
    studyExpectation: "4-year program covering news writing, media law, broadcast production, digital media, and public relations. Internships at media houses critical. Portfolio of published work important. Adaptability to new platforms essential.",
    salaryRange: "KES 30,000 - 200,000/month",
  },

  // ===== ARTS & SOCIAL SCIENCES =====
  social_sciences: {
    field: "Arts & Social Sciences",
    direction: "stable",
    pastTrend: "NGO sector employed many social science graduates. Research consultancy grew. Government policy roles available but competitive. Counseling and social work demand increased post-COVID.",
    futureTrend: "Data-driven social research will grow. UX research roles in tech companies will open doors. Mental health services expansion will need psychology graduates. International development organizations will continue hiring.",
    studyExpectation: "4-year program covering sociology, psychology, political science, or economics. Research methodology is core. Fieldwork and community engagement important. Critical thinking and writing skills developed.",
    salaryRange: "KES 30,000 - 180,000/month",
  },
  psychology: {
    field: "Psychology & Counseling",
    direction: "rising",
    pastTrend: "Mental health awareness grew significantly in Kenya. Counseling services expanded in schools, hospitals, and corporates. Substance abuse rehabilitation centers increased. Employee assistance programs became standard in large organizations.",
    futureTrend: "Mental health will be integrated into UHC. School counselors will be mandatory. Teletherapy platforms will create flexible practice. Organizational psychology and coaching will be premium services. Stigma reduction will drive demand.",
    studyExpectation: "4-year degree covering developmental, clinical, social, and abnormal psychology. Practicum placements in counseling settings. Self-awareness and empathy crucial. May require postgraduate studies for clinical practice.",
    salaryRange: "KES 35,000 - 200,000/month",
  },

  // ===== HOSPITALITY & TOURISM =====
  hospitality: {
    field: "Hospitality & Tourism",
    direction: "rising",
    pastTrend: "Tourism contributed 10% of GDP before COVID. Recovery was strong — 2M+ visitors by 2024. Hotel chains expanded (Radisson, Marriott). Domestic tourism grew significantly. Conference tourism (MICE) became a focus area.",
    futureTrend: "Eco-tourism and sustainable travel will drive premium tourism. Medical tourism from the region will grow. Airbnb and experience-based tourism will create entrepreneurial opportunities. Digital nomad infrastructure will expand. Beach and safari tourism will remain strong.",
    studyExpectation: "4-year program covering hotel management, food & beverage, tourism planning, and event management. Practical hotel attachments from Year 2. Customer service and language skills important. International internship opportunities available.",
    salaryRange: "KES 35,000 - 250,000/month",
  },

  // ===== ENVIRONMENTAL =====
  environmental: {
    field: "Environmental Science & Forestry",
    direction: "rising",
    pastTrend: "Climate change put environmental science in spotlight. Kenya's tree planting campaigns (15B trees) created jobs. Environmental impact assessments became mandatory. Carbon trading emerged as a market.",
    futureTrend: "Carbon markets and climate finance will create lucrative roles. Environmental consultancy will boom with stricter regulations. Water resource management will be critical. Renewable energy environmental planning will grow. Green jobs projected to reach 1M by 2030.",
    studyExpectation: "4-year program covering ecology, conservation, environmental law, climate science, and GIS mapping. Field research in national parks and forests. Lab and data analysis work. Passion for nature and sustainability important.",
    salaryRange: "KES 40,000 - 250,000/month",
  },

  // ===== DESIGN & CREATIVE =====
  design: {
    field: "Design, Fashion & Creative Arts",
    direction: "rising",
    pastTrend: "Kenya's creative economy grew to $1B+. Fashion industry gained international recognition. UX/UI design demand exploded with tech growth. Film and animation industry attracted global attention. Music and content creation became viable careers.",
    futureTrend: "AI-augmented design tools will transform creative work. African fashion brands will go global. Game design and animation for mobile will grow. Creative entrepreneurship will be supported by government policy. NFTs and digital art may create new revenue streams.",
    studyExpectation: "3-4 year program covering design principles, software tools, material science (fashion), and business. Portfolio-based assessment. Internships at studios/agencies critical. Creativity, attention to trends, and technical skill needed.",
    salaryRange: "KES 30,000 - 300,000/month",
  },

  // ===== TRADES & ARTISAN =====
  trades: {
    field: "Technical Trades & Artisan Skills",
    direction: "booming",
    pastTrend: "Skilled trades had severe shortages — plumbers, electricians, welders in high demand. Construction boom needed artisans. Gulf states recruited Kenyan artisans. Government invested in TVETs. Informal sector employed 83% of workforce.",
    futureTrend: "Green building skills (solar installation, energy efficiency) will be premium. Gulf and European labor markets will continue recruiting. Construction of affordable housing needs 200,000+ artisans. Digital literacy for artisans (mobile payments, online marketing) will differentiate. Earning potential rivals many white-collar jobs.",
    studyExpectation: "6-month to 2-year programs with 70% practical, 30% theory. Hands-on workshop training from Day 1. Apprenticeship opportunities. Low entry requirements but high skill development. Quick path to employment.",
    salaryRange: "KES 15,000 - 100,000/month",
  },
  ict_artisan: {
    field: "ICT Support & Phone Repair",
    direction: "booming",
    pastTrend: "Mobile phone penetration reached 130%+ in Kenya. Phone repair became a thriving business. Basic IT support needed everywhere. Laptop/computer repair shops multiplied. E-waste management became a concern.",
    futureTrend: "Smart device ecosystem will expand repair opportunities. Solar tech installation and maintenance will grow. Network installation for homes and businesses will increase. Cybersecurity basics will be valuable for ICT artisans.",
    studyExpectation: "6-month to 1-year program covering hardware repair, basic networking, software installation, and mobile device repair. Very hands-on and practical. Quick entry to self-employment.",
    salaryRange: "KES 15,000 - 80,000/month",
  },

  // ===== SECURITY & CRIMINOLOGY =====
  criminology: {
    field: "Criminology & Security Studies",
    direction: "rising",
    pastTrend: "Cybercrime growth increased demand for digital forensics. Private security sector employed 500,000+. Counter-terrorism expertise needed. Corporate investigation roles expanded. Kenya's judiciary reforms created legal researcher roles.",
    futureTrend: "Cybersecurity and digital forensics will be premium. Intelligence analysis using AI will emerge. Private investigation and corporate security will professionalize. Regional security cooperation will create international roles.",
    studyExpectation: "3-4 year program covering criminal justice, forensic science, security management, and cyber law. Case study analysis and simulations. Integrity and analytical skills essential.",
    salaryRange: "KES 35,000 - 200,000/month",
  },

  // ===== LIBRARY & INFORMATION =====
  library: {
    field: "Library & Information Science",
    direction: "stable",
    pastTrend: "Digital libraries transformed the field. Data management and archival became important. University and school libraries modernized. Information literacy programs expanded.",
    futureTrend: "Data curation and digital asset management will grow. Records management in government and corporates will expand. Knowledge management consulting will emerge. AI in information retrieval will create new specializations.",
    studyExpectation: "3-4 year program covering cataloging, information retrieval, digital libraries, archives management, and research methods. Practical placements in libraries and archives. Organizational skills essential.",
    salaryRange: "KES 30,000 - 120,000/month",
  },
};

// Map course names to trend categories
const courseToTrendMap: Record<string, string> = {
  // Medicine & Health
  "Bachelor of Medicine & Surgery (MBChB)": "medicine",
  "Bachelor of Pharmacy": "pharmacy",
  "Diploma in Pharmacy": "pharmacy",
  "Certificate in Pharmacy Technician": "pharmacy",
  "Bachelor of Dental Surgery": "dental",
  "Diploma in Dental Technology": "dental",
  "Bachelor of Science in Nursing": "nursing",
  "Diploma in Nursing": "nursing",
  "Bachelor of Science in Clinical Medicine": "clinical_medicine",
  "Diploma in Clinical Medicine": "clinical_medicine",
  "Bachelor of Science in Medical Lab Sciences": "medical_lab",
  "Diploma in Medical Laboratory Sciences": "medical_lab",
  "Certificate in Lab Technician": "medical_lab",
  "Bachelor of Public Health": "public_health",
  "Diploma in Public Health": "public_health",
  "Diploma in Environmental Health": "public_health",
  "Certificate in Community Health": "public_health",
  "Bachelor of Science in Radiography": "radiography",
  "Diploma in Radiography": "radiography",
  "Diploma in Optometry": "radiography",
  "Bachelor of Science in Occupational Therapy": "nursing",
  "Diploma in Occupational Therapy": "nursing",
  "Diploma in Nutrition & Dietetics": "nutrition",
  "Certificate in Nutrition": "nutrition",
  "Bachelor of Science in Food Science & Technology": "nutrition",
  "Diploma in Food Science & Technology": "nutrition",
  "Bachelor of Science in Biochemistry": "medical_lab",
  "Bachelor of Science in Microbiology": "medical_lab",

  // Law
  "Bachelor of Law (LLB)": "law",

  // Engineering
  "Bachelor of Engineering (Civil)": "civil_engineering",
  "Diploma in Civil Engineering": "civil_engineering",
  "Diploma in Building Construction": "civil_engineering",
  "Diploma in Water & Sanitation Engineering": "civil_engineering",
  "Certificate in Water Technology": "civil_engineering",
  "Bachelor of Engineering (Electrical)": "electrical_engineering",
  "Diploma in Electrical Engineering": "electrical_engineering",
  "Certificate in Electrical Installation": "electrical_engineering",
  "Bachelor of Engineering (Mechanical)": "mechanical_engineering",
  "Diploma in Mechanical Engineering": "mechanical_engineering",
  "Diploma in Automotive Engineering": "mechanical_engineering",
  "Certificate in Automotive Mechanics": "mechanical_engineering",
  "Bachelor of Science in Biomedical Engineering": "biomedical_engineering",
  "Bachelor of Science in Software Engineering": "software_engineering",
  "Bachelor of Science in Computer Science": "software_engineering",
  "Diploma in Computer Science": "software_engineering",
  "Bachelor of Science in Telecommunications": "telecom_engineering",
  "Diploma in Telecommunication Engineering": "telecom_engineering",
  "Bachelor of Science in Geospatial Engineering": "civil_engineering",

  // IT
  "Bachelor of Science in Information Technology": "information_technology",
  "Diploma in Information Technology": "information_technology",
  "Certificate in Information Technology": "information_technology",

  // Business
  "Bachelor of Commerce": "business",
  "Bachelor of Business Administration": "business",
  "Diploma in Business Management": "business",
  "Certificate in Business Management": "business",
  "Diploma in Accounting": "business",
  "Diploma in Marketing": "business",
  "Certificate in Sales & Marketing": "business",
  "Diploma in Banking & Finance": "finance",
  "Bachelor of Science in Finance": "finance",
  "Diploma in Insurance": "finance",
  "Bachelor of Science in Actuarial Science": "actuarial",
  "Bachelor of Science in Statistics": "actuarial",
  "Bachelor of Science in Mathematics": "actuarial",
  "Bachelor of Science in Supply Chain Management": "supply_chain",
  "Diploma in Supply Chain Management": "supply_chain",
  "Certificate in Supply Chain Management": "supply_chain",
  "Diploma in Project Management": "supply_chain",
  "Diploma in Co-operative Management": "business",
  "Bachelor of Science in Human Resource Management": "hr",
  "Diploma in Human Resource Management": "hr",
  "Bachelor of Arts (Economics)": "business",

  // Education
  "Bachelor of Education (Arts)": "education",
  "Bachelor of Education (Science)": "education",
  "Diploma in Education (Primary)": "education",
  "Certificate in Early Childhood Education": "education",

  // Agriculture
  "Bachelor of Science in Agriculture": "agriculture",
  "Diploma in Agriculture": "agriculture",
  "Certificate in Agriculture": "agriculture",
  "Diploma in Horticulture": "agriculture",
  "Diploma in Animal Health": "veterinary",
  "Certificate in Animal Health": "veterinary",
  "Bachelor of Veterinary Medicine": "veterinary",
  "Diploma in Fisheries Management": "agriculture",
  "Bachelor of Science in Forestry": "environmental",
  "Bachelor of Science in Wildlife Management": "environmental",
  "Certificate in Crop Production": "agriculture",
  "Artisan in Agribusiness": "agriculture",
  "Artisan in Poultry Farming": "agriculture",

  // Architecture
  "Bachelor of Architecture": "architecture",
  "Diploma in Architecture": "architecture",
  "Bachelor of Science in Urban Planning": "architecture",
  "Bachelor of Quantity Surveying": "quantity_surveying",
  "Diploma in Land Surveying": "quantity_surveying",
  "Bachelor of Science in Land Economics": "quantity_surveying",

  // Media
  "Bachelor of Journalism & Mass Communication": "journalism",
  "Diploma in Journalism": "journalism",
  "Certificate in Journalism": "journalism",
  "Diploma in Film & Animation": "design",
  "Diploma in Music": "design",
  "Certificate in Music Production": "design",
  "Certificate in Photography": "design",

  // Social Sciences
  "Bachelor of Arts (Sociology)": "social_sciences",
  "Bachelor of Arts (International Relations)": "social_sciences",
  "Diploma in Social Work": "social_sciences",
  "Certificate in Social Work": "social_sciences",
  "Diploma in Community Development": "social_sciences",
  "Bachelor of Psychology": "psychology",
  "Diploma in Counseling Psychology": "psychology",
  "Certificate in Counselling": "psychology",
  "Certificate in Sign Language Interpretation": "social_sciences",

  // Hospitality
  "Bachelor of Science in Hospitality Management": "hospitality",
  "Bachelor of Science in Tourism Management": "hospitality",
  "Diploma in Hotel & Hospitality Management": "hospitality",
  "Diploma in Tourism Management": "hospitality",
  "Certificate in Catering & Accommodation": "hospitality",
  "Certificate in Tour Guiding": "hospitality",
  "Artisan in Food & Beverage Service": "hospitality",
  "Artisan in Bakery & Pastry": "hospitality",

  // Environmental
  "Bachelor of Science in Environmental Science": "environmental",

  // Design
  "Bachelor of Design (Fashion)": "design",
  "Diploma in Graphic Design": "design",
  "Certificate in Graphic Design": "design",
  "Diploma in Fashion Design": "design",
  "Certificate in Fashion & Garment Making": "design",
  "Artisan in Tailoring & Dressmaking": "design",
  "Artisan in Leather Work": "design",
  "Artisan in Screen Printing": "design",

  // Physics
  "Bachelor of Science in Physics": "electrical_engineering",

  // Chemistry
  "Bachelor of Science in Chemistry": "medical_lab",

  // Biology
  "Bachelor of Science in Biology": "medical_lab",

  // Trades & Artisan
  "Artisan in Motor Vehicle Mechanics": "trades",
  "Artisan in Electrical Wiring": "trades",
  "Artisan in Welding": "trades",
  "Artisan in Masonry": "trades",
  "Artisan in Carpentry": "trades",
  "Artisan in Plumbing": "trades",
  "Artisan in Beauty Therapy": "trades",
  "Artisan in Hairdressing": "trades",
  "Artisan in Painting & Decoration": "trades",
  "Artisan in Metal Processing": "trades",
  "Artisan in Solar Installation": "trades",
  "Certificate in Welding & Fabrication": "trades",
  "Certificate in Plumbing": "trades",
  "Certificate in Masonry": "trades",
  "Certificate in Carpentry & Joinery": "trades",
  "Certificate in Refrigeration & Air Conditioning": "trades",
  "Certificate in Beauty & Hairdressing": "trades",
  "Certificate in Driving & Fleet Management": "trades",
  "Artisan in ICT Support": "ict_artisan",
  "Artisan in Phone Repair & Maintenance": "ict_artisan",

  // Criminology
  "Diploma in Criminology": "criminology",
  "Certificate in Sports Management": "hospitality",

  // Library
  "Diploma in Library & Information Science": "library",
  "Certificate in Records Management": "library",
  "Diploma in Secretarial Studies": "library",
  "Certificate in Secretarial Studies": "library",
};

export function getMarketTrend(courseName: string): MarketTrend | null {
  const key = courseToTrendMap[courseName];
  if (!key) return null;
  return trends[key] || null;
}

export type { MarketTrend as MarketTrendType };
