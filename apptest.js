Ext.require([
    'Ext.selection.*',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.onReady(function() {
    var topPanel = Ext.create('My.view.TopPanel', {

    });

    var gridContainer = Ext.create('My.view.GridContainer', {

    });

    Ext.create('Ext.container.Viewport', {
        id: 'viewport',
        layout: 'vbox',
        scrollable: 'vertical',
        minHeight: 800,
        items: [
            topPanel,
            gridContainer
        ]
    });
});