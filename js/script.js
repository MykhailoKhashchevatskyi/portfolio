const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__block');
const menuItems = document.querySelectorAll('.menu-items__item a'); // Вибираємо всі посилання в меню

burgerMenu.addEventListener('click', (event) => {
  event.stopPropagation(); // Зупиняємо спливання події

  // Закриваємо мовне меню, якщо воно відкрите
  const languageBlock = document.querySelector('.header__lenguage');
  if (languageBlock.classList.contains('open')) {
    languageBlock.classList.remove('open');
  }

  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

// Додаємо обробник події для кожного посилання в меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      burgerMenu.classList.remove('open'); // Закриваємо бургер-меню
      menu.classList.remove('open'); // Закриваємо меню
    }
  });
});

// Закриваємо меню при кліку поза ним
document.addEventListener('click', (event) => {
  if (menu.classList.contains('open') && !menu.contains(event.target) && !burgerMenu.contains(event.target)) {
    burgerMenu.classList.remove('open');
    menu.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const languageBlock = document.querySelector('.header__lenguage');
  const currentLanguage = document.querySelector('.header__current-language');
  const languageItems = document.querySelectorAll('.header__language-list li'); // Вибираємо всі <li>

  // Відкриття/закриття меню мов
  languageBlock.addEventListener('click', (event) => {
    event.stopPropagation(); // Зупиняємо спливання події
    languageBlock.classList.toggle('open');
  });

  // Зміна мови при кліку на <li>
  languageItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const selectedLanguage = event.target.getAttribute('data-lang'); // Отримуємо мову з data-lang
      const previousLanguage = currentLanguage.textContent;
      // Змінюємо поточну мову
      currentLanguage.textContent = selectedLanguage;
      event.target.textContent = previousLanguage;
      event.target.setAttribute('data-lang', previousLanguage);

      // Закриваємо меню мов
      languageItems.style.display = 'none';
    });
  });

  // Закриття меню мов при кліку поза ним
  document.addEventListener('click', (event) => {
    if (!languageBlock.contains(event.target)) {
      languageBlock.classList.remove('open');
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.main__hero-image'); // Знаходимо зображення
  const heroText = document.querySelector('.main__hero-text'); // Знаходимо текстовий блок

  let isImageVisible = true; // Початковий стан: зображення видиме

  setInterval(() => {
    if (isImageVisible) {
      heroImage.classList.remove('visible'); // Ховаємо зображення
      heroText.classList.add('visible'); // Показуємо текст
    } else {
      heroText.classList.remove('visible'); // Ховаємо текст
      heroImage.classList.add('visible'); // Показуємо зображення
    }
    isImageVisible = !isImageVisible; // Змінюємо стан
  }, 5000); // Зміна кожні 3 секунди
});

document.addEventListener('DOMContentLoaded', () => {
  const readMoreButtons = document.querySelectorAll('.services__read-this-button');

  readMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Запобігаємо переходу за посиланням

      const parentBlock = button.closest('.services__info-block'); // Знаходимо батьківський блок
      const textTwo = parentBlock.querySelector('.services__text-two'); // Знаходимо другий текст

      if (textTwo.classList.contains('visible')) {
        // Якщо текст уже видимий, приховуємо його
        textTwo.classList.remove('visible');
        button.textContent = 'Read more+'; // Змінюємо текст кнопки
      } else {
        // Якщо текст прихований, показуємо його
        textTwo.classList.add('visible');
        button.textContent = 'show less'; // Змінюємо текст кнопки
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const buttonStep = document.querySelector('.tab__button-step');
  const buttonSup = document.querySelector('.tab__button-sup');
  const tabStep = document.querySelector('.tab__step');
  const tabSupport = document.querySelector('.tab__support');

  // Функція для активації кнопки та відображення відповідного блоку
  const toggleTabs = (activeButton, inactiveButton, showTab, hideTab) => {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
    showTab.style.display = 'block';
    hideTab.style.display = 'none';
  };

  // Функція для перевірки ширини екрану
  const handleResize = () => {
    if (window.innerWidth < 899) {
      // Додаємо обробники подій для кнопок
      buttonStep.addEventListener('click', () => {
        toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
      });

      buttonSup.addEventListener('click', () => {
        toggleTabs(buttonSup, buttonStep, tabSupport, tabStep);
      });

      // Встановлюємо початковий стан
      toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
    } else {
      // Скидаємо стилі та видаляємо обробники подій при ширині більше 899
      buttonStep.classList.remove('active');
      buttonSup.classList.remove('active');
      tabStep.style.display = 'block';
      tabSupport.style.display = 'block';
    }
  };

  // Викликаємо функцію при завантаженні сторінки
  handleResize();

  // Додаємо обробник події для зміни розміру вікна
  window.addEventListener('resize', handleResize);
});





document.addEventListener('DOMContentLoaded', () => {
  const buttonStep = document.querySelector('.academies__button-step');
  const buttonSup = document.querySelector('.academies__button-sup');
  const tabStep = document.querySelector('.academies-step');
  const tabSupport = document.querySelector('.academies-support');

  // Функція для активації кнопки та відображення відповідного блоку
  const toggleTabs = (activeButton, inactiveButton, showTab, hideTab) => {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
    showTab.style.display = 'block';
    hideTab.style.display = 'none';
  };

  // Функція для перевірки ширини екрану
  const handleResize = () => {
    if (window.innerWidth < 899) {
      // Додаємо обробники подій для кнопок
      buttonStep.addEventListener('click', () => {
        toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
      });

      buttonSup.addEventListener('click', () => {
        toggleTabs(buttonSup, buttonStep, tabSupport, tabStep);
      });

      // Встановлюємо початковий стан
      toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
    } else {
      // Скидаємо стилі та видаляємо обробники подій при ширині більше 899
      buttonStep.classList.remove('active');
      buttonSup.classList.remove('active');
      tabStep.style.display = 'block';
      tabSupport.style.display = 'block';
    }
  };

  // Викликаємо функцію при завантаженні сторінки
  handleResize();

  // Додаємо обробник події для зміни розміру вікна
  window.addEventListener('resize', handleResize);
});





document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  const body = document.body;

  // Додаємо клас для початкового стану border-елементів
  body.classList.add('preloader-active');

  // Забороняємо прокручування сторінки
  body.style.overflow = 'hidden';

  // Імітація завантаження сторінки
  setTimeout(() => {
    // Видаляємо прелоадер після 3 секунд
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';

    // Повертаємо border-елементи на місце
    body.classList.remove('preloader-active');

    // Дозволяємо прокручування сторінки
    body.style.overflow = '';

    // Видаляємо прелоадер з DOM через 0.5 секунди (щоб завершити анімацію)
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 3500); // Мінімальний час прелоадера — 3 секунди
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Клік на мову
document.querySelectorAll(".header__language-list li").forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    updateLanguage(selectedLang);
    document.querySelector(".header__current-language").textContent = selectedLang;
  });
});


const translations = {
  EN: {
    home: "home",
    about: "about us",
    services: "services",
    contact: "contact us",
    welcome: "WELCOME TO PHANTOM",
    gameChanger: "GAME CHANGER IN THE SPORTS MANAGEMENT",
    aboutTitle: "about us",
    aboutDesc1: "PHANTOM FOOTBALL AGENCY is a FIFA-licensed company created to manage careers of professional football players.",
    aboutDesc2: "We specialize in representing interests of professional athletes, discovering, developing and promoting of young talents, providing them with careful career planning in family-friendly atmosphere.",
    aboutDesc3_1: "We are fully committed to the",
    aboutDesc3_2: "success",
    aboutDesc3_3: "of our players and partners. Our team of",
    aboutDesc3_4: "competent",
    aboutDesc3_5: "and dedicated",
    aboutDesc3_6: "professionals",
    aboutDesc3_7: "offers the",
    aboutDesc3_8: "best services",
    aboutDesc3_9: "to our clients, including sponsorships, building brand, legal assistance, marketing and financial support.",
    servicesTitle: "services",
    servicesBlock1Text1: "We represent the interests of professional players and coaches, providing them with top-tier services, including sponsorships, contract negotiations, brand building, legal assistance, marketing, and financial support.",
    servicesBlock1Text2: "Our team of licensed agents, lawyers, and scouts takes care of all off-field aspects to ensure our clients can fully focus on their progress.",
    servicesBlock2Text1: "The transition from youth football to professional football is a crucial period. Sometimes, to make it pro, a player needs to change their team, league, or even country.",
    servicesBlock2Text2: "We receive requests from European and Asian clubs at all levels and divisions. We carefully select and offer the best opportunities to players, organizing trials and tryouts directly within football clubs and U-19 teams.",
    servicesBlock3Text1: "The discovery of young talents and placing them in the right environment is one of our main goals. Development and training with top-tier coaches, along with experience playing with and against the best academies in Europe, are key to success.",
    servicesBlock3Text2: "We collaborate with numerous academies in Spain, Poland, Ukraine, Portugal, Italy, Germany, Czech Republic, and other countries. After analyzing a young talent, we identify the best opportunity and assist with the entire process, including trials, legalization, contract negotiations, and continuous support throughout the years to help them become a PRO.",
    readMore: "Read more+",
    learnMore: "learn more",
    presentTitle: "Representation & Professional Sports Management for Football Players",
    presentText: "Our commitment to excellence is reflected in every aspect of our work. Why should you join us, and what can we offer?",
    presentItem1Title: "Legal Support",
    presentItem1Text: "Expert assistance from a team of highly skilled sports lawyers.",
    presentItem2Title: "Career Planning",
    presentItem2Text: "Thoughtful and strategic career development tailored to each player.",
    presentItem3Title: "Transfers and offers",
    presentItem3Text: "FIFA-licensed agents work to secure better contracts, salaries, and conditions.",
    presentItem4Title: "Contract Negotiations",
    presentItem4Text: "Focused on achieving the best possible conditions for our clients.",
    presentItem5Title: "Personal Brand Development",
    presentItem5Text: "Essential for long-term success on and off the field.",
    presentItem6Title: "Tax & Financial Guidance",
    presentItem6Text: "Ensuring financial security and smart money management.",
    presentItem7Title: "Sponsorship Deals",
    presentItem7Text: "Helping players build valuable partnerships.",
    presentItem8Title: "Marketing & Social Media Management",
    presentItem8Text: "Enhancing visibility and engagement.",
    presentItem9Title: "Health & Wellbeing",
    presentItem9Text: "Personalized health and mental support",
    footerTitle: "Get in touch and shine with us",
    footerSubtitle: "No Risk, No Reward.",
    footerNamePlaceholder: "Name",
    footerEmailPlaceholder: "E-mail",
    footerMessagePlaceholder: "Message",
    footerCheckboxText: "I’m ready for a successful fruitful cooperation.",
    sendMessage: "Send message",
    trialsTitle: "Football Trials & Tryouts (Ages 18-23)",
    trialsIntro: "Thanks to our international collaborations with football clubs at different levels, we provide opportunities for players to attend trials and tryouts directly with clubs actively seeking players in their position and playing style (type).",
    trialsStepButton: "Step-by-Step Process",
    trialsSupportButton: "Support & Assistance",
    trialsStepTitle: "Step-by-Step Process",
    submitMaterialsTitle: "Submit Your Materials",
    submitMaterialsText: "Send us your Transfermarkt link, CV, and highlight video (YouTube link).",
    analysisTitle: "Analysis & Consultation",
    analysisText1: "Our team analyzes your materials and provides professional feedback on your level.",
    analysisText2: "We advise you on the most suitable country and division to start your journey, explaining the potential benefits and career perspectives.",
    scoutingTitle: "Scouting & Agent Networking",
    scoutingText: "Once we’ve agreed to work together, we forward your profile to our scouts and agents in the chosen region.",
    findingOpportunityTitle: "Finding the Best Opportunity",
    findingOpportunityText1: "Our team presents your profile to clubs, searching for the best possible options.",
    findingOpportunityText2: "We select the best option — club that needs a player of your position and style, and offers the best salary, opportunities, and conditions.",
    trialInvitationTitle: "Trial Invitation & Logistics",
    trialInvitationIntro: "You receive all the necessary details, including:",
    trialInvitationClub: "Club name & location",
    trialInvitationDate: "Arrival date & trial duration (typically 7-14 days)",
    trialInvitationAccommodation: "Accommodation/hotel & meals",
    trialInvitationSalary: "Salary expectations & possible contract details",
    arrivalTrialTitle: "Arrival & Trial Period",
    arrivalTrialText1: "Upon arrival, our agent or club administrator will meet you and take you to your accommodation.",
    arrivalTrialText2: "From this point on, everything depends on your performance.",
    supportTitle: "Support & Assistance",
    supportText1: "From the start, we assist with documentation, visa, travel arrangements, SIM cards, and other necessities.",
    supportText2: "Throughout the trial, we maintain contact with the club, keeping you updated with feedback and insights.",
    supportText3: "If you show yourself successfully you’ll sign the contract with the club that offers the best conditions, adapt to the environment, showcase your skills, and potentially move to higher divisions. Your progress depends entirely on your commitment and performance.",
    supportContractOffer: "We can offer a representation contract with our agency to the interesting players who started working with us.",
    supportTrialTiming1: "Most trials take place during transfer windows, but many clubs also invite players during the season to evaluate them, provide time for adaptation, and make a decision. When the transfer window opens, clubs can sign you immediately.",
    supportTrialTiming2: "This is your chance to take your career to the next level - are you ready?",
    supportAccommodation: "Accommodation is always provided",
    supportRepresentation: "We represent your interests throughout the entire process—from your first day at the trial to contract negotiations if you receive an offer.",
    academiesTitle: "Football Tryouts in Academies & Scholarships (Ages 13-18)",
    academiesIntro: "We collaborate with elite-level academies to provide the best opportunities for young players. Our team ensures players’ well-being and communicates directly with club staff—not just as agents, but as trusted professionals who are respected and taken seriously. This allows us to gather valuable insights and honest feedback, which we relay to players and their families. Additionally, we help talented young athletes secure opportunities in top academies that match their potential.",
    academiesButtonStep: "Why Our Guidance Matters",
    academiesButtonSupport: "Finding the Right Path to Success",
    academiesWhyTitle: "Why Our Guidance Matters",
    academiesWhyText1: "Many parents—or even young players themselves—reach out to us seeking a better academy, club, or U-19 team. They also require expert negotiation support to avoid signing long-term contracts with unfavorable conditions and hidden pitfalls. This is why having a competent agent from an early stage is crucial.",
    academiesWhyText2: "We are officially authorized by FIFA to represent minors, and in collaboration with parents, we ensure a safe and supportive environment for young athletes, strictly following all FIFA regulations.",
    academiesPathTitle: "Finding the Right Path to Success",
    academiesPathText1: "The discovery of young talents and placing them in the right environment is one of our main priorities. Development under top-tier coaches, combined with competitive experience against the best academies in Europe, is key to achieving success.",
    academiesPathText2: "We work with leading academies across Spain, Poland, Ukraine, Portugal, Italy, Germany, the Czech Republic, and other countries. Once we evaluate a young player’s potential, we find the best available opportunity and provide full assistance throughout the entire process, including:",
    academiesHowTitle: "How to Get Started",
    academiesStep1Title: "Submit Your Materials",
    academiesStep1Text: "Send us your Transfermarkt link, CV, and highlight video (YouTube link).",
    academiesStep2Title: "Evaluation & Feedback",
    academiesStep2Text: "Our experts analyze your materials and provide professional feedback on your level and potential.",
    academiesStep3Title: "Trial & Representation",
    academiesStep3Text1: "Once we agree to work together, we offer:",
    academiesStep3Text2: "A tryout, trial or scholarship in the most suitable academy, club, or U-19 team.",
    academiesStep3Text3: "Full representation to manage your career and secure the best opportunities.",
    academiesFinalText: "With our expertise and network, we help young players maximize their potential and reach the highest level. Let’s take the first step toward your professional football journey!",
    academiesPoint1: "Trials & Tryouts at top academies",
    academiesPoint2: "Legalization & Documentation Support",
    academiesPoint3: "Contract Negotiations",
    academiesPoint4: "Ongoing Career Guidance & Representation",
    presentInfo: "With our expertise and global network, we take care of everything off the pitch so you can focus on your game.",
    aboutDesc44: "We are fully committed to the success of our players and partners. Our team of competent and dedicated professionals offers the best services to our clients, including sponsorships, building brand, legal assistance, marketing and financial support.",
    aboutDesc45: "Thanks to our international contacts and strategic collaborations with coaches, scouts, sporting directors, and football clubs owners worldwide, we are able to create successful transfers, helping players make impactful moves that enhance their careers and benefit the clubs they join."    
  },
  UA: {
    home: "Головна",
    about: "Про нас",
    services: "Послуги",
    contact: "Контакти",
    welcome: "ЛАСКАВО ПРОСИМО ДО PHANTOM",
    gameChanger: "ГРА, ЩО ЗМІНЮЄ ПРАВИЛА В СПОРТИВНОМУ МЕНЕДЖМЕНТІ",
    aboutTitle: "Про нас",
    aboutDesc1: "PHANTOM FOOTBALL AGENCY — ліцензована компанія FIFA, створена для управління кар'єрами професійних футболістів.",
    aboutDesc2: "Ми спеціалізуємося на представництві інтересів професійних спортсменів, відкритті, розвитку та просуванні молодих талантів, надаючи їм ретельне планування кар’єри у сімейній атмосфері.",
    aboutDesc3_1: "Ми повністю віддані",
    aboutDesc3_2: "успіху",
    aboutDesc3_3: "наших гравців та партнерів. Наша команда",
    aboutDesc3_4: "компетентних",
    aboutDesc3_5: "та відданих",
    aboutDesc3_6: "професіоналів",
    aboutDesc3_7: "пропонує",
    aboutDesc3_8: "найкращі послуги",
    aboutDesc3_9: "нашим клієнтам, включно зі спонсорством, брендингом, юридичною допомогою, маркетингом та фінансовою підтримкою.",
    servicesTitle: "Послуги",
    servicesBlock1Text1: "Ми представляємо інтереси професійних гравців та тренерів, надаючи їм послуги найвищого рівня, включно зі спонсорством, контрактними переговори, побудовою бренду, юридичною допомогою, маркетингом і фінансовою підтримкою.",
    servicesBlock1Text2: "Наша команда ліцензованих агентів, юристів і скаутів піклується про всі позаігрові аспекти, щоб клієнти могли повністю зосередитися на своєму прогресі.",
    servicesBlock2Text1: "Перехід від юнацького футболу до професійного — важливий період. Іноді, щоб стати професіоналом, гравцю треба змінити команду, лігу чи навіть країну.",
    servicesBlock2Text2: "Ми отримуємо запити від європейських та азійських клубів усіх рівнів та дивізіонів. Ретельно відбираємо та пропонуємо найкращі можливості гравцям, організовуючи перегляди та проби безпосередньо у клубах та командах U-19.",
    servicesBlock3Text1: "Відкриття молодих талантів і розміщення їх у правильному середовищі — одна з наших головних цілей. Розвиток і тренування з провідними тренерами та досвід гри з найкращими академіями Європи — ключ до успіху.",
    servicesBlock3Text2: "Ми співпрацюємо з численними академіями в Іспанії, Польщі, Україні, Португалії, Італії, Німеччині, Чехії та інших країнах. Після аналізу молодого таланту визначаємо найкращу можливість і допомагаємо у всьому процесі — від переглядів, легалізації, переговорів по контрактах до постійної підтримки протягом років, щоб допомогти їм стати професіоналами.",
    readMore: "Читати далі+",
    learnMore: "Дізнатись більше",
    presentTitle: "Представництво та професійний спортивний менеджмент футболістів",
    presentText: "Наша відданість досконалості відображається у кожному аспекті нашої роботи. Чому варто приєднатися до нас і що ми можемо запропонувати?",
    presentItem1Title: "Юридична підтримка",
    presentItem1Text: "Професійна допомога від команди висококваліфікованих спортивних юристів.",
    presentItem2Title: "Планування кар'єри",
    presentItem2Text: "Продуманий та стратегічний розвиток кар'єри, орієнтований на кожного гравця.",
    presentItem3Title: "Трансфери та пропозиції",
    presentItem3Text: "Ліцензовані агенти FIFA працюють для забезпечення кращих контрактів, зарплат та умов.",
    presentItem4Title: "Переговори по контрактах",
    presentItem4Text: "Спрямовані на досягнення найкращих можливих умов для наших клієнтів.",
    presentItem5Title: "Розвиток особистого бренду",
    presentItem5Text: "Необхідний для довгострокового успіху на полі та поза ним.",
    presentItem6Title: "Податкові та фінансові консультації",
    presentItem6Text: "Забезпечення фінансової безпеки та розумного управління коштами.",
    presentItem7Title: "Спонсорські угоди",
    presentItem7Text: "Допомога гравцям у створенні цінних партнерств.",
    presentItem8Title: "Маркетинг і управління соц-мережами",
    presentItem8Text: "Підвищення видимості та залучення аудиторії.",
    presentItem9Title: "Здоров'я та благополуччя",
    presentItem9Text: "Індивідуальна підтримка здоров'я та психічного стану",
    footerTitle: "Зв'яжіться з нами та сяйте разом з нами",
    footerSubtitle: "Без ризику немає винагороди.",
    footerNamePlaceholder: "Ім'я",
    footerEmailPlaceholder: "Ел. пошта",
    footerMessagePlaceholder: "Повідомлення",
    footerCheckboxText: "Я готовий до успішної та плідної співпраці.",
    sendMessage: "Відправити повідомлення",
    trialsTitle: "Перегляди та проби в футболі (Віком 18-23)",
    trialsIntro: "Завдяки нашим міжнародним співпрацям з футбольними клубами різних рівнів ми надаємо можливості гравцям проходити перегляди та проби безпосередньо у клубах, які активно шукають гравців на їх позиції та стиль гри.",
    trialsStepButton: "Покроковий процес",
    trialsSupportButton: "Підтримка та допомога",
    trialsStepTitle: "Покроковий процес",
    submitMaterialsTitle: "Надішліть свої матеріали",
    submitMaterialsText: "Надішліть нам посилання на Transfermarkt, резюме та відеоогляд (посилання на YouTube).",
    analysisTitle: "Аналіз та консультації",
    analysisText1: "Наша команда аналізує ваші матеріали та надає професійний відгук про ваш рівень.",
    analysisText2: "Ми консультуємо щодо найбільш підходящої країни та дивізіону для початку вашої кар'єри, пояснюючи потенційні переваги та перспективи.",
    scoutingTitle: "Скаутинг та мережа агентів",
    scoutingText: "Після погодження співпраці ми передаємо ваш профіль нашим скаутам та агентам у вибраному регіоні.",
    findingOpportunityTitle: "Пошук найкращої можливості",
    findingOpportunityText1: "Наша команда презентує ваш профіль клубам, шукаючи найкращі варіанти.",
    findingOpportunityText2: "Ми обираємо найкращий варіант — клуб, який потребує гравця вашої позиції та стилю, і пропонує найкращу зарплату, можливості та умови.",
    trialInvitationTitle: "Запрошення на проби та логістика",
    trialInvitationIntro: "Ви отримуєте всі необхідні деталі, зокрема:",
    trialInvitationClub: "Назва клубу та місце розташування",
    trialInvitationDate: "Дата прибуття та тривалість проб (зазвичай 7-14 днів)",
    trialInvitationAccommodation: "Проживання/готель та харчування",
    trialInvitationSalary: "Очікування зарплати та можливі умови контракту",
    arrivalTrialTitle: "Прибуття та період проб",
    arrivalTrialText1: "По прибуттю вас зустріне наш агент або адміністратор клубу та відвезе до місця проживання.",
    arrivalTrialText2: "Від цього моменту все залежить від вашої гри.",
    supportTitle: "Підтримка та допомога",
    supportText1: "З самого початку ми допомагаємо з документами, візою, організацією поїздок, SIM-картами та іншими необхідними речами.",
    supportText2: "Протягом проб ми підтримуємо контакт з клубом, інформуючи вас про відгуки та оцінки.",
    supportText3: "Якщо ви себе добре покажете, підпишете контракт з клубом, що пропонує найкращі умови, адаптуєтесь, продемонструєте свої навички і потенційно підніметесь у вищі дивізіони. Ваш прогрес залежить від вашої віддачі та гри.",
    supportContractOffer: "Ми можемо запропонувати представницький контракт з нашою агенцією цікавим гравцям, які почали працювати з нами.",
    supportTrialTiming1: "Більшість переглядів проходить під час трансферних вікон, але багато клубів запрошують гравців і впродовж сезону для оцінки, адаптації та прийняття рішення. Коли відкривається трансферне вікно, клуби можуть одразу підписати контракт.",
    supportTrialTiming2: "Це ваш шанс вивести кар’єру на новий рівень — чи готові ви?",
    supportAccommodation: "Проживання завжди забезпечується",
    supportRepresentation: "Ми представляємо ваші інтереси протягом усього процесу — від першого дня проб до переговорів по контракті, якщо отримуєте пропозицію.",
    academiesTitle: "Футбольні перегляди в академіях та стипендії (13–18 років)",
    academiesIntro: "Ми співпрацюємо з академіями найвищого рівня, щоб надати найкращі можливості для молодих гравців. Наша команда дбає про добробут гравців і безпосередньо комунікує з клубами — не лише як агенти, а як надійні професіонали, яких поважають і сприймають серйозно. Це дозволяє нам отримувати цінні інсайти та чесний зворотний зв’язок, який ми передаємо гравцям і їхнім сім’ям. Ми також допомагаємо талановитим спортсменам потрапити до академій, що відповідають їхньому потенціалу.",
    academiesButtonStep: "Чому наш супровід важливий",
    academiesButtonSupport: "Як знайти шлях до успіху",
    academiesWhyTitle: "Чому наш супровід важливий",
    academiesWhyText1: "Багато батьків або й самі гравці звертаються до нас у пошуках кращої академії, клубу або U-19 команди. Вони також потребують професійної підтримки в переговорах, щоб уникнути підписання довгострокових контрактів з несприятливими умовами. Саме тому з раннього етапу потрібен компетентний агент.",
    academiesWhyText2: "Ми маємо офіційну авторизацію від FIFA представляти неповнолітніх. Спільно з батьками ми забезпечуємо безпечне середовище для розвитку молодих спортсменів, дотримуючись усіх правил FIFA.",
    academiesPathTitle: "Як знайти шлях до успіху",
    academiesPathText1: "Виявлення молодих талантів і розміщення їх у правильному середовищі — один з наших головних пріоритетів. Розвиток під керівництвом топових тренерів і змагальний досвід з найкращими академіями Європи — ключ до успіху.",
    academiesPathText2: "Ми працюємо з провідними академіями Іспанії, Польщі, України, Португалії, Італії, Німеччини, Чехії та інших країн. Оцінивши потенціал гравця, ми підбираємо найкращу можливість і супроводжуємо на кожному етапі:",
    academiesHowTitle: "Як почати",
    academiesStep1Title: "Надішліть матеріали",
    academiesStep1Text: "Надішліть нам лінк на Transfermarkt, резюме та хайлайт-відео (посилання на YouTube).",
    academiesStep2Title: "Оцінка та зворотний зв'язок",
    academiesStep2Text: "Наші експерти аналізують ваші матеріали та надають професійну оцінку рівня та потенціалу.",
    academiesStep3Title: "Перегляд і представництво",
    academiesStep3Text1: "Після домовленості про співпрацю ми пропонуємо:",
    academiesStep3Text2: "Перегляд, пробу або стипендію у відповідній академії, клубі або команді U-19.",
    academiesStep3Text3: "Повне представництво для побудови кар'єри та отримання найкращих можливостей.",
    academiesFinalText: "Ми допомагаємо реалізувати потенціал молодих гравців та досягти найвищого рівня. Зробімо перший крок до професійної кар’єри!",
    academiesPoint1: "Перегляди та проби в топ-академіях",
    academiesPoint2: "Легалізація та підтримка з документами",
    academiesPoint3: "Переговори по контракту",
    academiesPoint4: "Постійний супровід і представництво",
    presentInfo: "Завдяки нашому досвіду та глобальній мережі ми беремо на себе все поза полем, щоб ви могли зосередитися на грі.",
    aboutDesc44: "Ми повністю віддані успіху наших гравців та партнерів. Наша команда компетентних та відданих професіоналів пропонує найкращі послуги нашим клієнтам, включно зі спонсорством, брендингом, юридичною допомогою, маркетингом та фінансовою підтримкою.",
    aboutDesc45: "Завдяки нашим міжнародним контактам та стратегічній співпраці з тренерами, скаутами, спортивними директорами та власниками футбольних клубів по всьому світу, ми здатні створювати успішні трансфери, допомагаючи гравцям робити вагомі кроки, які покращують їх кар’єру та приносять користь клубам, до яких вони приєднуються."    
  },
  RU: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    contact: "Контакты",
    welcome: "ДОБРО ПОЖАЛОВАТЬ В PHANTOM",
    gameChanger: "ИГРА, КОТОРАЯ МЕНЯЕТ ПРАВИЛА В СПОРТИВНОМ МЕНЕДЖМЕНТЕ",
    aboutTitle: "О нас",
    aboutDesc1: "PHANTOM FOOTBALL AGENCY — лицензированная компания FIFA, созданная для управления карьерами профессиональных футболистов.",
    aboutDesc2: "Мы специализируемся на представлении интересов профессиональных спортсменов, открытии, развитии и продвижении молодых талантов, предоставляя им тщательное планирование карьеры в семейной атмосфере.",
    aboutDesc3_1: "Мы полностью преданы",
    aboutDesc3_2: "успеху",
    aboutDesc3_3: "наших игроков и партнеров. Наша команда",
    aboutDesc3_4: "компетентных",
    aboutDesc3_5: "и преданных",
    aboutDesc3_6: "профессионалов",
    aboutDesc3_7: "предлагает",
    aboutDesc3_8: "лучшие услуги",
    aboutDesc3_9: "нашим клиентам, включая спонсорство, брендинг, юридическую помощь, маркетинг и финансовую поддержку.",
    servicesTitle: "Услуги",
    servicesBlock1Text1: "Мы представляем интересы профессиональных игроков и тренеров, предоставляя им услуги высшего уровня, включая спонсорство, контрактные переговоры, построение бренда, юридическую помощь, маркетинг и финансовую поддержку.",
    servicesBlock1Text2: "Наша команда лицензированных агентов, юристов и скаутов заботится обо всех внеигровых аспектах, чтобы клиенты могли полностью сосредоточиться на своем прогрессе.",
    servicesBlock2Text1: "Переход от молодежного футбола к профессиональному — важный период. Иногда, чтобы стать профессионалом, игроку нужно сменить команду, лигу или даже страну.",
    servicesBlock2Text2: "Мы получаем запросы от европейских и азиатских клубов всех уровней и дивизионов. Тщательно отбираем и предлагаем лучшие возможности игрокам, организуя просмотры и пробы непосредственно в клубах и командах U-19.",
    servicesBlock3Text1: "Открытие молодых талантов и размещение их в правильной среде — одна из наших главных целей. Развитие и тренировки с ведущими тренерами, а также опыт игры с лучшими академиями Европы — ключ к успеху.",
    servicesBlock3Text2: "Мы сотрудничаем с многочисленными академиями в Испании, Польше, Украине, Португалии, Италии, Германии, Чехии и других странах. После анализа молодого таланта определяем лучшую возможность и помогаем во всем процессе — от просмотров, легализации, переговоров по контрактам до постоянной поддержки на протяжении многих лет, чтобы помочь им стать профессионалами.",
    readMore: "Читать далее+",
    learnMore: "Узнать больше",
    presentTitle: "Представление и проф-спортивный менеджмент футболистов",
    presentText: "Наша приверженность совершенству отражается в каждом аспекте нашей работы. Почему стоит присоединиться к нам и что мы можем предложить?",
    presentItem1Title: "Юридическая поддержка",
    presentItem1Text: "Профессиональная помощь от команды высококвалифицированных спортивных юристов.",
    presentItem2Title: "Планирование карьеры",
    presentItem2Text: "Продуманное и стратегическое развитие карьеры, ориентированное на каждого игрока.",
    presentItem3Title: "Трансферы и предложения",
    presentItem3Text: "Лицензированные агенты FIFA работают над обеспечением лучших контрактов, зарплат и условий.",
    presentItem4Title: "Переговоры по контрактам",
    presentItem4Text: "Направлены на достижение лучших возможных условий для наших клиентов.",
    presentItem5Title: "Развитие личного бренда",
    presentItem5Text: "Необходимо для долгосрочного успеха на поле и вне его.",
    presentItem6Title: "Налоговые и финансовые консультации",
    presentItem6Text: "Обеспечение финансовой безопасности и разумного управления деньгами.",
    presentItem7Title: "Спонсорские сделки",
    presentItem7Text: "Помощь игрокам в создании ценных партнерств.",
    presentItem8Title: "Маркетинг и управление соц-сетями",
    presentItem8Text: "Повышение видимости и вовлеченности.",
    presentItem9Title: "Здоровье и благополучие",
    presentItem9Text: "Индивидуальная поддержка здоровья и психического состояния",
    footerTitle: "Свяжитесь с нами и сияйте вместе с нами",
    footerSubtitle: "Без риска нет награды.",
    footerNamePlaceholder: "Имя",
    footerEmailPlaceholder: "Эл. почта",
    footerMessagePlaceholder: "Сообщение",
    footerCheckboxText: "Я готов к успешному и плодотворному сотрудничеству.",
    sendMessage: "Отправить сообщение",
    trialsTitle: "Просмотры и пробы в футболе (возраст 18–23)",
    trialsIntro: "Благодаря нашим международным связям с футбольными клубами разных уровней, мы предоставляем игрокам возможность пройти просмотры и пробы напрямую в клубах, которые активно ищут игроков на их позицию и стиль игры.",
    trialsStepButton: "Пошаговый процесс",
    trialsSupportButton: "Поддержка и помощь",
    trialsStepTitle: "Пошаговый процесс",
    submitMaterialsTitle: "Отправьте материалы",
    submitMaterialsText: "Отправьте нам ссылку на Transfermarkt, резюме и хайлайты (ссылка на YouTube).",
    analysisTitle: "Анализ и консультация",
    analysisText1: "Наша команда анализирует ваши материалы и дает профессиональную оценку.",
    analysisText2: "Мы советуем, в какой стране и дивизионе лучше всего начать, объясняя возможные перспективы и выгоды.",
    scoutingTitle: "Скаутинг и сеть агентов",
    scoutingText: "После согласия на сотрудничество мы передаём ваш профиль нашим агентам и скаутам в нужном регионе.",
    findingOpportunityTitle: "Поиск лучшей возможности",
    findingOpportunityText1: "Мы представляем ваш профиль клубам, подбирая лучшие варианты.",
    findingOpportunityText2: "Выбираем клуб, который нуждается в игроке вашего амплуа и предлагает лучшие условия.",
    trialInvitationTitle: "Приглашение на пробы и логистика",
    trialInvitationIntro: "Вы получите все нужные данные, включая:",
    trialInvitationClub: "Клуб и локация",
    trialInvitationDate: "Дата приезда и длительность проб (обычно 7–14 дней)",
    trialInvitationAccommodation: "Проживание и питание",
    trialInvitationSalary: "Ожидаемая зарплата и детали контракта",
    arrivalTrialTitle: "Приезд и период проб",
    arrivalTrialText1: "По приезду вас встретит агент или администратор клуба и отвезёт в отель.",
    arrivalTrialText2: "Дальше всё зависит от вашей игры.",
    supportTitle: "Поддержка и помощь",
    supportText1: "Помогаем с визами, проездом, SIM-картами и всем нужным.",
    supportText2: "Во время проб поддерживаем контакт с клубом и передаём обратную связь.",
    supportText3: "Если всё пойдёт хорошо — подпишете контракт, адаптируетесь, покажете себя и, возможно, перейдёте выше.",
    supportContractOffer: "Мы можем предложить представительство талантливым игрокам.",
    supportTrialTiming1: "Большинство проб проходит во время трансферных окон, но многие клубы приглашают и в сезон.",
    supportTrialTiming2: "Это ваш шанс выйти на новый уровень — готовы?",
    supportAccommodation: "Проживание всегда предоставляется",
    supportRepresentation: "Мы представляем ваши интересы на всех этапах — от прибытия до подписания контракта.",
    academiesTitle: "Футбольные просмотры в академиях и стипендии (13–18 лет)",
    academiesIntro: "Мы сотрудничаем с элитными академиями, чтобы предоставить лучшие возможности для молодых игроков. Наша команда заботится о благополучии игроков и напрямую взаимодействует с клубами — не просто как агенты, а как надёжные профессионалы, которых уважают и воспринимают всерьёз. Это позволяет нам получать ценные инсайты и честную обратную связь, которую мы передаём игрокам и их семьям. Кроме того, мы помогаем талантливым молодым спортсменам получить возможности в топ-академиях, соответствующих их потенциалу.",
    academiesButtonStep: "Почему наша поддержка важна",
    academiesButtonSupport: "Поиск правильного пути к успеху",
    academiesWhyTitle: "Почему наша поддержка важна",
    academiesWhyText1: "Многие родители — или даже сами игроки — обращаются к нам в поисках лучшей академии, клуба или команды U-19. Им также нужна экспертная помощь в переговорах, чтобы избежать подписания долгосрочных контрактов с невыгодными условиями и скрытыми рисками. Поэтому важно иметь компетентного агента с самого начала.",
    academiesWhyText2: "Мы официально уполномочены FIFA представлять несовершеннолетних. Вместе с родителями мы обеспечиваем безопасную и поддерживающую среду, строго соблюдая все правила FIFA.",
    academiesPathTitle: "Поиск правильного пути к успеху",
    academiesPathText1: "Выявление молодых талантов и их размещение в подходящей среде — один из наших приоритетов. Развитие с лучшими тренерами и опыт игры с топ-академиями Европы — ключ к успеху.",
    academiesPathText2: "Мы сотрудничаем с ведущими академиями в Испании, Польше, Украине, Португалии, Италии, Германии, Чехии и других странах. После оценки потенциала игрока мы находим наилучшую возможность и полностью сопровождаем процесс:",
    academiesHowTitle: "Как начать",
    academiesStep1Title: "Отправьте материалы",
    academiesStep1Text: "Пришлите ссылку на Transfermarkt, резюме и хайлайт-видео (YouTube).",
    academiesStep2Title: "Оценка и обратная связь",
    academiesStep2Text: "Наши эксперты анализируют материалы и дают профессиональную оценку уровня и потенциала.",
    academiesStep3Title: "Просмотр и представительство",
    academiesStep3Text1: "После согласия на сотрудничество мы предлагаем:",
    academiesStep3Text2: "Просмотр, пробу или стипендию в подходящей академии, клубе или команде U-19.",
    academiesStep3Text3: "Полное представительство для построения карьеры и получения лучших возможностей.",
    academiesFinalText: "Благодаря нашему опыту и сети контактов, мы помогаем молодым игрокам реализовать потенциал и выйти на высокий уровень. Сделайте первый шаг к своей профессиональной карьере!",
    academiesPoint1: "Просмотры и пробы в топ-академиях",
    academiesPoint2: "Легализация и помощь с документами",
    academiesPoint3: "Переговоры по контракту",
    academiesPoint4: "Постоянное сопровождение и представительство",
    presentInfo: "Благодаря нашему опыту и глобальной сети мы заботимся обо всем вне поля, чтобы вы могли сосредоточиться на игре.",
    aboutDesc44: "Мы полностью преданы успеху наших игроков и партнеров. Наша команда компетентных и преданных профессионалов предлагает лучшие услуги нашим клиентам, включая спонсорство, брендинг, юридическую помощь, маркетинг и финансовую поддержку.",
    aboutDesc45: "Благодаря нашим международным контактам и стратегическому сотрудничеству с тренерами, скаутами, спортивными директорами и владельцами футбольных клубов по всему миру мы можем создавать успешные трансферы, помогая игрокам делать значимые шаги, которые улучшают их карьеру и приносят пользу клубам, к которым они присоединяются."    
  },
  ES: {
    home: "Inicio",
    about: "Sobre Nosotros",
    services: "Servicios",
    contact: "Contáctanos",
    welcome: "BIENVENIDO A PHANTOM",
    gameChanger: "CAMBIANDO EL JUEGO EN LA GESTIÓN DEPORTIVA",
    aboutTitle: "Sobre Nosotros",
    aboutDesc1: "PHANTOM FOOTBALL AGENCY es una empresa con licencia FIFA creada para gestionar las carreras de jugadores de fútbol profesionales.",
    aboutDesc2: "Nos especializamos en representar los intereses de atletas profesionales, descubriendo, desarrollando y promoviendo jóvenes talentos, brindándoles una planificación cuidadosa de sus carreras en un ambiente familiar.",
    aboutDesc3_1: "Estamos completamente comprometidos con el",
    aboutDesc3_2: "éxito",
    aboutDesc3_3: "de nuestros jugadores y socios. Nuestro equipo de",
    aboutDesc3_4: "profesionales competentes",
    aboutDesc3_5: "y dedicados",
    aboutDesc3_6: "ofrece los mejores servicios",
    aboutDesc3_7: "a nuestros clientes, incluyendo patrocinios, construcción de marca, asistencia legal, marketing y apoyo financiero.",
    servicesTitle: "Servicios",
    servicesBlock1Text1: "Representamos los intereses de jugadores y entrenadores profesionales, brindándoles servicios de primer nivel, incluyendo patrocinios, negociaciones contractuales, construcción de marca, asistencia legal, marketing y apoyo financiero.",
    servicesBlock1Text2: "Nuestro equipo de agentes, abogados y cazatalentos con licencia se encarga de todos los aspectos fuera del campo para garantizar que nuestros clientes puedan concentrarse completamente en su progreso.",
    servicesBlock2Text1: "La transición del fútbol juvenil al profesional es un período crucial. A veces, para llegar a ser profesional, un jugador necesita cambiar de equipo, liga o incluso país.",
    servicesBlock2Text2: "Recibimos solicitudes de clubes europeos y asiáticos de todos los niveles y divisiones. Seleccionamos cuidadosamente y ofrecemos las mejores oportunidades a los jugadores, organizando pruebas y ensayos directamente en clubes de fútbol y equipos U-19.",
    servicesBlock3Text1: "El descubrimiento de jóvenes talentos y colocarlos en el ambiente adecuado es uno de nuestros principales objetivos. El desarrollo y entrenamiento con entrenadores de primer nivel, junto con la experiencia de jugar con y contra las mejores academias de Europa, son clave para el éxito.",
    servicesBlock3Text2: "Colaboramos con numerosas academias en España, Polonia, Ucrania, Portugal, Italia, Alemania, República Checa y otros países. Tras analizar a un joven talento, identificamos la mejor oportunidad y asistimos en todo el proceso, incluyendo pruebas, legalización, negociaciones contractuales y apoyo continuo a lo largo de los años para ayudarles a convertirse en profesionales.",
    readMore: "Leer más+",
    learnMore: "Aprender más",
    presentTitle: "Representación y Gestión Profesional Deportiva para Jugadores de Fútbol",
    presentText: "Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestro trabajo. ¿Por qué deberías unirte a nosotros y qué podemos ofrecer?",
    presentItem1Title: "Soporte Legal",
    presentItem1Text: "Asistencia experta de un equipo de abogados deportivos altamente cualificados.",
    presentItem2Title: "Planificación de Carrera",
    presentItem2Text: "Desarrollo de carrera cuidadoso y estratégico adaptado a cada jugador.",
    presentItem3Title: "Transferencias y ofertas",
    presentItem3Text: "Agentes licenciados por FIFA trabajan para asegurar mejores contratos, salarios y condiciones.",
    presentItem4Title: "Negociaciones de Contratos",
    presentItem4Text: "Enfocados en lograr las mejores condiciones posibles para nuestros clientes.",
    presentItem5Title: "Desarrollo de Marca Personal",
    presentItem5Text: "Esencial para el éxito a largo plazo dentro y fuera del campo.",
    presentItem6Title: "Asesoría Fiscal y Financiera",
    presentItem6Text: "Asegurando la seguridad financiera y una gestión inteligente del dinero.",
    presentItem7Title: "Acuerdos de Patrocinio",
    presentItem7Text: "Ayudando a los jugadores a construir asociaciones valiosas.",
    presentItem8Title: "Marketing y Gestión de Redes Sociales",
    presentItem8Text: "Mejorando la visibilidad y el compromiso.",
    presentItem9Title: "Salud y Bienestar",
    presentItem9Text: "Apoyo personalizado para la salud física y mental",
    footerTitle: "Ponte en contacto y brilla con nosotros",
    footerSubtitle: "Sin riesgo, no hay recompensa.",
    footerNamePlaceholder: "Nombre",
    footerEmailPlaceholder: "Correo electrónico",
    footerMessagePlaceholder: "Mensaje",
    footerCheckboxText: "Estoy listo para una cooperación exitosa y fructífera.",
    sendMessage: "Enviar mensaje",
    trialsTitle: "Pruebas y Tryouts de Fútbol (Edades 18–23)",
    trialsIntro: "Gracias a nuestras colaboraciones internacionales con clubes de fútbol de distintos niveles, ofrecemos oportunidades para que los jugadores realicen pruebas directamente con clubes que buscan activamente jugadores de su posición y estilo de juego.",
    trialsStepButton: "Proceso paso a paso",
    trialsSupportButton: "Soporte y asistencia",
    trialsStepTitle: "Proceso paso a paso",
    submitMaterialsTitle: "Envíe sus materiales",
    submitMaterialsText: "Envíenos su enlace de Transfermarkt, CV y video destacado (enlace de YouTube).",
    analysisTitle: "Análisis y consulta",
    analysisText1: "Nuestro equipo analiza su material y brinda comentarios profesionales sobre su nivel.",
    analysisText2: "Le asesoramos sobre el país y la división más adecuados para iniciar su carrera, explicando los beneficios y perspectivas.",
    scoutingTitle: "Scouting y red de agentes",
    scoutingText: "Una vez acordada la colaboración, enviamos su perfil a nuestros agentes y scouts en la región elegida.",
    findingOpportunityTitle: "Encontrar la mejor oportunidad",
    findingOpportunityText1: "Presentamos su perfil a clubes buscando las mejores opciones.",
    findingOpportunityText2: "Elegimos el mejor club según su posición, estilo y condiciones.",
    trialInvitationTitle: "Invitación a prueba y logística",
    trialInvitationIntro: "Recibirá todos los detalles necesarios, incluyendo:",
    trialInvitationClub: "Nombre del club y ubicación",
    trialInvitationDate: "Fecha de llegada y duración de la prueba (7–14 días)",
    trialInvitationAccommodation: "Alojamiento y comida",
    trialInvitationSalary: "Expectativas salariales y posibles condiciones contractuales",
    arrivalTrialTitle: "Llegada y periodo de prueba",
    arrivalTrialText1: "Al llegar, un agente o administrador del club lo recibirá y lo llevará al alojamiento.",
    arrivalTrialText2: "Desde ese momento, todo depende de su rendimiento.",
    supportTitle: "Soporte y asistencia",
    supportText1: "Desde el inicio ayudamos con documentación, visado, viaje, SIMs y más.",
    supportText2: "Durante la prueba mantenemos contacto con el club y compartimos comentarios.",
    supportText3: "Si tiene éxito, firmará contrato, se adaptará y podrá avanzar a divisiones superiores.",
    supportContractOffer: "Podemos ofrecer un contrato de representación a los jugadores prometedores.",
    supportTrialTiming1: "La mayoría de pruebas ocurren en ventanas de transferencia, pero muchos clubes invitan durante la temporada.",
    supportTrialTiming2: "Esta es su oportunidad para llevar su carrera al siguiente nivel — ¿está listo?",
    supportAccommodation: "Alojamiento siempre incluido",
    supportRepresentation: "Representamos sus intereses durante todo el proceso — desde la prueba hasta la negociación del contrato.",
    academiesTitle: "Pruebas de fútbol en academias y becas (Edades 13-18)",
    academiesIntro: "Colaboramos con academias de élite para ofrecer las mejores oportunidades a jóvenes jugadores. Nuestro equipo garantiza el bienestar de los jugadores y se comunica directamente con el personal del club, no solo como agentes, sino como profesionales de confianza que son respetados y tomados en serio. Esto nos permite recopilar comentarios valiosos y sinceros que compartimos con los jugadores y sus familias. Además, ayudamos a jóvenes talentos a asegurar oportunidades en academias destacadas que se ajustan a su potencial.",
    academiesButtonStep: "Por qué nuestra guía importa",
    academiesButtonSupport: "Encontrar el camino correcto al éxito",
    academiesWhyTitle: "Por qué nuestra guía importa",
    academiesWhyText1: "Muchos padres, o incluso los propios jugadores, nos contactan buscando una mejor academia, club o equipo U-19. También necesitan apoyo experto en negociaciones para evitar firmar contratos a largo plazo con condiciones desfavorables. Por eso es crucial contar con un agente competente desde el principio.",
    academiesWhyText2: "Estamos oficialmente autorizados por la FIFA para representar a menores y, en colaboración con los padres, garantizamos un entorno seguro y de apoyo para los jóvenes atletas, cumpliendo estrictamente con todas las regulaciones de la FIFA.",
    academiesPathTitle: "Encontrar el camino correcto al éxito",
    academiesPathText1: "El descubrimiento de jóvenes talentos y ubicarlos en el entorno adecuado es una de nuestras prioridades principales. El desarrollo con entrenadores de primer nivel y la experiencia competitiva contra las mejores academias de Europa son clave para el éxito.",
    academiesPathText2: "Trabajamos con academias líderes en España, Polonia, Ucrania, Portugal, Italia, Alemania, República Checa y otros países. Una vez evaluado el potencial del jugador, identificamos la mejor oportunidad y brindamos asistencia completa durante todo el proceso:",
    academiesHowTitle: "Cómo empezar",
    academiesStep1Title: "Envíe sus materiales",
    academiesStep1Text: "Envíenos su enlace de Transfermarkt, CV y video destacado (enlace de YouTube).",
    academiesStep2Title: "Evaluación y retroalimentación",
    academiesStep2Text: "Nuestros expertos analizan sus materiales y brindan retroalimentación profesional sobre su nivel y potencial.",
    academiesStep3Title: "Prueba y representación",
    academiesStep3Text1: "Una vez que acordamos trabajar juntos, ofrecemos:",
    academiesStep3Text2: "Una prueba, ensayo o beca en la academia, club o equipo U-19 más adecuado.",
    academiesStep3Text3: "Representación completa para gestionar su carrera y asegurar las mejores oportunidades.",
    academiesFinalText: "Con nuestra experiencia y red de contactos, ayudamos a los jugadores jóvenes a maximizar su potencial y alcanzar el nivel más alto. ¡Demos el primer paso hacia tu carrera profesional en el fútbol!",
    academiesPoint1: "Pruebas y ensayos en academias de élite",
    academiesPoint2: "Legalización y apoyo con documentación",
    academiesPoint3: "Negociaciones contractuales",
    academiesPoint4: "Orientación y representación continua de carrera",
    presentInfo: "Con nuestra experiencia y red global, nos encargamos de todo fuera del campo para que puedas concentrarte en tu juego.",
    aboutDesc44: "Estamos completamente comprometidos con el éxito de nuestros jugadores y socios. Nuestro equipo de profesionales competentes y dedicados ofrece los mejores servicios a nuestros clientes, incluyendo patrocinios, construcción de marca, asistencia legal, marketing y apoyo financiero.",
    aboutDesc45: "Gracias a nuestros contactos internacionales y colaboraciones estratégicas con entrenadores, cazatalentos, directores deportivos y propietarios de clubes de fútbol en todo el mundo, podemos crear transferencias exitosas, ayudando a los jugadores a realizar movimientos impactantes que mejoran sus carreras y benefician a los clubes a los que se unen."    
  }
};
