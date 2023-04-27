// We access our values with enviroment variables,
// we don't want to share these values in our code
const client_id = "197a57fb1ae74a9c9317698cb5303cac"
const client_secret = "cfe19ffc7c30490c872fe9df51ce37d1"
const refresh_token = "AQAuZgGgycxHEXXi2dW84eUxNfEqtyeI68IztRHb_2PrjOA8PizZp1hJU69AVpcV-Tvbsy0fS9nUr2EA9i0r0YguTu8dCEUzOZGuAnBmeO55DYH7aUEUAxGKgN0C62MbRlw"

// We encode our client_id and client_secret again to send with the POST request.
// This is a part of the authorization header
const basic = btoa(`${client_id}:${client_secret}`)
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10'

// This function gets the access token so that we can access the API

const getAccessToken = async () => {
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
  })
  return response.json()
}

// We use the aforementioned access token and send it with the request to the API
// this requests gets the currently playing song.
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })
  const data = await response.json()
  return data
}

