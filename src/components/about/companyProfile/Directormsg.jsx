import React from 'react';
import directorImage from '../../../images/About/Ramesh-Bansal.png';

// Function to format paragraph text with strong tags
const paraText = (text) => {
    const regex = /Oswal Crop Protection Private Limited/g;
    return text.replace(regex, '<strong>Oswal Crop Protection Private Limited</strong>');
};

const Directormsg = () => {
    const directorMsg = [
        {
            title: "Message From the Director",
            directorData: [
                { img: directorImage, name: "Mr. Ramesh Bansal", position: "Managing Director" }
            ],
            para: [
                "It is a joy for me to correspond with you in my capacity as the company’s founder and managing director, Oswal Crop Protection Private Limited.",
                "Since its founding in 2009, the company has grown to new heights thanks to the invention of a wide range of agricultural products that, by their generous methods and sophisticated solutions, have astonishingly reached out to farmers and professionals in this field. The agricultural industry’s situation in India and other nations has changed significantly since the launch of the farmer-friendly brand. The company’s main goal is to create top-notch goods and services that will make agriculture more sustainable and affordable. We are producers, importers, exporters, and traders of a variety of agrochemicals, technical & formulation biofertilizers, organic manures, agriculture growth promoters, and plant nutrients. We are also major manufacturers’ representatives and bulk suppliers of top-notch industrial chemicals. Our staff includes experts in R&D, production, quality assurance, and customer support that are highly motivated and skilled. Oswal Crop Group constantly appreciates the possibilities provided to showcase our services because of our skilled personnel. By facing adverse business settings including unavoidable risks, difficult timelines, unpredictable market conditions, etc., we will continue to work hard and complete projects."
            ],
            sites: [
                { tag: "Sites & Locations" },
                { desc: "Company presence in the States of U.P., Punjab, Haryana, Rajasthan, Uttrakhand, Jammu & Kashmir, Madhya Pradesh, Maharashtra, Chattisgarh, Telengana, Andhra Pradesh, Karnataka & Tamilnadu." }
            ],
            office: [
                { tag: "Head Office" },
                { desc: "310, Gupta Tower, Commercial Complex, Azadpur, Delhi – 110033" }
            ],
            works: [
                { tag: "Works" },
                { desc: "Khasra No. 55/2/1, Pipli Khera Road, Village Ram Nagar, Tehsil Gannaur, Distt. Sonipat, Haryana – 131001" }
            ]
        }
    ];

    return (
        <div className="bg-[rgb(196,221,191)] w-full py-8 flex justify-center">
            <div className="w-10/12">
                {directorMsg.map((msg, index) => (
                    <div key={index}>
                        <div className="flex flex-col mmd:flex-row items-start">
                            <h2 className="mmd:w-full mmd:text-center  text-2xl font-bold mb-4">
                                {msg.title}
                            </h2>
                        </div>
                        <div className="flex flex-col mmd:flex-row items-start gap-2 mmd:gap-4">
                            <div className="mt-6 mmd:w-1/3 w-full">
                                <img
                                    src={msg.directorData[0].img}
                                    alt={msg.directorData[0].name}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                                <div className="text-center mt-2">
                                    <h3 className=" font-hind font-bold text-[28px]">{msg.directorData[0].name}</h3>
                                    <p className="text-xl">{msg.directorData[0].position}</p>
                                </div>
                            </div>
                            <div className="text-justify text-lg mmd:w-2/3 mt-4 w-full">
                                {msg.para.map((paragraph, idx) => (
                                    <p key={idx} className="mb-2" dangerouslySetInnerHTML={{ __html: paraText(paragraph) }} />
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-bold">{msg.sites[0].tag}</h4>
                            <p className="text-lg">{msg.sites[1].desc}</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">{msg.office[0].tag}</h4>
                            <p className="text-lg">{msg.office[1].desc}</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">{msg.works[0].tag}</h4>
                            <p className="text-lg">{msg.works[1].desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Directormsg;
