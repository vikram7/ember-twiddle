import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['nav', 'nav-pills', 'user-menu'],

  userName: Ember.computed.readOnly('session.currentUser.login'),

  version: config.APP.version,
  environment: config.environment,
  currentRevision: config.currentRevision,

  currentVersionLink: Ember.computed('environment', 'version', 'currentRevision', function() {
    var baseLink = "https://github.com/ember-cli/ember-twiddle";
    var { environment, currentRevision, version } = this.getProperties('environment', 'currentRevision', 'version');

    switch (environment) {
      case 'production':
        return `${baseLink}/releases/tag/${version}`;

      case 'staging':
        return `${baseLink}/commit/${currentRevision}`;
    }
  }),

  actions: {
    signInViaGithub() {
      this.sendAction('signInViaGithub');
    },
    signOut() {
      this.sendAction('signOut');
    },

    showTwiddles() {
      this.sendAction('showTwiddles');
    }
  }
});
