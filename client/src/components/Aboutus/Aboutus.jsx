import React from "react";
import Banner from "../BannerComponent/Banner";
import SmallBanner from "../smallBanner/SmallBanner";
import TextCom from "../textComponent/TextCom";
import TeamMember from "./TeamMember";
import "./TeamMember.css";
import pic1 from "../Images/team1.AVIF";
import pic2 from "../Images/team2.AVIF";
import pic3 from "../Images/team3.AVIF";
import Achievements from "../Achievements/Achievements";

export default function Aboutus() {
  return (
    <div>
      <Banner text="About" text2="Home" />
      <div className="about-us text-center my-5">
        <div className="aboutcontentText">
          <TextCom texthead="our info" textBody="About Our ShoppyKart" />
          <p className="mx-auto text-muted my-1 w-75">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit
            ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla non ipsum soluta perferendis veniam qui esse magnam commodi
            quisquam.
          </p>
          <button className="btn btn-primary my-2">Read More</button>
        </div>
      </div>
      <SmallBanner text="Up To 60% Off Now  Enjoy The Season Sale" />
      <div className="row Achievments container mx-auto my-5">
        <Achievements
          className="fas fa-users fs-5 text-white bg-primary p-3 rounded-circle position-absolute achieveIcon"
          number="20"
          text="happy clients"
        />
        <Achievements
          className="far fa-images fs-5 text-white bg-primary p-3 rounded-circle position-absolute achieveIcon"
          number="32"
          text="happy clients"
        />
        <Achievements
          className="fas fa-headset fs-5 text-white bg-primary p-3 rounded-circle position-absolute achieveIcon"
          number="24/7"
          text="Hours Of Support"
        />
        <Achievements
          className="fas fa-user-tie fs-5 text-white bg-primary p-3 rounded-circle position-absolute achieveIcon"
          number="320"
          text="Hard Workers"
        />
      </div>
      <div className="team mt-5 ">
        <TextCom texthead="our team" textBody="Our Creative Team" />
        <div className="members row container mx-auto">
          <TeamMember
            imgSrc={pic1}
            imgAlt="MeamberPic1"
            name="Walter White"
            jop="Chief Executive Officer"
          />
          <TeamMember
            imgSrc={pic2}
            imgAlt="MeamberPic2"
            name="Sarah Jhonson"
            jop="Product Manager"
          />
          <TeamMember
            imgSrc={pic3}
            imgAlt="MeamberPic3"
            name="William Anderson"
            jop="Sales Manager"
          />
        </div>
      </div>
    </div>
  );
}
