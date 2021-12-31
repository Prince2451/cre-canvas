import DocCard from "./components/DocCard";

const Documents: React.FC = () => {
  const dummyData = [
    {
      title: "hlfe",
      description: "lfsjdf",
      image: "jfsldf",
      to: "/canvas/something",
    },
    {
      title: "hlfe",
      description:
        "/canvas/something fsd fsdjfsd fjklsdjfkldsjf klsjf ksldjf klsd fjlksf",
      image: "jfsldf",
      to: "/canvas/something",
    },
    {
      title: "hlffds fsd fds fds fsdfe",
      description: "lfsjdf",
      image: "jfsldf",
      to: "/canvas/something",
    },
  ];

  return (
    <div className="grid md:grid-cols-6 gap-3">
      {dummyData.map((ele) => (
        <DocCard key={ele.to} {...ele} />
      ))}
    </div>
  );
};

export default Documents;
