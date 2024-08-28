import React from 'react'
import Companyprofile from '../components/about/Companyprofile'
import { Outlet } from 'react-router-dom';

import Visionabt from '../components/about/Visionabt'
import Awards from '../components/about/Awards'
import Terms from '../components/about/Terms'
import Faq from '../components/about/Faq'
const About = () => {
  return (
    <div>

<Outlet>
<Companyprofile/>
<Visionabt/>
<Awards/>
<Terms/>
<Faq/>
</Outlet>
    </div>
  )
}

export default About