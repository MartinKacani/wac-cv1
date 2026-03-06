import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceWlList } from '../cv1-ambulance-wl-list';

describe('cv1-ambulance-xl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1AmbulanceWlList],
      html: `<cv1-ambulance-xl-list></cv1-ambulance-xl-list>`,
    });
      const wlList = page.rootInstance as Cv1AmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
