Ext.define('My.view.form.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.form-submit',

    getForm: function() {
        return this.getView().getForm();
    },

    onResetClick: function() {
        if (this.getView().getForm().isDirty()) {
            this.getForm().reset();
        }
    },

    onSendClick: function() {
    }
});