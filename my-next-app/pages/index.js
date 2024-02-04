import "../styles/style-index.css";
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
  <title>vian web</title>
  <link rel="stylesheet" href="style-index.css" />
  <nav
    className="navbar  flex justify-center items-center sticky top-0 cursor-pointer  bg-opacity-70 bg-black bg-blend-darken bg-cover bg-center"
    style={{ backgroundImage: 'url("../bg-main.png")', backgroundSize: "90%" }}
  >
    <ul className="nav-list  w-1/2 flex items-center ">
      <div className="logo flex w-1/5 justify-center items-center ">
        <img
          className="w-2/5 border-2 border-white rounded-full  transition-all duration-1000 ease-in-out hover:scale-125"
          src="../logo.jpeg"
          alt="logo"
        />
      </div>
      <li className="py-5 px-12">
        <a
          className="text-white transition-all ease duration-500 text-base hover:text-gray-500 transition-all  ease duration-500e"
          href=""
        >
          Home
        </a>
      </li>
      <li className="py-5 px-12">
        <a
          className="text-white transition-all ease duration-500 text-base hover:text-gray-500 transition-all  ease duration-500e"
          href=""
        >
          About
        </a>
      </li>
      <li className="py-5 px-12">
        <a
          className="text-white transition-all ease duration-500 text-base hover:text-gray-500 transition-all  ease duration-500e"
          href=""
        >
          Services
        </a>
      </li>
      <li className="py-5 px-12">
        <a
          className="text-white transition-all ease duration-500 text-base hover:text-gray-500 transition-all  ease duration-500e"
          href=""
        >
          Contact
        </a>
      </li>
    </ul>
    <div className="rightNav w-1/2 text-right px-3 ">
      <input
        type="text"
        name="search"
        id="search"
        className="p-2 text-base border-2 border-gray-400 rounded-lg"
      />
      <button className="px-5 py-2 my-2 border-2 border-white rounded-lg text-base text-white cursor-pointer hover:text-black hover:bg-white">
        {" "}
        search
      </button>
    </div>
  </nav>
  <section className="background  h-screen">
    <div className="box-main flex justify-center items-center text-white font-segoe-ui max-w-70 mx-36 h-full">
      <div className="w-90 flex justify-center flex-col">
        <p className="text-5xl  text-blue-600"> the future of AI is here</p>
        <p>
          {" "}
          Welcome to the realm where artistry meets innovation, where each
          creation is a symphony of elegance and intelligence.
          <br /> At our design sanctuary, we are more than just craftsmen; we
          are architects of the future, weaving threads of artificial
          intelligence into the fabric of everyday life.
        </p>
        <div className="buttons">
          <button className="showbtn py-2 px-5 mt-20 border-2 border-white rounded-lg text-lg text-white cursor-pointer hover:text-black hover:bg-white">
            explore
          </button>
          <button className="showbtn py-2 px-5 mt-20 border-2 border-white rounded-lg text-lg text-white cursor-pointer hover:text-black hover:bg-white">
            watch products
          </button>
        </div>
      </div>
      <div className="w-30 flex flex-col">
        <img
          src="logo.jpeg"
          alt="laptop img"
          className="w-70 block mx-auto border-2  border-white rounded-3xl transition-transform duration-1000 transform scale-100 hover:scale-30 hover:rounded-full"
        />
        <button className="showbtn py-2 px-5 mt-20 border-2 border-white rounded-lg text-lg text-white cursor-pointer hover:text-black hover:bg-white">
          {" "}
          achievement{" "}
        </button>
      </div>
    </div>
  </section>
</>
