import { Component, h } from '@stencil/core';
import { Env } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  componentWillLoad() {
    document.title = Env.teamName
  }

  render() {
    return (
      <div class="flex-col justify-center container p-2 mx-auto mt-8">
        <div class="flex flex-col justify-center items-center w-full">
          <img class="w-32 block mb-3" src={Env.logo} alt={Env.teamName} />
          <div class="mt-4 lg:mt-0">
            <h1 class="lg:text-6xl text-2xl text-center">{Env.teamName}</h1>
            <h2 class="lg:text-2xl text-xl mt-2 lg:tracking-widest text-center">{Env.teamDescription}</h2>
          </div>
        </div>
        <div class="mt-8">
          <div class="px-0 lg:px-36">
            <div class="flex justify-center items-center w-full  border-t border-b  border-gray-400 mb-12">
              <div class="flex items-center justify-center">
                <stencil-route-link url="/schedule" class="w-32 py-2 text-lg text-center" activeClass="underline">
                  Schedule
                </stencil-route-link>
                <stencil-route-link url="/standings" class="w-32 py-2 text-lg text-center" activeClass="underline">
                  Standings              
                </stencil-route-link>      
                { 
                Env.teamName && <stencil-route-link url="/rules" class="w-32 py-2 text-lg text-center" activeClass="underline">
                  Beer Rules
                </stencil-route-link>
                }
              </div>
            </div>

            <stencil-router historyType={'hash'}>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-schedule" exact={true} />
                <stencil-route url="/schedule" component="app-schedule"  exact={true} />
                <stencil-route url="/standings" component="app-standings"  exact={true} />
                <stencil-route url="/rules" component="app-rules"  exact={true} />
                {
                  Env.roster && <stencil-route url="/roster" component="app-roster"  exact={true} />
                }
              </stencil-route-switch>
            </stencil-router>
            </div>
          </div>
        </div>
    );
  }
}
