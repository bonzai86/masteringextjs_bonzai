Ext.define('Packt.model.staticData.Category', {
    extend: 'Packt.model.staticData.Base',
    
    entityName: 'Category',
    
    idProperty: 'category_id',
    
    fields: [
        { name: 'category_id' },
        { name: 'name' }
    ]
});