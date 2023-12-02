export default function Profile({ name, imgUrl, children }) {

    const onClickHandler = (event) => {
      alert("You clicked it!");
    }
  
    return (
      <div className="profile">
        <h2>{name}</h2>
        <img src={imgUrl} />
        {children}
        <button onClick={onClickHandler}>Click me!</button>
      </div>
    );
  }