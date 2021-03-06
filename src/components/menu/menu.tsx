import { Component, Prop, h } from '@stencil/core';
import { Logo } from '../../icons';
// import { FrameworkSelect } from './framework-select';
import componentsTemplate from './templates/components';
import pluginsTemplate from './templates/plugins';
// import cliTemplate from './templates/cli';
import configTemplate from './templates/config';
// import studioTemplate from './templates/studio';
// import appflowTemplate from './templates/appflow';
import mainTemplate from './templates/main';
import tutorialTemplate from './templates/tutorial';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  @Prop() onToggleClick: (e: Event) => void;

  render() {
    return [
      <header>
        <docs-menu-toggle onClick={this.onToggleClick}/>
        <stencil-route-link url="/">
          <Logo class="MenuLogo"/>
        </stencil-route-link>
      </header>,
      // <stencil-route-switch>
      //   <stencil-route url="/appflow"></stencil-route>
      //   <stencil-route url="/studio"></stencil-route>
      //   <stencil-route>
      //     <section class="MenuControls">
      //       <framework-select/>
      //     </section>
      //   </stencil-route>
      // </stencil-route-switch>,
      <stencil-route-switch scrollTopOffset={0} class="Menu">
        <stencil-route url="/:lang([a-z]{2})?/(components|api)" routeRender={componentsTemplate}/>
        <stencil-route url="/:lang([a-z]{2})?/plugins" routeRender={pluginsTemplate}/>
        {/* <stencil-route url="/:lang([a-z]{2})?/studio" routeRender={studioTemplate}/> */}
        {/* <stencil-route url="/:lang([a-z]{2})?/native/:plugin" routeRender={() => <docs-menu-native category="community"/>}/> */}
        {/* <stencil-route url="/:lang([a-z]{2})?/native" routeRender={() => <docs-menu-native category="premier"/>}/> */}
        <stencil-route url="/:lang([a-z]{2})?/config" routeRender={configTemplate}/>
        <stencil-route url="/:lang([≥a-z]{2})?/tutorial" routeRender={tutorialTemplate}/>
        {/* <stencil-route url="/:lang([a-z]{2})?/enterprise" routeRender={() => <docs-menu-native category="premier"/>}/> */}
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>
    ];
  }
}
