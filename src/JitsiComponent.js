import React ,{useContext}from "react";
import { JaaSMeeting } from '@jitsi/react-sdk';
import "./JC.css"
import counterContext from './counterContext';

const JitsiComponent = () => {

  const {roomNames} = useContext(counterContext)

  return (
    <div style={{height: '100%'}}>
     <JaaSMeeting
    appId = ""
    roomName = {roomNames}
    // onApiReady = { (externalApi) => { console.log(externalApi)}}
/>
    </div>
  );
};

export default JitsiComponent;