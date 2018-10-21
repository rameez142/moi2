export const adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    {label: 'Home', route: 'home', iconClasses: 'fa fa-road'},
    {label: 'الصيانه', iconClasses: 'fa fa-th-list', children: [
        {label: 'الدوريات', route: 'maintainence/patrolcars',iconClasses:'fa fa-location-arrow'},
        {label:'تقارير الاستلام والتسليم الأجهزة', route: 'maintainence/patrolcarsinventory'},
        {label: 'الأجهزة', route: 'maintainence/handhelds'},
        {label: 'تقارير الاستلام والتسليم الدوريات', route: 'maintainence/handheldsinventory'},
        {label: 'Accessories', route: 'maintainence/accessories'},
        {label: 'Accessory Inventory', route: 'maintainence/accessoriesinventory'}
      ]},
      {label: 'الأحوال', iconClasses: 'fa fa-th-list', children: [
        {label: 'كشف التوزيع', route: 'dispatcher/dispatcher'},
        {label: 'الأفراد', route: 'dispatcher/persons'}
      ]},
    {label: 'Map Viewer', route: 'map', iconClasses:'fa fa-location-arrow'},
    {label: 'Settings', route: 'settings', iconClasses: 'fa fa-layer-group'}

    
  ]
};
