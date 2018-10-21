import { Actions } from 'react-native-router-flux';
import { 
	EMERGENCY_SEND,
	EMERGENCY_REACHED_SERVER,
	EMERGENCY_REACHED_HP,
	EMERGENCY_FAILED
} from './types';

import { sendSignal }  from '../Functions/EmergencySend';



export const sendEmergency = (url, longitude, latitude) => {
    console.log("SendEmergency");

    return (dispatch) => {
        dispatch({ type: EMERGENCY_SEND });
        const response = await sendSignal(url, longitude, latitude);
        console.log("response: ",response);

        if(response != null) emergencyFailed(dispatch);
        else emergencyReachedServer(dispatch);
    }
};


const emergencyFailed = (dispatch) => {
	dispatch({ type: EMERGENCY_FAILED });
};

const emergencyReachedServer = (dispatch) => {
	dispatch({ type: EMERGENCY_REACHED_SERVER });
};

const emergencyReachedHP = (dispatch) => {
	dispatch({ type: EMERGENCY_REACHED_HP });
};