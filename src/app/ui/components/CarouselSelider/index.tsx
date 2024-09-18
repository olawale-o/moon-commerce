const CarouselSliderItems = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="scrollbar snap-x flex flex-nowrap gap-[30px] overflow-x-scroll">
      {children}
    </div>
  );
};

export { CarouselSliderItems };
