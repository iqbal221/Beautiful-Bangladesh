import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Pagination from '../Home/PaginationCard'
import saintmartin from './CoxsBazar-image/saintmartin.png'
import himchori from './CoxsBazar-image/himchori.jpg'
import inani from './CoxsBazar-image/inani.jpg'
import CoxsBazarCardOne from './CoxsBazarCardOne';
import CoxsBazarCardTwo from './CoxsBazarCardTwo';

const CoxsBazar = () => {
    return(
        <div className='body'>
            <Header />
            <div className='header-image'>Cox's Bazar</div>
            <div className='mx-sm-5 mx-3'>
                <CoxsBazarCardOne image={saintmartin} name='Saint Martin' description="Saint Martin Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dip. It is about 8 kilometers west of the northwest coast of Myanmar, at the mouth of the Naf River. Martin's Island has become a tourist spot, and five shipping liners run daily trips to the island. Tourists can book their trip either from Chittagong or from Cox's Bazaar.  It is possible to walk around the island in a day because it measures only 8 km2 (3 sq. mile), shrinking to about 5 km2 (2 sq. mi) during high tide. 
                Keari Sindabad, Keari Bay Cruise and Dine, MV Bay Cruise-1, MV Farhan, Atlantic Cruise etc. are plying on Teknaf Saint Martin route every day. Departs for St.Martin at 9.30am daily and returns at 3pm.
                "/>
                <CoxsBazarCardTwo image={himchori} name='Himchori' description="Himchari National Park is a major national park and nature reserve in Bangladesh. The park is located at Ramu and Cox's Bazar Sadar Upazila, Cox's Bazar District, in the southeast region of the country. It is located mainly on the hills and is adjoining to Bay of Bengal to the west. Himchari National Park covers approximately 1,729 ha (17.29 km2) of mixed evergreen forests Biome. It was declared a protected area in 1980. It is located 13 km East of Cox's Bazar town. The overall appearance of the forest is various patches of dense forest and grass lands. The climate is generally humid and warm. The park has tropical monsoons from June to September every year. The soil is loamy, clay and sandy loam at various places. "/>
                <CoxsBazarCardOne image={inani} name='Inani Beach' description="Inani Beach is a part of Cox's Bazar Beach, is an 18-kilometre-long (11 mi) sea beach in Ukhia Upazila of Cox's Bazar District, Bangladesh. It has a lot of coral stones, which are very sharp. These coral stones look black and green, and they are found in summer or rainy seasons. Pathorkhani is located in Jaliapalong, Inani Beach. Almost all of the visitors gather around it and love to take snapshot by sitting on it."/>
            </div>
            <div>
                <Pagination linkPrevious='/' link1='/CoxsBazar' link2='/Rangamati' link3='/Sylhet' link4='/Dhaka' linkNext='/Rangamati'/>
            </div>
            
            <Footer />
        </div>
    );
}

export default CoxsBazar;