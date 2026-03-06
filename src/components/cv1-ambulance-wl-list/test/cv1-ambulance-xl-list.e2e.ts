import { newE2EPage } from '@stencil/core/testing';

describe('cv1-ambulance-xl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1-ambulance-xl-list></cv1-ambulance-xl-list>');

    const element = await page.find('cv1-ambulance-xl-list');
    expect(element).toHaveClass('hydrated');
  });
});
