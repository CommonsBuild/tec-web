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
    <div className="grid w-full grid-cols-2 gap-16 px-10 pb-10 text-lg leading-normal  sm:max-w-xl lg:max-w-3xl sm:px-0 sm:pl-10 lg:pl-32 sm:text-xl sm:pb-12 sm:grid-cols-3">
      {collaborators.map((c) => (
        <Collaborator key={c[0]} name={c[0]} url={c[1]} />
      ))}
    </div>
  );
};

export default Collaborators;
