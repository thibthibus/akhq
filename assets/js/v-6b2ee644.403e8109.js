"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[739],{3520:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-6b2ee644",path:"/docs/installation.html",title:"Installation",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"Docker",slug:"docker",children:[]},{level:3,title:"Stand Alone",slug:"stand-alone",children:[]},{level:3,title:"Running in Kubernetes (using a Helm Chart)",slug:"running-in-kubernetes-using-a-helm-chart",children:[]},{level:3,title:"Using Helm repository",slug:"using-helm-repository",children:[]},{level:3,title:"Using git",slug:"using-git",children:[]}],filePathRelative:"docs/installation.md",git:{updatedTime:1656270532e3,contributors:[{name:"10xtechie",email:"102477169+10xtechie@users.noreply.github.com",commits:1}]}}},6666:(e,n,a)=>{a.r(n),a.d(n,{default:()=>J});var l=a(6252);const s=(0,l._)("h1",{id:"installation",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,l.Uk)(" Installation")],-1),i=(0,l.Uk)("First you need a "),t=(0,l.Uk)("configuration files"),r=(0,l.Uk)(" in order to configure AKHQ connections to Kafka Brokers."),o=(0,l.uE)('<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n    -p <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>\n    -v /tmp/application.yml:/app/application.yml <span class="token punctuation">\\</span>\n    tchiotludo/akhq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),u=(0,l._)("li",null,[(0,l.Uk)("With "),(0,l._)("code",null,"-v /tmp/application.yml"),(0,l.Uk)(" must be an absolute path to configuration file")],-1),c=(0,l.Uk)("Go to "),h={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("http://localhost:8080"),p=(0,l._)("h3",{id:"stand-alone",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#stand-alone","aria-hidden":"true"},"#"),(0,l.Uk)(" Stand Alone")],-1),m=(0,l._)("li",null,"Install Java 11",-1),g=(0,l.Uk)("Download the latest jar on "),b={href:"https://github.com/tchiotludo/akhq/releases",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("release page"),v=(0,l.Uk)("Create an "),f=(0,l.Uk)("configuration files"),_=(0,l._)("li",null,[(0,l.Uk)("Launch the application with "),(0,l._)("code",null,"java -Dmicronaut.config.files=/path/to/application.yml -jar akhq.jar")],-1),U=(0,l.Uk)("Go to "),y={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},q=(0,l.Uk)("http://localhost:8080"),x=(0,l.uE)('<h3 id="running-in-kubernetes-using-a-helm-chart" tabindex="-1"><a class="header-anchor" href="#running-in-kubernetes-using-a-helm-chart" aria-hidden="true">#</a> Running in Kubernetes (using a Helm Chart)</h3><h3 id="using-helm-repository" tabindex="-1"><a class="header-anchor" href="#using-helm-repository" aria-hidden="true">#</a> Using Helm repository</h3><ul><li>Add the AKHQ helm charts repository:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm repo <span class="token function">add</span> akhq https://akhq.io/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Install or upgrade</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm upgrade --install akhq akhq/akhq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h4><ul><li>Chart version &gt;=0.1.1 requires Kubernetes version &gt;=1.14</li><li>Chart version 0.1.0 works on previous Kubernetes versions</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm <span class="token function">install</span> akhq akhq/akhq --version <span class="token number">0.1</span>.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-git" tabindex="-1"><a class="header-anchor" href="#using-git" aria-hidden="true">#</a> Using git</h3><ul><li>Clone the repository:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/tchiotludo/akhq <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> akhq/helm/akhq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),w=(0,l.Uk)("Update helm values located in "),C=(0,l._)("a",{href:"helm/akhq/values.yaml"},"values.yaml",-1),W=(0,l._)("code",null,"configuration",-1),H=(0,l.Uk)(" values will contains all related configuration that you can find in "),K={href:"https://github.com/tchiotludo/akhq/blob/dev/application.example.yml",target:"_blank",rel:"noopener noreferrer"},A=(0,l.Uk)("application.example.yml"),D=(0,l.Uk)(" and will be store in a "),R=(0,l._)("code",null,"ConfigMap",-1),j=(0,l._)("code",null,"secrets",-1),I=(0,l.Uk)(" values will contains all sensitive configurations (with credentials) that you can find in "),S={href:"https://github.com/tchiotludo/akhq/blob/dev/application.example.yml",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("application.example.yml"),L=(0,l.Uk)(" and will be store in "),B=(0,l._)("code",null,"Secret",-1),G=(0,l._)("li",null,"Both values will be merged at startup",-1),Q=(0,l._)("li",null,"Apply the chart:",-1),Z=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm <span class="token function">install</span> --name<span class="token operator">=</span>akhq-release-name  <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),F={},J=(0,a(3744).Z)(F,[["render",function(e,n){const a=(0,l.up)("RouterLink"),F=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("p",null,[i,(0,l.Wm)(a,{to:"/docs/configuration/"},{default:(0,l.w5)((()=>[t])),_:1}),r]),o,(0,l._)("ul",null,[u,(0,l._)("li",null,[c,(0,l._)("a",h,[d,(0,l.Wm)(F)])])]),p,(0,l._)("ul",null,[m,(0,l._)("li",null,[g,(0,l._)("a",b,[k,(0,l.Wm)(F)])]),(0,l._)("li",null,[v,(0,l.Wm)(a,{to:"/docs/configuration/"},{default:(0,l.w5)((()=>[f])),_:1})]),_,(0,l._)("li",null,[U,(0,l._)("a",y,[q,(0,l.Wm)(F)])])]),x,(0,l._)("ul",null,[(0,l._)("li",null,[w,C,(0,l._)("ul",null,[(0,l._)("li",null,[W,H,(0,l._)("a",K,[A,(0,l.Wm)(F)]),D,R]),(0,l._)("li",null,[j,I,(0,l._)("a",S,[E,(0,l.Wm)(F)]),L,B]),G])]),Q]),Z],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,l]of n)e[a]=l;return e}}}]);