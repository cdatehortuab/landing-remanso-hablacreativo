import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  classNames: ['input-group'],
  showLabel: computed('value', function() {
    return !isEmpty(this.get('value'));
  }),
});
