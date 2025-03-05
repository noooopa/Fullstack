const targetLink = document.querySelectorAll('.tab_menu li a'); // 탭 버튼
const tabContent = document.querySelectorAll('#tabContent > div'); // 탭 내용

targetLink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault(); // a 태그의 기본 이벤트를 막음 (링크금지)
        let orgTarget = e.target.getAttribute('href');
        // 클릭한 대상(e.target)의 href 속성값을 가져옴 - this도 가능
        // getAttribute 는 속성값(src, href)을 가져오는 메서드
        // alert(orgTarget); #tab1, #tab2, #tab3
        let tabTarget = orgTarget.replace('#', '');
        // # 제거
        // alert(tabTarget);

        tabContent.forEach(function(content){
            content.style.display = 'none'; // 모든 탭 내용을 안보이게
        });

        document.getElementById(tabTarget).style.display = 'block';
         // 클릭한 탭 내용만 보이게
        targetLink.forEach(function(ova){
            ova.classList.remove('active');
        });
        e.target.classList.add('active');
        
});
});