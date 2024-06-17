import { Arvo } from "next/font/google";
import CollaborationIcon from '@/assets/collaboration-icon';



export default function Goal() {
    return (
        <main className="grid place-items-center w-full h-auto p-2 shadow-sm shadow-neutral-400 md:rounded-lg rounded-xl">
            <div className="flex flex-col md:flex-row justify-between w-full gap-5 p-1">

                <section className="md:w-icon_w w-full flex justify-center  items-center">
                    <CollaborationIcon className="mt-2" />
                </section>

                <section className="md:w-descriptions_w w-full flex items-start p-4 flex-col ">
                    <label className={` text-xs text-red-700 mb-3`}>Collaboration and Sponsorship</label>


                    <p className="text-neutral-700 text-contentText mt-1">
                        For collaboration opportunities and sponsorships, please feel free to reach out to me via email at marlonsipocot5@gmail.com. Thank you.
                    </p>
                    <div className="border-neutral-400 border-b w-full my-4">

                    </div>
                    <section>

                        <p className="text-red-800 text-contentText mt-1">
                            Gcash number: 0906 410 8789
                        </p>
                        <p className="text-red-800 text-contentText mt-1">
                            Gcash name: MARLON S.
                        </p>
                    </section>
                </section>
            </div>

        </main>
    );
}
