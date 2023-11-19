'use client';
import { phoneNumber } from '@/config/data';
import { fadeInDelays100 } from '@/lib/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Dropdown from '../core/Dropdown';
import Logo from '../core/Logo';
import { SubTitle } from '../core/Typography';
import SwappingWords from '../effects/SwappingWords';

export default function RippedNav() {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <>
            <motion.nav className="style-0" data-framer-name="Desktop" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: fadeInDelays100[4],
                    delay: fadeInDelays100[2],
                }}
            >  <span className="wave absolute -right-10 -top-2" style={{ fontSize: '50px' }}>
                    👋
                </span>
                <div className="style-1" data-framer-name="Nav">
                    <div className="style-2" data-framer-name="Logo & Links">
                        <div className="style-3" data-framer-name="Logo">
                            <div className="style-4" data-framer-name="Logo">
                                <div className="style-5">

                                    <div className="style-6" >
                                        <a
                                            className="style-7"
                                            href="/"
                                            data-framer-name="Large"
                                        >
                                            <div className="!bg-[#E5E5E5] style-8" data-framer-name="Button">
                                                <div className="style-10" >
                                                    <Logo />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SubTitle isGeist>
                            <SwappingWords
                                words={[
                                    'Divjesschuiver',
                                    'Aspiring fullstack',
                                    'Recovering Magento dev',
                                    'UI enthousiast',
                                ]}
                                interval={4000} />
                        </SubTitle>
                        <div className="style-14" data-framer-name="Links">
                            <div
                                className="style-15"
                                data-framer-component-type="RichTextContainer"
                            >
                                <p className="style-16">
                                    <a
                                        className="style-17"
                                        data-styles-preset="stylesPresetLink"
                                        href="#work"
                                    >
                                        Works
                                    </a>
                                </p>
                            </div>
                            <div
                                className="style-18"
                                data-framer-component-type="RichTextContainer"
                            >
                                <p className="style-19">
                                    <a
                                        className="style-20"
                                        data-styles-preset="stylesPresetLink"
                                        href="#articles"
                                    >
                                        Articles
                                    </a>
                                </p>
                            </div>
                            <div
                                className="style-21"
                                data-framer-component-type="RichTextContainer"
                            >
                                <p className="style-22">
                                    <a
                                        className="style-23"
                                        data-styles-preset="stylesPresetLink"
                                        href="#about"
                                    >
                                        About
                                    </a>
                                </p>
                            </div>
                            <Dropdown />
                        </div>
                    </div>
                    <div className="style-38" data-framer-name="Social Links & Buttons">
                        <div className="style-39" data-framer-name="Social Links">
                            <div className="style-40">
                                <div className="style-41" tabIndex={0}>
                                    <Link className='flex items-center justify-center' href={whatsappUrl} target='_blank'>
                                        <div className="!bg-[#262626] style-43 flex items-center justify-center social-circel" >
                                            <div
                                                className="style-44"
                                            >
                                                <div className="!bg-[#262626] style-45 social-circel">
                                                    <svg
                                                        style={{ transform: 'translate(7px,2px)' }}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="#e5e5e5"
                                                        version="1.1"
                                                        viewBox="0 0 30.667 30.667"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path d="M30.667 14.939c0 8.25-6.74 14.938-15.056 14.938a15.1 15.1 0 01-7.276-1.857L0 30.667l2.717-8.017a14.787 14.787 0 01-2.159-7.712C.559 6.688 7.297 0 15.613 0c8.315.002 15.054 6.689 15.054 14.939zM15.61 2.382c-6.979 0-12.656 5.634-12.656 12.56 0 2.748.896 5.292 2.411 7.362l-1.58 4.663 4.862-1.545c2 1.312 4.393 2.076 6.963 2.076 6.979 0 12.658-5.633 12.658-12.559C28.27 8.016 22.59 2.382 15.61 2.382zm7.604 15.998c-.094-.151-.34-.243-.708-.427-.367-.184-2.184-1.069-2.521-1.189-.34-.123-.586-.185-.832.182-.243.367-.951 1.191-1.168 1.437-.215.245-.43.276-.799.095-.369-.186-1.559-.57-2.969-1.817-1.097-.972-1.838-2.169-2.052-2.536-.217-.366-.022-.564.161-.746.165-.165.369-.428.554-.643.185-.213.246-.364.369-.609.121-.245.06-.458-.031-.643-.092-.184-.829-1.984-1.138-2.717-.307-.732-.614-.611-.83-.611-.215 0-.461-.03-.707-.03s-.646.089-.983.456-1.291 1.252-1.291 3.054c0 1.804 1.321 3.543 1.506 3.787.186.243 2.554 4.062 6.305 5.528 3.753 1.465 3.753.976 4.429.914.678-.062 2.184-.885 2.49-1.739.308-.858.308-1.593.215-1.746z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="style-48">
                                <div className="style-49" tabIndex={0}>
                                    <a
                                        className="style-50"
                                        data-framer-name="Medium"
                                        data-highlight="true"
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener"
                                        tabIndex={0}
                                    >
                                        <div className="!bg-[#262626]  style-51" data-framer-name="Button">
                                            <div className="style-52">
                                                <div className="style-53">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 256 256"
                                                        focusable="false"
                                                        color='var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82)) /* {"name":"text-secondary"} */'
                                                        className="style-54"
                                                    >
                                                        <g
                                                            color='var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82)) /* {"name":"text-secondary"} */'
                                                            weight="regular"
                                                            className="style-55"
                                                        >
                                                            <path
                                                                d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
                                                                className="style-56"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="style-57">
                                <div className="style-58" tabIndex={0}>
                                    <a
                                        className="style-59"
                                        data-framer-name="Medium"
                                        data-highlight="true"
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener"
                                        tabIndex={0}
                                    >
                                        <div className="!bg-[#262626] style-60" data-framer-name="Button">
                                            <div className="style-61">
                                                <div className="style-62">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 256 256"
                                                        focusable="false"
                                                        color='var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82)) /* {"name":"text-secondary"} */'
                                                        className="style-63"
                                                    >
                                                        <g
                                                            color='var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82)) /* {"name":"text-secondary"} */'
                                                            weight="regular"
                                                            className="style-64"
                                                        >
                                                            <path
                                                                d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                                                                className="style-65"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" style-66" data-framer-name="Buttons">
                            <div className="style-67 ">
                                <div className="style-68 " tabIndex={0}>
                                    <a
                                        className="style-69 text-black !bg-[#E5E5E5]"
                                        data-framer-name="Small"
                                        href="https://cal.com"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <div
                                            className="style-70"
                                            data-framer-component-type="RichTextContainer"
                                        >
                                            <p className="">Let's Talk</p>
                                        </div>
                                        <div className="style-72">
                                            <div className="style-73">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 256"
                                                    focusable="false"
                                                    color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                                                    className="style-74"
                                                >
                                                    <g
                                                        color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                                                        weight="regular"
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </motion.nav >
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .style-0 {\n        backdrop-filter: blur(40px);\n        background-color: var(--token-87dc011e-b53b-471d-8540-422b5d646acd, rgba(229, 229, 229, 0.4));\n        border-radius: 20px;\n        width: 100%;\n        opacity: 1;\n        background-color: rgba(21, 21, 21, 0.6);\n        border-radius: 20px;\n        width: 100%;\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 0px;\n        height: 80px;\n        padding: 20px;\n        position: relative;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-1 {\n        opacity: 1;\n        place-content: center space-between;\n        align-items: center;\n        display: flex;\n        flex: 1 0 0px;\n        flex-flow: row nowrap;\n        height: 47.9972px;\n        max-width: 1200px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: 1px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-2 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 24px;\n        height: 47.9972px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-3 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 0px;\n        height: 47.9972px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-4 {\n        opacity: 1;\n        place-content: center flex-start;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 47.9972px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-5 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: auto;\n        position: relative;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-6 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-7 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        cursor: pointer;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 47.9972px;\n        padding: 0px;\n        position: relative;\n        text-decoration: none solid rgb(0, 0, 238);\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-8 {\n        background-color: var(--token-068f191f-114d-4a0c-90b7-266a3f26c83a, rgb(23, 23, 23));\n        filter: invert(0);\n        opacity: 1;\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        border-radius: 90px;\n        place-content: center;\n        align-items: center;\n        aspect-ratio: 1 / 1;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 0px;\n        height: 47.9972px;\n        overflow: hidden;\n        padding: 0px;\n        position: relative;\n        width: 48px;\n        will-change: transform;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-9 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: 23.9915px;\n        position: relative;\n        width: 24px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-10 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-11 {\n        user-select: none;\n        width: 100%;\n        height: 100%;\n        display: inline-block;\n        fill: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        color: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        flex-shrink: 0;\n        width: 100%;\n        height: 23.9915px;\n        display: inline-block;\n        fill: rgb(14, 14, 14);\n        color: rgb(14, 14, 14);\n        flex-shrink: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-12 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-13 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-14 {\n        opacity: 1;\n        place-content: center flex-start;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 16px;\n        height: 21.5909px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-15 {\n        outline: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        position: relative;\n        flex: 0 0 auto;\n        height: auto;\n        white-space: pre;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-16 {\n        --font-selector: R0Y7TnVuaXRvLXJlZ3VsYXI=;\n        --framer-font-family: &quot;\n        Nunito&quot;\n        ,\n        &quot;\n        Nunito Placeholder&quot;\n        ,\n        sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        --framer-font-family: 'Nunito', 'Nunito Placeholder', sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(163, 163, 163);\n        font-size: 18px;\n        letter-spacing: normal;\n        text-transform: none;\n        text-decoration: none solid rgb(163, 163, 163);\n        line-height: 21.6px;\n        text-align: start;\n        margin: 0px;\n        padding: 0px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-17 {\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(163, 163, 163);\n        font-size: 18px;\n        text-transform: none;\n        text-decoration: none solid rgb(163, 163, 163);\n        cursor: pointer;\n        --framer-link-current-text-color: 1;\n        --framer-link-current-text-decoration: none;\n        --framer-link-hover-text-color: 1;\n        --framer-link-hover-text-decoration: none;\n        --framer-link-text-color: 1;\n        --framer-link-text-decoration: none;\n        transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-18 {\n        outline: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-29d5fa41-98fc-48b2-aedf-a26eb08f305f, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-29d5fa41-98fc-48b2-aedf-a26eb08f305f, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        position: relative;\n        flex: 0 0 auto;\n        height: auto;\n        white-space: pre;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-19 {\n        --font-selector: R0Y7TnVuaXRvLXJlZ3VsYXI=;\n        --framer-font-family: &quot;\n        Nunito&quot;\n        ,\n        &quot;\n        Nunito Placeholder&quot;\n        ,\n        sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        --framer-font-family: 'Nunito', 'Nunito Placeholder', sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(82, 82, 82);\n        font-size: 18px;\n        letter-spacing: normal;\n        text-transform: none;\n        text-decoration: none solid rgb(82, 82, 82);\n        line-height: 21.6px;\n        text-align: start;\n        margin: 0px;\n        padding: 0px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-20 {\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(163, 163, 163);\n        font-size: 18px;\n        text-transform: none;\n        text-decoration: none solid rgb(163, 163, 163);\n        cursor: pointer;\n        --framer-link-current-text-color: 1;\n        --framer-link-current-text-decoration: none;\n        --framer-link-hover-text-color: 1;\n        --framer-link-hover-text-decoration: none;\n        --framer-link-text-color: 1;\n        --framer-link-text-decoration: none;\n        transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-21 {\n        outline: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-29d5fa41-98fc-48b2-aedf-a26eb08f305f, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-29d5fa41-98fc-48b2-aedf-a26eb08f305f, rgb(82, 82, 82));\n        --framer-paragraph-spacing: 0px;\n        transform: none;\n        opacity: 1;\n        position: relative;\n        flex: 0 0 auto;\n        height: auto;\n        white-space: pre;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-22 {\n        --font-selector: R0Y7TnVuaXRvLXJlZ3VsYXI=;\n        --framer-font-family: &quot;\n        Nunito&quot;\n        ,\n        &quot;\n        Nunito Placeholder&quot;\n        ,\n        sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        --framer-font-family: 'Nunito', 'Nunito Placeholder', sans-serif;\n        --framer-font-size: 18px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(82, 82, 82);\n        font-size: 18px;\n        letter-spacing: normal;\n        text-transform: none;\n        text-decoration: none solid rgb(82, 82, 82);\n        line-height: 21.6px;\n        text-align: start;\n        margin: 0px;\n        padding: 0px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-23 {\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(163, 163, 163);\n        font-size: 18px;\n        text-transform: none;\n        text-decoration: none solid rgb(163, 163, 163);\n        cursor: pointer;\n        --framer-link-current-text-color: 1;\n        --framer-link-current-text-decoration: none;\n        --framer-link-hover-text-color: 1;\n        --framer-link-hover-text-decoration: none;\n        --framer-link-text-color: 1;\n        --framer-link-text-decoration: none;\n        transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-24 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: 43.9915px;\n        left: 470px;\n        position: absolute;\n        top: 1.98864px;\n        width: 220px;\n        z-index: 1;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-25 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-26 {\n        background-color: var(--token-b0e9fe13-e947-42c8-a3e7-3ed6a792ffd5, rgb(212, 212, 212));\n        border-radius: 8px;\n        height: 100%;\n        width: 100%;\n        opacity: 1;\n        border-radius: 8px;\n        height: 43.9915px;\n        width: 100%;\n        opacity: 1;\n        place-content: center flex-start;\n        align-items: center;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 10px;\n        overflow: hidden;\n        padding: 0px 16px;\n        position: relative;\n        will-change: transform;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-27 {\n        image-rendering: pixelated;\n        flex-shrink: 0;\n        opacity: 0.85;\n        flex-shrink: 0;\n        opacity: 0.85;\n        position: relative;\n        flex: 0 0 auto;\n        height: 21.9886px;\n        width: 22px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-28 {\n        width: 100%;\n        height: 100%;\n        aspect-ratio: inherit;\n        height: 21.9886px;\n        aspect-ratio: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-29 {\n        width: 100%;\n        height: 100%height:21.9886px;\n        display: block;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-30 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-31 {\n        outline: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-fa4c25be-69be-4d7c-9dd2-a2acdeb91e59, rgb(23, 23, 23));\n        --framer-link-text-color: rgb(0, 153, 255);\n        --framer-link-text-decoration: underline;\n        --framer-paragraph-spacing: 0px;\n        opacity: 0.85;\n        transform: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--token-fa4c25be-69be-4d7c-9dd2-a2acdeb91e59, rgb(23, 23, 23));\n        --framer-link-text-color: rgb(0, 153, 255);\n        --framer-link-text-decoration: underline;\n        --framer-paragraph-spacing: 0px;\n        opacity: 0.85;\n        transform: none;\n        position: relative;\n        flex: 0 0 auto;\n        height: auto;\n        white-space: pre;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-32 {\n        --font-selector: R0Y7TnVuaXRvLXJlZ3VsYXI=;\n        --framer-font-family: &quot;\n        Nunito&quot;\n        ,\n        &quot;\n        Nunito Placeholder&quot;\n        ,\n        sans-serif;\n        --framer-font-size: 18px;\n        --framer-line-height: 22px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        --framer-font-family: 'Nunito', 'Nunito Placeholder', sans-serif;\n        --framer-font-size: 18px;\n        --framer-line-height: 22px;\n        --framer-text-color: var(--extracted-r6o4lv);\n        font-family: Nunito, 'Nunito Placeholder', sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        color: rgb(245, 245, 245);\n        font-size: 18px;\n        letter-spacing: normal;\n        text-transform: none;\n        text-decoration: none solid rgb(245, 245, 245);\n        line-height: 22px;\n        text-align: start;\n        margin: 0px;\n        padding: 0px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-33 {\n        opacity: 1;\n        cursor: pointer;\n        flex: 0 0 auto;\n        inset: 0px;\n        position: absolute;\n        z-index: 1;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-34 {\n        height: 100%;\n        display: flex;\n        border-radius: 10px;\n        cursor: inherit;\n        overflow: hidden;\n        width: 100%;\n        pointer-events: auto;\n        opacity: 1;\n        display: flex;\n        border-radius: 10px;\n        cursor: pointer;\n        overflow: hidden;\n        width: 100%;\n        pointer-events: auto;\n        opacity: 1;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-35 {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: none;\n        cursor: inherit;\n        color: inherit;\n        border: none;\n        outline: inherit;\n        padding: 0px;\n        height: 43.9915px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        color: rgb(0, 0, 0);\n        border: 0px none rgb(0, 0, 0);\n        outline: rgb(0, 0, 0) none 0px;\n        padding: 0px;\n        font-size: 12px;\n        font-family: sans-serif;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-36 {\n        color: rgba(23, 23, 23, 0);\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-37 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-38 {\n        opacity: 1;\n        place-content: center flex-end;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 48px;\n        height: 47.983px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-39 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 40px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-40 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: auto;\n        position: relative;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-41 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-42 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        cursor: pointer;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 40px;\n        padding: 0px;\n        position: relative;\n        text-decoration: none solid rgb(0, 0, 238);\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-43 {\n        background-color: var(--token-b0e9fe13-e947-42c8-a3e7-3ed6a792ffd5, rgb(212, 212, 212));\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        height: 40px;\n        width: 40px;\n        place-content: center;\n        align-items: center;\n        aspect-ratio: 1 / 1;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 0px;\n        overflow: hidden;\n        padding: 0px;\n        position: relative;\n        will-change: transform;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-44 {\n        image-rendering: pixelated;\n        flex-shrink: 0;\n        opacity: 1;\n        flex-shrink: 0;\n        opacity: 1;\n        position: relative;\n       width: 28px;\n        flex: 0 0 auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-45 {\n        width: 100%;\n        height: 100%;\n        aspect-ratio: inherit;\n              aspect-ratio: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-46 {\n        width: 100%;\n        height: 100%height:20px;\n        display: block;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-47 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-48 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: auto;\n        position: relative;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-49 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-50 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        cursor: pointer;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 40px;\n        padding: 0px;\n        position: relative;\n        text-decoration: none solid rgb(0, 0, 238);\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-51 {\n        background-color: var(--token-b0e9fe13-e947-42c8-a3e7-3ed6a792ffd5, rgb(212, 212, 212));\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        height: 40px;\n        width: 40px;\n        place-content: center;\n        align-items: center;\n        aspect-ratio: 1 / 1;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 0px;\n        overflow: hidden;\n        padding: 0px;\n        position: relative;\n        will-change: transform;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-52 {\n        opacity: 1;\n          width: 20px;\n        flex: 0 0 auto;\n        position: relative;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-53 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-54 {\n        user-select: none;\n        width: 100%;\n        height: 100%;\n        display: inline-block;\n        fill: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        color: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        flex-shrink: 0;\n        width: 100%;\n        \n        display: inline-block;\n        fill: rgb(163, 163, 163);\n        color: rgb(163, 163, 163);\n        flex-shrink: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-55 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-56 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-57 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: auto;\n        position: relative;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-58 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-59 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        cursor: pointer;\n        display: flex;\n        flex-flow: row nowrap;\n        gap: 8px;\n        height: 40px;\n        padding: 0px;\n        position: relative;\n        text-decoration: none solid rgb(0, 0, 238);\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-60 {\n        background-color: var(--token-b0e9fe13-e947-42c8-a3e7-3ed6a792ffd5, rgb(212, 212, 212));\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        border-radius: 90px;\n        filter: invert(0);\n        opacity: 1;\n        height: 40px;\n        width: 40px;\n        place-content: center;\n        align-items: center;\n        aspect-ratio: 1 / 1;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 0px;\n        overflow: hidden;\n        padding: 0px;\n        position: relative;\n        will-change: transform;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-61 {\n        opacity: 1;\n        \n        width: 20px;\n        flex: 0 0 auto;\n        position: relative;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-62 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-63 {\n        user-select: none;\n        width: 100%;\n        height: 100%;\n        display: inline-block;\n        fill: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        color: var(--token-a91ceb05-0965-4cb2-945b-86782aa67eb5, rgb(82, 82, 82));\n        flex-shrink: 0;\n        width: 100%;\n        \n        display: inline-block;\n        fill: rgb(163, 163, 163);\n        color: rgb(163, 163, 163);\n        flex-shrink: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-64 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-65 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-66 {\n        opacity: 1;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex: 0 0 auto;\n        flex-flow: row nowrap;\n        gap: 10px;\n        height: 47.983px;\n        overflow: visible;\n        padding: 0px;\n        position: relative;\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-67 {\n        opacity: 1;\n        flex: 0 0 auto;\n        height: auto;\n        position: relative;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-68 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-69 {\n        background-color: var(--token-068f191f-114d-4a0c-90b7-266a3f26c83a, rgb(23, 23, 23));\n        border-radius: 6px;\n        opacity: 1;\n        border-radius: 6px;\n        opacity: 1;\n        gap: 4px;\n        padding: 14px 20px;\n        place-content: center;\n        align-items: center;\n        display: flex;\n        flex-flow: row nowrap;\n        height: 47.983px;\n        overflow: visible;\n        position: relative;\n        text-decoration: none solid rgb(0, 0, 238);\n        width: min-content;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-70 {\n        outline: none;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--variable-reference-tTpQZ7jCN-SDX2ZhcDB);\n        --framer-paragraph-spacing: 0px;\n        --variable-reference-tTpQZ7jCN-SDX2ZhcDB: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        transform: none;\n        opacity: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        flex-shrink: 0;\n        --extracted-r6o4lv: var(--variable-reference-tTpQZ7jCN-SDX2ZhcDB);\n        --framer-paragraph-spacing: 0px;\n        --variable-reference-tTpQZ7jCN-SDX2ZhcDB: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        transform: none;\n        opacity: 1;\n        position: relative;\n        flex: 0 0 auto;\n        height: auto;\n        white-space: pre;\n        width: auto;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-71 {\n        --font-selector: R0Y7TnVuaXRvLTUwMA==;\n        --framer-font-family: &quot;\n        Nunito&quot;\n        ,\n        sans-serif;\n        --framer-font-weight: 500;\n        --framer-line-\n        --framer-text-alignment: center;\n        --framer-text-color: var(--extracted-r6o4lv);\n        --framer-font-family: 'Nunito', sans-serif;\n        --framer-font-weight: 500;\n        --framer-line-\n        --framer-text-alignment: center;\n        --framer-text-color: var(--extracted-r6o4lv);\n        font-family: Nunito, sans-serif;\n        font-style: normal;\n        font-weight: 500;\n        color: rgb(14, 14, 14);\n        font-size: 16px;\n        letter-spacing: normal;\n        text-transform: none;\n        text-decoration: none solid rgb(14, 14, 14);\n        line-\n        text-align: center;\n        margin: 0px;\n        padding: 0px;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-72 {\n        opacity: 1;\n        \n        width: 20px;\n        flex: 0 0 auto;\n        position: relative;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-73 {\n        display: contents;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-74 {\n        user-select: none;\n        width: 100%;\n        height: 100%;\n        display: inline-block;\n        fill: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        color: var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245));\n        flex-shrink: 0;\n        width: 100%;\n        \n        display: inline-block;\n        fill: rgb(14, 14, 14);\n        color: rgb(14, 14, 14);\n        flex-shrink: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-75 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    .style-76 {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n"
                }}
            />
        </>
    )
}