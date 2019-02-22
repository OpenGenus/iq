window.INITIAL_DATA =
    "{\"nodes\":[{\"text\":\"search algorithm\",\"url\":\"http://news.ycombinator.com\",\"category\":\"wiki\",\"selector\":\"https://discourse.opengenus.org\",\"fx\":-55.30872217668207,\"fy\":-436.50108225961264,\"width\":258,\"height\":60,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('search algorithm')\\\">➡️ search algorithm <img class=\\\"mindmap-emoji\\\" title=\\\"wiki\\\" src=\\\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png\\\"></a>\",\"index\":0,\"x\":-55.30872217668207,\"y\":-436.50108225961264,\"vy\":0,\"vx\":0,\"active\":true},{\"text\":\"linear search\",\"selector\":\"https://discourse.opengenus.org/\",\"url\":\"\",\"fx\":-206.80451500765687,\"fy\":-185.3723560133368,\"width\":160,\"height\":56,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('linear search')\\\"> linear search </a>\",\"index\":1,\"x\":-206.80451500765687,\"y\":-185.3723560133368,\"vy\":0,\"vx\":0,\"active\":false},{\"text\":\"binary search\",\"selector\":\"https://discourse.opengenus.org\",\"url\":\"\",\"fx\":130.33023733934982,\"fy\":-192.6515650113338,\"width\":166,\"height\":56,\"html\":\"<a href=\\\"#\\\" onclick=\\\"selectNode('binary search')\\\"> binary search </a>\",\"index\":2,\"x\":130.33023733934982,\"y\":-192.6515650113338,\"vy\":0,\"vx\":0}],\"subnodes\":[],\"connections\":[{\"source\":\"linear search\",\"target\":\"search algorithm\",\"curve\":{\"x\":null,\"y\":null},\"index\":0},{\"source\":\"binary search\",\"target\":\"search algorithm\",\"curve\":{\"x\":null,\"y\":null},\"index\":1}]}";
window.SCRAPING_KEY = "dk4qmwuz";

var js = JSON.parse(INITIAL_DATA);
// console.log(js);

html = '<svg class="mindmap-svg" viewBox="-356.80451500765685 -586.5010822596126 637.1347523470067 551.1287262462758" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">';

html += '<g id="mindmap-subnodes"></g><g>';

html += '<path class="mindmap-connection" d="M -206.80451500765687 -185.3723560133368 Q -206.80451500765687 -185.3723560133368 , -55.30872217668207 -436.50108225961264"> </path> <path class="mindmap-connection" d="M 130.33023733934982 -192.6515650113338 Q 130.33023733934982 -192.6515650113338 , -55.30872217668207 -436.50108225961264"></path></g><g>';

for (i = 0; i < js['nodes'].length; i++) {
    curr_node = js['nodes'][i];
    id = curr_node['text'];
    x = curr_node['x'];
    y = curr_node['y'];
    width = curr_node['width'];
    height = curr_node['height'];
    node_html = curr_node['html'];
    html += `<foreignobject class="mindmap-node" id="${id}" width="${width}" height="${height}" x="${x}" y="${y}">${node_html}<title></title> </foreignobject>`;
}

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


//             <path class="mindmap-connection"
//                 d="M -206.80451500765687 -185.3723560133368 Q -206.80451500765687 -185.3723560133368 , -55.30872217668207 -436.50108225961264">
//             </path>
//             <path class="mindmap-connection"
//                 d="M 130.33023733934982 -192.6515650113338 Q 130.33023733934982 -192.6515650113338 , -55.30872217668207 -436.50108225961264">
//             </path>
//         </g>

//         <g>
//             <foreignobject class="mindmap-node" id="searchalgorithm" width="240" height="60"
//                 x="-173.30872217668207" y="-466.50108225961264"><a
//                     href="https://dotamania.herokuapp.com/scrape/dk4qmwuz#"
//                     onclick="selectNode(&#39;search algorithm&#39;)">➡️ search algorithm <img
//                         class="mindmap-emoji" title="wiki"
//                         src="./Dota Mania _ Mind Map Web Scraping_files/1f310.png"></a>
//                 <title></title>
//             </foreignobject>

//             <foreignobject class="mindmap-node" id="linearsearch" width="146" height="56"
//                 x="-277.80451500765685" y="-213.3723560133368"><a
//                     href="https://dotamania.herokuapp.com/scrape/dk4qmwuz#"
//                     onclick="selectNode(&#39;linear search&#39;)"> linear search </a>
//                 <title></title>
//             </foreignobject>

//             <foreignobject class="mindmap-node" id="binarysearch" width="152" height="56"
//                 x="56.33023733934982" y="-220.6515650113338"><a
//                     href="https://dotamania.herokuapp.com/scrape/dk4qmwuz#"
//                     onclick="selectNode(&#39;binary search&#39;)"> binary search </a>
//                 <title></title>
//             </foreignobject>
//         </g>
//     </svg>
// </div>