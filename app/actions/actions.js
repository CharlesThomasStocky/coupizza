import 'whatwg-fetch' 

const GET_ZIP = 'GET_ZIP';
const GET_LOCATION = 'GET_LOCATION';
const GET_CODES = 'GET_CODES';
const LOAD_STATUS = 'LOAD_STATUS';

export function getZip(input){
  return { type: GET_ZIP, input };
} 

export function getLocation(zip){
  return { type: GET_LOCATION, zip };
}

export function getCodes(location){
  return { type: GET_CODES, location }; 
}

export function loadStatus(loading){
  return { type: LOAD_STATUS, loading };
}
