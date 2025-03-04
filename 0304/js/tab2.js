const tabs = document.querySelectorAll('.tab_menu li');
const tabList = document.querySelectorAll('#tabContent > div');

tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(e){
        e.preventDefault(); // 링크금지

        // tab_menu li 태그의 active 클래스 제거
        tabs.forEach(function(item){
            item.classList.remove('active');
        });

        tabs[i].classList.add('active');

        
        tabList.forEach(function(item){
            item.classList.remove('on');
        });

        tabList[i].classList.add('on');
    });
});