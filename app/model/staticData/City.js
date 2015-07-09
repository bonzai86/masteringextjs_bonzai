Ext.define('Packt.model.staticData.City', {
    extend: 'Packt.model.staticData.Base',
    
    entityName: 'City',
    
    idProperty: 'city_id',
    
    fields: [
        { name: 'city_id' },
        { name: 'city' },
        { name: 'country_id' }
    ]
});