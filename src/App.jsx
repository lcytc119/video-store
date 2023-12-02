import MyComponent from './MyComponent';
import Profile from "./Profile";
import InventoryContainer from './Component/InventoryContainer';
import "./App.css";
import inventory from "./data/inventory.json"
export default function App() {
  console.log(inventory)
  // const [isChecked, setIsChecked] = useState(false);
  // const onClickHandler = () => setIsChecked(!isChecked)
  return (
    <div>
      <h1>Video Store</h1>
      <InventoryContainer inventory={inventory}/>
      {/* <Profile name="Benjamin Cohen" imgUrl="https://via.placeholder.com/600x400">
        <marquee>I'm inside the body of Profile</marquee>
      </Profile> */}
    </div>
  );
}


