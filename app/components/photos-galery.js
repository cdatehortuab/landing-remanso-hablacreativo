import Component from '@ember/component';
import { observer } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import $ from 'jquery';

export default Component.extend({
  classNames: ['photos-galery'],
  activeImage: 0,

  activeImageObserver: observer('activeImage', function() {
      const cropImgElements = this.get('cropImgElements');
      const activeImage = this.get('activeImage');
      cropImgElements.forEach((element, index) => {
        const newLeftValue = (index - activeImage) * 100;
        $(element).css('left', `${newLeftValue}%`);
      });
  }),

  didInsertElement() {
    this._super(...arguments);
    const cropImgElements = [];
    this.$('.crop-img').each((index, element) => {
      $(element).css('left', `${index * 100}%`);
      cropImgElements.push(element);
    });
    const interval = setInterval(() => {
      const activeImage = (this.get('activeImage') + 1) % this.get('photos.length');
      this.set('activeImage', activeImage);
    }, 3000);
    scheduleOnce('afterRender', () => {
      this.set('cropImgElements', cropImgElements);
      this.set('interval', interval);
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    clearInterval(this.get('interval'));
  },
});
