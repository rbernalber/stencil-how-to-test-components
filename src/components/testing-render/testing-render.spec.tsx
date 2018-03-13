import { render, flush } from '@stencil/core/testing';
import { TestingRender } from './testing-render';

describe('testing-render', () => {
  it('should build', () => {
    expect(new TestingRender()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TestingRender],
        html: '<testing-render></testing-render>'
      });
    });

    it('should be able to render component', async () => {
      await flush(element);
      expect(element.querySelectorAll('[data-test="day"]').length).toEqual(7);
    });

    it('should be able to set day class', async () => {
      await flush(element);
      element.querySelectorAll('[data-test="day"]')[2].click();
      await flush(element);
      expect(element.querySelector('.day-selected').textContent).toBe('Tu')
    });
  });
});
