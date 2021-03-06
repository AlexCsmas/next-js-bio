import Head from "next/head"

export default () => (


  <div className="hero bg-gray-900 h-3">

    <Head>
      <title>Alex Cosmas: Product Designer + Full Stack Web Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div class="py-1 bg-primary"></div>
    <div class="container mx-auto px-4 md:px-32">
      <div class="flex mt-8 space-y-5 justify-between">
        <div class="w-full md:w-3/5">
          <h1 class="font-bold text-2xl">Hello! My name is Alex Cosmas</h1>
          <p class="text-gray-600 mb-3 text-sm">
            I am versatile Rails/React Fullstack Developer. I design, develop and manage products and projects.
          </p>

          <p class="text-gray-600 mb-3 text-sm">
            My experience has been in Project Management and Business Design.
          </p>

          <p class="text-gray-600 mb-3 text-sm">
            I got into writing code after several frustrations leading my team. We kept missing deadlines mainly due to the quality of code and structure. This often resulted into several break down and I took up the challenge to teach myself writing quality code and learning software architecture to address the challenges I faced myself.
          </p>

          <p class="text-gray-600 mb-3 text-sm">
            It's now heading into 3+ years and I enjoy what I do because I get to learn and challenge myself. I also get an opportunity to assist innovators startup’s and businesses with reducing risk and guess work with their ideas, products, services through design thinking, product design, prototyping and building quality software.
          </p>

          <p class="text-gray-600 mb-3 text-sm">
            My day-to-day stack includes Figma for prototyping, TailwindCSS for styling and most preferred stack for development are Ruby/Rails/Javascript-ReactJs/VueJs.

          </p>

          <p class="text-gray-600 mb-3 font-medium">
            You can reach me through the contacts below. <strong>I am open to new opportunities. </strong>
          </p>




        </div>
        <div class="hidden md:inline-block">
          <img
            src="https://res.cloudinary.com/alexoc/image/upload/v1559398286/Alex%20Cosmas%20Otieno.jpg" alt=""
            class="rounded-full w-48 h-48 object-cover invisible md:visible" />
        </div>
      </div>

      <h2 class="font-bold text-2xl mt-8 mb-3">Featured Projects</h2>


      <div class="grid sm:grid-cols-3  grid-cols-1 gap-3">

        <a href="" target="_blank"
          class="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div class="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg class=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div class=" p-4">
            <div class="flex items-center">
              <h3 class="text-lg font-semibold text-gray-800">Safety Administrate</h3>

              <img class="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div class="mt-3 text-sm text-gray-700">Safety Administrate is an API based enterprise training
            management web application manages delegate bookings and automates checkouts, invoices and receipts </div>
            <div class="mt-2">
              <span
                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Case Study</span>

            </div>
          </div>
        </a>

        {/* Component 2 */}

        <a href="" target="_blank"
          class="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div class="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg class=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div class=" p-4">
            <div class="flex items-center">
              <h3 class="text-lg font-semibold text-gray-800">Kiota</h3>

              <img class="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div class="mt-3 text-sm text-gray-700">Kiota is a multi-tenant application that allows
                        users to manage receipts and invoices from one dashboard without switching accounts.</div>
            <div class="mt-2">
              <span
                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Ongoing Project</span>

            </div>
          </div>
        </a>

        {/* Component 3 */}

        <a href="" target="_blank"
          class="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
          style={{ filter: 'grayscale(0%)', transform: 'none', opacity: 1 }}>
          <div class="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
            style={{ backgroundColor: '#FFF0D3' }}>

            <svg class=" w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
              </path>
            </svg>
          </div>
          <div class=" p-4">
            <div class="flex items-center">
              <h3 class="text-lg font-semibold text-gray-800">Mtaani Online</h3>

              <img class="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
                src="/" />


            </div>
            <div class="mt-3 text-sm text-gray-700">Mtaani Online is an niched advertising platform built to
            focus on individuals and small business within the same locale helping them promote their
                        products and services.</div>
            <div class="mt-2">
              <span
                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">Ongoing Project</span>

            </div>
          </div>
        </a>

      </div>

      {/* Contact */}

      <div class="flex flex-col md:flex-row mt-10">

        <div class="text-base text-gray-900 w-3/5">
          <h2 class="font-bold text-2xl mt-8 mb-3">Contact</h2>
          <p className="font-sm text-gray-700">
            If you are interested in working with me, just drop me a short mail at:
          </p>
          <a href="mailto:cosmasalex@gmail.com">
            <span>
              <b>cosmasalex365@gmail.com</b>
            </span>
          </a>

        </div>
        <div class="text-base text-gray-900 w-2/5">
          <h2 class="font-bold text-2xl mt-8 mb-3">Alternative Channels</h2>
          <div class="mt-2 text-gray-600 mb-1 font-medium flex">

            <a target="_blank" href="#">LinkedIn</a><span class="font-bold mx-2">·</span>
            <a target="_blank" href="#">Resume</a><span class="font-bold mx-2">·</span>
            <a target="_blank" href="#">Twitter</a>

          </div>
        </div>
      </div>

      <div class="mt-8 mb-8">

      </div>

    </div>
    <div class="py-1 bg-primary"></div>


  </div>






);
