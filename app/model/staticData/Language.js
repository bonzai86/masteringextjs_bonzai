Ext.define('Packt.model.staticData.Language', {
    extend: 'Packt.model.staticData.Base',
    
    entityName: 'Language',
    
    idProperty: 'language_id',
    
    fields: [
        { name: 'language_id' },
        { name: 'name' },
    ]
});