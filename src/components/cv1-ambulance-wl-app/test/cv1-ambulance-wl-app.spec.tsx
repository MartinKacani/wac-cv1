import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceWlApp } from '../cv1-ambulance-wl-app';

describe('cv1-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv1AmbulanceWlApp],
      html: `<<pfx>-ambulance-wl-app base-path="/"></<pfx>-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("<pfx>-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv1AmbulanceWlApp],
      html: `<<pfx>-ambulance-wl-app base-path="/ambulance-wl/"></<pfx>-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("<pfx>-ambulance-wl-list");
  });
});