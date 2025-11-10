import React from 'react'

const Collection = () => {
    const data = [
        {
            img: "https://static.wixstatic.com/media/c837a6_5b633b424b184cf2a57ee8acf315f536~mv2.jpg/v1/fill/w_351,h_351,q_75,enc_avif,quality_auto/c837a6_5b633b424b184cf2a57ee8acf315f536~mv2.jpg",
            heading: "Kitchen",
            desc: "Shop Collection"
        },
        {
            img: "https://static.wixstatic.com/media/c837a6_70b45da9711345efb4af22715660913c~mv2.jpg/v1/fill/w_352,h_351,q_75,enc_avif,quality_auto/c837a6_70b45da9711345efb4af22715660913c~mv2.jpg",
            heading: "Bath",
            desc: "Shop Collection"
        },
        {
            img: "https://static.wixstatic.com/media/c837a6_539a4f2577ea4019bed2b1a5f7eaa1d2~mv2.jpg/v1/fill/w_351,h_351,q_75,enc_avif,quality_auto/c837a6_539a4f2577ea4019bed2b1a5f7eaa1d2~mv2.jpg",
            heading: "On the Go",
            desc: "Shop Collection"
        }
    ]
    return (
        <div className='px-5 sm:px-20 xl:px-30 py-10'>
            <p className="text-center text-4xl mb-10 text-[rgb(64_63_43)] font-light">Shop Collections</p>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 flex-wrap lg:flex-nowrap'>
                {data.map((data, index) => (
                    <div
                        key={index}
                        className="aspect-square rounded-3xl overflow-hidden relative flex gap-5 flex-col justify-center items-center group cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-center bg-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${data.img})` }}
                        ></div>
                         <div className="absolute inset-0 bg-black/40" />
                        <p className='z-10 text-5xl text-[#fffdc3]'>{data.heading}</p>
                        <p className='z-10 text-white text-lg font-light helvetica'>{data.desc}</p>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Collection