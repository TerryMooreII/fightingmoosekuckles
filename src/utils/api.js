import state from '../stores/store.js'
import { Env } from '@stencil/core';

export const teamid = Env.teamId;
export const leagueid = Env.leagueId

const DASH_API = 'https://apps.daysmartrecreation.com/dash/jsonapi/api/v1'

const SCHEDULE_API = `${DASH_API}/teams/${teamid}?cache[save]=false&include=events.eventType,events.homeTeam,events.visitingTeam,events.resource.facility,events.resourceArea,events.comments,league.playoffEvents.eventType,league.playoffEvents.homeTeam,league.playoffEvents.visitingTeam,league.playoffEvents.resource.facility,league.playoffEvents.resourceArea,league.playoffEvents.comments,league.programType,product.locations,programType,season,skillLevel,ageRange,sport&company=polarice`;

const STANDINGS_API =
    `${DASH_API}/leagues/${leagueid}?cache[save]=false&include=sport%2Cteams.homeEvents.statEvents.stat%2Cteams.visitingEvents.statEvents.stat&company=polarice`

export const getSchedule = async () => {
  state.loading = true
  try {
    const response = await fetch(SCHEDULE_API);
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