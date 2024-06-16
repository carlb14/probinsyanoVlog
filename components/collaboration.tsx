import { Arvo } from "next/font/google";
import CollaborationIcon from '@/assets/collaboration-icon';



export default function Goal() {
    return (
        <main className="grid place-items-center w-full h-auto p-2 bg-red-700 m:rounded-lg rounded-xl">
            <div className="flex flex-col md:flex-row justify-between w-full gap-5 p-1">

                <section className="md:w-1/5 w-full flex justify-center  items-center">
                    <CollaborationIcon className="mt-2" />
                </section>

                <section className="md:w-10/12 w-full flex items-start p-4 flex-col ">
                    <label className={` text-xs text-gray-100 mb-3`}>Collaboration and Sponsorship</label>


                    <p className="text-neutral-200 text-contentText mt-1">
                        For collaboration opportunities and sponsorships, please feel free to reach out to me via email at marlonsipocot5@gmail.com. Thank you.
                    </p>
                    <div className="border-red-400 border-b w-full my-4">

                    </div>
                    <section>

                        <p className="text-neutral-200 text-contentText mt-1">
                            Gcash number: 0906 410 8789
                        </p>
                        <p className="text-neutral-200 text-contentText mt-1">
                            Gcash name: MARLON S.
                        </p>
                    </section>
                </section>
            </div>

        </main>
    );
}
