export default function Home() {
  return (
    <div className="container-all w-full flex flex-col items-center bg-neutral-50">
      {/* Hero Section */}
      <section className="section__styles py-[72px] pt-[170px] flex flex-col items-center text-center gap-16">
        {/* Tagline, Header, Divider, Paragraph */}
        <div className="flex flex-col w-full items-center gap-6 max-w-[600px]">
          {/* Header and Tagline */}
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-sm uppercase font-bold text-neutral-400 tagline">
              👋 Hello there, my name is{" "}
              <span className="text-neutral-800">sohyb</span>
            </h3>
            <h1 className="text-neutral-800 font-bold heading text-3xl">
              I&apos;m a full stack developer well-versed in the most modern
              tools
            </h1>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Paragraph */}
          <p className="text-neutral-800 text-lg">
            I have the skills to craft{" "}
            <span className="font-bold">high-performing, people-friendly</span>{" "}
            websites and web applications
          </p>
        </div>
        {/* Buttons */}
        <div className="w-full flex gap-8 justify-center">
          {/* <button className="button-styles text-white bg-neutral-800 border-neutral-800 hover:text-neutral-800 hover:bg-white duration-100">
            GET IN TOUCH
          </button> */}
          <a
            href="#projects"
            className="button-styles text-black bg-white border-black hover:text-white hover:bg-black duration-100"
          >
            VIEW PROJECTS
          </a>
        </div>
      </section>
      {/* Skills Section */}
      <div className="w-full bg-slate-100">
        <section
          id="skills"
          className="section__styles py-[72px] flex flex-col items-center gap-8 mx-auto"
        >
          <h1 className="text-2xl text-center text-neutral-800 heading font-bold">
            Skills & Technologies
          </h1>
          <div className="divider"></div>
          {/* Skills Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {/* Individual Skills */}
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 68"
                fill="none"
              >
                <path
                  d="M0 0.666687L5.45312 59.5655L29.9219 67.3333L54.5469 59.5655L60 0.666687H0ZM48.1562 19.6994H19.4375L20.0781 27.0506H47.5156L45.3906 49.1339L30.0938 53.1518V53.1964H29.9219L14.5 49.1339L13.5625 37.8542H21.0156L21.5625 43.5238L29.9219 45.6816L38.3125 43.5238L39.25 34.2679H13.1719L11.1719 12.6012H48.8438L48.1562 19.6994Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">HTML</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 68"
                fill="none"
              >
                <path
                  d="M0 0.666687L5.45312 59.5655L30 67.3333L54.5469 59.5655L60 0.666687H0ZM48.9219 12.5714L48.1719 19.6101L30.1562 26.9464L30.1094 26.9613H47.5312L45.5312 48.7768L30.1875 53.0476L14.75 48.7024L13.75 37.7054H21.3906L21.8906 43.4048L30.1094 45.3839L38.6562 43.0923L39.2344 33.9256L13.25 33.8512V33.8363L13.2188 33.8512L12.6562 26.9613L30.1719 20.0119L31.1875 19.6101H11.9844L11.0781 12.5714H48.9219Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">CSS</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M53.5714 0H6.42857C2.87946 0 0 2.87946 0 6.42857V53.5714C0 57.1205 2.87946 60 6.42857 60H53.5714C57.1205 60 60 57.1205 60 53.5714V6.42857C60 2.87946 57.1205 0 53.5714 0ZM32.6518 46.7946C32.6518 52.6339 29.2232 55.2991 24.2277 55.2991C19.7143 55.2991 17.1027 52.9687 15.7634 50.1429L20.3571 47.3705C21.2411 48.9375 22.0446 50.2634 23.9866 50.2634C25.8348 50.2634 27.0134 49.5402 27.0134 46.7143V27.5491H32.6518V46.7946ZM45.9911 55.2991C40.7545 55.2991 37.3661 52.808 35.7188 49.5402L40.3125 46.8884C41.5179 48.8571 43.0982 50.317 45.8705 50.317C48.2009 50.317 49.7009 49.1518 49.7009 47.5312C49.7009 45.6027 48.1741 44.9196 45.5893 43.7812L44.183 43.1786C40.1116 41.4509 37.4196 39.2679 37.4196 34.6741C37.4196 30.442 40.6473 27.2277 45.6696 27.2277C49.2589 27.2277 51.8304 28.4732 53.6786 31.7411L49.2857 34.5536C48.3214 32.8259 47.2768 32.1429 45.6562 32.1429C44.0089 32.1429 42.9643 33.1875 42.9643 34.5536C42.9643 36.2411 44.0089 36.9241 46.433 37.9821L47.8393 38.5848C52.6339 40.6339 55.3259 42.7366 55.3259 47.4509C55.3259 52.5134 51.3348 55.2991 45.9911 55.2991Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Javascript</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M4.49824 0.168106C2.37798 0.683594 0.585709 2.53467 0.14057 4.66692C-0.0468567 5.5456 -0.0468567 54.4468 0.14057 55.3255C0.597423 57.5163 2.4834 59.4025 4.67396 59.8594C5.55252 60.0469 54.4475 60.0469 55.326 59.8594C56.4038 59.6368 57.3995 59.0745 58.2429 58.2427C59.0746 57.3991 59.6369 56.4033 59.8594 55.3255C60.0469 54.4468 60.0469 5.5456 59.8594 4.66692C59.4026 2.47609 57.5166 0.58987 55.326 0.132957C54.3772 -0.0662079 5.32995 -0.0310593 4.49824 0.168106ZM51.2027 28.1685C51.7532 28.274 52.5849 28.4731 53.0535 28.602L53.8969 28.8598V31.5895V34.331L53.1706 33.9209C50.2538 32.3276 45.8961 32.1167 44.1742 33.4875C43.6939 33.8741 43.237 34.7059 43.237 35.2097C43.2487 35.7369 43.6236 36.4632 44.1624 36.9904C44.7599 37.5645 45.7439 38.1151 47.8055 39.0407C49.9375 39.9896 50.8981 40.4817 51.6947 41.0206C53.1706 42.0282 54.2835 43.4458 54.7521 44.9337C55.1269 46.1169 55.1152 48.4484 54.7521 49.6199C53.8852 52.338 51.8118 53.9664 48.2624 54.728C47.2433 54.9505 46.6576 54.9974 44.6427 54.9974C41.7142 55.0091 39.8399 54.7162 37.8954 53.9313L37.1456 53.6384V50.7212C37.1456 49.1161 37.1574 47.804 37.1808 47.804C37.2042 47.804 37.5088 48.0149 37.8602 48.2843C38.7271 48.9404 40.4022 49.7254 41.597 50.0534C42.4405 50.276 42.8739 50.3229 44.4084 50.3229C46.025 50.3111 46.2944 50.2877 46.9036 50.0417C47.747 49.7136 48.3561 49.1864 48.6373 48.5655C48.9301 47.9446 48.9067 47.5111 48.5787 46.8082C48.0515 45.66 46.9856 44.9337 43.811 43.5746C41.7493 42.696 40.859 42.2039 39.7579 41.3369C37.9656 39.9311 37.0285 37.9628 37.0285 35.6197C37.0285 31.5778 39.8165 28.8832 44.8301 28.0631C46.1773 27.8405 49.7852 27.9108 51.2027 28.1685ZM34.8028 30.8749V33.2766H31.0543H27.3057V43.9964V54.7162H24.3186H21.3315V43.9964V33.2766H17.583H13.8344V30.8749V28.4731H24.3186H34.8028V30.8749Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Typescript</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 54"
                fill="none"
              >
                <path
                  d="M49.0078 17.8206C48.375 17.611 47.7422 17.413 47.1094 17.2267C47.2148 16.7958 47.3086 16.3649 47.4023 15.9341C48.8438 8.99343 47.8945 3.41532 44.6953 1.57535C41.6133 -0.183093 36.5859 1.64523 31.5 6.04716C30.9961 6.47804 30.5039 6.93221 30.0352 7.38638C29.7187 7.0836 29.3906 6.78082 29.0625 6.48969C23.7305 1.78497 18.3867 -0.194739 15.1875 1.65687C12.1172 3.42696 11.2031 8.67901 12.4922 15.247C12.6211 15.8991 12.7617 16.5396 12.9258 17.1918C12.1758 17.4014 11.4375 17.6343 10.7461 17.8788C4.48828 20.0332 0 23.4337 0 26.9506C0 30.5839 4.78125 34.2289 11.2852 36.4415C11.8125 36.6162 12.3398 36.7909 12.8789 36.9423C12.7031 37.641 12.5508 38.328 12.4102 39.0384C11.1797 45.5016 12.1406 50.6255 15.2109 52.384C18.375 54.2006 23.6953 52.3374 28.875 47.8306C29.2852 47.4696 29.6953 47.097 30.1055 46.701C30.6211 47.2018 31.1602 47.6793 31.6992 48.1451C36.7148 52.4306 41.6719 54.1657 44.7305 52.4073C47.8945 50.5906 48.9258 45.0823 47.5898 38.3746C47.4844 37.8622 47.3672 37.3382 47.2383 36.8025C47.6133 36.6977 47.9766 36.5812 48.3398 36.4648C55.1016 34.2405 60 30.6421 60 26.9506C60 23.422 55.3828 19.9983 49.0078 17.8206ZM33.1523 7.93371C37.5117 4.16062 41.5781 2.68166 43.4297 3.74139C45.4102 4.87098 46.1719 9.43596 44.9297 15.4333C44.8477 15.8293 44.7656 16.2135 44.6602 16.5978C42.0586 16.0156 39.4219 15.5963 36.7734 15.3634C35.25 13.1974 33.5859 11.1245 31.7813 9.17976C32.2383 8.74888 32.6836 8.3413 33.1523 7.93371ZM19.5938 32.9945C20.1914 34.0076 20.8008 35.0208 21.4453 36.0106C19.6172 35.8127 17.8008 35.5215 16.0078 35.1372C16.5234 33.4603 17.168 31.7251 17.918 29.955C18.457 30.9798 19.0078 31.993 19.5938 32.9945ZM16.043 18.9851C17.7305 18.6125 19.5234 18.3097 21.3867 18.0768C20.7656 19.0434 20.1562 20.0332 19.582 21.0347C19.0078 22.0246 18.4453 23.0377 17.918 24.0625C17.1797 22.3274 16.5586 20.6271 16.043 18.9851ZM19.2539 27.0088C20.0273 25.4017 20.8711 23.8296 21.7617 22.2808C22.6523 20.7319 23.6133 19.2297 24.6211 17.7507C26.3789 17.6226 28.1719 17.5528 30 17.5528C31.8281 17.5528 33.6328 17.6226 35.3789 17.7507C36.375 19.218 37.3242 20.7203 38.2266 22.2575C39.1289 23.7947 39.9727 25.3668 40.7695 26.9622C39.9844 28.5693 39.1406 30.153 38.2383 31.7135C37.3477 33.2623 36.3984 34.7646 35.4023 36.2552C33.6562 36.3833 31.8398 36.4415 30 36.4415C28.1602 36.4415 26.3789 36.3833 24.6562 36.2785C23.6367 34.7995 22.6758 33.2856 21.7734 31.7368C20.8711 30.188 20.0391 28.6158 19.2539 27.0088ZM40.418 32.9712C41.0156 31.9464 41.5781 30.91 42.1289 29.8619C42.8789 31.5505 43.5352 33.2623 44.1094 35.0208C42.293 35.4284 40.4531 35.7428 38.6016 35.9524C39.2344 34.9742 39.832 33.9727 40.418 32.9712ZM42.1055 24.0625C41.5547 23.0377 40.9922 22.0129 40.4062 21.0114C39.832 20.0216 39.2344 19.0434 38.6133 18.0768C40.5 18.3097 42.3047 18.6241 43.9922 19.0084C43.4531 20.7319 42.8203 22.4089 42.1055 24.0625ZM30.0234 10.9615C31.2539 12.2891 32.4141 13.6865 33.4922 15.1305C31.1719 15.0257 28.8398 15.0257 26.5195 15.1305C27.668 13.6283 28.8516 12.2308 30.0234 10.9615ZM16.4297 3.8229C18.3984 2.68166 22.7695 4.31201 27.375 8.36459C27.668 8.62078 27.9609 8.90027 28.2656 9.17976C26.4492 11.1245 24.7734 13.1974 23.2383 15.3634C20.5898 15.5963 17.9648 16.0039 15.3633 16.5746C15.2109 15.9806 15.082 15.3751 14.9531 14.7695C13.8516 9.13318 14.5781 4.88263 16.4297 3.8229ZM13.5586 34.52C13.0664 34.3803 12.5859 34.2289 12.1055 34.0659C9.60938 33.2856 6.77344 32.0512 4.72266 30.4325C3.53906 29.6173 2.74219 28.3596 2.51953 26.9506C2.51953 24.8195 6.22266 22.0944 11.5664 20.2428C12.2344 20.0099 12.9141 19.8003 13.5938 19.6023C14.3906 22.1294 15.3516 24.6098 16.4648 27.0088C15.3398 29.4427 14.3672 31.958 13.5586 34.52ZM27.2227 45.9325C25.2891 47.6909 23.0508 49.0883 20.6133 50.0433C19.3125 50.6605 17.8125 50.7187 16.4766 50.1947C14.6133 49.1233 13.8398 45.0125 14.8945 39.4809C15.0234 38.8288 15.1641 38.1767 15.3281 37.5362C17.9531 38.0951 20.6016 38.4794 23.2852 38.6774C24.832 40.8551 26.5312 42.9396 28.3477 44.896C27.9727 45.257 27.5977 45.6064 27.2227 45.9325ZM30.0937 43.1026C28.8984 41.8216 27.7031 40.4009 26.543 38.8754C27.668 38.922 28.8281 38.9453 30 38.9453C31.207 38.9453 32.3906 38.922 33.5625 38.8637C32.4844 40.3427 31.3242 41.7518 30.0937 43.1026ZM45.4102 46.5962C45.3047 48.017 44.6016 49.3445 43.4766 50.2412C41.6133 51.3126 37.6406 49.9152 33.3516 46.2585C32.8594 45.8393 32.3672 45.3851 31.8633 44.9193C33.6562 42.9512 35.3086 40.8667 36.8086 38.6774C39.4922 38.4561 42.1641 38.0486 44.8008 37.4546C44.918 37.9321 45.0234 38.4096 45.1172 38.8754C45.6914 41.3908 45.7852 44.011 45.4102 46.5962ZM47.543 34.0775C47.2148 34.1823 46.8867 34.2871 46.5469 34.3803C45.7266 31.8416 44.7188 29.3611 43.5586 26.9506C44.6836 24.5749 45.6328 22.1294 46.4297 19.6256C47.0391 19.8003 47.625 19.9866 48.1875 20.173C53.6484 22.0362 57.4805 24.8078 57.4805 26.9273C57.4805 29.2097 53.3906 32.156 47.543 34.0775ZM30 32.3307C32.9648 32.3307 35.3672 29.9434 35.3672 26.9971C35.3672 24.0509 32.9648 21.6636 30 21.6636C27.0352 21.6636 24.6328 24.0509 24.6328 26.9971C24.6328 29.9434 27.0352 32.3307 30 32.3307Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">ReactJS</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 36"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 0C21.999 0 17.001 3.99899 15 12C18 8.00101 21.501 6.50101 25.5 7.5C27.783 8.07042 29.415 9.72736 31.218 11.5594C34.161 14.5443 37.566 18 45 18C53.001 18 57.999 14.001 60 6C57 9.99899 53.502 11.499 49.5 10.5C47.217 9.92958 45.585 8.27264 43.779 6.44064C40.839 3.45272 37.437 0 30 0ZM15 18C6.999 18 2.001 21.999 0 30C3 25.998 6.501 24.501 10.5 25.5C12.783 26.0704 14.415 27.7274 16.221 29.5594C19.161 32.5443 22.566 36 30.003 36C38.004 36 43.002 32.001 45.003 24C42.003 27.999 38.502 29.499 34.503 28.5C32.22 27.9296 30.588 26.2726 28.785 24.4406C25.839 21.4557 22.434 18 15 18Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Tailwind</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M28.0352 0.0161462C27.9062 0.0278747 27.4956 0.0689244 27.1261 0.0982456C18.6041 0.866461 10.6217 5.46403 5.56598 12.5304C2.75073 16.4595 0.950147 20.9163 0.269795 25.637C0.0293255 27.2849 0 27.7716 0 30.0059C0 32.2401 0.0293255 32.7269 0.269795 34.3747C1.90029 45.6399 9.91789 55.1048 20.7918 58.6116C22.739 59.2391 24.7918 59.6672 27.1261 59.9252C28.0352 60.0249 31.9648 60.0249 32.8739 59.9252C36.9032 59.4795 40.3167 58.4826 43.6833 56.7644C44.1994 56.5005 44.2991 56.4301 44.2287 56.3715C44.1818 56.3363 41.9824 53.3866 39.3431 49.8211L34.5455 43.3412L28.5337 34.4451C25.2258 29.5543 22.5044 25.5549 22.4809 25.5549C22.4575 25.549 22.434 29.5015 22.4223 34.3278C22.4047 42.7782 22.3988 43.1183 22.2933 43.3177C22.1408 43.605 22.0235 43.7223 21.7771 43.8513C21.5894 43.9452 21.4252 43.9628 20.5396 43.9628H19.5249L19.2551 43.7927C19.0792 43.6813 18.9501 43.5347 18.8622 43.3646L18.739 43.1007L18.7507 31.3429L18.7683 19.5793L18.9501 19.3505C19.044 19.2274 19.2434 19.0691 19.3842 18.9928C19.6246 18.8755 19.7185 18.8638 20.7331 18.8638C21.9296 18.8638 22.129 18.9107 22.4399 19.2509C22.5279 19.3447 25.783 24.2472 29.6774 30.1525C33.5718 36.0578 38.8974 44.1211 41.5132 48.0795L46.2639 55.2749L46.5044 55.1166C48.6334 53.7326 50.8856 51.7622 52.6686 49.7097C56.4633 45.3526 58.9091 40.0396 59.7302 34.3747C59.9707 32.7269 60 32.2401 60 30.0059C60 27.7716 59.9707 27.2849 59.7302 25.637C58.0997 14.3718 50.0821 4.90692 39.2082 1.40011C37.2903 0.778498 35.2493 0.350408 32.9619 0.0923814C32.3988 0.0337389 28.522 -0.0307677 28.0352 0.0161462ZM40.3167 18.1601C40.5982 18.3008 40.827 18.5706 40.9091 18.8521C40.956 19.0046 40.9677 22.2651 40.956 29.613L40.9384 40.1569L39.0792 37.3069L37.2141 34.4568V26.7923C37.2141 21.837 37.2375 19.0515 37.2727 18.9166C37.3666 18.5882 37.5718 18.3302 37.8534 18.1777C38.0938 18.0546 38.1818 18.0428 39.1026 18.0428C39.9707 18.0428 40.1232 18.0546 40.3167 18.1601Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">NextJS</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M58.8682 27.3281L32.6786 1.13127C31.9536 0.406894 30.9706 0 29.9458 0C28.9209 0 27.938 0.406894 27.213 1.13127L21.7674 6.57288L28.6674 13.473C32.2915 12.2489 35.7227 15.719 34.4786 19.3231L41.1294 25.9741C45.7138 24.3937 49.3231 30.126 45.8799 33.5666C42.3321 37.1145 36.4768 33.1823 38.3799 28.5657L32.1723 22.366V38.6855C35.5607 40.365 35.1536 44.2905 33.3884 46.0517C32.526 46.9136 31.3566 47.3978 30.1373 47.3978C28.918 47.3978 27.7486 46.9136 26.8862 46.0517C24.5331 43.6945 25.4036 39.769 28.3929 38.5515V22.0781C25.6072 20.9383 25.0982 17.961 25.8964 16.0512L19.0942 9.24078L1.1318 27.2063C0.407112 27.9311 0 28.9141 0 29.9391C0 30.9641 0.407112 31.9471 1.1318 32.672L27.3295 58.8688C28.0543 59.5931 29.037 60 30.0616 60C31.0862 60 32.069 59.5931 32.7937 58.8688L58.8682 32.7939C59.5929 32.069 60 31.086 60 30.061C60 29.036 59.5929 28.053 58.8682 27.3281Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Git</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M20.0685 48.3119C20.0685 48.56 19.7903 48.7586 19.4395 48.7586C19.0403 48.7958 18.7621 48.5973 18.7621 48.3119C18.7621 48.0638 19.0403 47.8653 19.3911 47.8653C19.754 47.828 20.0685 48.0266 20.0685 48.3119ZM16.3065 47.7536C16.2218 48.0017 16.4637 48.2871 16.8266 48.3615C17.1411 48.4856 17.504 48.3615 17.5766 48.1134C17.6492 47.8653 17.4194 47.5799 17.0565 47.4683C16.7419 47.3814 16.3911 47.5055 16.3065 47.7536ZM21.6532 47.5427C21.3024 47.6295 21.0605 47.8653 21.0968 48.1506C21.1331 48.3988 21.4476 48.56 21.8105 48.4732C22.1613 48.3864 22.4032 48.1506 22.3669 47.9025C22.3306 47.6668 22.004 47.5055 21.6532 47.5427ZM29.6129 0C12.8347 0 0 13.0643 0 30.2725C0 44.0316 8.44355 55.8056 20.504 59.9495C22.0524 60.2348 22.5968 59.2547 22.5968 58.4482C22.5968 57.679 22.5605 53.4359 22.5605 50.8305C22.5605 50.8305 14.0927 52.6915 12.3145 47.1333C12.3145 47.1333 10.9355 43.5229 8.95161 42.5924C8.95161 42.5924 6.18145 40.6445 9.14516 40.6818C9.14516 40.6818 12.1573 40.9299 13.8145 43.8827C16.4637 48.6717 20.9032 47.2946 22.6331 46.4757C22.9113 44.4906 23.6976 43.1135 24.5685 42.2946C17.8065 41.5254 10.9839 40.5205 10.9839 28.5852C10.9839 25.1733 11.9032 23.4612 13.8387 21.2776C13.5242 20.4711 12.496 17.1461 14.1532 12.8534C16.6815 12.047 22.5 16.2032 22.5 16.2032C24.9194 15.5084 27.5202 15.1487 30.0968 15.1487C32.6734 15.1487 35.2742 15.5084 37.6936 16.2032C37.6936 16.2032 43.5121 12.0346 46.0403 12.8534C47.6976 17.1585 46.6694 20.4711 46.3548 21.2776C48.2903 23.4736 49.4758 25.1857 49.4758 28.5852C49.4758 40.5577 42.3508 41.513 35.5887 42.2946C36.7016 43.2748 37.6452 45.1358 37.6452 48.0514C37.6452 52.2324 37.6089 57.4061 37.6089 58.4234C37.6089 59.2299 38.1653 60.21 39.7016 59.9246C51.7984 55.8056 60 44.0316 60 30.2725C60 13.0643 46.3911 0 29.6129 0ZM11.7581 42.7909C11.6008 42.915 11.6371 43.2003 11.8427 43.4361C12.0363 43.6346 12.3145 43.7214 12.4718 43.5601C12.629 43.4361 12.5927 43.1507 12.3871 42.915C12.1935 42.7165 11.9153 42.6296 11.7581 42.7909ZM10.4516 41.786C10.3669 41.9472 10.4879 42.1458 10.7298 42.2698C10.9234 42.3939 11.1653 42.3567 11.25 42.183C11.3347 42.0217 11.2137 41.8232 10.9718 41.6991C10.7298 41.6247 10.5363 41.6619 10.4516 41.786ZM14.371 46.2028C14.1774 46.3641 14.25 46.7363 14.5282 46.972C14.8065 47.2573 15.1573 47.2946 15.3145 47.096C15.4718 46.9348 15.3992 46.5626 15.1573 46.3268C14.8911 46.0415 14.5282 46.0043 14.371 46.2028ZM12.9919 44.379C12.7984 44.503 12.7984 44.8256 12.9919 45.111C13.1855 45.3963 13.5121 45.5204 13.6694 45.3963C13.8629 45.235 13.8629 44.9125 13.6694 44.6271C13.5 44.3418 13.1855 44.2177 12.9919 44.379Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Github</h3>
            </div>
            <div className="skill__styling">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] md:w-[60px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M60 54L45.25 60L21 36L5.75 48L0 44.75V15.25L5.75 12.25L21 24.25L45.25 0L60 6V54ZM29.25 30L45 42.5V17.5L29.25 30ZM5.75 39.25L15 30L6 20.75L5.75 39.25Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">VSCode</h3>
            </div>
            <div className="skill__styling">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] md:w-[60px]"
                viewBox="0 0 60 86"
                fill="none"
              >
                <path
                  d="M0 16.1796C0 7.32274 7.22921 0.142883 16.147 0.142883H43.853C52.7708 0.142883 60 7.32274 60 16.1796C60 21.7877 57.1014 26.7237 52.7109 29.5899C57.1014 32.4563 60 37.3921 60 43.0004C60 51.8572 52.7708 59.0371 43.853 59.0371H43.5024C39.3218 59.0371 35.5121 57.4591 32.6446 54.8701V69.6463C32.6446 78.6212 25.2263 85.8572 16.234 85.8572C7.33849 85.8572 0 78.6992 0 69.8204C0 64.2125 2.89832 59.2769 7.28845 56.4105C2.89832 53.5441 0 48.6083 0 43.0004C0 37.3921 2.89858 32.4563 7.289 29.5899C2.89858 26.7237 0 21.7877 0 16.1796ZM27.3554 32.2166H16.147C10.1503 32.2166 5.28908 37.0447 5.28908 43.0004C5.28908 48.9331 10.1128 53.7468 16.0775 53.7839C16.1006 53.7838 16.1237 53.7838 16.147 53.7838H27.3554V32.2166ZM32.6446 43.0004C32.6446 48.956 37.5057 53.7841 43.5024 53.7841H43.853C49.8498 53.7841 54.7109 48.956 54.7109 43.0004C54.7109 37.0447 49.8498 32.2166 43.853 32.2166H43.5024C37.5057 32.2166 32.6446 37.0447 32.6446 43.0004ZM16.147 59.0371C16.1237 59.0371 16.1006 59.037 16.0775 59.037C10.1128 59.074 5.28908 63.8877 5.28908 69.8204C5.28908 75.7543 10.2152 80.6041 16.234 80.6041C22.3497 80.6041 27.3554 75.6762 27.3554 69.6463V59.0371H16.147ZM16.147 5.39586C10.1503 5.39586 5.28908 10.2239 5.28908 16.1796C5.28908 22.1353 10.1503 26.9632 16.147 26.9632H27.3554V5.39586H16.147ZM32.6446 26.9632H43.853C49.8498 26.9632 54.7109 22.1353 54.7109 16.1796C54.7109 10.2239 49.8498 5.39586 43.853 5.39586H32.6446V26.9632Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Figma</h3>
            </div>
            <div className="skill__styling">
              <svg
                className="w-[40px] md:w-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 74"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.025 58.4024L21.4942 68.0938C21.2676 68.1625 21.027 68.1713 20.7959 68.1193C20.5649 68.0672 20.3513 67.9562 20.176 67.7971C20.0007 67.6379 19.8697 67.4361 19.7958 67.2112C19.7219 66.9864 19.7076 66.7462 19.7543 66.5142L31.3779 10.4431C31.4271 10.2141 31.5468 10.0062 31.7203 9.84867C31.8938 9.69113 32.1123 9.59187 32.3452 9.56483C32.578 9.5378 32.8135 9.58434 33.0185 9.69793C33.2235 9.81152 33.3878 9.98644 33.4882 10.1981L55.0059 56.2337C55.1023 56.4384 55.1532 56.6616 55.155 56.8878C55.1568 57.1141 55.1094 57.338 55.0162 57.5442C54.9229 57.7504 54.786 57.9339 54.6149 58.082C54.4438 58.2302 54.2425 58.3395 54.025 58.4024ZM59.6047 56.1138L34.6959 2.81095C34.3898 2.1535 33.9101 1.59184 33.3085 1.18632C32.7069 0.780798 32.0061 0.546741 31.2814 0.509297C30.5566 0.459484 29.8322 0.610539 29.1878 0.945822C28.5434 1.2811 28.0042 1.7876 27.6295 2.40953L0.618254 46.511C0.206209 47.1786 -0.00807735 47.9491 0.000232846 48.7334C0.00854305 49.5177 0.23911 50.2836 0.665207 50.9423L13.8747 71.558C14.3725 72.3285 15.1066 72.9171 15.9672 73.2357C16.8277 73.5543 17.7684 73.5857 18.6483 73.3253L56.9935 61.9005C57.5727 61.7319 58.1084 61.4399 58.5637 61.0446C59.0191 60.6493 59.3832 60.16 59.6312 59.6105C59.8791 59.061 60.0049 58.4643 59.9999 57.8616C59.9948 57.2588 59.8591 56.6643 59.6021 56.119L59.6047 56.1138Z"
                  fill="#000000"
                />
              </svg>
              <h3 className="">Prisma</h3>
            </div>
          </div>
        </section>
      </div>
      {/* Projects Section */}
      <section
        id="projects"
        className="section__styles py-[72px] flex flex-col items-center gap-8"
      >
        <h1 className="text-2xl text-center text-neutral-800 heading font-bold">
          Latest Projects
        </h1>
        <div className="divider"></div>

        {/* Projects Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Project 1 */}
          <div className="flex flex-col w-full gap-4 text-neutral-800 lg:max-w-[484px] bg-white shadow-2xl">
            {/* Project IMG */}
            <div className=" project-1 project-img"></div>
            {/* Decription and buttons */}
            <div className="flex flex-col gap-4 items-center p-4 lg:h-full justify-between">
              {/* Desc */}
              <div className="flex flex-col text-start">
                {/* Title */}
                <h3 className="text-2xl font-bold">Amphion</h3>
                {/* Text */}
                <p className="text-lg">
                  An original project consisting of a landing page and a
                  shopping page where users can browse & filter through a
                  selection of headphones, and add them to their cart
                  <br />
                  <br />
                  After that, users can go to the checkout page, where the total
                  price is calculated along with all the items the users have in
                  their carts. The project is connected to the PayPal API and
                  uses it for checkout.
                  <br />
                  <br /> <span className="font-bold">Built with: </span>NextJS
                  13, ReactJS, Typescript, Prisma, Paypal API, Tailwind, DaisyUI
                </p>
              </div>
              {/* Buttons */}
              <div className="w-full flex gap-4 items-center justify-center">
                <a
                  href="https://github.com/Sohyb01/Amphion/tree/main"
                  target="_blank"
                  className="button-styles text-white bg-black border-black hover:text-black hover:bg-white duration-100 w-full"
                >
                  Project Code
                </a>
                <a
                  href="https://amphion-x8zv.vercel.app/"
                  target="_blank"
                  className="button-styles text-black bg-white border-black hover:text-white hover:bg-black duration-100 w-full"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
          {/* Project 2*/}
          <div className="flex flex-col w-full gap-4 text-neutral-800 lg:max-w-[484px] bg-white shadow-2xl">
            {/* Project IMG */}
            <div className="project-2 project-img"></div>
            {/* Decription and buttons */}
            <div className="flex flex-col gap-4 items-center p-4 lg:h-full justify-between">
              {/* Desc */}
              <div className="flex flex-col text-start">
                {/* Title */}
                <h3 className="text-2xl font-bold">CarHub</h3>
                {/* Text */}
                <p className="text-lg">
                  A project that showcases multiple cars to rent, using data &
                  images pulled from an external API. The car image, name,
                  model, manufacturer and more are displayed. <br />
                  <br />
                  The project includes a filtering function which allows you to
                  filter cars based on their model, manufacturer, etc. <br />
                  <br />
                  <span className="font-bold">Built with: </span>NextJS,
                  ReactJS, APIs, Tailwind
                </p>
              </div>
              {/* Buttons */}
              <div className="w-full flex gap-4 items-center justify-center">
                <a
                  href="https://github.com/Sohyb01/Car-Hub/tree/main"
                  target="_blank"
                  className="button-styles text-white bg-black border-black hover:text-black hover:bg-white duration-100 w-full"
                >
                  Project Code
                </a>
                <a
                  href="https://car-hub-gilt-gamma.vercel.app/"
                  target="_blank"
                  className="button-styles text-black bg-white border-black hover:text-white hover:bg-black duration-100 w-full"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
          {/* Project 3*/}
          <div className="flex flex-col w-full gap-4 text-neutral-800 lg:max-w-[484px] bg-white shadow-2xl">
            {/* Project IMG */}
            <div className="project-3 project-img"></div>
            {/* Decription and buttons */}
            <div className="flex flex-col gap-4 items-center p-4 lg:h-full justify-between">
              {/* Desc */}
              <div className="flex flex-col text-start">
                {/* Title */}
                <h3 className="text-2xl font-bold">Space Tourism</h3>
                {/* Text */}
                <p className="text-lg">
                  A basic React app with multiple pages with data that is being
                  displayed using the map function, with routing implemented
                  using react-router-dom.
                </p>
              </div>
              {/* Buttons */}
              <div className="w-full flex gap-4 items-center justify-center">
                <a
                  href="https://github.com/Sohyb01/sohyb01.github.io"
                  target="_blank"
                  className="button-styles text-white bg-black border-black hover:text-black hover:bg-white duration-100 w-full"
                >
                  Project Code
                </a>
                <a
                  href="https://sohyb01.github.io/"
                  target="_blank"
                  className="button-styles text-black bg-white border-black hover:text-white hover:bg-black duration-100 w-full"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="section__styles py-[72px] flex flex-col items-center text-center gap-8"
      >
        <h1 className="text-2xl text-center text-neutral-800 heading font-bold">
          About me
        </h1>
        <div className="divider"></div>

        {/* Paragraphs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Individual Paragraphs */}
          <div className="flex flex-col lg:w-[484px] items-center gap-2">
            {/* Label */}
            <h3 className="text-center text-lg text-neutral-800 font-bold w-full">
              Education & Background
            </h3>
            <div className="divider"></div>
            <p className="text-start text-lg">
              I graduated in 2023 with a Bachelors of science in Artificial
              Intelligence. I spent a lot of my time in college learning about
              programming, software, and web development.
            </p>
          </div>
          <div className="flex flex-col lg:w-[484px] items-center gap-2">
            {/* Label */}
            <h3 className="text-center text-lg text-neutral-800 font-bold w-full">
              Who I am
            </h3>
            <div className="divider"></div>
            <p className="text-start text-lg">
              The people I’ve worked with describe me as focused, reliable,
              humble, laid back, flexible, and great at communication. When I
              work, I prioritize quality without neglecting speed and
              efficiency, and I work very well under pressure.
            </p>
          </div>
          <div className="flex flex-col lg:w-[484px] items-center gap-2">
            {/* Label */}
            <h3 className="text-center text-lg text-neutral-800 font-bold w-full">
              What I do
            </h3>
            <div className="divider"></div>
            <p className="text-start text-lg">
              I’m a full-stack developer who loves turning designs into real
              products, learning new skills, and working with others to deliver
              great work. I also do work on the side to help friends, family, &
              acquaintances.
            </p>
          </div>

          <div className="flex flex-col lg:w-[484px] items-center gap-2">
            {/* Label */}
            <h3 className="text-center text-lg text-neutral-800 font-bold w-full">
              What I&apos;m looking for
            </h3>
            <div className="divider"></div>
            <p className="text-start text-lg">
              I’m searching for an opportunity to work at a company as a web
              developer, where my priority will be to learn from others, provide
              value, and acquire skills and experience.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <div className="w-full bg-slate-200">
        <section
          id="contact"
          className="section__styles py-[72px] mx-auto flex flex-col gap-8"
        >
          {/* Header */}
          <h1 className="text-2xl text-center text-neutral-800 heading font-bold">
            Contact Me
          </h1>
          {/* Footer Content Container */}
          <div className="flex flex-col gap-8 items-center justify-center w-full h-fit">
            {/* Socials container */}
            <div className="flex flex-wrap lg:items-start gap-8 gap-y-2 justify-center w-auto text-neutral-800">
              <div className="flex gap-2 items-center justify-center fill-neutral-800">
                <svg
                  className="w-[20px] fill-inherit"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 14"
                >
                  <path
                    className="fill-inherit"
                    d="M17.6667 0H2.66669C1.28583 0 0.166687 1.04453 0.166687 2.33333V11.6667C0.166687 12.9555 1.28583 14 2.66669 14H17.6667C19.0475 14 20.1667 12.9555 20.1667 11.6667V2.33333C20.1667 1.04453 19.0456 0 17.6667 0ZM2.66669 1.75H17.6667C18.0113 1.75 18.2917 2.0117 18.2917 2.33333V3.14125L11.7761 8.17615C10.8702 8.87906 9.45809 8.8787 8.55458 8.17671L2.04169 3.14271V2.33333C2.04169 2.0125 2.32216 1.75 2.66669 1.75ZM17.6667 12.25H2.66669C2.32208 12.25 2.04169 11.9883 2.04169 11.6667V5.42135L7.35809 9.55573C8.14716 10.1646 9.14325 10.5 10.1667 10.5C11.1901 10.5 12.1882 10.165 12.978 9.55281L18.2917 5.42135V11.6667C18.2917 11.9875 18.0104 12.25 17.6667 12.25Z"
                  />
                </svg>
                <p>sohyb0155@gmail.com</p>
              </div>
              <a
                href="https://www.linkedin.com/in/sohyb-mansour-b237961ba/"
                className="flex gap-2 items-center justify-center fill-neutral-800 hover:text-neutral-600 hover:fill-neutral-600 duration-100"
              >
                <svg
                  className="w-[20px] fill-inherit"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 20"
                >
                  <path
                    className="fill-inherit"
                    d="M18.9047 0H1.75742C0.971706 0 0.333313 0.647322 0.333313 1.44196V18.558C0.333313 19.3527 0.971706 20 1.75742 20H18.9047C19.6905 20 20.3333 19.3527 20.3333 18.558V1.44196C20.3333 0.647322 19.6905 0 18.9047 0ZM6.37796 17.1429H3.41367V7.59821H6.38242V17.1429H6.37796ZM4.89581 6.29464C3.94492 6.29464 3.17706 5.52232 3.17706 4.57589C3.17706 3.62946 3.94492 2.85714 4.89581 2.85714C5.84224 2.85714 6.61456 3.62946 6.61456 4.57589C6.61456 5.52679 5.84671 6.29464 4.89581 6.29464V6.29464ZM17.4896 17.1429H14.5253V12.5C14.5253 11.3929 14.503 9.96875 12.9851 9.96875C11.4405 9.96875 11.2038 11.1741 11.2038 12.4196V17.1429H8.23956V7.59821H11.0833V8.90179H11.1235C11.5208 8.15179 12.4896 7.36161 13.9315 7.36161C16.9315 7.36161 17.4896 9.33929 17.4896 11.9107V17.1429V17.1429Z"
                  />
                </svg>
                <p>Linkedin</p>
              </a>
              <a
                href="https://wa.me/201023717157"
                className="flex gap-2 items-center justify-center fill-neutral-800 hover:text-neutral-600 hover:fill-neutral-600 duration-100"
              >
                <svg
                  className="w-[20px] fill-inherit"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 20"
                >
                  <path
                    className="fill-inherit"
                    d="M17.3378 2.90625C15.4672 1.03125 12.9762 0 10.3288 0C4.86456 0 0.418134 4.44643 0.418134 9.91071C0.418134 11.6563 0.873492 13.3616 1.73956 14.8661L0.333313 20L5.58778 18.6205C7.03421 19.4107 8.66367 19.8259 10.3244 19.8259H10.3288C15.7887 19.8259 20.3333 15.3795 20.3333 9.91518C20.3333 7.26786 19.2083 4.78125 17.3378 2.90625V2.90625ZM10.3288 18.1563C8.84671 18.1563 7.39581 17.7589 6.13242 17.0089L5.83331 16.8304L2.71724 17.6473L3.5476 14.6071L3.35117 14.2946C2.52528 12.9821 2.09224 11.4688 2.09224 9.91071C2.09224 5.37054 5.78867 1.67411 10.3333 1.67411C12.5342 1.67411 14.6012 2.53125 16.1547 4.08929C17.7083 5.64732 18.6637 7.71429 18.6592 9.91518C18.6592 14.4598 14.869 18.1563 10.3288 18.1563V18.1563ZM14.8467 11.9866C14.6012 11.8616 13.3824 11.2634 13.1547 11.183C12.9271 11.0982 12.7619 11.058 12.5967 11.308C12.4315 11.558 11.9583 12.1116 11.811 12.2813C11.6681 12.4464 11.5208 12.4688 11.2753 12.3438C9.81992 11.6161 8.86456 11.0446 7.90474 9.39732C7.65028 8.95982 8.15921 8.99107 8.63242 8.04464C8.71278 7.87946 8.6726 7.73661 8.6101 7.61161C8.5476 7.48661 8.05206 6.26786 7.84671 5.77232C7.64581 5.29018 7.44046 5.35714 7.28867 5.34821C7.14581 5.33929 6.98063 5.33929 6.81546 5.33929C6.65028 5.33929 6.38242 5.40179 6.15474 5.64732C5.92706 5.89732 5.28867 6.49554 5.28867 7.71429C5.28867 8.93304 6.17706 10.1116 6.2976 10.2768C6.4226 10.442 8.04313 12.942 10.5297 14.0179C12.1012 14.6964 12.7172 14.7545 13.503 14.6384C13.9806 14.567 14.9672 14.0402 15.1726 13.4598C15.378 12.8795 15.378 12.3839 15.3155 12.2813C15.2574 12.1696 15.0922 12.1071 14.8467 11.9866Z"
                  />
                </svg>
                <p>Whatsapp</p>
              </a>
              <a
                href="https://github.com/Sohyb01"
                className="flex gap-2 items-center justify-center fill-neutral-800 hover:text-neutral-600 hover:fill-neutral-600 duration-100"
              >
                <svg
                  className="w-[20px] fill-inherit"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                >
                  <path
                    className="fill-inherit"
                    d="M20.0685 48.3119C20.0685 48.56 19.7903 48.7586 19.4395 48.7586C19.0403 48.7958 18.7621 48.5973 18.7621 48.3119C18.7621 48.0638 19.0403 47.8653 19.3911 47.8653C19.754 47.828 20.0685 48.0266 20.0685 48.3119ZM16.3065 47.7536C16.2218 48.0017 16.4637 48.2871 16.8266 48.3615C17.1411 48.4856 17.504 48.3615 17.5766 48.1134C17.6492 47.8653 17.4194 47.5799 17.0565 47.4683C16.7419 47.3814 16.3911 47.5055 16.3065 47.7536ZM21.6532 47.5427C21.3024 47.6295 21.0605 47.8653 21.0968 48.1506C21.1331 48.3988 21.4476 48.56 21.8105 48.4732C22.1613 48.3864 22.4032 48.1506 22.3669 47.9025C22.3306 47.6668 22.004 47.5055 21.6532 47.5427ZM29.6129 0C12.8347 0 0 13.0643 0 30.2725C0 44.0316 8.44355 55.8056 20.504 59.9495C22.0524 60.2348 22.5968 59.2547 22.5968 58.4482C22.5968 57.679 22.5605 53.4359 22.5605 50.8305C22.5605 50.8305 14.0927 52.6915 12.3145 47.1333C12.3145 47.1333 10.9355 43.5229 8.95161 42.5924C8.95161 42.5924 6.18145 40.6445 9.14516 40.6818C9.14516 40.6818 12.1573 40.9299 13.8145 43.8827C16.4637 48.6717 20.9032 47.2946 22.6331 46.4757C22.9113 44.4906 23.6976 43.1135 24.5685 42.2946C17.8065 41.5254 10.9839 40.5205 10.9839 28.5852C10.9839 25.1733 11.9032 23.4612 13.8387 21.2776C13.5242 20.4711 12.496 17.1461 14.1532 12.8534C16.6815 12.047 22.5 16.2032 22.5 16.2032C24.9194 15.5084 27.5202 15.1487 30.0968 15.1487C32.6734 15.1487 35.2742 15.5084 37.6936 16.2032C37.6936 16.2032 43.5121 12.0346 46.0403 12.8534C47.6976 17.1585 46.6694 20.4711 46.3548 21.2776C48.2903 23.4736 49.4758 25.1857 49.4758 28.5852C49.4758 40.5577 42.3508 41.513 35.5887 42.2946C36.7016 43.2748 37.6452 45.1358 37.6452 48.0514C37.6452 52.2324 37.6089 57.4061 37.6089 58.4234C37.6089 59.2299 38.1653 60.21 39.7016 59.9246C51.7984 55.8056 60 44.0316 60 30.2725C60 13.0643 46.3911 0 29.6129 0ZM11.7581 42.7909C11.6008 42.915 11.6371 43.2003 11.8427 43.4361C12.0363 43.6346 12.3145 43.7214 12.4718 43.5601C12.629 43.4361 12.5927 43.1507 12.3871 42.915C12.1935 42.7165 11.9153 42.6296 11.7581 42.7909ZM10.4516 41.786C10.3669 41.9472 10.4879 42.1458 10.7298 42.2698C10.9234 42.3939 11.1653 42.3567 11.25 42.183C11.3347 42.0217 11.2137 41.8232 10.9718 41.6991C10.7298 41.6247 10.5363 41.6619 10.4516 41.786ZM14.371 46.2028C14.1774 46.3641 14.25 46.7363 14.5282 46.972C14.8065 47.2573 15.1573 47.2946 15.3145 47.096C15.4718 46.9348 15.3992 46.5626 15.1573 46.3268C14.8911 46.0415 14.5282 46.0043 14.371 46.2028ZM12.9919 44.379C12.7984 44.503 12.7984 44.8256 12.9919 45.111C13.1855 45.3963 13.5121 45.5204 13.6694 45.3963C13.8629 45.235 13.8629 44.9125 13.6694 44.6271C13.5 44.3418 13.1855 44.2177 12.9919 44.379Z"
                  />
                </svg>
                <p>Github</p>
              </a>
            </div>
            <div className="w-full h-[1px] bg-neutral-400 rounded-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
