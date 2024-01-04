var routes_base = window.App.urlBase + ':lang/admin/';
module.exports = [{
    path: routes_base ,
    component: require('./components/Index.vue').default
},

//soar
{
    path: routes_base + 'soar',
    component: require('./components/sora/Index.vue').default
},
{
    path: routes_base + 'sora/edit/:id',
    component: require('./components/sora/Edit.vue').default
},


//Newsletter
{
    path: routes_base + 'newsletters',
    component: require('./components/newsletter/NewsletterIndex.vue').default
  },
  {
    path: routes_base + 'newsletter/create',
    component: require('./components/newsletter/NewsletterCreate.vue').default
  },
  {
    path: routes_base + 'newsletter/edit/:id',
    component: require('./components/newsletter/NewsletterEdit.vue').default
  },
  
  {
    path: routes_base + 'nl_messages',
    component: require('./components/newsletter/MessageIndex.vue').default
  },
  {
    path: routes_base + 'nl_message/create',
    component: require('./components/newsletter/MessageCreate.vue').default
  },
  {
    path: routes_base + 'nl_message/:id',
    component: require('./components/newsletter/MessageShow.vue').default
  },
  {
    path: routes_base + 'nl_message/edit/:id',
    component: require('./components/newsletter/MessageEdit.vue').default
  },
  
  {
    path: routes_base + 'nl_subscribers',
    component: require('./components/newsletter/SubscriberIndex.vue').default
  },
  {
    path: routes_base + 'nl_subscriber/create',
    component: require('./components/newsletter/SubscriberCreate.vue').default
  },
  {
    path: routes_base + 'nl_subscriber/edit/:id',
    component: require('./components/newsletter/SubscriberEdit.vue').default
  },
  
  {
    path: routes_base + 'nl_templates',
    component: require('./components/newsletter/TemplateIndex.vue').default
  },
  {
    path: routes_base + 'nl_template/create',
    component: require('./components/newsletter/TemplateCreate.vue').default
  },
  {
    path: routes_base + 'nl_template/edit/:id',
    component: require('./components/newsletter/TemplateEdit.vue').default
  },
  
//menus
{
    path: routes_base + 'menus',
    component: require('./components/menu/Index.vue').default
},
{
    path: routes_base + 'menu/edit/:id',
    component: require('./components/menu/Edit.vue').default
},


//reads
{
    path: routes_base + 'reads',
    name: 'reads',
    component: require('./components/read/Index.vue').default
},
{
    path: routes_base + 'special_reads',
    name: 'special_reads',
    component: require('./components/read/Index.vue').default
},
{
    path: routes_base + 'read/create',
    component: require('./components/read/Create.vue').default
},
{
    path: routes_base + 'read/edit/:id',
    component: require('./components/read/Edit.vue').default
},

//apps
{
    path: routes_base + 'apps',
    component: require('./components/app/Index.vue').default
},
{
    path: routes_base + 'app/edit/:id',
    component: require('./components/app/Edit.vue').default
},
//reports
{
    path: routes_base + 'reports',
    component: require('./components/report/Index.vue').default
},

//Radio
{
    path: routes_base + 'radios',
    component: require('./components/radio/Index.vue').default
},
{
    path: routes_base + 'radio/edit/:id',
    component: require('./components/radio/Edit.vue').default
},

//Tadabor
{
    path: routes_base + 'tadabors',
    component: require('./components/tadabor/Index.vue').default
},
{
    path: routes_base + 'tadabor/edit/:id',
    component: require('./components/tadabor/Edit.vue').default
},

//reciter
{
    path: routes_base + 'reciters',
    component: require('./components/reciter/Index.vue').default
},
{
    path: routes_base + 'reciter/edit/:id',
    component: require('./components/reciter/Edit.vue').default
},

//tafsir
{
    path: routes_base + 'tafsirs',
    component: require('./components/tafsir/Index.vue').default
},
{
    path: routes_base + 'tafsir/edit/:id',
    component: require('./components/tafsir/Edit.vue').default
},

//tsora
{
    path: routes_base + 'tsoras/:tafsir',
    component: require('./components/tsora/Index.vue').default
},
{
    path: routes_base + 'tsora/edit/:id',
    component: require('./components/tsora/Edit.vue').default
},
//tvs
{
    path: routes_base + 'tvs',
    component: require('./components/tv/Index.vue').default
},
{
    path: routes_base + 'tv/edit/:id',
    component: require('./components/tv/Edit.vue').default
},


//ads
{
    path: routes_base + 'ads',
    component: require('./components/ad/Index.vue').default
},
{
    path: routes_base + 'ad/edit/:id',
    component: require('./components/ad/Edit.vue').default
},
//videos
{
    path: routes_base + 'videos',
    component: require('./components/video/Index.vue').default
},
{
    path: routes_base + 'video/edit/:id',
    component: require('./components/video/Edit.vue').default
},

//links
{
    path: routes_base + 'links',
    component: require('./components/link/Index.vue').default
},
{
    path: routes_base + 'link/edit/:id',
    component: require('./components/link/Edit.vue').default
},

//mushafs
{
    path: routes_base + 'mushafs',
    component: require('./components/mushaf/Index.vue').default
},
{
    path: routes_base + 'mushaf/edit/:id',
    component: require('./components/mushaf/Edit.vue').default
},

//vgroups
{
    path: routes_base + 'vgroups',
    component: require('./components/vgroup/Index.vue').default
},
{
    path: routes_base + 'vgroup/edit/:id',
    component: require('./components/vgroup/Edit.vue').default
},

//servers
{
    path: routes_base + 'servers',
    component: require('./components/server/Index.vue').default
},
{
    path: routes_base + 'server/edit/:id',
    component: require('./components/server/Edit.vue').default
},

//rewayat
{
    path: routes_base + 'rewayat',
    component: require('./components/rewaya/Index.vue').default
},
{
    path: routes_base + 'rewaya/edit/:id',
    component: require('./components/rewaya/Edit.vue').default
},
//special_rewayat
{
    path: routes_base + 'special_rewayat',
    component: require('./components/special_rewaya/Index.vue').default
},
{
    path: routes_base + 'special_rewaya/edit/:id',
    component: require('./components/special_rewaya/Edit.vue').default
},

//Message
{
    path: routes_base + 'messages',
    component: require('./components/message/Index.vue').default
},
{
    path: routes_base + 'message/:id',
    component: require('./components/message/Show.vue').default
},


//Language
{
    path: routes_base + 'languages',
    component: require('./components/language/Index.vue').default
},
{
    path: routes_base + 'language/edit/:id',
    component: require('./components/language/Edit.vue').default
},


//Page
{
    path: routes_base + 'pages',
    component: require('./components/page/Index.vue').default
},
{
    path: routes_base + 'page/create',
    component: require('./components/page/Create.vue').default
},
{
    path: routes_base + 'page/edit/:id',
    component: require('./components/page/Edit.vue').default
},


//Setting
{
    path: routes_base + 'settings',
    component: require('./components/setting/Index.vue').default
},


//Translation
{
    path: routes_base + 'translations',
    component: require('./components/translation/Index.vue').default
},


//User
{
    path: routes_base + 'users',
    component: require('./components/user/Index.vue').default
},
{
    path: routes_base + 'user/edit/:id',
    component: require('./components/user/Edit.vue').default
},
{
    path: routes_base + 'user/create',
    component: require('./components/user/Create.vue').default
},

//imo
{
    path: routes_base + 'imo',
    component: require('./components/imo/Index.vue').default
},

];
