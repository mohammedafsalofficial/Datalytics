const Card = ({ img, group, price, storage, grantedUser, send, cardStyle, buttonStyle }) => {
  return (
    <div
      className={`${cardStyle} w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
    >
      <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={img} alt="" />
      <h2 className="text-2xl font-bold text-center py-8">{group}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage}</p>
        <p className="py-2 border-b mx-8">{grantedUser}</p>
        <p className="py-2 border-b mx-8">{send}</p>
      </div>
      <button className={`${buttonStyle} w-[200px] rounded-md font-medium my-6 mx-auto py-3`}>
        Start Trial
      </button>
    </div>
  );
};

export default Card;
