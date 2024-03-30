import Banking01  from "../assets/images/banking.svg"
import Banking02  from "../assets/images/marketing.svg"
import Banking03  from "../assets/images/marketing.svg"
import Banking04  from "../assets/images/banking.svg"

const Vaccancis = () => {
  return (
    <>
    <section className="ps-3 md:px-[8.75rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto py-8 my-6 space-y-4">
    <div>
    <h2 className="font-display font-semibold leading-8 text-center md:text-start text-xl md:text-4xl mb-[4rem]">
      Job Vacancies <br />
      from well-known <span className="text-primary-2">companies</span>
    </h2>
  </div>
  <h2 className="font-display text-2xl md:text-[2rem] font-bold leading-8 text-center sm:text-3xl">
    <span className="text-gray-900">Popular Job</span><span className="text-primary-2"> Categories</span>
  </h2>
  <p className="text-base text-gray-600 font-[500] text-center">
    There is place to find the popular job,browse wanted your job
  </p>
  <article className="flex flex-col items-center jusify-center pt-3">
    <div className="flex-row lg:flex items-center justify-center w-full lg:gap-3 px-2">
      <div className="mb-5 p-3 bg-white hover:bg-white hover:border hover:shadow-xl transition ease-in-out lg:h-[11rem] xl:h-[13rem]  sm:h-[12.75rem] w-[100%] h-[12rem] aspect-square rounded hover:cursor-pointer drop-shadow-xl">
        <div className="my-3 sm:my-6 lg:my-0 xl:my-6  w-[3rem] h-[3rem] rounded-full bg-gray-400">
          <img src={Banking01} alt className="pt-[9px] pl-[11px] w-[2.25rem]" />
        </div>
        <p className="text-[0.9rem] font-semibold">Finance &amp; Banking</p>
        <p className="my-2 text-xs font-semibold text-gray-400">4 Jobs</p>
        <div className="mt-5">
          <svg className="fill-gray-600 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
      <div className="mb-5 p-3 bg-gray-200 hover:bg-white hover:border hover:shadow-xl transition ease-in-out lg:h-[11rem] xl:h-[13rem] sm:h-[12.75rem] w-[100%] h-[12rem] aspect-square rounded hover:cursor-pointer">
        <div className="my-3 sm:my-6 lg:my-0 xl:my-6 w-[3rem] h-[3rem]">
          <img src={Banking02} alt className="pt-[9px] pl-[11px] w-[2.25rem]" />
        </div>
        <p className="text-[0.9rem] font-semibold">Marketing</p>
        <p className="my-2 text-xs font-semibold text-gray-400">2k Jobs</p>
        <div className="mt-5">
          <svg className="fill-gray-600 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
      <div className="mb-5 p-3 bg-gray-200 hover:bg-white hover:border hover:shadow-xl lg:h-[11rem] xl:h-[13rem] transition ease-in-out sm:h-[12.75rem] w-[100%] h-[12rem] aspect-square rounded hover:cursor-pointer">
        <div className="my-3 sm:my-6 lg:my-0 xl:my-6 w-[3rem] h-[3rem]">
          <img src={Banking03} alt className="pt-[9px] pl-[11px] w-[2.25rem]" />
        </div>
        <p className="text-[0.9rem] font-semibold">Customer Service</p>
        <p className="my-2 text-xs font-semibold text-gray-400">4k Jobs</p>
        <div className="mt-5">
          <svg className="fill-gray-600 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
      <div className="mb-5 p-3 bg-gray-200 hover:bg-white hover:border hover:shadow-xl lg:h-[11rem] xl:h-[13rem] sm:h-[12.75rem] transition ease-in-out w-[100%] h-[12rem] aspect-square rounded hover:cursor-pointer">
        <div className="my-3 sm:my-6 lg:my-0 xl:my-6 w-[3rem] h-[3rem]">
          <img src="./images/marketing.svg" alt className="pt-[9px] pl-[11px] w-[2.25rem]" />
        </div>
        <p className="text-[0.9rem] font-semibold">Health &amp; Care</p>
        <p className="my-2 text-xs font-semibold text-gray-400">1k Jobs</p>
        <div className="mt-5">
          <svg className="fill-gray-600 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
      <div className="mb-5 p-3 bg-gray-200 hover:bg-white hover:border hover:shadow-xl lg:h-[11rem] xl:h-[13rem] sm:h-[12.75rem] transition ease-in-out w-[100%] h-[12rem] aspect-square rounded hover:cursor-pointer">
        <div className="my-3 sm:my-6 lg:my-0 xl:my-6 w-[3rem] h-[3rem]">
          <img src={Banking04} alt className="pt-[9px] pl-[11px] w-[2.25rem]" />
        </div>
        <p className="text-[0.9rem] font-semibold">Education</p>
        <p className="my-2 text-xs font-semibold text-gray-400">2k Jobs</p>
        <div className="mt-5">
          <svg className="fill-gray-600 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
    </div>
   </article>
   </section>

    </>
  )
}

export default Vaccancis