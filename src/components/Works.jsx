import JobIcon from "../assets/images/job-icon.svg"
import EmployeIcon from "../assets/images/employee-icon.svg";

const Works = () => {
  return (
    <>
      <section className="bg-primary-4">
        <div className="px-2 md:px-[8.75rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto py-[2rem] mb-4 space-y-4">
          <h2 className="font-display text-2xl font-bold leading-8 text-center sm:text-3xl">
            <span className="text-gray-900">How It</span>
            <span className="text-primary-2"> Works</span>
          </h2>
          <p className="pb-5 text-base text-gray-600 font-[500] text-center">
            There is place to find the popular job,browse wanted your job
          </p>
          <article className="flex flex-col items-center justify-center">
            <ul className="flex-row md:flex items-center w-full gap-2 overflow-x-auto sm:gap-6 md:gap-10">
              <li className="text-center">
                <div className="flex justify-center">
                  <span className="px-6 py-6 rounded-full bg-white ">
                    <img src={JobIcon} alt className="w-[50px]" />
                  </span>
                </div>
                <p className="my-1.5 text-[1.25rem] text-gray-800 font-bold">
                  1. Post a Job
                </p>
                <p className="mb-[2.5rem] md:my-2 text-[0.9rem] text-neutral-600 font-normal leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </li>
              <li className="text-center mb-3">
                <div className="flex justify-center">
                  <span className="px-6 py-6 rounded-full bg-white ">
                    <img
                      src={EmployeIcon}
                      alt
                      className="w-[50px]"
                    />
                  </span>
                </div>
                <p className="my-1.5 text-[1.25rem] text-gray-800 font-bold">
                  2. Find Employees
                </p>
                <p className="mb-[2.5rem] md:my-2 text-[0.9rem] text-neutral-600 font-normal leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </li>
              <li className="text-center">
                <div className="flex justify-center">
                  <span className="px-6 py-6 rounded-full bg-white ">
                    <img src={JobIcon} alt className="w-[50px]" />
                  </span>
                </div>
                <p className="my-1.5 text-[1.25rem] text-gray-800 font-bold">
                  3. Pay Safely
                </p>
                <p className="mb-[2.5rem] md:my-2 text-[0.9rem] text-neutral-600 font-normal leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </li>
              <li className="text-center">
                <div className="flex justify-center">
                  <span className="px-6 py-6 rounded-full bg-white ">
                    <img
                      src={EmployeIcon}
                      alt
                      className="w-[50px]"
                    />
                  </span>
                </div>
                <p className=" my-1.5 text-[1.25rem] text-gray-800 font-bold">
                  4. We're Here to Help
                </p>
                <p className="mb-[2.5rem] md:my-2 text-[0.9rem] text-neutral-600 font-normal leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Works;
