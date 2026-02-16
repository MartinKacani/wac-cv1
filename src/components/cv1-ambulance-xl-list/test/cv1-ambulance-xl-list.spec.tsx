import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceXlList } from '../cv1-ambulance-xl-list';

describe('cv1-ambulance-xl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1AmbulanceXlList],
      html: `<cv1-ambulance-xl-list></cv1-ambulance-xl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1-ambulance-xl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1-ambulance-xl-list>
    `);
  });
});
