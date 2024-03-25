import React ,{useContext}from "react";
import Button from "@mui/material/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import "./Herosection.css";
import Right from "./Right";
import counterContext from './counterContext';


const Herosection = () => {

  // const [randomString, setRandomString] = useState('');
  const {hc,generateRandomString,roomNames, setroomNames} = useContext(counterContext)

  const handlejoin = () =>{
    hc()
  }

  // const generateRandomString = () => {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   let result = '';
  //   const charactersLength = characters.length;
  //   const length = 10; 

  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }

  //   setRandomString(result);
  //   alert(`your meeting code is ${randomString}`)
  // };

  return (
    <div className="Hero">
      <div className="HeroL">
        <div className="HLT">
          <h1>
            Free video call sessions and <br />
            meeting for <span id="everyone">everyone</span>
          </h1>
        </div>
        <div className="HLB">
         
            <Button
              variant="contained"
              color="success"
              startIcon={<VideoCallIcon />}
              style={{ marginRight: '40px', borderRadius:'20px'}}
              onClick={generateRandomString}
            >
              New Meeting
            </Button>
          
            <form>
            <input placeholder="Enter code to join" 
            onChange={(e)=>setroomNames(e.target.value)}
            value={roomNames}
            type="text"  />
          
          
            <Button
              variant="contained"
              color="success"
              startIcon={<KeyboardOutlinedIcon />}
              style={{borderRadius:'20px', marginLeft: '10px'}}
              onClick={handlejoin}
            >
              Join
            </Button>
            </form>
          
        </div>
      </div>

      <div className="HeroR">
        <Right />
      </div>
    </div>
  );
};

export default Herosection;
