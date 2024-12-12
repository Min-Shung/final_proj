const poolLinks = document.querySelectorAll('.pool-option[data-pool]');
const closeButtons = document.querySelectorAll('.closeOverlay');

poolLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // 阻止默認跳轉行為
        const targetId = link.getAttribute('data-pool'); // 獲取 data-target 的值
        const targetLayer = document.getElementById(`waterLayer_${targetId}`); // 找到對應的遮罩層
        if (targetLayer) {
            targetLayer.classList.remove('hidden'); // 顯示對應遮罩層
        }
    });
});

// 點擊關閉按鈕，隱藏遮罩層
    closeButtons.forEach(button => {
        button.addEventListener('click', event => {
            const overlay = event.target.closest('.overlay');
            if (overlay) {
                overlay.classList.add('hidden');
            }
        });
    });