import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Pagination from '../Home/PaginationCard'
import mosque from './Dhaka-image/mosque1.jpg'
import tajmahal from './Dhaka-image/tajmahal1.jpg'
import safaripark from './Dhaka-image/safaripark1.jpg'
import DhakaCardOne from './DhakaCardOne'
import DhakaCardTwo from './DhakaCardTwo'

const Dhaka = () => {
    return (
        <div className='body'>
            <Header />
                <div className='header-image'>Dhaka</div>
                <div className='mx-sm-5 mx-3'>
                    <DhakaCardOne image={safaripark} name='Bangabandu Safari Park' description="Bangabandhu Sheikh Mujib Safari Park is a safari park in Gazipur, Bangladesh. This safari park is spread over 3810 acres (1542 ha) of Sal Forest which makes it one of the largest safari parks in the world and the largest in Asia.It was inaugurated on October 31, 2013. It is located about 40 km north of Bangladesh's capital city Dhaka near the Dhaka - Mymensingh Highway.
                    The park is divided into 5 major sections. They are the Core Safari, Safari Kingdom, Biodiversity Park, Extensive Asian Safari Park and Bangabandhu Square.
                    "/>
                    <DhakaCardTwo image={tajmahal} name='Bangladesh Tajmahal' description="Taj Mahal Bangladesh is an exact replica of the actual Taj Mahal (a Mughal monument in Agra, India) located at Sonargaon, Perab, 10 miles east of Dhaka, the capital of Bangladesh. Ahsanullah Moni, the owner of Taj Mahal Bangladesh, a wealthy filmmaker, announced his 'Copicat Edition of Taj Mahal' project in December 2006. The project cost around Rs 5 million and was built at Perab in Sonargaon, 20 miles northeast of the capital Dhaka. He said the reason for its construction was that the replica of the Taj Mahal was made so that the poor people of his country, who could not afford to go to India and see the actual monuments, could fulfill their dream of visiting the Taj Mahal from their own country. "/>
                    <DhakaCardOne image={mosque} name='Sixty Domes Mosque' description="Sixty Domes Mosque is an ancient mosque located in the southwest of Bagerhat district in Bangladesh. There is no inscription on the mosque. So no accurate information is available about who built it or at what time it was built. However, looking at the architectural style of the mosque, there is no doubt that it was built by Khan Jahan Ali. He is thought to have built it in the 15th century. This mosque was built over many years and at great expense. The stones were brought from the palace. It is one of the three World Heritage Sites in Bangladesh; The city of Bagerhat has been accorded the status of a World Heritage Site. This honor was conferred by UNESCO in 1975. "/>
                </div>

                <div>
                    <Pagination linkPrevious='/Sylhet' link1='/CoxsBazar' link2='/Rangamati' link3='/Sylhet' link4='/Dhaka' linkNext='/Contact' />
                </div>
                
            <Footer />
        </div>
        
    )
}

export default Dhaka;