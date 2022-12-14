import{_ as e,p as o,q as r,a1 as t}from"./framework-8c3532e7.js";const i={},l=t('<h1 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h1><p>Groups allow you to limit user</p><p>Define groups with specific roles for your users</p><ul><li><p><code>akhq.security.default-group</code>: Default group for all the user even unlogged user</p></li><li><p><code>akhq.security.groups</code>: Groups map definition</p><ul><li><code>key:</code> a uniq key used as name if not specified <ul><li><code> name: group-name</code> Group identifier</li><li><code>roles</code>: Roles list for the group</li><li><code>attributes.topics-filter-regexp</code>: Regexp list to filter topics available for current group</li><li><code>attributes.connects-filter-regexp</code>: Regexp list to filter Connect tasks available for current group</li><li><code>attributes.consumer-groups-filter-regexp</code>: Regexp list to filter Consumer Groups available for current group</li></ul></li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>topics-filter-regexp</code>, <code>connects-filter-regexp</code> and <code>consumer-groups-filter-regexp</code> are only used when listing resources. If you have <code>topics/create</code> or <code>connect/create</code> roles and you try to create a resource that doesn&#39;t follow the regexp, that resource <strong>WILL</strong> be created.</p></div><p>3 defaults group are available :</p><ul><li><code>admin</code> with all right</li><li><code>reader</code> with only read access on all AKHQ</li><li><code>no-roles</code> without any roles, that force user to login</li></ul>',7),c=[l];function s(a,u){return o(),r("div",null,c)}const n=e(i,[["render",s],["__file","groups.html.vue"]]);export{n as default};
