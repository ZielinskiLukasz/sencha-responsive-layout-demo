Ext.define('My.view.form.Form', {
    extend: 'Ext.form.Panel',
    title: 'Form',
    controller: 'form-submit',
    layout: 'box',
    flex: 2,

    plugins: 'responsive',
    responsiveConfig: {
        'width >= 640': {
            minWidth: 640,
            layout: {
                align: 'stretch',
                vertical: false,
            },
        },
        'width < 640': {
            width: '100%',
            minWidth: 320,
            margin: '0 0 10 0',
            layout: {
                vertical: true,
            }
        }
    },

    buttons: [{
        text: 'Send',
        width: 150,
    }, {
        text: 'Reset form',
    }],

    bodyPadding: 20,

    items: [{
        xtype: 'fieldset',
        title: 'Basic info',
        layout: 'anchor',
        flex: 1,
        minWidth: 200,
        bodyPadding: 20,

        plugins: 'responsive',
        responsiveConfig: {
            'width >= 640': {
                minWidth: 270,
            },
            'width < 640': {
                width: '100%',
                margin: '0 0 10 0'
            }
        },

        defaults: {
            width: '100%',
            xtype: 'textfield',
        },

        items: [{
            name: 'name',
            fieldLabel: 'Name',
        }]
    }, {
        xtype: 'container',
        flex: 1,
        border: false,
        layout: 'anchor',
        minWidth: 200,

        plugins: 'responsive',
        responsiveConfig: {
            'width >= 640': {
                minWidth: 270,
                margin: '0 0 0 20'
            },
            'width < 640': {
                width: '100%',
                margin: '20 0 10 0'
            }
        },

        items: [{
            xtype: 'fieldset',
            layout: 'anchor',
            title: 'Contact',
            collapsible: true,

            defaults: {
                width: '100%',
                xtype: 'textfield'
            },
            items: []
        }, {
            xtype: 'fieldset',
            layout: 'anchor',
            title: 'Show more',
            checkboxToggle: true,
            collapsed: true,
            items: [{
                width: '100%',
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Address',
            }, {
                width: '100%',
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Phone',
            }, {
                width: '100%',
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Country',
            }, {
                width: '100%',
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Additional info',
            }]
        }]
    }]
});

var mainForm = Ext.create('My.view.form.Form', {

});

Ext.define('My.view.TopPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'toppanel.form',
    layout: 'box',
    bodyPadding: 20,
    border: false,
    minHeight: 250,
    width: '100%',

    plugins: 'responsive',
    responsiveConfig: {
        'width >= 980': {
            layout: {
                align: 'stretch',
                vertical: false
            },
            defaults: {
                minWidth: 300,
                bodyPadding: 20
            }
        },
        'width < 980': {
            layout: {
                vertical: true
            },
            defaults: {
                width: '100%',
                bodyPadding: 20,
                margin: '0 0 10 0'
            }
        }
    },

    items: [
        mainForm, {
            html: 'column 2',
            layout: 'fit',

            plugins: 'responsive',
            responsiveConfig: {
                'width >= 980': {
                    minWidth: 300,
                    flex: 1,
                    bodyPadding: 20,
                    margin: '0 5 0 5'
                },
                'width < 980': {
                    width: '100%',
                    flex: 1,
                    bodyPadding: 20,
                    margin: '0 0 10 0'
                }
            }
        }
    ]
});