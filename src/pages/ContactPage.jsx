import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../img/portImages/phone.svg";
import email from "../img/portImages/emailme.svg";
import location from "../img/portImages/location.svg";
import Title from "../components/title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392474.121537194!2d-86.41294919488806!3d39.77997538183678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1628907988067!5m2!1sen!2sus"
            title="google map"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+257 7756110718"}
            text2={"+0333 6782 8792"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"loremipusum@hmail.com"}
            text2={"abcloremipsum@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"25 Paramount St, PN4 8H9 London"}
            text2={"United Kingdom"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
