
const Header = () => {
  return (
    <div>
      <nav x-data="{ isOpen: false }" class="relative bg-white shadow">
        <div class="container px-6 py-4 mx-auto">
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex items-center justify-between">
              <a href="#">
                {/* <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                <p className="text-3xl font-bold">Olive Garden</p>
              </a>


              <div class="flex lg:hidden">
                <button x-cloak click="isOpen = !isOpen" type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                  </svg>

                  <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>


            <div x-cloak className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a href="#" className="px-3 py-2 mx-3 mt-2">Join Slack</a>
                <a href="#" className="px-3 py-2 mx-3 mt-2">Browse Topics</a>
                <a href="#" className="px-3 py-2 mx-3 mt-2">Random Item</a>
                <a href="#" className="px-3 py-2 mx-3 mt-2">Experts</a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                {/* you can add something */}

                <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                  <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" class="object-cover w-full h-full" alt="avatar" />
                  </div>

                  <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;