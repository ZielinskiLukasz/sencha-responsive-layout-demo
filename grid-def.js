Ext.define('My.view.mainGrid', {
    extend: 'Ext.grid.Panel',
    title: 'Grid',
    flex: 3,
    height: 400,

    plugins: 'responsive',
    responsiveConfig: {
        'width >= 980': {
            minWidth: 600
        },
        'width < 980': {
            width: '100%',
            minWidth: 200
        }
    },
});

var mainGrid = Ext.create('My.view.mainGrid', {

});

Ext.define('My.view.GridContainer', {
    extend: 'Ext.container.Container',
    alias: 'view.gridContainer',
    layout: 'hbox',
    width: '100%',
    padding: 20,

    style: {
        color: '#333',
        backgroundColor: '#eaeaea',
        'border-top': '1px solid #999',
    },

    plugins: 'responsive',
    responsiveConfig: {
        'width >= 980': {
            layout: {
                vertical: false
            }
        },
        'width < 980': {
            layout: {
                vertical: true
            }
        }
    },

    defaults: {
        bodyPadding: 20,
        height: '100%',
        minHeight: 400,
        border: false,
        frame: false
    },

    items: [
        mainGrid, {
            title: 'Details',
            html: 'Details',
            flex: 1,
            border: true,

            plugins: 'responsive',
            responsiveConfig: {
                'width >= 980': {
                    collapsible: true,
                    collapseDirection: 'right',
                    margin: '0 0 0 10'
                },
                'width < 980': {
                    width: '100%',
                    collapsible: false,
                    margin: '20 0 0 0'
                }
            }
        }
    ],
});