import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Pagination from '../Home/PaginationCard'
import sajek from './Rangamati-image/sajek.jpg'
import shuvolong from './Rangamati-image/shuvolong.jpg'
import kaptai from './Rangamati-image/kaptai.jpg'
import RangamatiCardOne from './RangamatiCardOne'
import RangamatiCardTwo from './RangamatiCardTwo'

const Rangamati = () => {
    return(
        <div className='body'>
            <Header />
            <div className='header-image'>Rangamati</div>
                <div className='mx-sm-5 mx-3'>
                    <RangamatiCardOne image={sajek} name='Sajek Valley' description="Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet (610 m) above sea level. Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.
                    Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district, it is situated 67 kilometres (42 mi) north-east from Khagrachhari town and 95 kilometres (59 mi) north from Rangamati city. The border of Bangladesh and Mizoram of India is 8 kilometres (5.0 mi) east from Sajek. 
                    "/>
                    <RangamatiCardTwo image={shuvolong} name='Shuvolong' description="Shuvolong a place in Barkol sub district, located about 25 kilometres (11 kilometres as the crow flies) away from Rangamati town. There are few waterfalls in Shuvolong area with the largest one falling from as high as 300 feet. In the past several years, this place has turned into a tourist destination due to its waterfalls and nearby market. Shuvolong is accessible by speed boat or motor boats from Rangamati. "/>
                    <RangamatiCardOne image={kaptai} name='Kaptai Lake' description="Kaptai Lake is a man made lake in south-eastern Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. The lake was created as a result of building the Kaptai Dam on the Karnaphuli River, as part of the Karnaphuli Hydro-electric project. The Kaptai Lake's average depth is 100 feet (30 m) and maximum depth is 490 feet (150 m). This lake was developed by inundating valleys and plain lands between the many hills."/>
                </div>

                <div>
                    <Pagination linkPrevious='/CoxsBazar' link1='/CoxsBazar' link2='/Rangamati' link3='/Sylhet' link4='/Dhaka' linkNext='/Sylhet'/>
                </div>
                
            <Footer />
        </div>
        
    );
}

export default Rangamati;