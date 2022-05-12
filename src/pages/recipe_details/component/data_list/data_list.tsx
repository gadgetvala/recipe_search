type IProps = {
  data: string[];
};

const DataList = ({ data }: IProps) => {
  return (
    <div>
      {data.map((e) => (
        <li>{e}</li>
      ))}
    </div>
  );
};

export default DataList;
