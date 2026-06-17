import {
  ArrowRight,
  Ban,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  Coffee,
  MapPin,
  NotebookPen,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Timer,
  UserRound,
} from "lucide-react";

const applicationUrl =
  process.env.NEXT_PUBLIC_APPLICATION_FORM_URL ||
  "https://forms.gle/dMcR1aswieDDaPAW9";
const isExternalApplication = applicationUrl !== "#apply";

const sessionFacts = [
  { icon: MapPin, label: "장소", value: "영등포구 인근 카페" },
  { icon: CalendarDays, label: "시간", value: "토요일 오전 (협의)" },
  { icon: Timer, label: "방식", value: "1:1 컨설팅 (약 2시간)" },
  { icon: Coffee, label: "비용", value: "무료" },
];

const hookConcerns = [
  "만들고 싶은 서비스는 있는데 어디서부터 시작할지 모르겠다",
  "Codex를 써봤지만 결과물이 마음대로 나오지 않는다",
  "아이디어는 많은데 첫 화면과 핵심 기능을 못 고르겠다",
  "혼자 만들다 보니 막힌 지점을 객관적으로 보고 싶다",
];

const targetPeople = [
  "만들고 싶은 서비스 아이디어가 있다",
  "Codex를 사용해봤거나 바로 써볼 의지가 있다",
  "혼자 막힌 지점과 질문을 가져올 수 있다",
  "토요일 오전 협의 후 오프라인 2시간에 집중할 수 있다",
];

const concernCards = [
  {
    icon: CircleHelp,
    title: "초보여도 괜찮나요?",
    copy: "괜찮습니다. 코드를 잘 몰라도 됩니다. 대신 만들고 싶은 서비스와 막힌 지점은 있어야 합니다.",
  },
  {
    icon: NotebookPen,
    title: "무엇을 준비하나요?",
    copy: "아이디어 한 줄, 현재 시도한 것, 참고 서비스 1~2개면 충분합니다. 완성된 기획서는 필요 없습니다.",
  },
  {
    icon: Coffee,
    title: "왜 무료인가요?",
    copy: "처음 진행하는 1:1 세션이라 비용 없이 시작합니다. 대신 시간을 제대로 쓰기 위해 신청 내용을 보고 한 분만 선정합니다.",
  },
];

const notForPeople = [
  "아이디어 없이 Codex 기능만 구경하고 싶다",
  "온라인 강의처럼 정해진 커리큘럼을 기대한다",
  "개발을 전부 대신 맡기고 결과물만 받고 싶다",
];

const outcomes = [
  {
    title: "아이디어를 한 문장으로 압축합니다",
    copy: "누구의 어떤 문제를 해결할지 먼저 선명하게 만듭니다.",
    illustration: "planning",
  },
  {
    title: "첫 화면과 핵심 기능을 잡습니다",
    copy: "바로 만들 부분과 나중에 미룰 부분을 나눕니다.",
    illustration: "coding",
  },
  {
    title: "Codex에 맡길 첫 작업을 만듭니다",
    copy: "세션 후 혼자 이어갈 수 있는 작업 지시로 정리합니다.",
    illustration: "painpoint",
  },
] as const;

const faqItems = [
  {
    question: "개발 경험이 거의 없어도 지원할 수 있나요?",
    answer:
      "가능합니다. 다만 서비스 아이디어와 해결하고 싶은 문제가 있어야 합니다. 문법 설명보다 시작점을 잡는 데 집중합니다.",
  },
  {
    question: "Codex를 많이 써본 사람만 가능한가요?",
    answer:
      "많이 써봤을 필요는 없습니다. 한 번이라도 사용해봤거나, 세션 전에 직접 써볼 의지가 있으면 됩니다.",
  },
  {
    question: "2시간 안에 실제 서비스가 완성되나요?",
    answer:
      "완성을 약속하지 않습니다. 대신 무엇부터 만들지, Codex에 어떤 단위로 맡길지, 다음 실험을 어떻게 할지 정합니다.",
  },
  {
    question: "선정 기준은 무엇인가요?",
    answer:
      "아이디어의 크기보다 문제의 구체성, 현재 막힌 지점, 오프라인 2시간을 밀도 있게 쓸 수 있는지를 봅니다.",
  },
];

function ApplyButton({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const className =
    variant === "light"
      ? "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#13231f] shadow-sm transition hover:bg-[#f2f8f6] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#173d38]"
      : "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#173d38] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f2d29] focus:outline-none focus:ring-2 focus:ring-[#173d38] focus:ring-offset-2";

  return (
    <a
      className={className}
      href={applicationUrl}
      target={isExternalApplication ? "_blank" : undefined}
      rel={isExternalApplication ? "noopener noreferrer" : undefined}
    >
      지원서 작성하기
      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
    </a>
  );
}

function IllustrationDepth() {
  return (
    <defs>
      <linearGradient id="sceneSheen" x1="84" x2="560" y1="40" y2="390">
        <stop stopColor="#FFFFFF" stopOpacity="0.58" />
        <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.1" />
        <stop offset="1" stopColor="#173D38" stopOpacity="0.09" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="198" x2="442" y1="162" y2="286">
        <stop stopColor="#1F5A51" />
        <stop offset="1" stopColor="#0F2D29" />
      </linearGradient>
      <linearGradient id="paperTone" x1="92" x2="312" y1="72" y2="346">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#F2F7F5" />
      </linearGradient>
      <filter id="objectShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#173D38" floodOpacity="0.16" />
      </filter>
      <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#173D38" floodOpacity="0.12" />
      </filter>
    </defs>
  );
}

function SoftIllustration({
  type,
  className = "",
}: {
  type: "hero" | "planning" | "coding" | "painpoint" | "cafe" | "apply";
  className?: string;
}) {
  const commonProps = {
    className: `h-full w-full ${className}`,
    viewBox: "0 0 640 420",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
  };

  if (type === "hero") {
    return (
      <svg {...commonProps} aria-label="카페 테이블에서 노트북으로 서비스를 기획하는 일러스트">
        <IllustrationDepth />
        <rect width="640" height="420" rx="0" fill="#EAF4EF" />
        <path d="M0 304H640V420H0V304Z" fill="#D6E8DF" />
        <path d="M76 84H214V235H76V84Z" fill="url(#paperTone)" filter="url(#softShadow)" />
        <path d="M95 106H195V122H95V106Z" fill="#7FB7A6" />
        <path d="M95 145H182V157H95V145Z" fill="#B7CDC5" />
        <path d="M95 174H170V186H95V174Z" fill="#B7CDC5" />
        <path d="M432 56H560V174H432V56Z" fill="url(#paperTone)" filter="url(#softShadow)" />
        <path d="M455 82H538V98H455V82Z" fill="#F0B35B" />
        <path d="M455 122H520V134H455V122Z" fill="#B7CDC5" />
        <rect x="170" y="136" width="300" height="176" rx="22" fill="url(#paperTone)" filter="url(#objectShadow)" />
        <rect x="198" y="162" width="244" height="124" rx="14" fill="url(#screenGlow)" />
        <path d="M212 178H428" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="8" strokeLinecap="round" />
        <path d="M222 188H328V202H222V188Z" fill="#F7FAF7" opacity="0.9" />
        <path d="M222 220H412V231H222V220Z" fill="#7FB7A6" />
        <path d="M222 246H366V257H222V246Z" fill="#7FB7A6" />
        <path d="M134 313H506L470 356H170L134 313Z" fill="#C8DCD4" filter="url(#softShadow)" />
        <path d="M192 323H448L434 340H206L192 323Z" fill="#FFFFFF" opacity="0.75" />
        <rect x="502" y="248" width="62" height="54" rx="12" fill="#F0B35B" filter="url(#softShadow)" />
        <path d="M515 248V239H551V248" stroke="#173D38" strokeWidth="10" strokeLinecap="round" />
        <path d="M92 300C111 270 153 270 171 300" stroke="#D65A3F" strokeWidth="18" strokeLinecap="round" />
        <circle cx="132" cy="244" r="38" fill="#F7C9BA" />
        <path d="M100 236C111 205 152 197 171 226C154 220 128 220 100 236Z" fill="#173D38" />
        <path d="M526 303C542 273 584 272 600 303" stroke="#7FB7A6" strokeWidth="18" strokeLinecap="round" />
        <circle cx="564" cy="247" r="36" fill="#F7C9BA" />
        <path d="M534 236C543 208 586 201 603 232C580 225 557 226 534 236Z" fill="#173D38" />
        <rect x="50" y="335" width="116" height="42" rx="21" fill="#FFFFFF" filter="url(#softShadow)" />
        <path d="M76 356H139" stroke="#D65A3F" strokeWidth="10" strokeLinecap="round" />
        <rect x="471" y="330" width="118" height="44" rx="22" fill="#FFFFFF" filter="url(#softShadow)" />
        <path d="M496 352H560" stroke="#2B8A72" strokeWidth="10" strokeLinecap="round" />
        <rect width="640" height="420" fill="url(#sceneSheen)" opacity="0.45" />
      </svg>
    );
  }

  if (type === "planning") {
    return (
      <svg {...commonProps} aria-label="서비스 아이디어를 카드로 정리하는 일러스트">
        <IllustrationDepth />
        <rect width="640" height="420" rx="24" fill="#F2F8F6" />
        <rect x="72" y="74" width="184" height="250" rx="20" fill="url(#paperTone)" filter="url(#objectShadow)" />
        <rect x="100" y="108" width="103" height="18" rx="9" fill="#173D38" />
        <rect x="100" y="150" width="124" height="12" rx="6" fill="#B7CDC5" />
        <rect x="100" y="184" width="92" height="12" rx="6" fill="#B7CDC5" />
        <rect x="100" y="218" width="132" height="12" rx="6" fill="#B7CDC5" />
        <rect x="306" y="92" width="242" height="70" rx="18" fill="#F0B35B" filter="url(#softShadow)" />
        <rect x="306" y="188" width="242" height="70" rx="18" fill="#7FB7A6" filter="url(#softShadow)" />
        <rect x="306" y="284" width="242" height="70" rx="18" fill="#D65A3F" filter="url(#softShadow)" />
        <path d="M154 339C190 300 244 300 280 339" stroke="#173D38" strokeWidth="22" strokeLinecap="round" />
        <circle cx="217" cy="258" r="42" fill="#F7C9BA" />
        <path d="M177 252C190 218 236 212 258 245C235 237 207 237 177 252Z" fill="#173D38" />
        <path d="M348 128H504" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        <path d="M348 224H490" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        <path d="M348 320H466" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        <rect width="640" height="420" rx="24" fill="url(#sceneSheen)" opacity="0.4" />
      </svg>
    );
  }

  if (type === "coding") {
    return (
      <svg {...commonProps} aria-label="Codex와 함께 구현 경로를 잡는 일러스트">
        <IllustrationDepth />
        <rect width="640" height="420" rx="24" fill="#EEF5F1" />
        <rect x="78" y="96" width="320" height="206" rx="22" fill="url(#screenGlow)" filter="url(#objectShadow)" />
        <path d="M96 116H378" stroke="#FFFFFF" strokeOpacity="0.13" strokeWidth="9" strokeLinecap="round" />
        <path d="M112 138H216" stroke="#F7FAF7" strokeWidth="12" strokeLinecap="round" />
        <path d="M112 177H310" stroke="#7FB7A6" strokeWidth="12" strokeLinecap="round" />
        <path d="M112 216H274" stroke="#F0B35B" strokeWidth="12" strokeLinecap="round" />
        <path d="M112 255H336" stroke="#7FB7A6" strokeWidth="12" strokeLinecap="round" />
        <path d="M48 303H430L395 348H83L48 303Z" fill="#C8DCD4" filter="url(#softShadow)" />
        <rect x="438" y="112" width="124" height="168" rx="24" fill="url(#paperTone)" filter="url(#objectShadow)" />
        <path d="M469 161L491 183L532 142" stroke="#2B8A72" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="466" y="222" width="72" height="14" rx="7" fill="#B7CDC5" />
        <circle cx="499" cy="320" r="38" fill="#F0B35B" />
        <path d="M482 320H516" stroke="#173D38" strokeWidth="12" strokeLinecap="round" />
        <path d="M499 303V337" stroke="#173D38" strokeWidth="12" strokeLinecap="round" />
        <rect width="640" height="420" rx="24" fill="url(#sceneSheen)" opacity="0.35" />
      </svg>
    );
  }

  if (type === "painpoint") {
    return (
      <svg {...commonProps} aria-label="페인포인트를 찾아 다음 실험을 정하는 일러스트">
        <IllustrationDepth />
        <rect width="640" height="420" rx="24" fill="#F7F1EC" />
        <rect x="96" y="92" width="210" height="220" rx="22" fill="url(#paperTone)" filter="url(#objectShadow)" />
        <rect x="130" y="126" width="116" height="16" rx="8" fill="#173D38" />
        <rect x="130" y="166" width="136" height="12" rx="6" fill="#B7CDC5" />
        <rect x="130" y="198" width="92" height="12" rx="6" fill="#B7CDC5" />
        <rect x="130" y="230" width="124" height="12" rx="6" fill="#B7CDC5" />
        <circle cx="408" cy="190" r="72" fill="#FFFFFF" filter="url(#objectShadow)" />
        <path d="M382 190L400 208L438 168" stroke="#D65A3F" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M459 241L529 311" stroke="#173D38" strokeWidth="24" strokeLinecap="round" />
        <rect x="372" y="310" width="168" height="46" rx="23" fill="#7FB7A6" filter="url(#softShadow)" />
        <path d="M410 333H502" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <path d="M108 334C144 298 204 298 240 334" stroke="#F0B35B" strokeWidth="20" strokeLinecap="round" />
        <rect width="640" height="420" rx="24" fill="url(#sceneSheen)" opacity="0.35" />
      </svg>
    );
  }

  if (type === "apply") {
    return (
      <svg {...commonProps} aria-label="지원 후 첫 단계를 정리하는 일러스트">
        <IllustrationDepth />
        <rect width="640" height="420" rx="24" fill="#EAF4EF" />
        <rect x="92" y="72" width="220" height="274" rx="24" fill="url(#paperTone)" filter="url(#objectShadow)" />
        <rect x="124" y="112" width="112" height="16" rx="8" fill="#173D38" />
        <rect x="124" y="154" width="144" height="12" rx="6" fill="#B7CDC5" />
        <rect x="124" y="188" width="112" height="12" rx="6" fill="#B7CDC5" />
        <rect x="124" y="222" width="136" height="12" rx="6" fill="#B7CDC5" />
        <rect x="124" y="272" width="124" height="40" rx="20" fill="#173D38" filter="url(#softShadow)" />
        <path d="M150 292H222" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
        <circle cx="410" cy="154" r="72" fill="#FFFFFF" filter="url(#objectShadow)" />
        <path d="M384 154L404 174L444 132" stroke="#2B8A72" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="354" y="250" width="194" height="58" rx="20" fill="#F0B35B" filter="url(#softShadow)" />
        <path d="M394 280H508" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        <path d="M318 334C354 292 418 292 454 334" stroke="#D65A3F" strokeWidth="20" strokeLinecap="round" />
        <rect width="640" height="420" rx="24" fill="url(#sceneSheen)" opacity="0.4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} aria-label="카페에서 1대1로 서비스 아이디어를 나누는 일러스트">
      <IllustrationDepth />
      <rect width="640" height="420" rx="24" fill="#EFF6F2" />
      <rect x="90" y="114" width="460" height="190" rx="28" fill="url(#paperTone)" filter="url(#objectShadow)" />
      <rect x="190" y="162" width="260" height="118" rx="18" fill="url(#screenGlow)" />
      <path d="M208 178H432" stroke="#FFFFFF" strokeOpacity="0.13" strokeWidth="8" strokeLinecap="round" />
      <path d="M218 198H322" stroke="#F7FAF7" strokeWidth="12" strokeLinecap="round" />
      <path d="M218 232H406" stroke="#7FB7A6" strokeWidth="12" strokeLinecap="round" />
      <path d="M125 301H515L476 350H164L125 301Z" fill="#C8DCD4" filter="url(#softShadow)" />
      <circle cx="138" cy="186" r="36" fill="#F7C9BA" />
      <circle cx="502" cy="186" r="36" fill="#F7C9BA" />
      <path d="M102 180C116 149 158 143 178 174C154 168 128 168 102 180Z" fill="#173D38" />
      <path d="M468 180C481 149 524 143 544 174C520 168 494 168 468 180Z" fill="#173D38" />
      <rect x="72" y="250" width="84" height="42" rx="21" fill="#F0B35B" filter="url(#softShadow)" />
      <rect x="486" y="250" width="84" height="42" rx="21" fill="#D65A3F" filter="url(#softShadow)" />
      <rect width="640" height="420" rx="24" fill="url(#sceneSheen)" opacity="0.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-[#13231f]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f7faf7]/[0.92] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="text-sm font-bold tracking-[0.18em]">
            AI 1O1
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#43544f] sm:flex">
            <a className="transition hover:text-[#13231f]" href="#fit">
              대상
            </a>
            <a className="transition hover:text-[#13231f]" href="#apply">
              지원
            </a>
          </nav>
          <ApplyButton />
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#dcece5] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid min-h-[calc(86svh-4rem)] w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl pb-4">
            <h1
              className="text-[2.1rem] font-black leading-tight text-[#13231f] sm:text-6xl lg:text-7xl"
              aria-label="AI로 내 서비스를 시작하는 2시간"
            >
              <span className="block">AI로 내 서비스를</span>
              <span className="block">시작하는 2시간</span>
            </h1>
            <p className="mt-6 max-w-[46rem] text-lg leading-8 text-[#43544f] sm:text-xl">
              <span className="block">
                혼자 시작하기 막막했던 서비스 아이디어를 오프라인으로 함께 시작합니다.
              </span>
              <span className="mt-1 block">
                2시간 동안 Codex로 바로 시도할 첫 단계를 잡습니다.
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ApplyButton />
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#173d38]/20 bg-white/55 px-5 text-sm font-semibold text-[#173d38] transition hover:bg-white"
                href="#fit"
              >
                대상 먼저 보기
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/70 bg-white/35 shadow-2xl shadow-[#173d38]/10">
            <SoftIllustration type="hero" />
          </div>
        </div>
      </section>

      <section className="bg-[#173d38] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Puzzle aria-hidden="true" className="h-8 w-8 text-[#f0b35b]" />
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              이런 고민이 있다면 잘 맞습니다.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              완성된 기획보다 중요한 건 지금 막힌 지점입니다. 2시간 동안
              아이디어를 더 작게 나누고, 바로 시도할 첫 단계를 잡습니다.
            </p>
          </div>
          <div className="grid gap-4">
            {hookConcerns.map((concern) => (
              <div
                key={concern}
                className="rounded-md border border-white/[0.14] bg-white/[0.08] px-5 py-4 font-semibold leading-7"
              >
                {concern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              오프라인에서 1:1로 진행합니다.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#52635e]">
              영등포구 인근 카페에서 만나 토요일 오전 협의한 시간에 약 2시간
              동안 진행합니다. 비용은 무료이며, 서비스 아이디어를 Codex로 시작할
              수 있는 첫 단계까지 함께 잡습니다.
            </p>
          </div>
          <div className="min-h-[260px] overflow-hidden rounded-lg border border-black/10 bg-[#f7faf7] shadow-sm">
            <SoftIllustration type="cafe" />
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-black/10 sm:grid-cols-4">
          {sessionFacts.map((fact) => (
            <div key={fact.label} className="bg-white px-5 py-6 sm:px-8">
              <fact.icon aria-hidden="true" className="mb-4 h-5 w-5 text-[#d65a3f]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#697873]">
                {fact.label}
              </p>
              <p className="mt-2 text-base font-bold sm:text-lg">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ShieldCheck aria-hidden="true" className="h-9 w-9 text-[#2b8a72]" />
            <h2 className="mt-4 text-3xl font-black leading-tight">진행자 소개</h2>
            <p className="mt-5 leading-8 text-[#52635e]">
              아이디어를 말로만 다루지 않고, 직접 서비스를 만들며 얻은 기준으로
              함께 봅니다.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-2">
            <div className="rounded-lg border border-black/10 bg-[#f7faf7] p-6">
              <UserRound aria-hidden="true" className="h-5 w-5 text-[#d65a3f]" />
              <h3 className="mt-4 text-xl font-black">개발 경험</h3>
              <p className="mt-3 leading-7 text-[#52635e]">
                이전에 블록체인 개발자로 일했고, 실제 서비스를 만드는 과정의
                시행착오를 겪었습니다.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-[#f7faf7] p-6">
              <Sparkles aria-hidden="true" className="h-5 w-5 text-[#d65a3f]" />
              <h3 className="mt-4 text-xl font-black">직접 만드는 사람</h3>
              <p className="mt-3 leading-7 text-[#52635e]">
                지금도 직접 서비스를 만들고 있습니다. 그래서 아이디어를
                실행 가능한 화면, 기능, 다음 작업으로 좁히는 데 집중합니다.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-[#f7faf7] p-6">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[#2b8a72]" />
              <h3 className="mt-4 text-xl font-black">실무 관점</h3>
              <p className="mt-3 leading-7 text-[#52635e]">
                지금은 보안 회사에서 B2B 영업을 하며, 고객이 실제로 불편해하는
                지점과 서비스가 선택되는 기준을 보고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              신청 전에 확인할 것
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {concernCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-black/10 bg-white p-6 shadow-sm"
              >
                <card.icon aria-hidden="true" className="h-6 w-6 text-[#2b8a72]" />
                <h3 className="mt-5 text-xl font-black">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#52635e]">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              필요한 사람에게만 시간을 씁니다.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#52635e]">
              완성된 기획서보다 중요한 건 실제로 만들고 싶은 마음입니다.
              대신 막연한 호기심만으로는 받지 않습니다.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {targetPeople.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-[#2b8a72]" />
                <p className="mt-4 text-base font-bold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Ban aria-hidden="true" className="h-8 w-8 text-[#d65a3f]" />
            <h2 className="mt-4 text-3xl font-black leading-tight">
              이런 경우에는 맞지 않을 수 있습니다.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {notForPeople.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#d65a3f]/15 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdf0ea]">
                  <Ban aria-hidden="true" className="h-5 w-5 text-[#d65a3f]" />
                </span>
                <p className="mt-5 text-base font-bold leading-7 text-[#43544f]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102c29] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              아이디어를 첫 화면과 작업 목록으로 바꿉니다.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              대화로만 끝내지 않고, Codex로 바로 시도할 수 있는 형태까지
              가져갑니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="overflow-hidden rounded-lg bg-white text-[#13231f] shadow-xl shadow-black/20"
              >
                <div className="h-56 w-full bg-[#eef7f2]">
                  <SoftIllustration type={outcome.illustration} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black leading-7">{outcome.title}</h3>
                  <p className="mt-3 leading-7 text-[#52635e]">{outcome.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              신청 전에 확인해 주세요.
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-black/10 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 text-lg font-black leading-7 marker:hidden">
                  <CircleHelp
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#2b8a72]"
                  />
                  <span>{item.question}</span>
                </summary>
                <p className="mt-4 leading-7 text-[#52635e]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-lg bg-[#173d38] p-8 text-white sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-16">
          <div>
            <ClipboardList
              aria-hidden="true"
              className="h-9 w-9 text-[#f0b35b]"
            />
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              혼자 붙잡고 있던 서비스 아이디어를 함께 시작해볼까요?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/80">
              신청서는 짧게 받습니다. 지금 만들고 싶은 것과 막힌 지점을 남겨주면,
              함께 시작하기 좋은 분께 개별로 연락드립니다.
            </p>
            <div className="mt-8">
              <ApplyButton variant="light" />
            </div>
          </div>
          <div className="min-h-[260px] overflow-hidden rounded-lg bg-white/[0.92]">
            <SoftIllustration type="apply" />
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 text-sm text-[#52635e] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>AI 1O1 오프라인 컨설팅</p>
          <p>영등포구 인근 · 토요일 오전 (협의) · 무료</p>
        </div>
      </footer>
    </main>
  );
}
