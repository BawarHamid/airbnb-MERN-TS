type HouseRulesProps = {
  text: string;
  value: string;
  placeholder?: string;
  changeCallback: React.Dispatch<React.SetStateAction<string>>;
};

const HouseRules: React.FC<HouseRulesProps> = () => {
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default HouseRules;
