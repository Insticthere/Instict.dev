const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const LAST_TRACK_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

let accessToken;
let tokenExpirationTime;

const getAccessToken = async (basic, refresh_token) => {
  try {
    const currentTime = Date.now(); 

    if (accessToken && currentTime < tokenExpirationTime) {
      return accessToken;
    }

    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const { access_token } = await response.json();
    accessToken = access_token;
    tokenExpirationTime = currentTime +  3600000; 
    return accessToken;

  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
  
};

export const getNowPlaying = async (basic, refresh_token) => {
  const access_token  = await getAccessToken(basic, refresh_token)
  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async (basic, refresh_token, term) => {
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=${term}&limit=30`
  const access_token = await getAccessToken(basic, refresh_token)
  const response_getTopTracks = await fetch(TOP_TRACKS_ENDPOINT, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })
  const data = await response_getTopTracks.json()
  return data
}

export const getLastTrack = async (basic, refresh_token) => {
  
  const access_token = await getAccessToken(basic, refresh_token)
  const response_getTopTracks = await fetch(LAST_TRACK_URL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })
  const data = await response_getTopTracks.json()
  return data
  
}