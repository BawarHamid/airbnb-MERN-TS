type OptionCardProps = {
  cardTitle: string;
  cardParagraf: string;
};

const OptionCard: React.FC<OptionCardProps> = ({ cardTitle, cardParagraf }) => {
  return (
    <button className="py-5 px-8 my-2 hover:bg-slate-50 focus:border-[1px] focus:border-blue-600 focus:bg-slate-50 rounded-lg shadow-lg shadow-[#E4E3E9] max-w-sm">
      <h1 className="text-xl font-bold text-black text-start">{cardTitle}</h1>
      <p className="text-xs text-gray-600 text-start font-bold italic">
        {cardParagraf}
      </p>
    </button>
  );
};

export default OptionCard;
