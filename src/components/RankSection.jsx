import Ranking01 from "../assets/images/ranking-img-01.jpg"
import Ranking02 from "../assets/images/ranking-img-02.jpg"
import Ranking03 from "../assets/images/ranking-img-03.jpg"
import Ranking04 from "../assets/images/ranking-img-04.jpg"


const RankSection = () => {
  return (
    <>
  <section className="font-display bg-primary-1">
  <div className="px-[2rem] lg:px-[10rem] 2xl:max-w-[130rem] xl:max-w-[90rem] lg:max-w-[72rem] md:max-w-[60rem] sm:max-w-[54rem] max-w-screen mx-auto"> 
    <h2 className="text-white text-base md:text-3xl font-black pt-4">
      <span className="border-b-2 md:border-b-4 border-primary-2 pb-4">Ranking,</span>
      <span className="text-primary-2 border-b-2 md:border-b-4 border-primary-2 pb-4">Polls &amp; Stories</span>
    </h2>
    <div className="grid  lg:grid-cols-4 gap-4 md:grid-cols-2 py-6 mt-4">
      <div className="bg-white flex flex-col rounded-md overflow-hidden">
        <div className="rounded-b-md">
          <img src={Ranking01} alt className="w-[100%]" />
        </div>
        <div className="text-center mt-4">
          <p className="font-thin text-sm">Lorem ipsum at</p>
          <p className="font-normal text-base pb-3">November 30, 2017</p>
          <h3 className="font-normal text-lg pb-3">
            Nulla ante <br />
            tortor turpis
          </h3>
        </div>
        <div className="bg-primary-2 rounded-t-md mt-auto">
          <div className="flex justify-center items-center text-white py-2">
            <div className="w-[50%] text-center border-r-[1px]">82</div>
            <div className="w-[50%] text-center">Read</div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-md overflow-hidden">
        <div className="rounded-b-md ">
          <img src={Ranking02} alt className="w-[100%]" />
        </div>
        <div className="text-center mt-4">
          <p className="font-thin text-sm">Lorem ipsum at</p>
          <p className="font-normal text-base pb-3">November 30, 2017</p>
          <h3 className="font-normal text-lg">
            In accumsan posuere <br />
            libero id lorem ipsum
          </h3>
        </div>
        <div className="bg-primary-2 rounded-t-md mt-auto">
          <div className="flex justify-center items-center text-white py-2">
            <div className="w-[50%] text-center border-r-[1px]">98</div>
            <div className="w-[50%] text-center">Read</div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-md overflow-hidden">
        <div className="rounded-md">
          <img src={Ranking03} alt className="w-[100%]" />
        </div>
        <div className="text-center mt-4">
          <p className="font-thin text-sm">Lorem ipsum at</p>
          <p className="font-normal text-base pb-3">November 30, 2017</p>
          <h3 className="font-normal text-lg">
            Vivamus sodales <br />
            in quam
          </h3>
        </div>
        <div className="bg-primary-2 rounded-t-md mt-auto">
          <div className="flex justify-center items-center text-white py-2">
            <div className="w-[50%] text-center border-r-[1px]">101</div>
            <div className="w-[50%] text-center">Read</div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-md overflow-hidden">
        <div className="rounded-md">
          <img src={Ranking04} alt className="w-[100%]" />
        </div>
        <div className="text-center mt-4">
          <p className="font-thin text-sm">Lorem ipsum at</p>
          <p className="font-normal text-base pb-3">November 30, 2017</p>
          <h3 className="font-normal text-lg">
            Praesent sit amet <br />
            turpis curabitur lorem
          </h3>
        </div>
        <div className="bg-primary-2 rounded-md mt-auto">
          <div className="flex justify-center items-center text-white py-2">
            <div className="w-[50%] text-center border-r-[1px]">68</div>
            <div className="w-[50%] text-center">Read</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center pb-6">
      <button className="bg-primary-2 text-white text-base md:text-lg py-2 px-4 rounded-md">
        View All Blogs
      </button>
    </div>
  </div>
</section>


    </>
  )
}

export default RankSection