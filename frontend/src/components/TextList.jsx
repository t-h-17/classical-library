import TextItem from "./TextItem";

function TextList({ texts, refresh }) {
  if (texts.length == 0) {
    return <p>No texts found.</p>;
  }

  return (
    <div>
      {texts.map(text => (
        <TextItem
          key={text.id}
          text={text}
          onStatusChange={refresh}
        />
      ))}
    </div>
  );
}

export default TextList;
