import Link from "next/link";
import Image from "next/image";
import { NewsLetter } from "./ui/components/Newsletter";
import "./page.css";
import { CarouselSliderItems } from "./ui/components/CarouselSelider";

const items = [
  { asset: "/assets/table_ware.png", name: "TABLEWARE" },
  { asset: "/assets/home_decor.png", name: "HOME DECOR" },
  { asset: "/assets/holiday.png", name: "HOLIDAY" },
  { asset: "/assets/collection.png", name: "COLLECTION" },
];
const bestSelling = [
  {
    id: 1,
    name: "Small Ecru Ceramic Compote",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_1.png",
  },
  {
    id: 2,
    name: "Warrick White Vase 14",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_2.png",
  },
  {
    id: 3,
    name: "Porcelain Dinner Plate",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_3.png",
  },
  {
    id: 4,
    name: "Warrick White Vase 20",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_4.png",
  },
  {
    id: 5,
    name: "Rounded Dual Handled Vase",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_5.png",
  },
  {
    id: 6,
    name: "Marin White Dinner Plate",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_6.png",
  },
  {
    id: 7,
    name: "Tall Cream Ceramic Vase",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_7.png",
  },
  {
    id: 8,
    name: "Luana Bowl",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/seller_8.png",
  },
];

const arrivals = [
  {
    id: 1,
    name: "Porcelain Dinner Plate",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/plate_1.png",
  },
  {
    id: 2,
    name: "Ophelia Matte Natural  Vase",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/plate_2.png",
  },
  {
    id: 3,
    name: "Porcelain Dinner Plate",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/plate_3.png",
  },
  {
    id: 4,
    name: "Luana Bowl",
    price: 49.0,
    summary: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    asset: "/assets/plate_4.png",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="w-full">
        <div className="home-hero h-dvh w-full xl:h-[642px] xl:ps-[165px] grid grid-cols-1 xl:grid-cols-4">
          <div className="bg-[#826F66] lg:w-[420px] row-start-8 lg:row-start-1 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="48"
                viewBox="0 0 52 48"
                fill="none"
              >
                <mask id="path-1-inside-1_1_923" fill="white">
                  <path d="M8.06526 24.7872C7.67474 24.3967 7.67474 23.7635 8.06526 23.373L11.6048 19.8334C13.948 17.4903 17.747 17.4903 20.0901 19.8334L23.6297 23.373C24.0202 23.7635 24.0202 24.3967 23.6297 24.7872L20.0901 28.3268C17.747 30.6699 13.948 30.6699 11.6048 28.3268L8.06526 24.7872Z" />
                </mask>
                <path
                  d="M8.06526 24.7872C7.67474 24.3967 7.67474 23.7635 8.06526 23.373L11.6048 19.8334C13.948 17.4903 17.747 17.4903 20.0901 19.8334L23.6297 23.373C24.0202 23.7635 24.0202 24.3967 23.6297 24.7872L20.0901 28.3268C17.747 30.6699 13.948 30.6699 11.6048 28.3268L8.06526 24.7872Z"
                  stroke="white"
                  strokeWidth="5"
                  mask="url(#path-1-inside-1_1_923)"
                />
                <mask id="path-2-inside-2_1_923" fill="white">
                  <path d="M28.0404 24.7872C27.6498 24.3967 27.6498 23.7635 28.0404 23.373L31.5799 19.8334C33.9231 17.4903 37.7221 17.4903 40.0652 19.8334L43.6048 23.373C43.9953 23.7635 43.9953 24.3967 43.6048 24.7872L40.0652 28.3268C37.7221 30.6699 33.9231 30.6699 31.5799 28.3268L28.0404 24.7872Z" />
                </mask>
                <path
                  d="M28.0404 24.7872C27.6498 24.3967 27.6498 23.7635 28.0404 23.373L31.5799 19.8334C33.9231 17.4903 37.7221 17.4903 40.0652 19.8334L43.6048 23.373C43.9953 23.7635 43.9953 24.3967 43.6048 24.7872L40.0652 28.3268C37.7221 30.6699 33.9231 30.6699 31.5799 28.3268L28.0404 24.7872Z"
                  stroke="white"
                  strokeWidth="5"
                  mask="url(#path-2-inside-2_1_923)"
                />
                <mask id="path-3-inside-3_1_923" fill="white">
                  <path d="M25.128 6.31038C25.5185 5.91985 26.1517 5.91985 26.5422 6.31038L30.0818 9.84995C32.4249 12.1931 32.4249 15.9921 30.0818 18.3352L26.5422 21.8748C26.1517 22.2653 25.5185 22.2653 25.128 21.8748L21.5884 18.3352C19.2453 15.9921 19.2453 12.1931 21.5884 9.84995L25.128 6.31038Z" />
                </mask>
                <path
                  d="M25.128 6.31038C25.5185 5.91985 26.1517 5.91985 26.5422 6.31038L30.0818 9.84995C32.4249 12.1931 32.4249 15.9921 30.0818 18.3352L26.5422 21.8748C26.1517 22.2653 25.5185 22.2653 25.128 21.8748L21.5884 18.3352C19.2453 15.9921 19.2453 12.1931 21.5884 9.84995L25.128 6.31038Z"
                  stroke="white"
                  strokeWidth="5"
                  mask="url(#path-3-inside-3_1_923)"
                />
                <mask id="path-4-inside-4_1_923" fill="white">
                  <path d="M24.997 25.293C25.3875 24.9025 26.0207 24.9025 26.4112 25.293L29.9508 28.8326C32.2939 31.1758 32.2939 34.9747 29.9508 37.3179L26.4112 40.8575C26.0207 41.248 25.3875 41.248 24.997 40.8575L21.4574 37.3179C19.1143 34.9747 19.1143 31.1758 21.4574 28.8326L24.997 25.293Z" />
                </mask>
                <path
                  d="M24.997 25.293C25.3875 24.9025 26.0207 24.9025 26.4112 25.293L29.9508 28.8326C32.2939 31.1758 32.2939 34.9747 29.9508 37.3179L26.4112 40.8575C26.0207 41.248 25.3875 41.248 24.997 40.8575L21.4574 37.3179C19.1143 34.9747 19.1143 31.1758 21.4574 28.8326L24.997 25.293Z"
                  stroke="white"
                  strokeWidth="5"
                  mask="url(#path-4-inside-4_1_923)"
                />
                <path
                  d="M49.7697 24C49.7697 24.863 49.3983 25.6296 48.7832 26.6001C48.6896 26.7476 48.5877 26.9032 48.4809 27.0663C47.9454 27.8837 47.2869 28.889 46.9475 30.01C46.5943 31.1764 46.4692 32.4711 46.3598 33.6043C46.3297 33.9155 46.3008 34.2146 46.2687 34.4954C46.1076 35.9047 45.8657 36.9889 45.2628 37.8143C44.665 38.6327 43.7036 39.1994 42.416 39.7899C42.1632 39.9058 41.8928 40.0243 41.6118 40.1475C40.5731 40.6027 39.3894 41.1213 38.4127 41.8099C37.4528 42.4865 36.744 43.4346 36.1837 44.184C36.0897 44.3098 35.9998 44.43 35.9136 44.5424C35.2536 45.4032 34.7297 45.9461 34.0173 46.1992C32.9554 46.5764 31.8029 46.5954 30.443 46.4824C30.0539 46.4501 29.6321 46.4044 29.19 46.3565C28.1836 46.2475 27.0718 46.127 26 46.127C24.9282 46.127 23.8164 46.2475 22.81 46.3565C22.3679 46.4044 21.9461 46.4501 21.557 46.4824C20.1971 46.5954 19.0446 46.5764 17.9827 46.1992C17.0148 45.8553 16.2345 45.2447 15.3939 44.446C15.1835 44.246 14.9611 44.025 14.7275 43.7928C14.086 43.1554 13.3602 42.4342 12.5662 41.8343C11.7778 41.2384 10.8501 40.7209 10.0165 40.2558C9.73281 40.0975 9.45999 39.9453 9.20726 39.7981C8.137 39.175 7.2974 38.5812 6.73719 37.8143C6.09685 36.9377 5.75295 35.7935 5.47594 34.3946C5.40085 34.0154 5.32936 33.6055 5.25513 33.1799C5.07449 32.1441 4.87762 31.0153 4.57322 30.01C4.26798 29.002 3.7687 28.0737 3.34774 27.2911C3.23562 27.0826 3.12905 26.8845 3.03319 26.6979C2.54677 25.7514 2.23035 24.9408 2.23035 24C2.23035 23.0941 2.63529 22.1143 3.26543 20.9257C3.38309 20.7038 3.51147 20.4703 3.64458 20.2283C4.15859 19.2936 4.74307 18.2309 5.05253 17.2089C5.39809 16.0677 5.52586 14.9156 5.63422 13.9386C5.66569 13.6548 5.69553 13.3858 5.72859 13.1361C5.88335 11.9671 6.113 11.0402 6.73719 10.1857C7.28349 9.43781 8.1012 8.89376 9.17127 8.31712C9.39322 8.19752 9.63158 8.07417 9.87996 7.94564C10.7435 7.49878 11.7282 6.98919 12.5662 6.35594C13.4027 5.72387 14.1554 4.93725 14.8161 4.24679C15.0264 4.02711 15.2273 3.81716 15.4186 3.62502C16.267 2.77301 17.0382 2.13636 17.9827 1.80081C19.0446 1.42356 20.1971 1.4046 21.557 1.51751C21.9461 1.54982 22.3679 1.59552 22.8101 1.64342C23.8165 1.75245 24.9282 1.8729 26 1.8729C27.0718 1.8729 28.1836 1.75245 29.1899 1.64342C29.6321 1.59552 30.0539 1.54982 30.443 1.51751C31.8029 1.4046 32.9554 1.42356 34.0173 1.80081C34.7057 2.04538 35.2251 2.60671 35.8947 3.52739C35.9765 3.63991 36.0618 3.76001 36.151 3.88556C36.7138 4.67824 37.4309 5.68821 38.4127 6.38034C39.4304 7.09775 40.7312 7.62807 41.8458 8.08249C42.1105 8.1904 42.3647 8.29404 42.6021 8.39488C44.0008 8.98896 44.8389 9.48785 45.1997 10.0905C45.668 10.8725 45.9044 11.8463 46.1195 13.1005C46.1599 13.3361 46.1996 13.5828 46.2407 13.8381C46.4076 14.8742 46.5974 16.0527 46.9475 17.2089C47.2569 18.2308 47.8414 19.2936 48.3554 20.2283C48.4885 20.4703 48.6169 20.7038 48.7346 20.9257C49.3647 22.1143 49.7697 23.0941 49.7697 24Z"
                  stroke="white"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="my-[30px] xl:my-[42px] text-center space-y-5">
                <div className="text-[#FFFDFB] font-inter text-base font-normal leading-6">
                  Handcrafted in Viet Nam since 1650
                </div>
                <div className="text-[#FFFDFB] text-3xl leading-[40px] font-garammond tracking-[1.44px] font-bold">
                  BAT TRANG DINNER SET
                </div>
              </div>
              <Link
                href="/"
                className="px-[18px] py-[15px] bg-white text-black-brown font-inter text-sm font-semibold leading-5"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ItemSliders = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="p-[30px] xl:px-[165px] xl:py-20 ">
          <CarouselSliderItems>
            {items.map((item, i) => (
              <div
                key={i}
                className="snap-center min-w-[60%] lg:min-w-[calc((100%-30px)/4)] h-full"
              >
                <figure className="relative w-full h-full aspect-square bg-teal-900">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={item.asset}
                      alt="image"
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </figure>
                <div className="mt-[23px]">
                  <div className="text-center text-[#3A3845] font-inter text-lg leading-6 tracking-[1.08px] font-bold">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </CarouselSliderItems>
        </div>
      </div>
    </section>
  );
};

const Plates = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:px-[165px]">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full">
                  <div className="text-center">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      Up to 40% off our Christmas collection
                    </div>

                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/"
                        className="underline px-[15px] py-[18px] text-neutral-700 text-sm leading-5 tracking-[0.84px] font-bold"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <figure className="relative aspect-video h-full w-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/plates.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BestSellers = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 py-10 xl:px-[165px] xl:py-20">
          <h2 className="font-garammond text-[30px] font-bold leading-[36px] text-center">
            BEST SELLERS
          </h2>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-10 xl:grid-cols-4 xl:gap-[30px] mt-12">
            {bestSelling.map((bestSeller, i) => (
              <div key={i} className="col-span-1 flex flex-col">
                <div>
                  <figure className="relative aspect-[3/4]">
                    <div className="absolute inset-0 w-full h-full block">
                      <Image
                        fill
                        src={bestSeller.asset}
                        alt={bestSeller.name}
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </figure>
                  <div className="my-[10px]" />
                  <div className="font-inter text-[#3A3845] text-sm laeding-5 font-bold tracking-[0.84px]">
                    {bestSeller.name}
                  </div>
                  <div className="mt-3">
                    <div className="font-inter text-[#3A3845] text-sm laeding-5 font-bold tracking-[0.84px]">
                      ${bestSeller.price}
                    </div>
                  </div>
                  <div className="my-[10px]" />
                  <div className="font-inter text-neutral-600 text-sm laeding-[22px] font-bold tracking-[0.84px]">
                    {bestSeller.summary}
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="px-[15px] py-[18px] inline-flex justify-center border-solid border-[1px] border-neutral-800 w-full"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:px-[165px]">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full">
                  <div className="text-center">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      Made in viet Nam since 1450
                    </div>

                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/"
                        className="underline px-[15px] py-[18px] text-neutral-700 text-sm leading-5 tracking-[0.84px] font-bold"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1 xl:col-start-2">
              <figure className="relative aspect-[4/3] bg-red-600 h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/potter.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full">
                  <div className="text-center">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      OUR HISTORY
                    </div>

                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/"
                        className="underline px-[15px] py-[18px] text-neutral-700 text-sm leading-5 tracking-[0.84px] font-bold"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1">
              <figure className="relative aspect-[4/3] bg-red-600 h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/potterY.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewArrivals = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 py-10 xl:px-[165px] xl:py-20">
          <h2 className="font-garammond text-[30px] font-bold leading-[36px] text-center">
            Discover new arrivals
          </h2>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-10 xl:grid-cols-4 xl:gap-[30px] mt-12">
            {arrivals.map((arrival, i) => (
              <div key={i} className="col-span-1 flex flex-col">
                <div>
                  <figure className="relative aspect-[3/4]">
                    <div className="absolute inset-0 w-full h-full block">
                      <Image
                        fill
                        src={arrival.asset}
                        alt={arrival.name}
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </figure>
                  <div className="my-[10px]" />
                  <div className="font-inter text-[#3A3845] text-sm laeding-5 font-bold tracking-[0.84px]">
                    {arrival.name}
                  </div>
                  <div className="mt-3">
                    <div className="font-inter text-[#3A3845] text-sm laeding-5 font-bold tracking-[0.84px]">
                      ${arrival.price}
                    </div>
                  </div>
                  <div className="my-[10px]" />
                  <div className="font-inter text-neutral-600 text-sm laeding-[22px] font-bold tracking-[0.84px]">
                    {arrival.summary}
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="button"
                    className="px-[15px] py-[18px] inline-flex justify-center border-solid border-[1px] border-neutral-800 w-full"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OurBlog = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:px-[165px]">
          <h2 className="font-garammond text-[30px] font-bold leading-[36px] text-neutral-800 text-center">
            OUR BLOG
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 mt-12">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full">
                  <div className="text-center">
                    <h3 className="font-inter text-lg font-semibold leading-6 tracking-[1.06px] text-neutral-600">
                      TableWare
                    </h3>
                    <div className="mt-6">
                      <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                        The secrets to a kitchen room
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/"
                        className="underline px-[15px] py-[18px] text-neutral-700 text-sm leading-5 tracking-[0.84px] font-bold"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1 xl:col-start-2">
              <figure className="relative aspect-[4/3] bg-red-600 h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/tableware.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ItemSliders />
      <Plates />
      <BestSellers />
      <History />
      <NewArrivals />
      <OurBlog />
      <NewsLetter />
    </main>
  );
}
