import template from '../templates/indiehacker.html'
import mustache from "mustache";

var PostPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var html = mustache.render(template, entry.get('data').toJS());
    return h('div', {"dangerouslySetInnerHTML": {"__html":html}});
  }
});

CMS.registerPreviewTemplate("newsletters", PostPreview);
