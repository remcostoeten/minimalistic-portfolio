'use client';
import React from "react";

export default function Grid() {
    return (
        <div className="px-5">
            <section className="flex max-md:flex-col max-md:items-stretch">
                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col w-[360px]">
                        <div className="bg-neutral-200 self-stretch flex w-full flex-col pl-3.5 pr-3.5 pt-10 pb-5 rounded-2xl">
                            <div className="self-stretch flex w-full flex-col bg-neutral-300 pt-5 pb-7 px-5 rounded-xl">
                                <div className="flex w-full flex-grow flex-col w-[741px] max-md:max-w-full items-start justify-between">
                                    <div className="text-black text-xs">2014 - 2016</div>
                                    <div className="text-black text-base">
                                        Pleio <br /> Frontend developer <br />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex w-full h-[81px] flex-col rounded-xl max-md:mr-0.5" />
                            <div className="self-stretch flex w-full h-[81px] flex-col bg-neutral-300 rounded-xl" />
                            <div className="bg-neutral-300 self-stretch flex w-full pr-0 flex-col mt-3 pl-0.5 rounded-xl max-md:mr-0.5">
                                <div className="self-stretch z-[1] flex w-full h-[81px] flex-col bg-neutral-300 rounded-xl" />
                            </div>
                        </div>
                        <div className="self-stretch flex items-start justify-between">
                            <div className="bg-zinc-300 flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-2xl" />
                            <div className="bg-neutral-200 flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-2xl" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[67%] max-md:w-full">
                    <div className="flex grow flex-col w-[741px] max-md:max-w-full">
                        <div className="self-stretch max-md:max-w-full max-md:mr-0.5">
                            <section className="flex max-md:flex-col max-md:items-stretch">
                                <div className="flex flex-col items-stretch w-[38%] max-md:w-full">
                                    <div className="border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-neutral-200 flex w-[270px] max-w-full grow flex-col mx-auto pt-14 pb-16 px-5 rounded-2xl border-solid border-white border-opacity-0">
                                        {/* Symbol component goes here */}
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[62%] max-md:w-full">
                                    <div className="border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-stone-400 flex w-[448px] h-[234px] flex-col mx-auto rounded-2xl border-solid border-white border-opacity-0 max-md:max-w-full" />
                                </div>
                            </section>
                        </div>
                        <div className="border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-neutral-200 self-stretch flex w-full flex-col-reverse rounded-2xl border-solid border-white border-opacity-0 max-md:max-w-fullC h-full" />
                    </div>
                </div>
            </section>
        </div>
    );
}
