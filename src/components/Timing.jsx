import React from "react";
import styles from "./Timing.module.css";
import { MdAddLocationAlt } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { TbClockHour8Filled } from "react-icons/tb";

function TimingSet({ headIcon, headText, data ,isBlackBg}) {
  return (
    <div style={{backgroundColor:isBlackBg && 'black' , color :isBlackBg && 'white',padding:'2% 2%'}}>
      <div style={{ display: "flex", gap: "10px" }}>
        {headIcon}
        <h3>{headText}</h3>
      </div>

      <div>
        {data.map((item, index) => {
          return (
            <>
              <p
                style={{
                  fontWeight: "bold",
                  color: isBlackBg ? 'white':"black",
                  fontSize: "12px",
                  width: "300px",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                {item?.boldtext}{" "}
                <span style={{ color:isBlackBg ? 'white': "black", fontWeight: "normal" }}>
                  {item.normaltext}
                </span>
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default function Timing() {
  const DeliveeryData = [
    {
      boldtext: "Monday :",
      normaltext: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM ",
    },

    {
      boldtext: "Tuesday :",
      normaltext: " 8:00 AM–3:00 AM ",
    },
    {
      boldtext: "Wednesday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Thursday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Friday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Saturday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Sunday :",
      normaltext: " 8:00 AM–3:00 AM",
    },

    {
      boldtext: "Estimated time delivery :",
      normaltext: "20 min",
    },
  ];

  const contactData =[ 
     {
      normaltext:'If you have any allergies or dietaries'
     },
     {
      normaltext:'restrictions, please contact the restaurant. The '
     },
     {
      normaltext:'The restaurant will provide food-specific '
     }
     ,{
      normaltext:'information upon request '
     },
     {
      boldtext:'Phone number',
      normaltext:'+934443-43'
     },
     {
      boldtext:'Website',
      normaltext:'https://www.food.com'
     }
  ]

  const operaTionalData =[
    {
      boldtext: "Monday :",
      normaltext: "8:00 AM–3:00 AM ",
    },

    {
      boldtext: "Tuesday :",
      normaltext: " 8:00 AM–3:00 AM ",
    },
    {
      boldtext: "Wednesday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Thursday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Friday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Saturday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
    {
      boldtext: "Sunday :",
      normaltext: " 8:00 AM–3:00 AM",
    },
  ]
  return (
    <div className={styles.container}>
      <TimingSet
        headIcon={<MdAddLocationAlt size={23} />}
        headText={"Delivery information"}
        data={DeliveeryData}
      />
      <TimingSet
        headIcon={<TiContacts size={23} />}
        headText={"Contact information"}
        data={contactData}
      />
      <TimingSet
        headIcon={<TbClockHour8Filled size={23} />}
        headText={"Operational Times"}
        data={operaTionalData}
        isBlackBg ={true}
      />
    </div>
  );
}
