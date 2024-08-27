import React from 'react'
import Protection from '../../components/common/Protection'
import {companyprofileData} from '../../data/Companyprofile/companyprofileData'

import Directormsg from './companyProfile/Directormsg'
import Whyoswal from './companyProfile/Whyoswal'
import Vision2 from '../common/Vision2'
import Popupname from '../common/Popupname'
const Companyprofile = () => {
  
  
  return (
    <section>
      <div>
        <div>
<Popupname title='Company Profile'/>
        </div>
      <div>
<Protection data={companyprofileData } spanWidth="w-[20%]"  />

    </div>
    
    <div>
      <Whyoswal/>
    </div>
    <div>
      <Popupname title='VISION AND MISSION'/>
    <Vision2/>
    </div>
    <div>
     <Directormsg/>
    </div>
      </div>
    </section>
  )
}

export default Companyprofile