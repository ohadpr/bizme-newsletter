import template from '../templates/indiehacker.html'
import mustache from "mustache";

var PostPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var data = entry.get('data').toJS();
    console.log(data);
    var html = mustache.render(template, data);
    return h('div', {"dangerouslySetInnerHTML": {"__html":html}});
  }
});

CMS.registerPreviewTemplate("newsletters", PostPreview);
