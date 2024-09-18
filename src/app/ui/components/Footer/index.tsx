import Link from "next/link";

const links = [
  {
    id: 1,
    title: "ABOUT US",
    links: [
      {
        id: 1,
        title: "Mission",
        href: "/",
      },
      {
        id: 1,
        title: "Mission",
        href: "/",
      },
      {
        id: 2,
        title: "Our Team",
        href: "/",
      },
      {
        id: 3,
        title: "Awards",
        href: "/",
      },
      {
        id: 4,
        title: "Testimonials",
        href: "/",
      },
      {
        id: 5,
        title: "Privacy Policy",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    title: "SERVICES",
    links: [
      {
        id: 1,
        title: "Web Design",
        href: "/",
      },
      {
        id: 2,
        title: "Web Development",
        href: "/",
      },
      {
        id: 3,
        title: "Mobile Development",
        href: "/",
      },
      {
        id: 4,
        title: "UI/UX Design",
        href: "/",
      },
      {
        id: 5,
        title: "Branding Design",
        href: "/",
      },
    ],
  },
  {
    id: 3,
    title: "PORTFOLIO",
    links: [
      {
        id: 1,
        title: "Corporate Websites",
        href: "/",
      },
      {
        id: 2,
        title: "E-Commerce",
        href: "/",
      },
      {
        id: 3,
        title: "Mobile Apps",
        href: "/",
      },
      {
        id: 4,
        title: "Landing Pages",
        href: "/",
      },
      {
        id: 5,
        title: "UI/UX Projects",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-black-warm shadow-[0_1px_4px_0_rgba(25,33,61,0.08)]">
        <div className="px-5 xl:px-[165px]">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:h-[318px]">
            <div className="pt-8 xl:basis-[303px] flex flex-col space-y-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="39"
                viewBox="0 0 145 39"
                fill="none"
              >
                <mask id="path-1-inside-1_1_1177" fill="white">
                  <path d="M5.8437 19.9351C5.45318 19.5446 5.45318 18.9114 5.8437 18.5209L7.73143 16.6332C10.0746 14.29 13.8736 14.29 16.2167 16.6332L18.1044 18.5209C18.495 18.9114 18.495 19.5446 18.1044 19.9351L16.2167 21.8229C13.8736 24.166 10.0746 24.166 7.73143 21.8229L5.8437 19.9351Z" />
                </mask>
                <path
                  d="M5.8437 19.9351C5.45318 19.5446 5.45318 18.9114 5.8437 18.5209L7.73143 16.6332C10.0746 14.29 13.8736 14.29 16.2167 16.6332L18.1044 18.5209C18.495 18.9114 18.495 19.5446 18.1044 19.9351L16.2167 21.8229C13.8736 24.166 10.0746 24.166 7.73143 21.8229L5.8437 19.9351Z"
                  stroke="#CAC9CF"
                  strokeWidth="5"
                  mask="url(#path-1-inside-1_1_1177)"
                />
                <mask id="path-2-inside-2_1_1177" fill="white">
                  <path d="M21.9318 19.9351C21.5413 19.5446 21.5413 18.9114 21.9318 18.5209L23.8196 16.6332C26.1627 14.29 29.9617 14.29 32.3048 16.6332L34.1926 18.5209C34.5831 18.9114 34.5831 19.5446 34.1926 19.9351L32.3048 21.8229C29.9617 24.166 26.1627 24.166 23.8196 21.8229L21.9318 19.9351Z" />
                </mask>
                <path
                  d="M21.9318 19.9351C21.5413 19.5446 21.5413 18.9114 21.9318 18.5209L23.8196 16.6332C26.1627 14.29 29.9617 14.29 32.3048 16.6332L34.1926 18.5209C34.5831 18.9114 34.5831 19.5446 34.1926 19.9351L32.3048 21.8229C29.9617 24.166 26.1627 24.166 23.8196 21.8229L21.9318 19.9351Z"
                  stroke="#CAC9CF"
                  strokeWidth="5"
                  mask="url(#path-2-inside-2_1_1177)"
                />
                <mask id="path-3-inside-3_1_1177" fill="white">
                  <path d="M19.3111 5.05354C19.7016 4.66302 20.3348 4.66302 20.7253 5.05354L22.613 6.94127C24.9562 9.28441 24.9562 13.0834 22.613 15.4266L20.7253 17.3143C20.3348 17.7048 19.7016 17.7048 19.3111 17.3143L17.4234 15.4266C15.0802 13.0834 15.0802 9.28441 17.4234 6.94127L19.3111 5.05354Z" />
                </mask>
                <path
                  d="M19.3111 5.05354C19.7016 4.66302 20.3348 4.66302 20.7253 5.05354L22.613 6.94127C24.9562 9.28441 24.9562 13.0834 22.613 15.4266L20.7253 17.3143C20.3348 17.7048 19.7016 17.7048 19.3111 17.3143L17.4234 15.4266C15.0802 13.0834 15.0802 9.28441 17.4234 6.94127L19.3111 5.05354Z"
                  stroke="#CAC9CF"
                  strokeWidth="5"
                  mask="url(#path-3-inside-3_1_1177)"
                />
                <mask id="path-4-inside-4_1_1177" fill="white">
                  <path d="M19.2054 20.3426C19.5959 19.9521 20.2291 19.9521 20.6196 20.3426L22.5073 22.2303C24.8505 24.5735 24.8505 28.3725 22.5073 30.7156L20.6196 32.6033C20.2291 32.9939 19.5959 32.9939 19.2054 32.6033L17.3176 30.7156C14.9745 28.3725 14.9745 24.5735 17.3176 22.2303L19.2054 20.3426Z" />
                </mask>
                <path
                  d="M19.2054 20.3426C19.5959 19.9521 20.2291 19.9521 20.6196 20.3426L22.5073 22.2303C24.8505 24.5735 24.8505 28.3725 22.5073 30.7156L20.6196 32.6033C20.2291 32.9939 19.5959 32.9939 19.2054 32.6033L17.3176 30.7156C14.9745 28.3725 14.9745 24.5735 17.3176 22.2303L19.2054 20.3426Z"
                  stroke="#CAC9CF"
                  strokeWidth="5"
                  mask="url(#path-4-inside-4_1_1177)"
                />
                <path
                  d="M39.0527 19.1636C39.0527 19.7847 38.7879 20.3514 38.296 21.1275C38.2241 21.2409 38.1445 21.3623 38.0602 21.4909C37.6294 22.1478 37.0748 22.9935 36.7901 23.9337C36.4978 24.8989 36.394 25.9758 36.3058 26.8904C36.2821 27.1369 36.2594 27.3716 36.2346 27.5892C36.1053 28.7198 35.9149 29.5368 35.4696 30.1464C35.0281 30.7509 34.3054 31.186 33.2718 31.66C33.076 31.7498 32.8638 31.8427 32.6413 31.9402C31.803 32.3074 30.8178 32.7388 30.0087 33.3092C29.2008 33.8787 28.6036 34.6785 28.1543 35.2801C28.0799 35.3798 28.0096 35.474 27.943 35.5608C27.4139 36.2509 27.0288 36.6359 26.5272 36.8141C25.7217 37.1002 24.8356 37.1192 23.75 37.029C23.4486 37.004 23.1161 36.968 22.7643 36.9299C21.9482 36.8415 21.0281 36.7419 20.1514 36.7419C19.2746 36.7419 18.3546 36.8415 17.5384 36.9299C17.1866 36.968 16.8541 37.004 16.5527 37.029C15.4671 37.1192 14.581 37.1002 13.7755 36.8141C13.0443 36.5543 12.4456 36.0906 11.7765 35.4549C11.6146 35.3009 11.4403 35.1277 11.2553 34.9439C10.7359 34.4278 10.132 33.8277 9.47816 33.3336C8.82829 32.8425 8.05784 32.4127 7.38336 32.0364C7.15839 31.9109 6.94409 31.7914 6.74851 31.6775C5.89162 31.1786 5.25293 30.7212 4.83309 30.1464C4.35038 29.4856 4.08128 28.6086 3.85943 27.4883C3.80122 27.1944 3.74489 26.8714 3.68585 26.533C3.53938 25.6934 3.37627 24.7583 3.12656 23.9337C2.8728 23.0956 2.4545 22.3184 2.11476 21.6871C2.02633 21.5228 1.94323 21.3684 1.86974 21.2254C1.48322 20.4732 1.25 19.8624 1.25 19.1636C1.25 18.4996 1.54841 17.7575 2.05534 16.8014C2.14617 16.6301 2.24671 16.4474 2.35197 16.2561C2.76679 15.5022 3.25509 14.6148 3.5126 13.7643C3.7982 12.8212 3.90448 11.8614 3.99183 11.0726C4.01667 10.8483 4.03998 10.6378 4.06545 10.4455C4.18836 9.51711 4.36653 8.81938 4.83309 8.18068C5.23902 7.62497 5.85582 7.20801 6.71253 6.74635C6.88412 6.65388 7.07101 6.55721 7.26762 6.4555C7.96502 6.09474 8.78478 5.67068 9.47816 5.14671C10.1692 4.6245 10.796 3.96936 11.3301 3.41109C11.4964 3.23727 11.6537 3.07284 11.8012 2.92474C12.4781 2.24498 13.0677 1.7645 13.7755 1.51305C14.581 1.22689 15.4671 1.20793 16.5527 1.29808C16.8541 1.3231 17.1867 1.3591 17.5385 1.39719C18.3546 1.48554 19.2746 1.58515 20.1514 1.58515C21.0281 1.58515 21.9481 1.48554 22.7642 1.39719C23.1161 1.3591 23.4486 1.3231 23.75 1.29808C24.8356 1.20793 25.7217 1.22689 26.5272 1.51305C27.0049 1.68272 27.3854 2.0769 27.9241 2.81755C27.9874 2.90464 28.0543 2.99892 28.1249 3.09854C28.5757 3.73434 29.1805 4.58727 30.0087 5.1711C30.8538 5.76681 31.9364 6.20788 32.8346 6.57378C33.0442 6.65919 33.2438 6.7405 33.428 6.81873C34.5627 7.30071 35.1621 7.67717 35.4066 8.08549L36.479 7.44335L35.4066 8.08549C35.7585 8.67321 35.9434 9.41775 36.1163 10.426C36.148 10.6112 36.1795 10.8067 36.2123 11.0103C36.3467 11.8456 36.5029 12.8157 36.7901 13.7643C37.0476 14.6148 37.5359 15.5022 37.9508 16.2561C38.056 16.4474 38.1566 16.6301 38.2474 16.8014C38.7543 17.7575 39.0527 18.4996 39.0527 19.1636Z"
                  stroke="#CAC9CF"
                  strokeWidth="2.5"
                />
                <path
                  d="M72.2271 8.90356C72.3449 8.90356 72.458 8.95955 72.5417 9.05934C72.6254 9.15914 72.673 9.29467 72.6741 9.43644V28.7167C72.6741 28.8585 72.6275 28.9945 72.5446 29.0952C72.4616 29.1959 72.349 29.2532 72.2311 29.2544H70.0486C69.9308 29.2532 69.8181 29.1959 69.7352 29.0952C69.6522 28.9945 69.6057 28.8585 69.6057 28.7167V16.1748C69.4339 16.3428 69.2567 16.5043 69.0741 16.6593C68.5547 17.0953 68.0272 17.4634 67.5158 17.8219C67.0044 18.1804 66.6661 18.4614 66.2635 18.7472C65.5096 19.271 64.8532 19.9756 64.3351 20.8172C63.8169 21.6589 63.4481 22.6196 63.2514 23.6399C63.2294 23.7586 63.1742 23.8647 63.0951 23.9405C63.016 24.0163 62.9177 24.0572 62.8165 24.0565H60.7347C60.6336 24.0572 60.5353 24.0163 60.4562 23.9405C60.3771 23.8647 60.3219 23.7586 60.2998 23.6399C60.1032 22.6184 59.734 21.6564 59.2151 20.8138C58.6962 19.9713 58.0388 19.2662 57.2838 18.7423C56.8811 18.4565 56.4784 18.1416 56.0315 17.8171C55.5845 17.4925 54.9925 17.0904 54.4731 16.6544C54.2905 16.5026 54.1134 16.3412 53.9416 16.17V28.7167C53.9416 28.8585 53.895 28.9945 53.8121 29.0952C53.7291 29.1959 53.6165 29.2532 53.4986 29.2544H51.3201C51.2023 29.2532 51.0896 29.1959 51.0067 29.0952C50.9237 28.9945 50.8772 28.8585 50.8772 28.7167V9.44128C50.8772 9.29867 50.9243 9.1619 51.0081 9.06106C51.0919 8.96022 51.2056 8.90356 51.3242 8.90356H53.4785C53.5834 8.90531 53.6845 8.9514 53.764 9.03376C53.8435 9.11613 53.8964 9.22952 53.9134 9.35408C54.0342 10.2939 54.4932 12.4883 56.1724 13.7139C56.6153 14.0288 57.0542 14.3825 57.5375 14.7264C58.0207 15.0704 58.4918 15.3852 58.9509 15.7728C59.8883 16.5225 60.7271 17.4369 61.4394 18.4856C61.4797 18.5471 61.5311 18.5968 61.5897 18.6309C61.6483 18.6651 61.7125 18.6828 61.7776 18.6828C61.8427 18.6828 61.907 18.6651 61.9656 18.6309C62.0242 18.5968 62.0756 18.5471 62.1159 18.4856C62.8267 17.4356 63.6641 16.5195 64.6004 15.7679C65.0796 15.3804 65.5789 15.0316 66.0178 14.7216C66.4567 14.4115 66.948 14.0288 67.3789 13.7139C69.0621 12.5077 69.5211 10.3229 69.6419 9.35408C69.6589 9.22952 69.7118 9.11613 69.7913 9.03376C69.8708 8.9514 69.9719 8.90531 70.0768 8.90356H72.2271Z"
                  fill="#CAC9CF"
                />
                <path
                  d="M95.4617 19.079C95.4617 24.6852 91.0188 29.2544 85.554 29.2544C80.0893 29.2544 75.6464 24.69 75.6464 19.079C75.6464 13.468 80.0893 8.90356 85.554 8.90356C91.0188 8.90356 95.4617 13.468 95.4617 19.079ZM85.554 12.6006C81.81 12.6006 78.765 15.5079 78.765 19.079C78.765 22.6501 81.81 25.5331 85.554 25.5331C89.298 25.5331 92.3471 22.6259 92.3471 19.0596C92.3471 15.4934 89.298 12.6006 85.554 12.6006Z"
                  fill="#CAC9CF"
                />
                <path
                  d="M118.249 19.079C118.249 24.6852 113.584 29.2544 107.846 29.2544C102.108 29.2544 97.4432 24.69 97.4432 19.079C97.4432 13.468 102.108 8.90356 107.846 8.90356C113.584 8.90356 118.249 13.468 118.249 19.079ZM107.846 12.6006C103.915 12.6006 100.714 15.5079 100.714 19.079C100.714 22.6501 103.915 25.5331 107.846 25.5331C111.777 25.5331 114.975 22.6259 114.975 19.0596C114.975 15.4934 111.765 12.6006 107.846 12.6006Z"
                  fill="#CAC9CF"
                />
                <path
                  d="M135.979 18.9288V9.43656C135.979 9.36657 135.99 9.29726 136.013 9.23259C136.035 9.16793 136.068 9.10917 136.109 9.05968C136.15 9.01018 136.199 8.97092 136.253 8.94414C136.307 8.91735 136.365 8.90356 136.423 8.90356H138.611C138.67 8.90356 138.727 8.91735 138.781 8.94414C138.835 8.97092 138.884 9.01018 138.925 9.05968C138.967 9.10917 138.999 9.16793 139.022 9.23259C139.044 9.29726 139.055 9.36657 139.055 9.43656V28.7214C139.055 28.7914 139.044 28.8607 139.022 28.9254C138.999 28.9901 138.967 29.0488 138.925 29.0983C138.884 29.1478 138.835 29.1871 138.781 29.2139C138.727 29.2407 138.67 29.2544 138.611 29.2544H136.443C136.385 29.2544 136.327 29.2407 136.273 29.2139C136.219 29.1871 136.17 29.1478 136.129 29.0983C136.088 29.0488 136.055 28.9901 136.033 28.9254C136.011 28.8607 135.999 28.7914 135.999 28.7214V27.2048C136.001 26.7301 135.913 26.261 135.741 25.8336C135.099 24.2733 133.439 21.3854 129.563 19.6168C127.926 18.8907 126.392 17.8641 125.017 16.5739C124.952 16.5102 124.873 16.47 124.79 16.4582C124.707 16.4464 124.622 16.4634 124.547 16.5072C124.471 16.5509 124.408 16.6197 124.364 16.7054C124.32 16.791 124.297 16.89 124.298 16.9906V28.7214C124.298 28.8628 124.251 28.9984 124.168 29.0983C124.085 29.1983 123.972 29.2544 123.854 29.2544H121.666C121.548 29.2544 121.435 29.1983 121.352 29.0983C121.268 28.9984 121.222 28.8628 121.222 28.7214V9.43656C121.222 9.2952 121.268 9.15963 121.352 9.05968C121.435 8.95972 121.548 8.90356 121.666 8.90356H123.794C123.882 8.90567 123.968 8.93961 124.04 9.00097C124.112 9.06232 124.167 9.14825 124.197 9.24759C124.549 10.3911 126.01 14.093 130.633 16.1572C132.306 16.8914 133.862 17.9649 135.232 19.331C135.296 19.3978 135.375 19.441 135.459 19.4556C135.544 19.4701 135.63 19.4553 135.707 19.413C135.784 19.3706 135.85 19.3024 135.896 19.2166C135.942 19.1308 135.967 19.0309 135.967 18.9288H135.979Z"
                  fill="#CAC9CF"
                />
                <path
                  d="M142.028 27.2194C142.028 26.8167 142.115 26.423 142.278 26.0883C142.442 25.7535 142.674 25.4926 142.946 25.3388C143.218 25.1849 143.517 25.1449 143.805 25.2238C144.094 25.3027 144.358 25.497 144.566 25.7822C144.774 26.0673 144.915 26.4303 144.972 26.8254C145.029 27.2205 144.999 27.6299 144.886 28.0017C144.773 28.3734 144.582 28.6909 144.337 28.9139C144.092 29.137 143.804 29.2555 143.51 29.2545C143.315 29.2545 143.122 29.2018 142.942 29.0995C142.762 28.9972 142.598 28.8472 142.461 28.6581C142.323 28.4691 142.214 28.2447 142.14 27.9978C142.065 27.7509 142.027 27.4864 142.028 27.2194Z"
                  fill="#CAC9CF"
                />
              </svg>

              <div>
                <div className="font-inter text-sm font-normal leading-[22px] text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                  mauris sed ma
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="text-neutral-200 inline-flex px-[18px] py-[15px] items-center space-x-[3px] border-[1px] border-solid border-neutral-200"
                >
                  <div className="inline font-inter text-neutral-300 text-xs leading-[18px] font-semibold tracking-[0.96px]">
                    GET STARTRED{" "}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                  >
                    <path
                      d="M5.74707 0.949219L9.62497 4.82712L5.74707 8.70501"
                      stroke="white"
                      strokeWidth="1.57143"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.62496 4.82715L1.375 4.82715"
                      stroke="white"
                      strokeWidth="1.57143"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="my-[30px] w-full h-px bg-neutral-400 xl:hidden" />
            <div className="w-px h-full hidden xl:block bg-neutral-400" />
            <ul className="grid grid-cols-2 gap-12 xl:grid-cols-3 xl:gap-[72px] xl:pt-8">
              {links.map((link, i) => (
                <li key={i}>
                  <h4 className="text-white text-base font-semibold font-inter leading-[22px] tracking-[0.96px]">
                    {link.title}
                  </h4>
                  <div className="mt-[30px] xl:mt-8">
                    <ul className="grid grid-cols-1 gap-6">
                      {link.links.map((item, i) => (
                        <li key={i} className="col-span-1">
                          <Link
                            href={item.href}
                            className="font-inter text-sm font-normal leading-[22px] text-neutral-300"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mt-[30px] h-px w-full bg-neutral-400 xl:mt-0" />
            <div className="px-8 py-[30px] flex flex-col items-center space-y-4">
              <div className="font-inter text-base leading-6 font-normal text-neutral-600">
                Copyright © 2023 Moon All Rights
              </div>
              <div className="font-inter text-base leading-6 font-normal text-neutral-600">
                {" "}
                All Rights Reserved
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="underline text-neutral-600 font-inter text-base leading-[22px] font-normal"
                >
                  Terms and Condition
                </Link>
                <div className="w-px self-stretch bg-neutral-400" />
                <Link
                  href="/"
                  className="underline text-neutral-600 font-inter text-base leading-[22px] font-normal"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
