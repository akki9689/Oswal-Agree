import React from 'react'
import Protection from '../../components/common/Protection'
import {companyprofileData} from '../../data/Companyprofile/companyprofileData'
import image1 from '../../images/About/Wide-Range-of-Insecticides.png'
import image2 from '../../images/About/Highest-Quality-Products-Solutions-2.png'
import image3 from '../../images/About/Focussed-on-100-Farmers-Satisfaction.png'
import directorImage from '../../images/About/Ramesh-Bansal.png'

const Companyprofile = () => {
  const profileData=[
    {
      heading:"Why Buy Oswal Products ?",
      card:[{img:image1,tag:"Wide Range of Insecticides, Fungicides, Herbicide & PGRs"},
        {img:image2,tag:"Highest Quality Products & Solutions"},
        {img:image3,tag:"Focussed on 100% Farmer’s Satisfaction"}
      ]
    }
  ]
  const directorMsg=[
    {
      title:"Message From the Director",
      directorData:[{img:directorImage,name:"Mr. Ramesh Bansal",position:"Managing Director"}],
      para:[
        "It is a joy for me to correspond with you in my capacity as the company’s founder and managing director, Oswal Crop Protection Private Limited.",
        "Since its founding in 2009, the company has grown to new heights thanks to the invention of a wide range of agricultural products that, by their generous methods and sophisticated solutions, have astonishingly reached out to farmers and professionals in this field. The agricultural industry’s situation in India and other nations has changed significantly since the launch of the farmer-friendly brand. The company’s main goal is to create top-notch goods and services that will make agriculture more sustainable and affordable. We are producers, importers, exporters, and traders of a variety of agrochemicals, technical & formulation biofertilizers, organic manures, agriculture growth promoters, and plant nutrients. We are also major manufacturers’ representatives and bulk suppliers of top-notch industrial chemicals. Our staff includes experts in R&D, production, quality assurance, and customer support that are highly motivated and skilled.Oswal Crop Group constantly appreciates the possibilities provided to showcase our services because of our skilled personnel. By facing adverse business settings including unavoidable risks, difficult timelines, unpredictable market conditions, etc., we will continue to work hard and complete projects."
      ],
      sites:[{tag:"Sites & Locations"}, {desc:"Company presence in the States of U.P., Punjab, Haryana, Rajasthan, Uttrakhand, Jammu & Kashmir, Madhya Pradesh, Maharashtra, Chattisgarh, Telengana, Andhra Pradesh, Karnataka & Tamilnadu."},],
      office:[{tag:"Head Office"},{desc:"310, Gupta Tower, Commercial Complex, Azadpur, Delhi – 110033"},],
      works:[{tag:"Works"},{desc:"Khasra No. 55/2/1, Pipli Khera Road, Village Ram Nagar, Tehsil Gannaur, Distt. Sonipat, Haryana – 131001"},],
    }
  ]
  return (
    <section>
      <div>
      <div>
<Protection data={companyprofileData } spanWidth="w-[20%]"  />

    </div>
    <div>
<h1>vision and mission component </h1>
    </div>
    <div>
      <p>profile data map here</p>
    </div>
    <div>
      <p>director data map here</p>
    </div>
      </div>
    </section>
  )
}

export default Companyprofile