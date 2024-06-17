import { Arvo } from "next/font/google";
import GoalIcon from '@/assets/goal';

const ThinArvoFont = Arvo({ subsets: [], weight: '400' });

export default function Goal() {
    return (
        <main className="grid place-items-center w-full h-auto p-2">
            <div className="flex flex-col md:flex-row justify-between w-full gap-5 p-1">

                <section className="md:w-icon_w w-full flex justify-center  items-center">
                    <GoalIcon className="mt-2"/>
                </section>

                <section className="md:w-descriptions_w w-full flex items-start p-4 flex-col ">
                <label className={` text-xs text-red-700 mb-3`}>What&apos;s My Goal?</label>

                    <p className="text-neutral-700 text-contentText">
                    
                    My main goals are to entertain my fans and earn some extra income to support my family, especially since my wife is battling Stage 5 Chronic Kidney Disease. Her medical needs are expensive    , and my current job doesn&apos;t cover everything. So, if you&apos;re able, any sponsorship would be greatly appreciated to help us with her treatment and our daily expenses. Thank you for considering it.
                    </p>
                </section>
            </div>

        </main>
    );
}