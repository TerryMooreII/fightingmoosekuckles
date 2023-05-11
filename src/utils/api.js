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
  if (!Env.beerGoogleSheetURL) return null
  const beerList = {};
  try {
    const response = await fetch(Env.beerGoogleSheetURL);
    const sheet = await response.text()
    const el = document.createElement("div");
    el.innerHTML = sheet;

    [...el.querySelectorAll("tr")].forEach((row) => {
      const td = row.querySelectorAll("td");
      beerList[td[1].textContent] = td[0].textContent;
    });
    return beerList
  } catch(e) {
    console.error(e)
  } finally {
    state.loading = false
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