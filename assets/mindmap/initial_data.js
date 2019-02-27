// window.SCRAPING_KEY = "dk4qmwuz";

var js = JSON.parse(data);
var map_scale = 1;
var min_scale = 0.3;
var max_scale = 5;

html = '<svg class="mindmap-svg" viewBox="-356.80451500765685 -486.5010822596126 637.1347523470067 551.1287262462758" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">';

html += '<g id="mindmap-subnodes"></g><g></g><g>';

var dict = {};
for (i = 0; i < js['nodes'].length; i++) {
    curr_node = js['nodes'][i];
    id = curr_node['text'];
    x = curr_node['x'];
    y = curr_node['y'];
    dict[id] = [x, y];
    width = curr_node['width'];
    height = curr_node['height'];
    node_html = curr_node['html'];
    html += `<foreignobject class="mindmap-node" id="${id}" width="${width}" height="${height}" 
    x="${x}" y="${y}">${node_html}<title></title> </foreignobject>`;
}

html += '</g><g>';

for (i = 0; i < js['connections'].length; i++) {
    curr_node = js['connections'][i];
    source = curr_node['source'];
    target = curr_node['target'];
    source_x = dict[source][0] + 60;
    source_y = dict[source][1];
    target_x = dict[target][0] + 100;
    target_y = dict[target][1] + 56;

    html += `<path class="mindmap-connection" d="M ${source_x} ${source_y} Q ${source_x} ${source_y} ,${target_x} ${target_y}"> </path>`;
}

html += '</g>';

content_div = document.getElementById('mind-map-content');
content_div.innerHTML = html;

nav_div = document.getElementById('site-nav');

site_html = '<ul>';

for (i = 0; i < js['link'].length; i++) {
    site_html += `<li><a href='http://iq.opengenus.org/${js['link'][i]}'>${js['category'][i]}</a>`;
    if (i < js['link'].length - 1) {
        site_html += '<i class="right"></i>';
    }
    site_html += `</li>`;
}

site_html += '<ul>';

nav_div.innerHTML = site_html;