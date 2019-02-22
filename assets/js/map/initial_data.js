window.INITIAL_DATA =
    "{\"nodes\":[{\"text\":\"search algorithm\",\"url\":\"http://news.ycombinator.com\",\"category\":\"wiki\",\"selector\":\"https://discourse.opengenus.org\",\"fx\":-55.30872217668207,\"fy\":-436.50108225961264,\"width\":258,\"height\":60,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('search algorithm')\\\">➡️ search algorithm <img class=\\\"mindmap-emoji\\\" title=\\\"wiki\\\" src=\\\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png\\\"></a>\",\"index\":0,\"x\":-55.30872217668207,\"y\":-436.50108225961264,\"vy\":0,\"vx\":0,\"active\":true},{\"text\":\"linear search\",\"selector\":\"https://discourse.opengenus.org/\",\"url\":\"\",\"fx\":-206.80451500765687,\"fy\":-185.3723560133368,\"width\":160,\"height\":56,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('linear search')\\\"> linear search </a>\",\"index\":1,\"x\":-206.80451500765687,\"y\":-185.3723560133368,\"vy\":0,\"vx\":0,\"active\":false},{\"text\":\"binary search\",\"selector\":\"https://discourse.opengenus.org\",\"url\":\"\",\"fx\":130.33023733934982,\"fy\":-192.6515650113338,\"width\":166,\"height\":56,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('binary search')\\\"> binary search </a>\",\"index\":2,\"x\":130.33023733934982,\"y\":-192.6515650113338,\"vy\":0,\"vx\":0}],\"subnodes\":[],\"connections\":[{\"source\":\"linear search\",\"target\":\"search algorithm\",\"curve\":{\"x\":null,\"y\":null},\"index\":0},{\"source\":\"binary search\",\"target\":\"search algorithm\",\"curve\":{\"x\":null,\"y\":null},\"index\":1}]}";
window.SCRAPING_KEY = "dk4qmwuz";

var js = JSON.parse(INITIAL_DATA);

html = '<svg class="mindmap-svg" viewBox="-356.80451500765685 -586.5010822596126 637.1347523470067 551.1287262462758" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">';

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
    source_x = dict[source][0];
    source_y = dict[source][1];
    target_x = dict[target][0];
    target_y = dict[target][1];

    html += `<path class="mindmap-connection" d="M ${source_x} ${source_y} Q ${source_x} ${source_y} ,${target_x} ${target_y}"> </path>`;
}

html += '</g>';

content_div = document.getElementById('mind-map-content');
content_div.innerHTML = html;

// {
//     "nodes": [{
//             "text": "search algorithm",
//             "url": "http://news.ycombinator.com",
//             "category": "wiki",
//             "selector": "https://discourse.opengenus.org",
//             "fx": -55.30872217668207,
//             "fy": -436.50108225961264,
//             "width": 258,
//             "height": 60,
//             "html": "<a href=\"#\" onclick=\"selectNode('search algorithm')\">➡️ search algorithm <img class=\"mindmap-emoji\" title=\"wiki\" src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png\"></a>",
//             "index": 0,
//             "x": -55.30872217668207,
//             "y": -436.50108225961264,
//             "vy": 0,
//             "vx": 0,
//             "active": true
//         },
//         {
//             "text": "linear search",
//             "selector": "https://discourse.opengenus.org/",
//             "url": "",
//             "fx": -206.80451500765687,
//             "fy": -185.3723560133368,
//             "width": 160,
//             "height": 56,
//             "html": "<a href=\"#\" onclick=\"selectNode('linear search')\"> linear search </a>",
//             "index": 1,
//             "x": -206.80451500765687,
//             "y": -185.3723560133368,
//             "vy": 0,
//             "vx": 0,
//             "active": false
//         },
//         {
//             "text": "binary search",
//             "selector": "https://discourse.opengenus.org",
//             "url": "",
//             "fx": 130.33023733934982,
//             "fy": -192.6515650113338,
//             "width": 166,
//             "height": 56,
//             "html": "<a href=\"#\" onclick=\"selectNode('binary search')\"> binary search </a>",
//             "index": 2,
//             "x": 130.33023733934982,
//             "y": -192.6515650113338,
//             "vy": 0,
//             "vx": 0
//         }
//     ],
//     "subnodes": [],
//     "connections": [{
//         "source": "linear search",
//         "target": "search algorithm",
//         "curve": {
//             "x": null,
//             "y": null
//         },
//         "index": 0
//     }, {
//         "source": "binary search",
//         "target": "search algorithm",
//         "curve": {
//             "x": null,
//             "y": null
//         },
//         "index": 1
//     }]
// }