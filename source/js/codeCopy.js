/*页面载入完成后，创建复制按钮*/

/*第一版*/
!function (e, t, a) { 
    var initCopyCode = function() {
        var clipboard = new ClipboardJS('.btn-copy', { 
            target: function(trigger) {
                return trigger.nextElementSibling; 
            }
        });

        clipboard.on('success', function(e) {
            e.clearSelection(); 
            
            // 在复制成功后，添加旋转效果
            var button = e.trigger; 
            
            button.classList.add('rotated');
            setTimeout(function() {
                button.classList.remove('rotated');
            }, 600); 
        });

        clipboard.on('error', function(e) {
            console.error('复制失败:', e.action);
        });
    }
    
    initCopyCode();
}(window, document);


