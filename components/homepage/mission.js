import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Mission = () => {
    const transition = {
        duration: 1,
        delay: 0.5
    }
    const transition2 = {
        duration: 1,
        delay: 0.8
    }
    const MotionImage = motion(Image);

    return (
        <div className='bg-[rgb(221_221_204)] px-5 sm:px-20 xl:px-30 py-10 text-center flex flex-col gap-9 sm:gap-15 items-center'>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition}
                className='text-[rgb(64_63_43)] text-4xl sm:text-[4rem] text-center'>The Re.vert Mission</motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition} className=' helvetica text-[rgb(64_63_43)] text-xl font-light lg:w-2/3 xl:w-1/2'>
                We believe in ethical and smart shopping. All of our products are carefully selected to ensure they align with our core values.
            </motion.p>
            <div className='w-full grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-around my-2 sm:my-5 lg:my-10'>
                <div className="flex items-center justify-center flex-col gap-4 helvetica">
                    <MotionImage
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition}
                        src="/images/sustainable.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition2}
                        className='text-center text-[rgb(64_63_43)]'>Sustainable</motion.p>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 helvetica">
                    <MotionImage
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition}
                        src="/images/waste.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition2}
                        className='text-center text-[rgb(64_63_43)]'>Zero Waste</motion.p>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 helvetica">
                    <MotionImage
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition}
                        src="/images/vegan.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition2}
                        className='text-center text-[rgb(64_63_43)]'>Vegan</motion.p>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 helvetica">
                    <MotionImage
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition}
                        src="/images/label.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition2}
                        className='text-center text-[rgb(64_63_43)]'>Recycled</motion.p>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 helvetica">
                    <MotionImage
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition}
                        src="/images/trade.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={transition2}
                        className='text-center text-[rgb(64_63_43)]'>Fair Trade</motion.p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition}
                className='lg:w-2/3 xl:w-1/2 flex flex-col gap-9'>
                <p className=' helvetica text-[rgb(64_63_43)] text-base font-light '>
                    I'm a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <p className=' helvetica text-[rgb(64_63_43)] text-base font-light'>
                    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </p>
            </motion.div>
            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition}
                className='w-fit helvetica text-white rounded-4xl px-7 py-3 border border-[rgb(64_63_43)] text-center sm:mt-3 font-light cursor-pointer bg-[rgb(64_63_43)] hover:bg-transparent hover:text-[rgb(64_63_43)] transition-all duration-400 ease-in-out' >
                Learn More</motion.button>
        </div>
    )
}

export default Mission