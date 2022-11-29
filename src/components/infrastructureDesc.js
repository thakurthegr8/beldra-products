import React from "react";
import LinkSidebar from "./linkSidebar";
import { Link } from "react-router-dom";

export default function infrastructureDesc({ match }) {
  const description = [
    {
      id: "0",
      name: "Design & Development",
      desc: [
        "Application stability and performance are essantial for the success of an user in the changing world. As a result Amit Engg. Works is in constant touch with the recent developments and Software and Human Industries. Amit Engg. Works has made substantial investment in Capita Equipments, engineers work hand in hand with our customers' Engineers to see each project through to successful completion and lay emphasis on keeping the production cost to the minimum.",
        "The DELCAM CAD CAM software with devoted team of Engineers ensures that the CFT is effective and all developments are First Time Right. The in house Research and Development is expected to help further on the requirments of our customers and their application. The continuous Value Engineering helps in product cost competitiveness.",
        "Software",
        "AutoCAD",
        "All relevant standards",
        "Deform Simulation (For Forging Process Design)",
        "DELCAM - CADCAM",
        "Exclusively Trained Draftsmen",
      ],
      imgSrc: [
        "/images/ddi1.jpg",
        "/images/ddi2.jpg",
      ],
      link: "/infrastructure/0",
    },
    {
      id: "1",
      name: "Pattern & Dies",
      desc: [
        "A die is a specialized tool used in manufacturing industries to cut or shape material mostly using a press. Like molds, dies are generally customized to the item they are used to create. A pattern is a replica of the object to be cast, used to prepare the cavity into which molten material will be poured during the casting process.",
        "Forming dies are typically made by tool and die makers and put into production after mounting into a press. The die is a metal block that is used for forming materials like sheet metal and plastic. The making of patterns, called patternmaking (sometimes styled pattern-making or pattern making), is a skilled trade that is related to the trades of tool and die making and moldmaking, but also often incorporates elements of fine woodworking.",
        "The pattern needs to incorporate suitable allowances for shrinkage; these are called contraction allowances, and their exact values depend on the alloy being cast and the exact sand casting method being used. Some alloys will have overall linear shrinkage of up to 2.5%, whereas other alloys may actually experience no shrinkage or a slight positive shrinkage or increase in size in the casting process (notably type metal and certain cast irons). The shrinkage amount is also dependent on the sand casting process employed",
      ],
      imgSrc: [
        "/images/pdi1.jpg",
        "/images/pdi2.jpg",
      ],
      link: "/infrastructure/1",
    },
    {
      id: "2",
      name: "Lab Testing",
      desc: [
        "We are fully capable to undertake the Testing of materials. Our Experience combined with our services in diversified fields have allowed us to gain a valuable perspective on our customers demand. In recognition of this fact, it is highly imperative that raw materials used in the Construction should be tested in conformance with appropriate standards. We support the activities by providing accurate and prompt testing services for the quality evaluation of all types of materials.",
      ],
      imgSrc: [
        "/images/lt1.jpg",
      ],
      link: "/infrastructure/2",
    },
    {
      id: "3",
      name: "Casting & Forging",
      desc: [
        "Forging",
        "Free Forging Hammer",
        "Ring Rolling",
        "Forging Press 2500 Tons",
        "Mechanical presses",
        "Hydraulic presses",
        "Break Press",
      ],
      imgSrc: [
        "/images/cfi1.jpg",
        "/images/cfi2.jpg",
      ],
      link: "/infrastructure/3",
    },
    {
      id: "4",
      name: "Shot Blasting",
      desc: [
        "Shot blasting is a process that is often used to clean the surface of a material. The process usually involves a gun that is used to shoot various types of media, or shot, at the object being blasted. This is a particularly effective method for removing scale, rust, paint, and minor surface flaws from metal objects. Depending on the shot blast equipment and the type of shot that is used, various surfaces finishes or textures can also be applied to a work piece for decorative purposes, or to prep the surface for paint or powder coating.",
        "A basic shot blasting set up includes an air compressor, a shot blaster gun, a blast booth or cabinet, and a hopper to deliver the shot to the gun. Once the hopper is filled with shot and the system is turned on, a pull of the trigger is all it takes to get things going. When the trigger is pulled, compressed air flows through the gun. The moving air creates a vacuum that pulls shot from the hopper, which exits the gun at high speed and blasts the work piece. The cabinet is often equipped with a recovery system that returns the shot to the hopper to be reused. Shot blasting media is widely varied and specialized.",
      ],
      imgSrc: [
        "/images/sbi2.jpg",
      ],
      link: "/infrastructure/4",
    },
    {
      id: "5",
      name: "Grinding",
      desc: [
        "Grinding is used to finish workpieces that must show high surface quality (e.g., low surface roughness) and high accuracy of shape and dimension. The grinding machine consists of a bed with a fixture to guide and hold the work piece, and a power-driven grinding wheel spinning at the required speed. The speed is determined by the wheelâ€™s diameter and manufacturerâ€™s rating.",
      ],
      imgSrc: [
        "/images/gri1.jpg",
        "/images/gri2.jpg",
      ],
      link: "/infrastructure/5",
    },
    {
      id: "6",
      name: "Machining",
      desc: [
        "Automatic lathes, drilling & band saws",
        "Milling machines",
        "Thread rolling machines",
        "Broaching machines",
        "Centreless, cylindrical,surface & internal grinders",
      ],
      imgSrc: [
        "/images/mii2.jpg",
        "/images/mii2.png",
      ],
      link: "/infrastructure/6",
    },
    {
      id: "7",
      name: "Welding",
      desc: [
        "TIC Welding",
        "ARC Welding",
        "Thread rolling machines",
        "MIC Welding",
        "GMAW or Gas Metal Arc Welding",
      ],
      imgSrc: [
        "/images/wii1.jpg",
        "/images/wii2.jpg",
      ],
      link: "/infrastructure/7",
    },
    {
      id: "8",
      name: "Zinc Electroplating",
      desc: [
        "Zinc coatings prevent oxidation of the protected metal by forming a barrier and by acting as a sacrificial anode if this barrier is damaged. Zinc oxide is a fine white dust that (in contrast to iron oxide) does not cause a breakdown of the substrate's surface integrity as it is formed. Indeed the zinc oxide, if undisturbed, can act as a barrier to further oxidation, in a way similar to the protection afforded to aluminum and stainless steels by their oxide layers.The majority of hardware parts are zinc plated, ratherthan cadmium plated. Zinc electroplating is a method of depositing zinc metal on the surface of another metal, such as steel, by immersing the fasteners in an appropriate plating bath and applying electrical current. Zinc travels through the electrolytic bath from the zinc anodes and attaches to the surface of the fastener. The thickness of zinc plating depends on the time spent in the plating bath, the amount of current, and the chemical composition of the bath.",
        "Zinc Electroplating provides corrosion resistance to the steel fastener by acting as a barrier and sacrificial coating. Zinc is more electrochemically reactive than steel, so when exposed to a corrosive environment, the zinc plating corrodes sacrificially, delaying rust formation on the fastener even after portions of bare steel are exposed.",
      ],
      imgSrc: [
        "/images/zei1.jpg",
      ],
      link: "/infrastructure/8",
    },
    {
      id: "9",
      name: "Quality Check & Packing",
      desc: [
        "Quality Cehcking (QC) is a procedure or set of procedures intended to ensure that a manufactured product or performed service adheres to a defined set of quality criteria or meets the requirements of the client or customer.After Checking the Quality of Products ,finally the tested products are packed for delivery.",
      ],
      imgSrc: [
        "/images/qcpi1.jpg",
        "/images/qcpi2.jpg",
      ],
      link: "/infrastructure/9",
    },
  ];
  return (
    <>
      <LinkSidebar title={"Infrastructure"} items={description} />
      <div className="infrastructureDesc pt-28 md:pt-20">
        {description.map((item) => {
          if (match.params.link === item.id) {
            return (
              <>
                <div className="p-6 py-4 flex flex-col justify-start items-start">
                  <div className="flex space-x-2">
                    <Link to="/infrastructure">
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Infrastructure
                      </a>
                    </Link>
                    <span>/</span>
                    <Link to={`/infrastructure/${match.params.link}`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        {item.name}
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-left text-2xl font-bold text-gray-700">
                      {item.name}
                    </h1>
                    {item.desc.map((itemPara) => {
                      return (
                        <p className="text-normal text-left mr-6 text-gray-700 mt-2">
                          {itemPara}
                        </p>
                      );
                    })}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {item.imgSrc.map((itemImgSrc) => {
                        return (
                          <img
                          loading="lazy"
                            src={itemImgSrc}
                            className="rounded text-normal text-left mr-6 text-gray-700 mt-2"
                            style={{aspectRatio:"16/9",
                          height:"350px",
                        objectFit:"cover"}}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
