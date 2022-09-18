import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Pagination from '../Home/PaginationCard'
import teagarden from './Sylhet-image/teagarden1.jpg'
import jaflong from './Sylhet-image/jaflong.jpg'
import ratargul from './Sylhet-image/ratargul1.jpg'
import SylhetCardOne from './SylhetCardOne'
import SylhetCardTwo from './SylhetCardTwo'

const Sylhet = () => {
    return(
        <div className='body'>
            <Header />
                <div className='header-image'>Sylhet</div>
                <div className='mx-sm-5 mx-3'>
                    <SylhetCardOne image={teagarden} name='Tea Garden' description="Malnicherra Tea Estate (also known as Malnichhera Tea Garden) is a tea garden located in Sylhet district of Bangladesh. It is the oldest tea garden in the subcontinent. Malnichhera Tea Garden is not only the largest and first established tea garden in Bangladesh, but also in the subcontinent. It was established by Lord Hurdson in 1849 on 1500 acres of land. The tea garden is located a short distance from Sylhet International Airport. Harong Hurong, an ancient cave situated in the remote area of Malnicherra. "/>
                    <SylhetCardTwo image={jaflong} name='Jaflong'  description="Jaflong is a tourist spot in Sylhet division. It is about 60 km from Sylhet town and takes two hours drive to reach there. Jaflong located amidst tea gardens and hills. It is situated beside the river Sari in the lap of Hill Khashia. Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests. It is known for its stone collections and is home of the Khasi tribe. "/>
                    <SylhetCardOne image={ratargul} name='Ratargul' description='Ratargul Swamp Forest is a freshwater swamp forest located in Gowain River, Fatehpur Union, Gowainghat, Sylhet, Bangladesh. It is the only swamp forest located in Bangladesh and one of the few freshwater swamp forests in the world. The forest is naturally conserved under the Department of Forestry, Government of Bangladesh. It is known as the Sundarbans of Sylhet. This only swamp forest in Bangladesh is located 26 kilometres (16 mi) far from Sylhet. The forest name comes from the word, "Rata" or "Pati" tree, used by the locals of Sylhet.The evergreen forest is situated by the river Goain and linked with the channel Chengir Khal. Most of the trees growing here are the Dalbergia reniformis . The forest is submerged under 20–30 feet water in the rainy season. '/>
                </div>

                <div>
                    <Pagination linkPrevious='/Rangamati' link1='/CoxsBazar' link2='/Rangamati' link3='/Sylhet' link4='/Dhaka' linkNext='/Dhaka' />
                </div>
                
            <Footer />
        </div>
    )
}

export default Sylhet;