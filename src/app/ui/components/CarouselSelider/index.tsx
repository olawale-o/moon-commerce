"use client";
const CarouselSliderItems = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="carousel-container h-full flex w-full max-h-full flex-nowrap flex-grow relative space-x-[var(--item-gap)] overflow-x-scroll">
        {children}
      </div>
      <style jsx>{`
        .carousel-container {
          --item-gap-sm: 20px;
          --item-gap-lg: 30px;
          --items-count-xl: 4;
          --items-count-lg: 4;
          --items-count-md: 2;
          --item-count-sm: 2;
          --items-count: 2;
          --item-gap: 20px;
          --item-count: 2;
          gap: var(--item-gap);

          scrollbar-width: none;

          @media screen and (min-width: 768px) {
            --item-count: var(--items-count-md, var(--items-count));
            --item-gap: var(--item-gap-md, var(--item-gap-sm));
          }
          @media screen and (min-width: 1024px) {
            --item-count: var(--items-count-lg, var(--items-count));
            --item-gap: var(--item-gap-lg, var(--item-gap-sm));
          }
          @media screen and (min-width: 1280px) {
            --item-count: var(--items-count-xl, var(--items-count));
            --item-gap: var(--item-gap-lg, var(--item-gap-sm));
          }
        }
      `}</style>
    </>
  );
};

export { CarouselSliderItems };
