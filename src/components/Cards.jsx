import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      img: Single,
      group: "Single User",
      price: "$149",
      storage: "500 GB Storage",
      grantedUser: "1 Granted User",
      send: "Send upto 2 GB",
      cardStyle: "bg-white",
      buttonStyle: "text-black bg-[#00df9a]",
    },
    {
      id: 2,
      img: Double,
      group: "Double User",
      price: "$200",
      storage: "750 GB Storage",
      grantedUser: "2 Granted User",
      send: "Send upto 3 GB",
      cardStyle: "bg-gray-100 my-8 md:my-0",
      buttonStyle: "text-[#00df9a] bg-black",
    },
    {
      id: 3,
      img: Triple,
      group: "Multiple User",
      price: "$249",
      storage: "1 TB Storage",
      grantedUser: "Upto 10 Granted User",
      send: "Send upto 5 GB",
      cardStyle: "bg-white",
      buttonStyle: "text-black bg-[#00df9a]",
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((data) => (
          <div key={data.id}>
            <Card
              img={data.img}
              group={data.group}
              price={data.price}
              storage={data.storage}
              grantedUser={data.grantedUser}
              send={data.send}
              cardStyle={data.cardStyle}
              buttonStyle={data.buttonStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
