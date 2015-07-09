Ext.define('Packt.model.staticData.Country', {
    extend: 'Packt.model.staticData.Base',
    
    entityName: 'Country',
    
    idProperty: 'country_id',
    
    fields: [
        { name: 'country_id' },
        { name: 'country' },
    ]
});