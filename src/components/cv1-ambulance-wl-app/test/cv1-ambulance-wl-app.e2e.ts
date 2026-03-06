import { newE2EPage } from '@stencil/core/testing';

describe('cv1-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1-ambulance-wl-app></cv1-ambulance-wl-app>');

    const element = await page.find('cv1-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
