const teamid = "6207";
const url = `https://apps.daysmartrecreation.com/dash/jsonapi/api/v1/teams/${teamid}?cache[save]=false&include=events.eventType,events.homeTeam,events.visitingTeam,events.resource.facility,events.resourceArea,events.comments,league.playoffEvents.eventType,league.playoffEvents.homeTeam,league.playoffEvents.visitingTeam,league.playoffEvents.resource.facility,league.playoffEvents.resourceArea,league.playoffEvents.comments,league.programType,product.locations,programType,season,skillLevel,ageRange,sport&company=polarice`;
const sheetsUrl =
  "https://docs.google.com/spreadsheets/d/10yet2waUUOQmNdMW7mH1nBQC4Ue6_piqAdMQh5HjDys/gviz/tq?tqx=out:html&tq&gid=0";
  
const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getData = async () => {
  const response = await fetch(url);
  return await response.json();
};

const getDayOfWeek = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return days[d.getDay()];
};

const getNextEvent = (events) => {
  const now = Date.now();
  let diff = 0;
  let nextEvent = null;
  events.forEach((item) => {
    if (![item.vteam_id, item.hteam_id].includes(+teamid)) return
    const dt = [item.start_date.split('T')[0], item.start_time].join('T')
    const eventDate = new Date(dt).getTime();
    if (eventDate > now) {
      const distance = eventDate - now;
      if (diff === 0) {
        diff = distance;
        nextEvent = item;
      } else if (distance < diff) {
        diff = distance;
        nextEvent = item;
      }
    }
  });
  
  return nextEvent
}

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

const formatTime = (time) => {
  if (!time) return "";
  let [hour, min] = time.split(":");
  if (+hour > 12) hour = +hour - 12;
  return `${hour}:${min}`;
};
const start = (json) => {
  const facilities = json.included

    .filter((item) => item.type === "resource")
    .reduce((acc, item) => {
      acc[item.id] = item.attributes.name;
      return acc;
    }, {});

  const teams = json.included
    .filter((item) => item.type === "team")
    .reduce((acc, item) => {
      acc[item.id] = item.attributes.name;
      return acc;
    }, {
      // Add moose knucks
      [json.data.id]: json.data.attributes.name
    });

  const events = json.included
    .filter(
      (item) => item.type === "event" && item.attributes.event_type !== "L"
    )
    .map((item) => {
      const e = item.attributes;
      return {
        location: facilities[e.resource_id],
        hscore: e.hscore ?? 0,
        vscore: e.vscore ?? 0,
        sub_type: e.sub_type,
        hteam_id: e.hteam_id,
        vteam_id: e.vteam_id,
        hteam: teams[e.hteam_id] ?? "Home Team",
        vteam: teams[e.vteam_id] ?? "Away Team",
        desc: e.desc,
        start_date: e.start_date,
        start_time: e.event_start_time,
        date_formatted: formatDate(e.start_date),
        time_fomatted: formatTime(e.event_start_time),
        day_of_week: getDayOfWeek(e.start_date)
      };
    })
    .sort((a, b) =>
      a.start_date < b.start_date ? 1 : a.start_date > b.start_date ? -1 : 0
    );

  const app = document.getElementById("app");

  const nextEvent = getNextEvent(events)

  const nextEventDom = !nextEvent ? '' : `
    <div class="flex w-full flex-col items-center border-b-4 border-grey-500 mt-16 mb-8 pb-8">
    <h4 class="text-2xl text-center w-full"> Next Game </h4>
    <div class="containter flex flex-row my-4 w-full lg:w-1/2 p-5">
      <div class="flex flex-row w-full">
        <div class="event flex flex-col w-3/4">
          <div class="away flex items-center justify-between ${
            nextEvent.vscore > nextEvent.hscore ? "font-bold" : ""
          }">
            <div class="team text-lg">${nextEvent.vteam}</div>
            <div class="score text-lg">${nextEvent.vscore}</div>
          </div>
          <div class="home flex items-center justify-between ${
            nextEvent.hscore > nextEvent.vscore ? "font-bold" : ""
          }">
            <div class="team text-lg">${nextEvent.hteam}</div>
            <div class="score text-lg">${nextEvent.hscore}</div>
          </div>
          <div class="meta flex items-center justify-between mt-2 text-sm text-gray-400 font-light">
            <div class="location">${nextEvent.location}</div>
            <div class="timedate">
              ${nextEvent.day_of_week} ${nextEvent.date_formatted} ${nextEvent.time_fomatted}
            </div>
          </div>
        </div>
        <div class="beer flex justify-center items-center text-center w-1/4">
          ${beerList[nextEvent.date_formatted] ? "🍻" : ""} <br>
          ${beerList[nextEvent.date_formatted] ?? ""}
        </div>
      </div>
    </div>
    </div>
  `;

  const dom = events.map((event, i) => {
    return `
    <div class="containter flex flex-row lg:py-4 lg:w-1/2 border-b w-full">
      <div class="flex flex-row w-full py-5 lg:pl-16 ${i % 2 ? "lg:border-l" : ""}">
        <div class="event flex flex-col w-3/4">
          <div class="away flex items-center justify-between ${
            event.vscore > event.hscore ? "font-bold" : ""
          }">
            <div class="team text-lg">${event.vteam}</div>
            <div class="score text-lg">${event.vscore}</div>
          </div>
          <div class="home flex items-center justify-between ${
            event.hscore > event.vscore ? "font-bold" : ""
          }">
            <div class="team text-lg">${event.hteam}</div>
            <div class="score text-lg">${event.hscore}</div>
          </div>
          <div class="meta flex items-center justify-between mt-2 text-sm text-gray-400 font-light">
            <div class="location">${event.location}</div>
            <div class="timedate">
              ${event.day_of_week} ${event.date_formatted} ${event.time_fomatted}
            </div>
          </div>
        </div>
        <div class="beer flex items-center w-1/4">
          <div class="text-center w-full">
            ${beerList[event.date_formatted] ? "🍻" : ""} <br>
            ${beerList[event.date_formatted] ?? ""}
          </div>
        </div>
      </div>
    </div>`;
  });
  const schedule = `<h4 class="text-2xl text-center w-full my-6"> Schedule </h4>`;
  app.innerHTML = [nextEventDom, schedule, ...dom].join("")
};

const beerList = {};
const getSheetData = async () => {
  const response = await fetch(sheetsUrl);
  return await response.text();
};

getSheetData().then((sheet) => {
  const el = document.createElement("div");
  el.innerHTML = sheet;

  [...el.querySelectorAll("tr")].forEach((row) => {
    const td = row.querySelectorAll("td");
    beerList[td[1].textContent] = td[0].textContent;
  });
});

getData().then(start);
