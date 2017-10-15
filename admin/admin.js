import template from '../templates/indiehacker.html'
import mustache from "mustache";

var PostPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var data = entry.get('data').toJS();

    console.log(data['closing']);
    
    // convert the 'closing' field from a string to an array of strings based on line breaks
    data['closing'] = data['closing'].split(/[\r\n]+/)
                        .map(function(line) { return { line: line } });

    console.log(data['closing']);

    var html = mustache.render(template, data);
    return h('div', {"dangerouslySetInnerHTML": {"__html":html}});
  }
});

CMS.registerPreviewTemplate("newsletters", PostPreview);
