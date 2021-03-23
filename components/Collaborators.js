const collaborators = [
  ["Token Engineering", "tegg.io"],
  ["Sourcecred", "sourcecred.io"],
  ["The Commons Stack", "commonsstack.org"],
  ["Block Science", "block.science"],
  ["cadCAD", "cadcad.org"],
  ["1Hive", "1hive.org"],
];

const Collaborator = ({ name, url }) => {
  return (
    <div>
      <div>{name}</div>
      <div>
        <a href={`https://${url}`} target="_blank">
          {url}
        </a>
      </div>
    </div>
  );
};

const Collaborators = () => {
  return (
    <div className=" w-full sm:max-w-xl lg:max-w-3xl px-10 sm:px-0 sm:pl-10 lg:pl-32  text-lg sm:text-xl leading-normal pb-10 sm:pb-12 grid grid-cols-2 sm:grid-cols-3 gap-16">
      {collaborators.map((c) => (
        <Collaborator key={c[0]} name={c[0]} url={c[1]} />
      ))}
    </div>
  );
};

export default Collaborators;
