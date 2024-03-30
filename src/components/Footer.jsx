import Facebook from "../assets/images/facebook.svg"
import Twitter from "../assets/images/twitter.svg"
import Insta from "../assets/images/instagram.svg"

const Footer = () => {
  return (
   <>
    <footer className="bg-gray-200 py-4">
    <div className="px-2 ms-3 text-center md:text-start md:px-[8.75rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto md:py-[3rem]">
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-y-6">
        <div>
            <h3 className="mb-1.5 text-sm text-gray-600 font-[500]">Aliquam fringilla</h3>
            <ul className="space-y-1.5">
            <li className="text-gray-600"><a href>Link 1</a></li>
            <li className="text-gray-600"><a href>Link 1</a></li>
            <li className="text-gray-600"><a href>Link 1</a></li>
            </ul>
        </div>
        <div>
            <h3 className="mb-1.5 text-sm text-gray-600 font-[500]">
            Amet elementum
            </h3>
            <ul className="space-y-1.5">
            <li className="text-gray-600">
                <a href="site.jobs.post">Post a Job</a>
            </li>
            <li className="text-gray-600"><a href="site.jobs">Jobs</a></li>
            </ul>
        </div>
        <div>
            <h3 className="mb-1.5 text-sm text-gray-600 font-[500]">Mauris rhoncus</h3>
            <ul className="space-y-1.5">
            <li className="text-[0.925rem] text-gray-600">
                <a href="#">Privacy Policy</a>
            </li>
            <li className="text-[0.925rem] text-gray-600">
                <a href="#">Terms &amp; Conditions
                </a>
            </li>
            </ul>
        </div>
        <div className="col-span-1 sm:col-span-1">
            <h3 className="mb-2.5 text-sm text-gray-600 font-[500]">
            Social Media
            </h3>
            <ul className="flex justify-center md:justify-start  items-center gap-4 px-2">
            <li className="text-gray-600">
                <a href="https://www.facebook.com">
                <img src={Facebook} alt className="w-[.5rem]" />
                </a>
            </li>
            <li className="text-gray-600">
                <a href="https://www.twitter.com/">
                <img src={Twitter} alt className="w-4" />
                </a>
            </li>
            <li className="text-gray-600">
                <a href="https://www.instagram.com/">
                <img src={Insta} alt className="w-4" />
                </a>
            </li>
            </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-1.5 text-xs text-gray-600 font-[600]">
            Do you have any questions?
            </h3>
            <ul className="space-y-1.5">
            <li className="text-sm text-gray-600">
                <a href="https://mbaroles.com/contact-us" className="text-red-500">Contact Us</a>
            </li>
            <li className="font-semibold text-gray-700">+61 (0) 3 8376 6284</li>
            </ul>
        </div>
        </div>
        <hr className="mt-6" />
        <div className="py-5 text-xs font-medium text-center text-gray-600">
        © 2024 - MBAmade | All rights reserved | developed by Mobin mostafa
        </div>
    </div>
    </footer>

   </>
  )
}

export default Footer