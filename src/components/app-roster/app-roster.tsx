import { Component, State, h } from '@stencil/core';
import { Remarkable } from 'remarkable';
import { Env } from '@stencil/core';

@Component({
  tag: 'app-roster',
  styleUrl: 'app-roster.css',
  shadow: false,
})
export class AppRoster {
  md = new Remarkable();
  @State() html

  async componentWillLoad() {
    const response = await fetch(Env.roster)
    const file = await response.text()
    this.html = this.md.render(file)
  }

  render() {
    return (
      <div class="lg:mx-auto mx-0 flex flex-col mb-48 w-full lg:w-1/2 justify-center">
      <article class="prose">
        <div innerHTML={this.html}></div>
      </article>
      </div>
    );
  }
}
