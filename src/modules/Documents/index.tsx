import DocCard from "./components/DocCard";

const Documents: React.FC = () => {
  const dummyData = [
    {
      title: "hlfe",
      description: "lfsjdf",
      image: "jfsldf",
      to: "ljfsdkl",
    },
    {
      title: "hlfe",
      description: "ljfsdkl fsd fsdjfsd fjklsdjfkldsjf klsjf ksldjf klsd fjlksf",
      image: "jfsldf",
      to: "ljfsdkl",
    },
    {
      title: "hlffds fsd fds fds fsdfe",
      description: "lfsjdf",
      image: "jfsldf",
      to: "ljfsdkl fsd fsdjfsd fjklsdjfkldsjf klsjf ksldjf klsd fjlksf",
    },
  ];

  return (
    <div className="grid md:grid-cols-6 gap-3">
      {dummyData.map((ele) => (
        <DocCard {...ele} />
      ))}
    </div>
  );
};

export default Documents;
