export const fetchGreeting = () => {
  return dispatch => {
    fetch('/api/random_greeting')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_GREETING', payload: data.greeting });
      });
  };
};