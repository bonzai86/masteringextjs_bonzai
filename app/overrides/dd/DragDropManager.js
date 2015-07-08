Ext.override(Ext.dd.DragDropManager, {
        handleMouseDown: function (e, oDD) {
            var me = this,
                xy, el;
            me.isMouseDown = true;
            //if (Ext.quickTipsActive) {
            //    Ext.tip.QuickTipManager.ddDisable();
            //}
            me.currentPoint = e.getPoint();
            if (me.dragCurrent) {
                me.handleMouseUp(e);
            }
            me.mousedownEvent = e;
            me.currentTarget = e.getTarget();
            me.dragCurrent = oDD;
            el = oDD.getEl();


            Ext.fly(el).setCapture();


            xy = e.getXY();
            me.startX = xy[0];
            me.startY = xy[1];


            me.offsetX = me.offsetY = 0;
            me.deltaX = me.startX - el.offsetLeft;
            me.deltaY = me.startY - el.offsetTop;
            me.dragThreshMet = false;
        }
    });