import Component from '@ember/component';

export default Component.extend({
  tagName: 'header',
  classNames: ['main-header'],
  displayingLinks: false,

  actions: {
    toggleLinks() {
      this.toggleProperty('displayingLinks');
    }
  }
});
