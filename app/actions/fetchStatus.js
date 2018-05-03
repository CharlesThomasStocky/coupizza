const BEGIN_FETCH = 'BEGIN_FETCH';
const FETCHED_DATA = 'FETCH_DATA';
const FETCH_ERR = 'FETCH_ERR';

export function BEGIN_FETCH(status){
  return { type: BEGIN_FETCH };
}

export function FETCHED_DATA(payload){
  return { type: FETCHED_DATA, payload};
}

export function FETCH_ERR(err){
  return { type: FETCH_ERR, err };
}
