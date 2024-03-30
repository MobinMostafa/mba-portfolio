import Ellips from "../assets/images/Ellipse 20.svg"
import Dot from "../assets/images/dot-img 1.png"
import Banner from "../assets/images/seach-job-banner.png"

const Search = () => {
  return (
    <>
      <section className="bg-primary-3">
        <div className="md:px-[8.75rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto relative pt-6 pb-0 md:mt-24 space-y-6">
          <img
            src={Ellips}
            alt
            className="absolute top-[42%] left-[1%] w-[14rem]"
          />
          <img
            src={Dot}
            alt
            className="absolute top-[10%] left-[11.5rem] w-[4rem]"
          />
          <img src alt />
          <article className="flex mb-0 flex-col items-center sm:flex-row sm:items-start">
            <div className="px-2 sm:w-1/2 ">
              <img
                src={Banner}
                alt
                className="h-full lg:h-[33rem]"
              />
            </div>
            <div className="flex flex-col justify-end py-8 text-center sm:w-1/2  sm:text-left">
              <h2 className="font-display space-y-3 font-bold capitalize leading-8 text-2xl md:text-3xl text-gray-900">
                Searching for Job?
              </h2>
              <p className="font-display my-2 py-5 px-4 text-sm font-normal leading-7 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="flex items-center w-90% md:w-full gap-2 bg-white border rounded shadow-md py-2 px-3 mx-2">
                <input
                  type="email"
                  placeholder="Upload Your Resume"
                  className="w-2/3 placeholder:text-gray-400 placeholder:text-xs rounded-l-md"
                />
                <button
                  type="button"
                  className="w-1/3 h-8 mx-1 my-0.5 px-3 md:px-4 text-white bg-primary-1 rounded"
                >
                  Upload
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Search;
