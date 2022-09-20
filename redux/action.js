export const GET_DATA = "GET_DATA";
export const SET_TOTAL_LOADED = "SET_TOTAL_LOADED";

const API_URL =
  "https://www.maiia.com/api/pat-public/hcd?limit=100&locality=75001-PARIS&page=0&speciality.shortName=pharmacie";

export const getData = () => {
  try {
    return async (dispatch) => {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (json) {
        dispatch({ type: GET_DATA, payload: json.items });
      }
    };
  } catch (error) {}
};

export const setTotalLoaded = (totalLoaded) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_LOADED,
    payload: totalLoaded,
  });
};
