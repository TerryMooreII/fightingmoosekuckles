
# A better interface for viewing daysmart team schedules

Add the following ENV variables to your `.env` file

```
BASE_URL=  #including ending slash ex http://mysite.com/
TEAM_ID=
LEAGUE_ID=
TEAM_NAME=
TEAM_DESCRIPTION=
LOGO_FILE=
BEER_RULES_MD_FILE=
BEER_CSV= 
ROSTER_MD=
```

Make sure when you add new Env variables that they get added to the `.env` file, the `stencil.config.ts`, Github, and `.github/workflows/main.yml`.


## How this works

All shared code goes in this repo, the other actual pages get setup like below

Add the following upstream to the child repos.

```
git remote add upstream git@github.com:TerryMooreII/daysmart-fe.git
```

Now to get changes from upstream in the Gorillas or Moose knuckles child team pages

```
git fetch upstream

git rebase upstream/main

git push --force
```

When the season changes you will need to update the `TEAM_ID` and `LEAGUE_ID` [variables in github](https://github.com/TerryMooreII/fightingmoosekuckles/settings/variables/actions)

To get the correct ids go to the [Polar Ice House](https://apps.daysmartrecreation.com/dash/x/#/online/polarice/leagues?location=1) (or your local league page) and look for your league.  Hover over the league level and grab the id from the url.  After you click on the league find your team name and hover over that for the team_id


## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

Ignore
update...
