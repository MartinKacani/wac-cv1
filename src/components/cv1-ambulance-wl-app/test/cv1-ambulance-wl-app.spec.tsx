import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceWlApp } from '../cv1-ambulance-wl-app';

describe('cv1-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv1AmbulanceWlApp],
      html: `<cv1-ambulance-wl-app base-path="/"></cv1-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root?.shadowRoot?.firstElementChild as HTMLElement;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv1-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv1AmbulanceWlApp],
      html: `<cv1-ambulance-wl-app base-path="/ambulance-wl/"></cv1-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = page.root?.shadowRoot?.firstElementChild as HTMLElement;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv1-ambulance-wl-list");
  });
});