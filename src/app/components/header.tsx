import Link from "next/link"
export default function Header(){
  return (
<> <header className="text-white bg-blue-700 body-font" style={{ userSelect: "none" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <span className="ml-3 text-3xl text-white font-extrabold "><Link href="/hero">Portfolio </Link></span>
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/hero" className="mr-5 hover:font-bold hover:text-white transform hover:scale-110 duration-300">Home</Link>
          <Link href="/about" className="mr-5 hover:font-bold hover:text-white transform hover:scale-110 duration-300"> Projects</Link>
          <Link href="/contact" className="mr-5 hover:font-bold hover:text-white hover:scale-110 duration-300 ">Contact</Link>

        </nav>
        <button  className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-transparent text-white hover:scale-110 hover:font-bold duration-300 rounded text-base mt-4 md:mt-0" >
          <Link href="/contact">HIRE ME</Link>
         
        </button>
      </div>
    </header>
    </>
  )
} 
  
 