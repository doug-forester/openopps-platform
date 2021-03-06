var _ = require('underscore');
var async = require('async');
var Backbone = require('backbone');
var $ = require('jquery');

// templates
var ApplyTemplate = require('../templates/internship_summary_template.html');
var ProcessFlowTemplate = require('../templates/process_flow_template.html');

var templates = {
  main: _.template(ApplyTemplate),
  processflow: _.template(ProcessFlowTemplate),
};

var ApplyView = Backbone.View.extend({
  events: {
    'click .logout'                : 'logout',
    'click .participated-show-all' : 'showAllParticipated',
    'click .created-show-all'      : 'showAllParticipated',
    'change #sort-participated'    : 'sortTasks',
    'change #sort-created'         : 'sortTasks',
  },

  initialize: function (options) {
    this.options = options;
    this.data = options.data;
  },

  render: function () {
    this.$el.html(templates.main);
    $('#search-results-loading').hide();
    this.$el.localize();

    // initialize sub components
    this.renderProcessFlowTemplate();

    return this;
  },

  renderProcessFlowTemplate: function () {
    $('#process-title-banners').html(_.template(ProcessFlowTemplate)());
  },

  cleanup: function () {
    removeView(this);
  },
});

module.exports = ApplyView;