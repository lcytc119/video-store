export default function InventoryItem({movie}) {
    const {title, imgUrl, copiesAvailable} = movie;
    console.log(title, imgUrl, copiesAvailable)
    return (
        <div className='inventory-item'>
            <h2>{title}</h2>
            <img src={imgUrl} className='resize-image'/>
            <p>Copies Available: <pre>{copiesAvailable}</pre></p>
            <button 
            disabled={copiesAvailable===0}
            onClick={() => alert(`You check out ${title}`)} 
            >Check Out</button>
        </div>
    )
}