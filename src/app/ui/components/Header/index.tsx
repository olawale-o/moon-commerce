import Link from "next/link";

const links = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header>
      <nav>
        <div className="p-5 xl:px-[165px] xl:py-7">
          <div className="flex justify-between">
            <div className="xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M1 1.10352H17"
                  stroke="#595667"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 14.8965H17"
                  stroke="#595667"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H17"
                  stroke="#595667"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="34"
                viewBox="0 0 126 34"
                fill="none"
              >
                <mask id="path-1-inside-1_1_903" fill="white">
                  <path d="M5.40327 17.7628C5.01275 17.3722 5.01275 16.7391 5.40327 16.3486L6.37148 15.3804C8.71462 13.0372 12.5136 13.0372 14.8568 15.3804L15.825 16.3486C16.2155 16.7391 16.2155 17.3722 15.825 17.7628L14.8568 18.731C12.5136 21.0741 8.71462 21.0741 6.37148 18.731L5.40327 17.7628Z" />
                </mask>
                <path
                  d="M5.40327 17.7628C5.01275 17.3722 5.01275 16.7391 5.40327 16.3486L6.37148 15.3804C8.71462 13.0372 12.5136 13.0372 14.8568 15.3804L15.825 16.3486C16.2155 16.7391 16.2155 17.3722 15.825 17.7628L14.8568 18.731C12.5136 21.0741 8.71462 21.0741 6.37148 18.731L5.40327 17.7628Z"
                  stroke="#3A3845"
                  strokeWidth="4"
                  mask="url(#path-1-inside-1_1_903)"
                />
                <mask id="path-2-inside-2_1_903" fill="white">
                  <path d="M19.3281 17.7628C18.9376 17.3722 18.9376 16.7391 19.3281 16.3486L20.2963 15.3804C22.6394 13.0372 26.4384 13.0372 28.7816 15.3804L29.7498 16.3486C30.1403 16.7391 30.1403 17.3722 29.7498 17.7628L28.7816 18.731C26.4384 21.0741 22.6394 21.0741 20.2963 18.731L19.3281 17.7628Z" />
                </mask>
                <path
                  d="M19.3281 17.7628C18.9376 17.3722 18.9376 16.7391 19.3281 16.3486L20.2963 15.3804C22.6394 13.0372 26.4384 13.0372 28.7816 15.3804L29.7498 16.3486C30.1403 16.7391 30.1403 17.3722 29.7498 17.7628L28.7816 18.731C26.4384 21.0741 22.6394 21.0741 20.2963 18.731L19.3281 17.7628Z"
                  stroke="#3A3845"
                  strokeWidth="4"
                  mask="url(#path-2-inside-2_1_903)"
                />
                <mask id="path-3-inside-3_1_903" fill="white">
                  <path d="M16.8691 4.8824C17.2596 4.49188 17.8928 4.49188 18.2833 4.8824L19.2515 5.8506C21.5946 8.19375 21.5946 11.9927 19.2515 14.3359L18.2833 15.3041C17.8928 15.6946 17.2596 15.6946 16.8691 15.3041L15.9009 14.3359C13.5577 11.9927 13.5577 8.19375 15.9009 5.8506L16.8691 4.8824Z" />
                </mask>
                <path
                  d="M16.8691 4.8824C17.2596 4.49188 17.8928 4.49188 18.2833 4.8824L19.2515 5.8506C21.5946 8.19375 21.5946 11.9927 19.2515 14.3359L18.2833 15.3041C17.8928 15.6946 17.2596 15.6946 16.8691 15.3041L15.9009 14.3359C13.5577 11.9927 13.5577 8.19375 15.9009 5.8506L16.8691 4.8824Z"
                  stroke="#3A3845"
                  strokeWidth="4"
                  mask="url(#path-3-inside-3_1_903)"
                />
                <mask id="path-4-inside-4_1_903" fill="white">
                  <path d="M16.7779 18.1153C17.1684 17.7248 17.8016 17.7248 18.1921 18.1153L19.1603 19.0835C21.5034 21.4267 21.5034 25.2257 19.1603 27.5688L18.1921 28.537C17.8016 28.9275 17.1684 28.9275 16.7779 28.537L15.8097 27.5688C13.4665 25.2257 13.4665 21.4267 15.8097 19.0835L16.7779 18.1153Z" />
                </mask>
                <path
                  d="M16.7779 18.1153C17.1684 17.7248 17.8016 17.7248 18.1921 18.1153L19.1603 19.0835C21.5034 21.4267 21.5034 25.2257 19.1603 27.5688L18.1921 28.537C17.8016 28.9275 17.1684 28.9275 16.7779 28.537L15.8097 27.5688C13.4665 25.2257 13.4665 21.4267 15.8097 19.0835L16.7779 18.1153Z"
                  stroke="#3A3845"
                  strokeWidth="4"
                  mask="url(#path-4-inside-4_1_903)"
                />
                <path
                  d="M34.1328 17C34.1328 17.5625 33.8921 18.07 33.4651 18.7436C33.4017 18.8436 33.332 18.95 33.2584 19.0623C32.8854 19.6314 32.4136 20.3512 32.171 21.1523C31.9207 21.979 31.8318 22.8996 31.7555 23.6906C31.7348 23.9054 31.715 24.1106 31.6931 24.3018C31.5811 25.2819 31.4148 26.0079 31.0158 26.5541C30.6202 27.0957 29.9773 27.4795 29.0816 27.8903C28.9095 27.9692 28.724 28.0505 28.5301 28.1354C27.805 28.453 26.9631 28.8219 26.2704 29.3102C25.5828 29.7949 25.0748 30.4749 24.6853 30.9963C24.6204 31.0831 24.5588 31.1655 24.5003 31.2419C24.0415 31.8403 23.6957 32.1911 23.2373 32.3539C22.5234 32.6076 21.7423 32.6227 20.7994 32.5444C20.5345 32.5224 20.2443 32.491 19.9383 32.4579C19.2338 32.3816 18.4458 32.2962 17.6915 32.2962C16.9372 32.2962 16.1492 32.3816 15.4447 32.4579C15.1387 32.491 14.8485 32.5224 14.5836 32.5444C13.6407 32.6227 12.8596 32.6076 12.1456 32.3539C11.4965 32.1233 10.9682 31.7126 10.3865 31.1597C10.2438 31.0241 10.0913 30.8726 9.93013 30.7124C9.48145 30.2666 8.9653 29.7537 8.40426 29.3297C7.84679 28.9085 7.18783 28.5408 6.60505 28.2157C6.40913 28.1064 6.22182 28.0019 6.04987 27.9018C5.30649 27.469 4.74105 27.066 4.36711 26.5541C3.9382 25.967 3.70263 25.1929 3.51019 24.2211C3.45905 23.9629 3.40987 23.6809 3.35852 23.3865C3.23207 22.6616 3.09243 21.861 2.87783 21.1523C2.66087 20.4358 2.30428 19.7731 2.01043 19.2269C1.93326 19.0835 1.86042 18.9481 1.79557 18.8219C1.45926 18.1675 1.25012 17.6247 1.25012 17C1.25012 16.4031 1.51774 15.7451 1.9567 14.9171C2.03663 14.7664 2.1246 14.6064 2.21637 14.4396C2.57516 13.7874 2.99186 13.03 3.21196 12.3031C3.4567 11.4949 3.54755 10.675 3.62313 9.99283C3.64481 9.79724 3.66522 9.61297 3.68765 9.44355C3.79462 8.63562 3.95112 8.01527 4.36711 7.44578C4.72993 6.9491 5.27785 6.58107 6.02108 6.18056C6.17199 6.09924 6.33546 6.01467 6.50679 5.92602C7.10981 5.61404 7.81035 5.25161 8.40426 4.8028C8.9965 4.35525 9.53208 3.7955 9.99376 3.313C10.1387 3.16149 10.2764 3.01761 10.4062 2.8872C10.9943 2.29668 11.5152 1.86994 12.1456 1.64597C12.8596 1.39234 13.6407 1.37718 14.5836 1.45546C14.8485 1.47746 15.1387 1.50889 15.4447 1.54202C16.1492 1.61832 16.9372 1.70365 17.6915 1.70365C18.4458 1.70365 19.2337 1.61832 19.9383 1.54202C20.2442 1.50889 20.5345 1.47746 20.7994 1.45546C21.7423 1.37718 22.5234 1.39234 23.2373 1.64597C23.6766 1.80202 24.0186 2.1627 24.4851 2.80404C24.5408 2.88061 24.5993 2.96304 24.6608 3.04978C25.0519 3.60099 25.5661 4.32589 26.2704 4.82232C26.9932 5.33188 27.9185 5.70893 28.6957 6.02568C28.8784 6.10011 29.0529 6.17122 29.2146 6.23992C30.194 6.65591 30.7382 6.99028 30.9654 7.36964C31.2785 7.89251 31.4404 8.5503 31.5901 9.42359C31.6179 9.58545 31.6453 9.75574 31.6738 9.93262C31.7901 10.6554 31.9242 11.488 32.171 12.3031C32.3911 13.03 32.8078 13.7874 33.1666 14.4396C33.2584 14.6064 33.3463 14.7664 33.4263 14.9171C33.8652 15.745 34.1328 16.4031 34.1328 17Z"
                  stroke="#3A3845"
                  strokeWidth="2"
                />
                <path
                  d="M62.7637 8.11963C62.8657 8.11962 62.9636 8.16808 63.0361 8.25446C63.1085 8.34083 63.1497 8.45813 63.1506 8.58084V25.2683C63.1506 25.391 63.1103 25.5087 63.0385 25.5959C62.9667 25.683 62.8692 25.7326 62.7672 25.7337H60.8782C60.7762 25.7326 60.6787 25.683 60.6069 25.5959C60.5351 25.5087 60.4948 25.391 60.4948 25.2683V14.4131C60.3461 14.5584 60.1928 14.6982 60.0348 14.8323C59.5852 15.2097 59.1286 15.5283 58.686 15.8386C58.2434 16.1489 57.9506 16.3921 57.6021 16.6394C56.9496 17.0928 56.3815 17.7026 55.9331 18.4311C55.4846 19.1596 55.1654 19.9911 54.9952 20.8742C54.9761 20.977 54.9283 21.0688 54.8598 21.1344C54.7914 21.2 54.7063 21.2354 54.6187 21.2348H52.8169C52.7294 21.2354 52.6443 21.2 52.5758 21.1344C52.5073 21.0688 52.4596 20.977 52.4405 20.8742C52.2703 19.99 51.9507 19.1574 51.5016 18.4282C51.0526 17.6989 50.4836 17.0886 49.83 16.6352C49.4815 16.3879 49.133 16.1153 48.7461 15.8344C48.3593 15.5535 47.8469 15.2055 47.3973 14.8281C47.2393 14.6968 47.086 14.557 46.9373 14.4089V25.2683C46.9373 25.391 46.897 25.5087 46.8252 25.5959C46.7534 25.683 46.6559 25.7326 46.5539 25.7337H44.6684C44.5664 25.7326 44.4689 25.683 44.3971 25.5959C44.3253 25.5087 44.285 25.391 44.285 25.2683V8.58503C44.285 8.4616 44.3258 8.34322 44.3983 8.25594C44.4709 8.16866 44.5693 8.11963 44.6719 8.11963H46.5365C46.6273 8.12114 46.7148 8.16103 46.7836 8.23232C46.8524 8.30361 46.8982 8.40175 46.9129 8.50956C47.0175 9.32297 47.4148 11.2223 48.8681 12.2831C49.2515 12.5556 49.6314 12.8617 50.0496 13.1594C50.4678 13.4571 50.8756 13.7296 51.2729 14.065C52.0843 14.714 52.8103 15.5054 53.4268 16.413C53.4617 16.4662 53.5062 16.5093 53.5569 16.5388C53.6076 16.5684 53.6632 16.5838 53.7196 16.5838C53.7759 16.5838 53.8315 16.5684 53.8822 16.5388C53.9329 16.5093 53.9774 16.4662 54.0123 16.413C54.6275 15.5042 55.3523 14.7114 56.1627 14.0609C56.5774 13.7254 57.0096 13.4235 57.3895 13.1552C57.7694 12.8869 58.1946 12.5556 58.5675 12.2831C60.0243 11.2391 60.4217 9.34813 60.5262 8.50956C60.5409 8.40175 60.5867 8.30361 60.6555 8.23232C60.7243 8.16103 60.8118 8.12114 60.9026 8.11963H62.7637Z"
                  fill="#3A3845"
                />
                <path
                  d="M82.8738 16.9266C82.8738 21.7789 79.0284 25.7337 74.2985 25.7337C69.5687 25.7337 65.7233 21.7831 65.7233 16.9266C65.7233 12.0702 69.5687 8.11963 74.2985 8.11963C79.0284 8.11963 82.8738 12.0702 82.8738 16.9266ZM74.2985 11.3195C71.058 11.3195 68.4225 13.8358 68.4225 16.9266C68.4225 20.0175 71.058 22.5128 74.2985 22.5128C77.539 22.5128 80.1781 19.9965 80.1781 16.9099C80.1781 13.8232 77.539 11.3195 74.2985 11.3195Z"
                  fill="#3A3845"
                />
                <path
                  d="M102.597 16.9266C102.597 21.7789 98.5592 25.7337 93.5929 25.7337C88.6266 25.7337 84.5889 21.7831 84.5889 16.9266C84.5889 12.0702 88.6266 8.11963 93.5929 8.11963C98.5592 8.11963 102.597 12.0702 102.597 16.9266ZM93.5929 11.3195C90.1904 11.3195 87.4193 13.8358 87.4193 16.9266C87.4193 20.0175 90.1904 22.5128 93.5929 22.5128C96.9954 22.5128 99.7627 19.9965 99.7627 16.9099C99.7627 13.8232 96.9842 11.3195 93.5929 11.3195Z"
                  fill="#3A3845"
                />
                <path
                  d="M117.942 16.7966V8.58095C117.942 8.52037 117.952 8.46038 117.971 8.40441C117.991 8.34844 118.019 8.29758 118.055 8.25475C118.09 8.21191 118.133 8.17793 118.179 8.15474C118.226 8.13156 118.276 8.11963 118.326 8.11963H120.22C120.271 8.11963 120.321 8.13156 120.368 8.15474C120.414 8.17793 120.457 8.21191 120.492 8.25475C120.528 8.29758 120.556 8.34844 120.576 8.40441C120.595 8.46038 120.605 8.52037 120.605 8.58095V25.2723C120.605 25.3329 120.595 25.3929 120.576 25.4489C120.556 25.5049 120.528 25.5557 120.492 25.5985C120.457 25.6414 120.414 25.6754 120.368 25.6985C120.321 25.7217 120.271 25.7337 120.22 25.7337H118.344C118.293 25.7337 118.243 25.7217 118.197 25.6985C118.15 25.6754 118.108 25.6414 118.072 25.5985C118.036 25.5557 118.008 25.5049 117.989 25.4489C117.969 25.3929 117.96 25.3329 117.96 25.2723V23.9597C117.961 23.5488 117.885 23.1428 117.736 22.7728C117.18 21.4224 115.744 18.9229 112.389 17.3922C110.972 16.7636 109.645 15.8752 108.454 14.7584C108.398 14.7033 108.33 14.6686 108.258 14.6583C108.186 14.6481 108.113 14.6628 108.047 14.7007C107.982 14.7386 107.927 14.7981 107.889 14.8722C107.851 14.9464 107.831 15.032 107.832 15.1191V25.2723C107.832 25.3947 107.792 25.512 107.72 25.5985C107.648 25.6851 107.55 25.7337 107.448 25.7337H105.554C105.452 25.7337 105.354 25.6851 105.282 25.5985C105.21 25.512 105.169 25.3947 105.169 25.2723V8.58095C105.169 8.4586 105.21 8.34126 105.282 8.25475C105.354 8.16823 105.452 8.11963 105.554 8.11963H107.395C107.472 8.12145 107.546 8.15083 107.608 8.20393C107.671 8.25703 107.718 8.33141 107.745 8.41739C108.049 9.40713 109.314 12.6112 113.315 14.3978C114.763 15.0333 116.11 15.9624 117.296 17.1447C117.351 17.2026 117.42 17.24 117.492 17.2526C117.565 17.2652 117.64 17.2524 117.707 17.2157C117.774 17.179 117.83 17.12 117.87 17.0458C117.91 16.9715 117.931 16.885 117.932 16.7966H117.942Z"
                  fill="#3A3845"
                />
                <path
                  d="M123.177 23.9723C123.177 23.6238 123.253 23.2831 123.394 22.9933C123.536 22.7036 123.737 22.4778 123.972 22.3446C124.207 22.2114 124.466 22.1768 124.716 22.2451C124.965 22.3134 125.195 22.4816 125.374 22.7284C125.554 22.9751 125.676 23.2894 125.726 23.6313C125.775 23.9733 125.749 24.3276 125.651 24.6494C125.553 24.9712 125.388 25.246 125.176 25.439C124.964 25.632 124.715 25.7346 124.461 25.7337C124.292 25.7337 124.125 25.6882 123.969 25.5996C123.813 25.511 123.671 25.3812 123.552 25.2176C123.433 25.054 123.339 24.8597 123.274 24.6461C123.21 24.4324 123.177 24.2034 123.177 23.9723Z"
                  fill="#3A3845"
                />
              </svg>
            </Link>

            <div className="hidden xl:flex mx-auto space-x-[60px]">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="font-inter text-sm leading-[22px] font-normal"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex space-x-6">
              <div className="hidden space-x-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_592)">
                      <path
                        d="M18.5 18.5L14.1034 14.1034M1.5 8.82759C1.5 4.78067 4.78067 1.5 8.82759 1.5C12.8745 1.5 16.1552 4.78067 16.1552 8.82759C16.1552 12.8745 12.8745 16.1552 8.82759 16.1552C4.78067 16.1552 1.5 12.8745 1.5 8.82759Z"
                        stroke="#595667"
                        strokeWidth="1.59375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_592">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.3125 9C16.3125 13.0386 13.0386 16.3125 9 16.3125V18C13.9706 18 18 13.9706 18 9H16.3125ZM9 16.3125C4.96142 16.3125 1.6875 13.0386 1.6875 9H0C0 13.9706 4.02943 18 9 18V16.3125ZM1.6875 9C1.6875 4.96142 4.96142 1.6875 9 1.6875V0C4.02943 0 0 4.02943 0 9H1.6875ZM9 1.6875C13.0386 1.6875 16.3125 4.96142 16.3125 9H18C18 4.02943 13.9706 0 9 0V1.6875Z"
                      fill="#595667"
                    />
                    <path
                      d="M10.6875 6.75C10.6875 7.68195 9.93195 8.4375 9 8.4375V10.125C10.864 10.125 12.375 8.61401 12.375 6.75H10.6875ZM9 8.4375C8.06805 8.4375 7.3125 7.68195 7.3125 6.75H5.625C5.625 8.61401 7.13599 10.125 9 10.125V8.4375ZM7.3125 6.75C7.3125 5.81802 8.06805 5.0625 9 5.0625V3.375C7.13599 3.375 5.625 4.88604 5.625 6.75H7.3125ZM9 5.0625C9.93195 5.0625 10.6875 5.81802 10.6875 6.75H12.375C12.375 4.88604 10.864 3.375 9 3.375V5.0625Z"
                      fill="#595667"
                    />
                    <path
                      d="M2.94949 14.0847C2.65107 14.4425 2.69929 14.9747 3.05718 15.273C3.41509 15.5715 3.94714 15.5232 4.24556 15.1653L2.94949 14.0847ZM13.7552 15.1653C14.0536 15.5232 14.5857 15.5715 14.9436 15.273C15.3014 14.9747 15.3497 14.4425 15.0512 14.0847L13.7552 15.1653ZM4.24556 15.1653C5.3819 13.8025 7.08974 12.9375 9.00044 12.9375V11.25C6.56803 11.25 4.39271 12.3537 2.94949 14.0847L4.24556 15.1653ZM9.00044 12.9375C10.911 12.9375 12.6189 13.8025 13.7552 15.1653L15.0512 14.0847C13.6081 12.3537 11.4328 11.25 9.00044 11.25V12.9375Z"
                      fill="#595667"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99413 4.41129C8.29472 2.50823 5.46079 1.99631 3.33149 3.73894C1.2022 5.48158 0.902424 8.39516 2.57457 10.4563L9.99413 17.3275L17.4137 10.4563C19.086 8.39516 18.8228 5.46326 16.6568 3.73894C14.4909 2.01464 11.6937 2.50823 9.99413 4.41129Z"
                      stroke="#595667"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.98388 4.54098H18.5578L16.6253 12.7538C16.3744 13.8201 15.4229 14.5738 14.3274 14.5738H9.45677C8.38561 14.5738 7.44875 13.8526 7.17466 12.8172L4.98388 4.54098ZM4.98388 4.54098L4.09863 1H1.44287"
                  stroke="#595667"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.64066 18.9998C8.29255 18.9998 8.821 18.4714 8.821 17.8195C8.821 17.1676 8.29255 16.6392 7.64066 16.6392C6.98878 16.6392 6.46033 17.1676 6.46033 17.8195C6.46033 18.4714 6.98878 18.9998 7.64066 18.9998Z"
                  fill="#595667"
                />
                <path
                  d="M15.9036 18.9998C16.5555 18.9998 17.0839 18.4714 17.0839 17.8195C17.0839 17.1676 16.5555 16.6392 15.9036 16.6392C15.2517 16.6392 14.7233 17.1676 14.7233 17.8195C14.7233 18.4714 15.2517 18.9998 15.9036 18.9998Z"
                  fill="#595667"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
