const NewsLetter = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:px-[60px] py-20">
          <div className="flex flex-col items-center">
            <div className="text-neutral-700 font-inter text-base font-semibold leading-[22px]">
              Sign up for emails
            </div>
            <div className="mt-6" />
            <h3 className="text-[28px] text-neutral-800 font-bold leading-8 font-garammond tracking-[1.12px]">
              For news, collections & more
            </h3>
            <div className="mt-6" />
            <div className="flex flex-col items-center">
              <input
                type="email"
                autoComplete="off"
                className="outline-none border-b-[1px] border-solid border-[#3A3845] py-[14px] w-[389px]"
                placeholder="Enter your email address"
              />
              <div className="mt-6" />
              <button
                type="button"
                className="px-6 py-[15px] border-solid border-[1px] border-neutral-800"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewsLetter };
