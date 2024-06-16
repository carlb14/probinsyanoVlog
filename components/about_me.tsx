import { Arvo } from "next/font/google";
import Questions_mark from '@/assets/questions_mark';
import Facebook_icon from "@/assets/facebook_icon";
import Youtube_icon from "@/assets/youtube_icon";
const ThinArvoFont = Arvo({ subsets: [], weight: '400' });

export default function About_Me() {
    return (
        <main className="grid place-items-center w-full h-auto p-2">
            <div className="flex flex-col md:flex-row justify-between w-full gap-5 p-1">

                <section className="md:w-1/5 w-full flex justify-center  items-center">
                    <Questions_mark />
                </section>

                <section className="md:w-10/12 w-full flex items-start p-4 flex-col ">
                    <label className={` text-xs text-red-700 mb-3`}>Who am I?</label>

                    <section className=" pb-4">
                        <p className="text-neutral-700 text-contentText">
                            Hello there! I am Marlon Sipocot and a Vlogger since 2022, but still not popular. However its okay because I still pursuing to be a popular vlogger soon, I hope. Please if you may, support me in my Facebook page. And also please keep supporting in my facebook page, if ever you are my supporter back then.
                        </p>
                    </section>

                    <section className="mt-2 ">
                        <label className={` text-xs text-red-700 `}>My Platform</label>
                        <div className="  h-auto">
                            <section className="flex items-center mt-3 gap-2  pb-3">
                                <Facebook_icon className=" shaow-blue-700 shadow-md cursor-pointer rounded-full" />
                                <label className="text-xx text-blue-700">Probinsyano Vlog</label>
                            </section>

                        </div>

                    </section>

                </section>

            </div>

        </main>
    );
}
