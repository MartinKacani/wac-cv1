import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceXlList } from '../cv1-ambulance-xl-list';

describe('cv1-ambulance-xl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1AmbulanceXlList],
      html: `<cv1-ambulance-xl-list></cv1-ambulance-xl-list>`,
    });
      const wlList = page.rootInstance as Cv1AmbulanceXlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
