import { CarouselSliderItems } from "../ui/components/CarouselSelider";
import { NewsLetter } from "../ui/components/Newsletter";

const Teams = [
  {
    id: 1,
    name: "Bernie PATTERSON",
    positon: "CEO & Founder",
    asset: "/assets/team_1.png",
  },
  {
    id: 2,
    name: "Ophelia Vase",
    positon: "Creative Director",
    asset: "/assets/team_2.png",
  },
  {
    id: 3,
    name: "CorbiN HOSSAIN",
    positon: "Artist",
    asset: "/assets/team_3.png",
  },
  {
    id: 4,
    name: "Seren Bowl",
    positon: "Marketing",
    asset: "/assets/team_4.png",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="p-[30px] xl:px-[165px] xl:py-20">
          <div className="text-center">
            <h1 className="text-neuttral-800 font-bold leading-9 font-garammond text-4xl">
              About Moon
            </h1>
            <div className="mt-6" />
            <div className="max-w-[436px] mx-auto">
              <div className="font-inter  text-base leading-6  font-normal text-neutral-700">
                Moon{"'"}s handmade ceramic products have been around since
                1650, let{"'"}s explore our journey
              </div>
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full flex items-center">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      1910
                    </div>
                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1 lg:col-start-2">
              <figure className="relative aspect-[4/3] h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/about_1.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full flex items-center">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      1990
                    </div>
                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1">
              <figure className="relative aspect-[4/3] bg-red-600 h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/about_2.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-16 px-[60px] h-full flex items-center">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      2010
                    </div>
                    <div className="mt-6">
                      <div className="text-neutral-700 font-inter font-normal leading-6 text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli
                        mattis sit phasellus mollis sit aliquam sit nullam neque
                        ultrices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-1 lg:col-start-2">
              <figure className="relative aspect-[4/3] h-full">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/about_3.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <figure className="relative aspect-[4/3] h-full w-full overflow-hidden">
                <div className="absolute w-full h-full block inset-0">
                  <img
                    src="/assets/about_4.png"
                    alt="Tableware"
                    className="object-cover inset-0 w-full h-full absolute block"
                  />
                </div>
              </figure>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-[#F7F6F5] py-12 px-[60px] h-full flex items-center">
                  <div className="flex flex-col">
                    <div className="text-neutral-800 font-garammond text-[28px] leading-8 font-bold tracking-[1.12px]">
                      How we works
                    </div>
                    <div className="mt-8">
                      <div>
                        <div>
                          <div className="text-neutral-800 font-inter text-lg leading-6 font-semibold">
                            Product design
                          </div>
                          <div className="mt-6">
                            <div className="text-neutral-700 text-base leading-6 font-inter font-normal">
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              eli mattis sit phasellus mollis.
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-neutral-800 font-inter text-lg leading-6 font-semibold">
                            Crafted
                          </div>
                          <div className="mt-6">
                            <div className="text-neutral-700 text-base leading-6 font-inter font-normal">
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              eli mattis sit phasellus mollis.
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-neutral-800 font-inter text-lg leading-6 font-semibold">
                            Crafted
                          </div>
                          <div className="mt-6">
                            <div className="text-neutral-700 text-base leading-6 font-inter font-normal">
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              eli mattis sit phasellus mollis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSlider = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="p-[30px] xl:px-[165px] xl:py-20 ">
          <CarouselSliderItems>
            {Teams.map((team, i) => (
              <div
                key={i}
                className="snap-center min-w-[60%] lg:min-w-[calc((100%-30px)/4)] h-full"
              >
                <figure className="relative w-full h-full aspect-square bg-teal-900">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={team.asset}
                      alt="image"
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </figure>
                <div className="mt-[23px]">
                  <div className="text-center text-[#3A3845] font-inter text-lg leading-6 tracking-[1.08px] font-bold">
                    {team.name}
                  </div>
                  <div className="mt-3">
                    <div className="text-center text-neutral-600 font-inter text-sm leading-[22px] font-normal">
                      {team.positon}
                    </div>
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

export default function Page() {
  return (
    <main>
      <Hero />
      <History />
      <TeamSlider />
      <NewsLetter />
    </main>
  );
}
