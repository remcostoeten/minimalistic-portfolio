'use client'
import React, { useState } from 'react'
import { Drawer } from 'vaul'

export default function Contact() {
    return (
        <>
            <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                    <button
                        className="style-69 text-black !bg-[#E5E5E5]"
                    >
                        <div
                            className="style-70"
                            data-framer-component-type="RichTextContainer"
                        >
                            <p className="">Contact</p>
                        </div>
                        <div className="style-72">
     1                         <div className="style-73">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    focusable="false"
                                    color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                                    className="style-74"
                                >
                                    <g
                                        color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                                        className="style-75"
                                    >
                                        <path
                                            d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
                                            className="style-76"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </button>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />huh
                    <Drawer.Content className="z-[999] fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-[#151515]">
                        <Drawer.Close className='text-white text-xl  '>Close</Drawer.Close>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    )
}


