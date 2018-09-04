import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('photos', [
      'assets/galeria/Remanso-41.png',
      'assets/galeria/Remanso-42.png',
      'assets/galeria/Remanso-43.png',
      'assets/galeria/Remanso-44.png',
      'assets/galeria/Remanso-45.png',
      'assets/galeria/Remanso-46.png',
      'assets/galeria/Remanso-47.png',
      'assets/galeria/Remanso-48.png',
      'assets/galeria/Remanso-49.png',
    ]);
  },
});
