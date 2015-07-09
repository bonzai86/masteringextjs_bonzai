Ext.define('Packt.model.staticData.Actor', {
    extend: 'Packt.model.staticData.Base',
    
    entityName: 'Actor',
    
    idProperty: 'actor_id',
    
    fields: [
        { name: 'actor_id' },
        { name: 'first_name' },
        { name: 'last_name' }
    ],
    
    validators: {
        first_name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ],
        last_name: [
            { type: 'presence', message: 'This field is mandatory'},
            { type: 'length', min: 2, max: 45}
        ]
    }
});