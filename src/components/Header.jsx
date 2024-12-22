import { useState } from "react"
import Logo from "../assets/images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
    <header className="text-white">
    <div className>
    <div className="py-1 bg-primary-1">
      <article className="px-10 max-w-screen md:max-w-[64rem] lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[110rem] mx-auto h-14 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img src={Logo} alt="MBAroles-logo" className="w-[7.5rem]" />
          </a>
        </div>
        {/* mobile menu open */}
        <div className="flex md:hidden">
          <button type="button"  onClick={toggleMenu} className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white`}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {/* Mobile menu, show/hide based on menu open state. */}
        {isOpen && (<div className={`md:hidden cursor-pointer`} role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-1 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="" className="py-2 inline-flex items-center gap-1 px-4 text-sm font-medium rounded-lg md:px-8 sm:px-6 bg-primary-2">
                <svg className="size-4 fill-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
                Post a Job
              </a>
              <button type="button" onClick={toggleMenu}  className="-m-2.5 rounded-md p-2.5 text-white cursor-pointer">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Home</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Rankings</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Jobs</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-whit">Employers
                  </a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                    Blog</a>
                </div>
                <div className="py-6">
                  <a href="" className="text-sm font-medium text-gray-200">
                    Login / Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>)}
        {/* mobin menu close */}
        <div className="hidden md:flex items-center gap-2 sm:gap-6 md:gap-8">
          <a href="" className="text-sm font-medium text-gray-200">
            Login / Register
          </a>
          <a href="" className="py-2 inline-flex items-center gap-1 px-4 text-sm font-medium rounded-lg md:px-8 sm:px-6 bg-primary-2">
            <svg className="size-4 fill-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            Post a Job
          </a>
        </div>
      </article>
    </div>
    <div className="hidden md:block bg-primary-2 py-[0.3rem]">
      <nav className="px-10 max-w-screen md:max-w-[64rem] lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[110rem] mx-auto h-10 py-1.5 flex flex-col justify-center">
        <ul className="flex items-center gap-5 xl:text-xl md:text-lg text-sm font-medium">
          <li>
            <a href="">Home</a>
          </li>
          <li aria-haspopup="menu" aria-expanded="false" aria-owns="v-menu-0">
            <button type="button" href>Rankings</button>
          </li>
          <li>
            <a href=""> Jobs </a>
          </li>
          <li>
            <a href=""> Employers </a>
          </li>
          <li>
            <a href=""> Blog </a>
          </li>
        </ul>
      </nav>
     </div>
     </div>
    </header>

   </>
  )
}

export default Header
