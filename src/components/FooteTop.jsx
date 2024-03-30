import Bg01 from "../assets/images/bg-01 1.svg" 
import Errow from "../assets/images/errow 1.svg"
import Ellips from "../assets/images/Ellipse 18.svg"
import Single from "../assets/images/single02 1.jpg"


const FooteTop = () => {
  return (
    <>
      <section className="px-2 md:px-[8.75rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto mt-4 space-y-6 bg-white relative">
        <img
          src={Bg01}
          alt
          className="top-[52%] right-1 absolute w-[9rem]"
        />
        <img
          src={Errow}
          alt
          className="top-[52%] right-[20%] w-[10rem] absolute"
        />
        <img
          src={Ellips}
          alt
          className="absolute top-[5%] md:top-[11%] left-[2%] w-[3rem] md:w-[10rem]"
        />
        <article className="flex flex-col items-start sm:flex-row">
          <div className="sm:w-1/2 sm:min-h-[24rem]">
            <img
              src={Single}
              alt
              className="size-[18rem] sm:size-[24rem] "
            />
          </div>
          <div className="flex flex-col justify-center md:justify-end gap-5 py-8 sm:w-1/2">
            <h2 className="font-display text-2xl font-black leading-8 sm:text-3xl">
              <p className="font-semibold text-primary-2 text-center md:text-left">
                Get Matched to
              </p>
              <p className="font-semibold text-primary-2 text-center md:text-left">
                Most Valuable Jobs, Just
              </p>
              <p className="font-medium text-primary-1 text-center md:text-left">
                Drop Your CV
              </p>
            </h2>
            <p className="my-1 text-sm font-medium leading-5 text-gray-500 text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Itext of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. Lorem Ipsum is
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <button
                type="button"
                className="w-fit py-1.5 mx-1 my-0.5 px-4 text-sm text-white bg-primary-1 rounded"
              >
                Upload Resume
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default FooteTop;
