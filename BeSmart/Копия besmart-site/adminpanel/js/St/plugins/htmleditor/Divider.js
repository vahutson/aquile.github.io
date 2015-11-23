/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @class Ext.ux.form.HtmlEditor.Divider
 * @extends Ext.util.Observable
 * <p>A plugin that creates a divider on the HtmlEditor. Used for separating additional buttons.</p>
 */
St.plugins.htmleditor.Divider = Ext.extend(Ext.util.Observable, {
    // private
    init: function(cmp){
        this.cmp = cmp;
        this.cmp.on('render', this.onRender, this);
    },
    // private
    onRender: function(){
        this.cmp.getToolbar().addButton([new Ext.Toolbar.Separator()]);
    }
});

Ext.preg('St.plugins.htmleditor.Divider', St.plugins.htmleditor.Divider);