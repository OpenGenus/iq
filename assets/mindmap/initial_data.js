// window.SCRAPING_KEY = "dk4qmwuz";

var js = JSON.parse(data);

html = '<svg class="mindmap-svg" viewBox="-356.80451500765685 -486.5010822596126 637.1347523470067 551.1287262462758" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">';

html += '<g id="mindmap-subnodes"></g><g>';

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

console.log(dict);

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