import{_ as e,p as a,q as n,a1 as s}from"./framework-8c3532e7.js";const t={},i=s(`<h1 id="authentifications" tabindex="-1"><a class="header-anchor" href="#authentifications" aria-hidden="true">#</a> Authentifications</h1><ul><li><code>akhq.security.default-group</code>: Default group for all the user even unlogged user. By default, the default group is <code>admin</code> and allow you all read / write access on the whole app.</li></ul><p>By default, security &amp; roles is disabled and anonymous user have full access, i.e. <code>micronaut.security.enabled: false</code>. To enable security &amp; roles set <code>micronaut.security.enabled: true</code> and configure desired type of authentication (basic auth, LDAP, etc.).</p><p>If you need a read-only application, simply add this to your configuration files :</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span>
    <span class="token key atrule">default-group</span><span class="token punctuation">:</span> reader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function o(c,d){return a(),n("div",null,l)}const r=e(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
