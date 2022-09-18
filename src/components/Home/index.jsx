import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "./SliderCard";
import Pagination from "./PaginationCard";
import coxsbazar from "../image/coxsbazar.gif";
import saintmartin from "../image/saintmartin.jpg";
import rangamati from "../image/rangamati.jpg";
import education from "../image/education.jpg";
import culture from "../image/culture.jpg";
import relax from "../image/relax.jpg";
import sajek from "../image/sajek.jpg";
import saint from "../image/saint.jpg";
import lalbag from "../image/lalbag.jpg";
import jaflong from "../image/jaflong.jpg";
import sahid from "../image/sahid.jpg";
import tea from "../image/tea.jpg";
import kuakata1 from "../image/kuakata1.jpg";
import sundarban from "../image/sundarban.jpg";
import TravelNeed from "./TravelNeedCard";
import NaturalBeauty from "./NaturalBeautyCard";
import Headline from "./HeadlineCard";

const Home = () => {
  return (
    <div className="body">
      <Header />

      <div className="slider">
        <div>
          <Slider image1={saintmartin} image2={coxsbazar} image3={rangamati} />
        </div>
      </div>

      <div className="mx-sm-5 mx-3 ">
        <div className=" my-5 aboutBangladesh">
          <h1 className="text-center fw-bold text-warning my-4">
            Beautiful Bangladesh
          </h1>
          <p>
            Bangladesh is an area of natural beauties. It is located in
            south-east Asia. It has many wonderful scenery and culture. It has
            the lengthiest organic unbroken sea seaside called Cox's Bazar.
            "saint Martin" a little island in the northeast part of the Bay of
            Bengal. The local name of the saint martin is Narikel Jinjira
            significance "Coconut Island" in Arabic. "Inani Beach" which is full
            of stony seaside, is another spectacular position. Globe's biggest
            Mangrove woodlands Sundarbans which is also well known for its
            well-known Elegant Bengal Competition. Sundarban is the property to
            many different varieties of crazy birds, animals, bugs, reptiles and
            fish. In Bangladesh, six periods in their unique tasks.The tea
            landscapes in the mountain in Sylhet are wonderful areas.
          </p>
        </div>

        <div className="row">
          <Headline className="travelneed" text="Reason To Love Travel" />
          <div className="col-sm-4">
            <TravelNeed
              image={education}
              title="Practical Education"
              text="Traveling indeed is the best form of education. Almost every one of us agrees that life’s real education happens outside our walls. Travel teaches us economy, history, geography, sociology and different life styles of people. "
            />
          </div>

          <div className="col-sm-4">
            <TravelNeed
              image={culture}
              title="Exploring New Cultures"
              text="Travel is being exposed to different people, languages, cuisines, beliefs, traditions and customs. This can be a humbling and a learning experience that can become more social, flexible, open minded and independent."
            />
          </div>

          <div className="col-sm-4">
            <TravelNeed
              image={relax}
              title="Travel To Relax"
              text="Travel allows us to escape life’s daily demands, dramas and deadlines and enables us to clear our minds. It encourages us to recharge our batteries and to reconnect with ourselves, each other and the natural environment."
            />
          </div>
        </div>

        <div className="row  my-3 naturalBeauty">
          <Headline text="Beauty of Bangladesh" />
          <div className="col-sm-3">
            <NaturalBeauty image={saint} title="Coxs Bazar" link="/CoxsBazar" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={sajek} title="Sajek Valley" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={tea} title="Tea Garden" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={lalbag} title="Lalbag" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={jaflong} title="Jaflong" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={sahid} title="Sriti Shodhoh" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={kuakata1} title="Kuwakata" />
          </div>

          <div className="col-sm-3">
            <NaturalBeauty image={sundarban} title="Sundarban" />
          </div>
        </div>
      </div>

      <div>
        <Pagination
          linkPrevious="/"
          link1="/CoxsBazar"
          link2="/Rangamati"
          link3="/Sylhet"
          link4="/Dhaka"
          linkNext="/CoxsBazar"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
