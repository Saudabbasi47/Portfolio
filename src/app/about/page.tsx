import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    < >

    <main className="bg-gradient-to-tr from-black to-gray-500 w-screen">
    <h1 className="text-[4rem] font-bold font-mono w-screen text-white text-center py-5 ">MY PROJECTS</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div
                className="h-full bg-image bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                style={{ backgroundImage: "url(/amazon.png)" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className=" flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={"/css.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/html.png"}
                      className="h-[80px] w-[80px]  "
                      alt="css"
                    ></Image>
                  </div>

                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Amazon Homepage Clone
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1"></h2>
                  <p className="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    href={"https://saudabbasi47.github.io/Amazon-Clone/"}
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Bottom Section (Optional) */}
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div
                className="h-full bg-image bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                style={{ backgroundImage: "url(/netflix.png)" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={"/css.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/html.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                  </div>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    NetFlix Homepage Clone
                  </h1>

                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1"></h2>
                  <p className="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    href={"https://saudabbasi47.github.io/Netflix-Clone/"}
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Bottom Section (Optional) */}
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div
                className="h-full bg-image bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                style={{ backgroundImage: "url(/calculator.png)" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={"/css.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/js.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/html.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                  </div>

                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Simple Calculator
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1"></h2>
                  <p className="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    href={"https://saudabbasi47.github.io/Calculator/"}
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Bottom Section (Optional) */}
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div
                className="h-full bg-image bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                style={{ backgroundImage: "url(/qg.png)" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={"/css.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/js.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/html.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                  </div>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Quote Generator
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1"></h2>
                  <p className="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    href={"https://saudabbasi47.github.io/Quote-Generator/"}
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Bottom Section (Optional) */}
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div
                className="h-full bg-image bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                style={{ backgroundImage: "url(/com.png)" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={"/tcss.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/html.png"}
                      className="h-[82px] w-[82px]  "
                      alt="css"
                    ></Image>
                    <Image
                      height={100}
                      width={100}
                      src={"/nextjs.png"}
                      className="h-[100px] w-[100px]  "
                      alt="css"
                    ></Image>
                  </div>

                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Simple Ecommerce Website
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1"></h2>
                  <p className="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    href={"https://ecommerce-nexjs.vercel.app"}
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Bottom Section (Optional) */}
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      </main>
    </>
  );
}
