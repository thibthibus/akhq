"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[469],{9664:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t={key:"v-6b880fd2",path:"/docs/configuration/akhq.html",title:"AKHQ configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Pagination",slug:"pagination",children:[]},{level:2,title:"Avro Serializer",slug:"avro-serializer",children:[]},{level:2,title:"Topic List",slug:"topic-list",children:[]},{level:2,title:"Topic creation default values",slug:"topic-creation-default-values",children:[]},{level:2,title:"Topic Data",slug:"topic-data",children:[]},{level:2,title:"Ui Settings",slug:"ui-settings",children:[{level:3,title:"Topics",slug:"topics",children:[]},{level:3,title:"Topic Data",slug:"topic-data-1",children:[]},{level:3,title:"Inject some css or javascript",slug:"inject-some-css-or-javascript",children:[]}]}],filePathRelative:"docs/configuration/akhq.md",git:{updatedTime:165687245e4,contributors:[{name:"ThomasSanson",email:"93382375+ThomasSanson@users.noreply.github.com",commits:1}]}}},3646:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});const t=(0,i(6252).uE)('<h1 id="akhq-configuration" tabindex="-1"><a class="header-anchor" href="#akhq-configuration" aria-hidden="true">#</a> AKHQ configuration</h1><h2 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h2><ul><li><code>akhq.pagination.page-size</code> number of topics per page (default : 25)</li></ul><h2 id="avro-serializer" tabindex="-1"><a class="header-anchor" href="#avro-serializer" aria-hidden="true">#</a> Avro Serializer</h2><ul><li><code>akhq.avro-serializer.json.serialization.inclusions</code> is list of ObjectMapper serialization inclusions that is used for converting Avro message to more readable Json format in the UI. Supports Enums of JsonInclude.Include from Jackson library</li></ul><h2 id="topic-list" tabindex="-1"><a class="header-anchor" href="#topic-list" aria-hidden="true">#</a> Topic List</h2><ul><li><code>akhq.topic.internal-regexps</code> is list of regexp to be considered as internal (internal topic can&#39;t be deleted or updated)</li><li><code>akhq.topic.stream-regexps</code> is list of regexp to be considered as internal stream topic</li></ul><h2 id="topic-creation-default-values" tabindex="-1"><a class="header-anchor" href="#topic-creation-default-values" aria-hidden="true">#</a> Topic creation default values</h2><p>These parameters are the default values used in the topic creation page.</p><ul><li><code>akhq.topic.replication</code> Default number of replica to use</li><li><code>akhq.topic.partition</code> Default number of partition</li></ul><h2 id="topic-data" tabindex="-1"><a class="header-anchor" href="#topic-data" aria-hidden="true">#</a> Topic Data</h2><ul><li><code>akhq.topic-data.size</code>: max record per page (default: 50)</li><li><code>akhq.topic-data.poll-timeout</code>: The time, in milliseconds, spent waiting in poll if data is not available in the buffer (default: 1000).</li><li><code>akhq.topic-data.kafka-max-message-length</code>: Max message length allowed to send to UI when retrieving a list of records (dafault: 1000000 bytes).</li></ul><h2 id="ui-settings" tabindex="-1"><a class="header-anchor" href="#ui-settings" aria-hidden="true">#</a> Ui Settings</h2><h3 id="topics" tabindex="-1"><a class="header-anchor" href="#topics" aria-hidden="true">#</a> Topics</h3><ul><li><code>akhq.ui-options.topic.default-view</code> is default list view (ALL, HIDE_INTERNAL, HIDE_INTERNAL_STREAM, HIDE_STREAM) (default: HIDE_INTERNAL)</li><li><code>akhq.ui-options.topic.skip-consumer-groups</code> hide consumer groups columns on topic list</li><li><code>akhq.ui-options.topic.skip-last-record</code> hide the last records on topic list</li><li><code>akhq.ui-options.topic.show-all-consumer-groups</code> expand lists of consumer groups on topic list</li></ul><h3 id="topic-data-1" tabindex="-1"><a class="header-anchor" href="#topic-data-1" aria-hidden="true">#</a> Topic Data</h3><ul><li><code>akhq.ui-options.topic-data.sort</code>: default sort order (OLDEST, NEWEST) (default: OLDEST)</li></ul><h3 id="inject-some-css-or-javascript" tabindex="-1"><a class="header-anchor" href="#inject-some-css-or-javascript" aria-hidden="true">#</a> Inject some css or javascript</h3><ul><li><code>akhq.html-head</code>: Append some head tags on the webserver application Mostly useful in order to inject some css or javascript to customize the web application.</li></ul><p>Examples, add a environment information on the left menu:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">html-head</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n    &lt;style type=&quot;text/css&quot;&gt;\n      .logo-wrapper:after {\n        display: block;\n        content: &quot;Local&quot;;\n        position: relative;\n        text-transform: uppercase;\n        text-align: center;\n        color: white;\n        margin-top: 10px;\n      }\n    &lt;/style&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',21),s={},n=(0,i(3744).Z)(s,[["render",function(e,a){return t}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[i,t]of a)e[i]=t;return e}}}]);