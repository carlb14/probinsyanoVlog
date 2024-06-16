import Image from "next/image";
import Logo from '@/assets/logo.jpg'
export default function HeaderNav(){
    return(
        <header className="p-1 shadow-sm  shadow-neutral-300">
            <nav className="p-1  flex justify-between items-center">
                <div className="flex items-center gap-2 ml-3">
                    <Image src={Logo} alt="logo" className="rounded-full  p-1 shadow-sm shadow-neutral-300" style={{width: '40px'}}/>
                    <p className="text-logo  text-black ">Probinsyano Vlogs</p>
                </div>
                <section>
                    <a className="text-sm mr-4   cursor-pointer text-red-700">My Blog</a>
                </section>
            </nav>
        </header>
    );
}