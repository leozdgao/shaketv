const REFRESH = 'token/REFRESH'

const initialState = {
  token: null
}

export default function reducer (state = initialState, action = { }) {
  switch (action.type) {
    case REFRESH:
      const token = action.payload
      return {
        token
      };
    default:
      return state;
  }
}

export function refresh () {
  return {
    type: REFRESH
  }
}
