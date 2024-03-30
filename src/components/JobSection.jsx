

const JobSection = () => {
  return (
    <>
    <section className="bg-gray-200 border-t-8 md:border-t-[1.5rem] border-primary-1">
    <div className="max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[96rem] 2xl:max-w-[116rem] mx-auto px-6 sm:px-8 md:px-10 py-8">
    <div className="flex flex-col sm:flex-row items-center justify-center px-2 sm:px-6 my-6 space-y-6">
      <h2 className="sm:w-1/2 font-bold leading-8 text-lg md:text-2xl text-primary-1 text-center">
        Never Want to Miss Any Job News
      </h2>
      <div>
        <div className="flex w-[100%] md:w-[90%] mb-2 mx-3">
          <input type="email" placeholder="Email" className="rounded-l-md py-2 md:py-3 px-2" /><button type="button" className="px-2 md:px-8 text-white bg-black rounded-r-md text-[12px]">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
   </div>
   </section>
    </>
  )
}

export default JobSection