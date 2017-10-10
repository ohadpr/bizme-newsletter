import template from 'raw-loader!../templates/indiehacker.html'

var PostPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    console.log(entry.get('data').toJS());
    return h('div', {"dangerouslySetInnerHTML": {"__html":template}});
  }
});

CMS.registerPreviewTemplate("newsletters", PostPreview);
