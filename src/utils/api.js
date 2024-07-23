import state from '../stores/store.js'
import { Env } from '@stencil/core';

export const teamid = Env.teamId;
export const leagueid = Env.leagueId

const DASH_API = 'https://apps.daysmartrecreation.com/dash/jsonapi/api/v1'

const SCHEDULE_INCLUDE = 'events.eventType,events.homeTeam,events.visitingTeam,events.resource.facility,events.resourceArea,events.comments,league.playoffEvents.eventType,league.playoffEvents.homeTeam,league.playoffEvents.visitingTeam,league.playoffEvents.resource.facility,league.playoffEvents.resourceArea,league.playoffEvents.comments,league.programType,product.locations,programType,season,skillLevel,ageRange,sport';
const SCHEDULE_INCLUDEDS_LOGGED_IN = ',registrations.customer.address,events.rsvpStates,league.playoffEvents.rsvpStates'
const SCHEDULE_API = `${DASH_API}/teams/${teamid}?cache[save]=false&company=polarice&include=${SCHEDULE_INCLUDE}`;

const STANDINGS_API =
    `${DASH_API}/leagues/${leagueid}?cache[save]=false&include=sport%2Cteams.homeEvents.statEvents.stat%2Cteams.visitingEvents.statEvents.stat&company=polarice`


const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
  

export const getSchedule = async () => {
  state.loading = true
  try {
    const response = await fetch(`${SCHEDULE_API}${state.access_token ? SCHEDULE_INCLUDEDS_LOGGED_IN : ''}`, {
      headers: state.access_token ?{
          'Authorization': `Bearer ${state.access_token}`
        }
      : {}
    });
    return await response.json();  
  } catch(e) {
    console.error(e)
  } finally {
    state.loading = false
  }
};

export const getBeerData = async () => {
  if (!Env.beerCsv) return null
  try {
    const { default: csv } = await import(`../${Env.beerCsv}`)
    const map = new Map()
    csv.split('\n').forEach(row => {
      const items = row.split(',')
      if (row.length < 2) return
      const date = items[1].trim()
      const name = items[0].trim()
      if(!date) return
      map.set(date, name)
    })
    return map
  } catch(err) {
    return null
  }
 
}

export const getStandings = async () => {
  state.loading = true
  try {
    const response = await fetch(STANDINGS_API);
    return await response.json();  
  } catch(e) {
    console.error(e)
  } finally {
    state.loading = false
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${DASH_API}/customer/auth/token?company=polarice`, {
      method: 'POST',
      credentials: 'include',
      headers: { 
        accept: 'application/vnd.api+json', 
        'content-type': 'application/vnd.api+json',
        'X-Requested-With': 'xmlhttprequest',
        'Cache-Control': 'no-cache',
        'Referer': 'https://apps.daysmartrecreation.com/dash/x/'
      },
      body: JSON.stringify({
        "grant_type":"client_credentials",
        "client_id":email,
        "client_secret":password,
        "stay_signed_in":true,
        "company":"polarice",
        "company_code":"polarice"
      })
    })
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Invalid username or password')
      }
      throw new Error('Failed to login')
    }

    const json = await response.json();

    const refreshToken = await getCookie(`dashx_refresh_polarice_${json.user.id}`);
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    }

    return json
  } catch(e) {
    throw e
  }
}

export const refreshToken = async () => {
  if (!state.isLoggedIn || !state?.user?.id) return null
  try {
    const response = await fetch(`${DASH_API}/customer/auth/token?company=polarice`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        accept: 'application/vnd.api+json', 
        'content-type': 'application/vnd.api+json',
        'X-Requested-With': 'xmlhttprequest',
        'Cache-Control': 'no-cache',
        'Referer': 'https://apps.daysmartrecreation.com/dash/x/',
        'Authorization': `Bearer ${state.access_token}`,
      },
      body: JSON.stringify({
        'grant_type': 'refresh_token',
        'client_id': state.user.id,
        'refresh_token': state.refresh_token,
        'company': 'polarice',
        'company_code': 'polarice'
      })
    })
    if (!response.ok) throw new Error('Failed to refresh token')
    const data = await response.json()
    state.access_token = data.access_token
    localStorage.setItem('access_token', data.access_token)

    const refreshToken = await getCookie(`dashx_refresh_polarice_${state.user.id}`);
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    }

    return data.access_token
  } catch(e) {
    console.error(e)
  }
}

export const createRsvp = async ({ eventId, customerId, teamId, status }) => {
  try {
    const response = await fetch(`${DASH_API}/rsvp-states?cache={"save":false}&company=polarice`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${state.access_token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'rsvp-states',
          attributes: {
            event_id: eventId,
            customer_id: customerId,
            team_id: teamId,
            status,
            comment: '',
            date: new Date().toISOString().replace('T', ' ').slice(0, 19),
          },
          relationships: {},
        },
        meta: {},
      }),
    })
    if (!response.ok) throw new Error('Failed to create RSVP')
    return await response.json()
  } catch (e) {
    console.error(e)
  }
}

export const updateRsvp = async ({ rsvpId, status }) => {
  try {
    const response = await fetch(`${DASH_API}/rsvp-states/${rsvpId}?cache={"save":false}&company=polarice`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${state.access_token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'rsvp-states',
          attributes: {
            status,
            comment: null,
          },
          id: rsvpId,
          relationships: {},
        },
        meta: {},
      }),
    })
    if (!response.ok) throw new Error('Failed to update RSVP')
    return await response.json()
  } catch (e) {
    console.error(e)
  }
}