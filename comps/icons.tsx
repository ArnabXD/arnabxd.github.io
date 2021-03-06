import { SVGProps } from 'react';
import { useTheme } from 'next-themes';

export function LightTheme(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="prefix__ionicon"
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"Sunny"}</title>
            <path
                fill="currentColor"
                d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"
            />
        </svg>
    )
}


export function DarkTheme(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="prefix__ionicon"
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"Moon"}</title>
            <path
                fill="currentColor"
                d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"
            />
        </svg>
    )
}

export function ToggleIcon() {
    const { theme } = useTheme();
    return theme === "light" ? <DarkTheme /> : <LightTheme />
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="prefix__ionicon"
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"Menu"}</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={48}
                d="M88 152h336M88 256h336M88 360h336"
            />
        </svg>
    )
}


export function DevSvg(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            id="prefix__b52d7e2d-d80f-4111-b6ed-d15502ee1edd"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 711.2 669.7"
            xmlSpace="preserve"
            {...props}
        >
            <style>
                {
                    ".prefix__st1{fill:#e6e6e6}.prefix__st2{opacity:.1;enable-background:new}.prefix__st3{fill:#3f3d56}.prefix__st4{fill:#f2f2f2}.prefix__st5{fill:#2f2e41}.prefix__st6{fill:#ffb8b8}.prefix__st7{fill:#2563eb}"
                }
            </style>
            <path
                d="M601.1 181.5c63.9 87.8 106.9 184 92.2 274.9-15.1 90.9-87.4 176.1-169.4 200-82.5 23.9-174.3-13.3-270.5-54.5-96.2-41.7-196.5-87.4-204-146.8-7.5-59 77.6-132.1 146.3-220.8 68.7-89.1 120.6-193.8 188.9-206.7C453 14.7 537.7 93.7 601.1 181.5z"
                fill="#08bdba"
            />
            <path
                className="prefix__st1"
                d="M484.4 366.7v123.9l19.7 33.8 1.5 2.5h77.8l1.6-160.2z"
            />
            <path
                className="prefix__st2"
                d="M484.4 366.7v123.9l19.7 33.8 1.2-157.7z"
            />
            <path
                className="prefix__st1"
                d="M296.6 363.4v123.9L276.9 521l-1.5 2.6h-77.8L196 363.4z"
            />
            <path
                className="prefix__st2"
                d="M296.6 363.4v123.9L276.9 521l-1.2-157.6z"
            />
            <path
                className="prefix__st1"
                d="M608.6 360.9v7.4H185.8v-10.7l39.3-21.5H574z"
            />
            <path className="prefix__st2" d="M608.6 360.9v7.4H185.8v-10.7z" />
            <path
                className="prefix__st3"
                d="M246.3 398h-18.9l-7.8-5.7h35.3zM246.3 422h-18.9l-7.8-5.8h35.3zM246.3 455.9h-18.9l-7.8-5.8h35.3zM246.3 489.7h-18.9l-7.8-5.7h35.3zM534.7 401.4h18.9l7.8-5.8H526zM534.7 425.3h18.9l7.8-5.8H526zM534.7 459.2h18.9l7.8-5.8H526zM534.7 493h18.9l7.8-5.7H526zM547.5 192.8H388.8c-3.3 0-6 2.8-6 6.3v112.4c0 3.5 2.7 6.3 6 6.3H449l-2.3 15.2s-12.9 7.2-3.8 7.4c9.1.2 51.8 0 51.8 0s8.3 0-4.8-7.6l-2.1-14.9h59.7c3.3 0 6-2.8 6-6.3V199.1c0-3.5-2.6-6.3-6-6.3z"
            />
            <path className="prefix__st4" d="M388.5 199.5h159.3v93.7H388.5z" />
            <ellipse className="prefix__st4" cx={468.1} cy={196.5} rx={1} ry={1.1} />
            <ellipse className="prefix__st4" cx={468.1} cy={309.3} rx={3.8} ry={4} />
            <path
                className="prefix__st3"
                d="M462.2 351.9v2.1H353.7v-1.7l.1-.4 2.7-7.7H460zM503.9 349.8c-.2.9-.9 1.8-2.6 2.7-6 3.2-18.3-.8-18.3-.8s-9.5-1.7-9.5-6.1c.3-.2.5-.4.8-.5 2.5-1.4 11-4.9 25.9.1 1.1.4 2.1 1 2.8 2 .7.6 1.1 1.6.9 2.6z"
            />
            <path
                className="prefix__st2"
                d="M503.9 349.8c-7.4 3-14 3.2-20.8-1.7-2.6-2-5.7-3.1-8.8-3.1 2.5-1.4 11-4.9 25.9.1 1.1.4 2.1 1 2.8 2 .7.7 1.1 1.7.9 2.7z"
            />
            <ellipse
                className="prefix__st4"
                cx={494.6}
                cy={347.2}
                rx={2.6}
                ry={0.8}
            />
            <path className="prefix__st2" d="M462.2 351.9v2.1H353.7v-1.7l.1-.4z" />
            <path
                className="prefix__st5"
                d="M215.7 112.1c-1.1-.1-2.2.2-3.2.7-.9.7-1.5 1.9-2.1 3-2.3 4.3-5.4 8-9.2 10.9-2.7 2.1-6.2 4.7-5.7 8.6.2 1.3.7 2.5 1.3 3.6 2.5 5.3 9.4 9.5 8.7 15.6 2.5-4.4-.8-6.6 1.7-11 1.2-2.1 3.3-4.5 5.1-3.2.6.4 1 1.2 1.6 1.6 1.5.9 3.1-.8 4.4-2.1 4.6-4.3 11.1-3.2 16.8-1.8 2.7.6 5.6 1.5 7.2 4.2 2.1 3.5-2 7.4-3 11.4-.3 1.2.4 2.4 1.5 2.7.2.1.5.1.7.1 1.7-.2 3.7-.3 3.8-1.1 2.1.1 4.8-.2 5.7-2.5.3-.9.4-1.9.4-2.9.3-4 1.9-7.6 3-11.3s1.5-8.2-.3-11.5c-.6-1.1-1.4-2.1-2.3-3-10-10.3-23.3-12-36.1-12z"
            />
            <path
                className="prefix__st6"
                d="M207.7 162.3s2.2 19.3-5.9 20.8 7.3 27.8 7.3 27.8l36.7 4.6-8.8-30.8s-5.9-2.3-2.2-17.7-27.1-4.7-27.1-4.7zM185.4 493.5l2.9 42.4h15.4l-4.4-42.4zM298.3 413.3l2.2 35.4 16.9-7.7-6.6-29.3z"
            />
            <path
                className="prefix__st5"
                d="M174.4 331.5s.7 44.7 5.1 59.4 3.7 15.4 2.9 17.7c-.7 2.3-1.5.8-1.5 4.6s-1.5 64.8 0 70.2-4.4 14.7 0 15.4 24.9 0 25.7-4.6c.7-4.6-5.9-6.2-2.9-9.3s7.3-66.3 7.3-66.3l10.3-44 19.1-23.1h40.3l12.5 50.9s-5.1 14.7-1.5 14.7c3.7 0 25.7 4.6 25.7-12.3 0-17-7.3-67.1-8.8-68.6-1.5-1.5.7-6.9-1.5-9.3-2.2-2.3-27.9-18.5-37.4-21.6s-22.9-6.8-22.9-6.8l-72.4 33zM317.4 434.9s-11-3.9-16.1 7.7c-5.1 11.6-2.9 14.7-2.9 14.7s16.9 6.2 19.8 3.1c1.3-1.3 5.3-1.8 9.5-1.9 6.4-.1 8-9.6 2-11.8-.2-.1-.4-.1-.5-.2-5.9-1.6-11.8-11.6-11.8-11.6z"
            />
            <ellipse
                className="prefix__st6"
                cx={224.2}
                cy={151.9}
                rx={22}
                ry={23.1}
            />
            <path
                className="prefix__st7"
                d="M195.6 192.7s35.9 7.7 44.7-4.6 12.5 34.7 12.5 34.7l4.4 49.3-6.6 27s-34.5 29.3-45.5 31.6c-11 2.3-27.9 3.9-27.9 3.9s5.1-85.6 5.1-87.1 13.3-54.8 13.3-54.8z"
            />
            <path
                className="prefix__st5"
                d="M206.6 178.3s-8-4.8-10.2-.2c-2.2 4.6-22.7 16.2-24.9 16.2-2.2 0 4.4 64 1.5 71.7s-16.9 64-8.8 68.6c8.1 4.6 2.2-4.6 10.3 6.9 8.1 11.6 47.7 11.6 49.9 6.9 2.2-4.6-17.6-39.3-13.9-71.7 3.7-32.4 9.5-77.1 4.4-83.3-5.3-6.1-8.3-15.1-8.3-15.1zM233 183.5l1-3.7s30.5 10.6 32 17.6c1.5 6.9.7 55.5-4.4 59.4-5.1 3.9-12.5 10-7.3 19.3 5.1 9.3 11 19.3 15.4 20s12.5 6.2 10.3 11.6c-2.2 5.4-28.6-4.6-28.6-4.6s-17.6-13.9-16.9-35.5c.7-21.7-1.5-84.1-1.5-84.1z"
            />
            <path
                className="prefix__st6"
                d="M258.7 274.5l-17.6 34.7s-25.7 27.8-11 30.8 22.7-25.4 22.7-25.4l19.1-28.5-13.2-11.6z"
            />
            <path
                className="prefix__st5"
                d="M216.8 118.2c-.9-.1-1.8.1-2.6.5-.7.6-1.3 1.3-1.7 2.1-2 3.1-4.5 5.7-7.5 7.7-2.2 1.5-5.1 3.3-4.7 6.1.2.9.6 1.8 1.1 2.6 2.1 3.8 2.9 8.2 2.3 12.6l6.1-9.3c1-1.5 2.7-3.2 4.1-2.2.5.3.8.9 1.3 1.1 1.2.7 2.5-.6 3.6-1.5 3.7-3.1 9-2.3 13.6-1.3 2.2.4 4.6 1 5.9 2.9 2.1 3.2-.1 7.8 1.2 11.4.7-.5 1.2-1.3 1.3-2.2 1.7.1 3.9-.1 4.6-1.8.2-.7.3-1.3.4-2 .3-2.8 1.6-5.3 2.4-8 .9-2.7 1.2-5.8-.2-8.1-.5-.8-1.2-1.5-1.9-2.1-8.1-7.4-18.9-8.6-29.3-8.5zM258.7 194.3l6.8 1.9s15.9 42.8 12.2 72.1-5.9 23.1-5.9 23.1-5.9-13.9-19.1-10.8l6-86.3zM186.4 530.3c-1.8 2.5-1.4 6.1-3 8.8-1.4 2.3-3.9 3.5-5.6 5.6-.5.7-1 1.4-1.4 2.2-1.6 2.8-2.9 6.3-1.3 9.1 1.2 2.2 3.9 3.1 6.3 3.7 3 .8 6.2 1.4 9.3.8 3.1-.6 6.1-2.6 7.2-5.6.2-.8.5-1.5.8-2.3 1.7-3.5 6.9-3.5 8.6-6.9 1.2-2.4.1-5.3-1-7.8l-3.4-7.5c-1.1-2.5-5.6-1.1-8-1.7-3.1-.7-6.3-1.6-8.5 1.6z"
            />
            <path
                className="prefix__st6"
                d="M161.9 289.9l30.8 50.1s19.1 25.4 24.9 13.9c5.9-11.6-20.5-30.8-20.5-30.8l-19.8-38.6-15.4 5.4z"
            />
            <path
                className="prefix__st5"
                d="M177.3 195.8l-5.9-1.5s-11.7 3.9-14.7 20-.7 81 2.9 81.7c3.7.8 18.1-11.3 20.4-8.7 2.3 2.6-5-10.6-2.8-17.5 2.3-6.9.1-74 .1-74z"
            />
            <g id="prefix__f3c2397c-d780-4cc6-97d8-1503d8277a2c">
                <path
                    id="prefix__ad41612f-86f7-46b2-a964-3a5da7bcf3cf"
                    className="prefix__st7"
                    d="M434.1 230.2h19v4.8h-19z"
                />
                <path
                    id="prefix__b9a0b375-cc2a-4c59-8850-661af54e4f62"
                    className="prefix__st7"
                    d="M512 230.2h6.7v4.8H512z"
                />
                <path
                    id="prefix__e174c2ab-9bc5-41ec-b37c-b06fbf8a9878"
                    className="prefix__st7"
                    d="M525.4 230.2h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__ba2479ac-4c7d-43b4-a028-73b1e20e4002"
                    className="prefix__st7"
                    d="M459.7 230.2H505v4.8h-45.3z"
                />
                <path
                    id="prefix__ac60ef86-00f2-480b-8171-28b6fdfc1958"
                    className="prefix__st7"
                    d="M410.2 261.2h19v4.8h-19z"
                />
                <path
                    id="prefix__b3d8298d-cd65-487a-8b19-4cee946356e7"
                    className="prefix__st7"
                    d="M488.2 261.2h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__ed27f15f-f0c4-4569-8330-a6688f8e356c"
                    className="prefix__st7"
                    d="M501.5 261.2h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__f685c005-adaf-4d60-acda-005b037d82a6"
                    className="prefix__st7"
                    d="M435.9 261.2h45.3v4.8h-45.3z"
                />
                <path
                    id="prefix__eca7c7fc-83f8-48ca-a588-6606db47af3f"
                    className="prefix__st7"
                    d="M488.5 240.9h19v4.8h-19z"
                />
                <path
                    id="prefix__a71b5b2f-f8b9-481d-a301-5e3357e5fe42"
                    className="prefix__st7"
                    d="M514.2 240.9h19v4.8h-19z"
                />
                <path
                    id="prefix__abb3a25a-f854-41fc-8391-e6ad9fbe2417"
                    className="prefix__st7"
                    d="M410.2 240.9h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__add2b425-b775-4eb5-9c25-8c4c14f957c9"
                    className="prefix__st7"
                    d="M423.6 240.9h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__b7159612-3b84-4b0b-a885-612eaab04c06"
                    className="prefix__st7"
                    d="M436.9 240.9h45.3v4.8h-45.3z"
                />
                <path
                    id="prefix__edfc7301-4de5-47dc-80e2-1ae2da982d6d"
                    className="prefix__st7"
                    d="M449.2 251.3h19v4.8h-19z"
                />
                <path
                    id="prefix__e1009f91-6275-4375-80fa-0d778e331fdc"
                    className="prefix__st7"
                    d="M423.6 251.3h19v4.8h-19z"
                />
                <path
                    id="prefix__a060fb9f-1f1a-4862-9a69-16dd49199e18"
                    className="prefix__st7"
                    d="M410.2 251.3h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__b6754d5f-104f-449c-b9a9-cf9ac82bf5fe"
                    className="prefix__st7"
                    d="M526.4 251.3h6.7v4.8h-6.7z"
                />
                <path
                    id="prefix__e6ed1ccd-2cfd-450f-a339-07df3a1ee6bb"
                    className="prefix__st7"
                    d="M474.5 251.3h45.3v4.8h-45.3z"
                />
            </g>
        </svg>
    )
}

export function Loader(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
        viewBox="0 0 24 24"
        {...props}
      >
        <path fill="currentColor" d="M12 4V2A10 10 0 002 12h2a8 8 0 018-8z" />
      </svg>
    )
  }