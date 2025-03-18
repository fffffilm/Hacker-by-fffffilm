document.addEventListener("DOMContentLoaded", function () {
    const codeBlocks = document.querySelectorAll('figure.highlight');

    codeBlocks.forEach(block => {
        const pre = block.querySelector('pre');
        const lines = pre.querySelectorAll('.line');
        const maxLines = 15;  
        const highlightWrap = block.closest('.highlight-wrap');

        if (!highlightWrap) return;  

        // 获取展开按钮
        const expandButton = highlightWrap.querySelector('.expand-code');

        if (lines.length > maxLines) {
            
            block.classList.add('collapsed');
            
            // 显示展开按钮
            if (expandButton) {
                expandButton.style.display = "block"; 
                
                expandButton.addEventListener('click', function () {
                    block.classList.toggle('collapsed');
                    expandButton.classList.toggle('rotated');
                });
            }
        } else {
            // 代码行数少于 maxLines，隐藏展开按钮
            if (expandButton) {
                expandButton.style.display = "none"; 
            }
        }
    });
});
