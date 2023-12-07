window.addEventListener("load", function () //window-전역객체(브라우저의 창)
{
  let elNavi = document.querySelector(".header > ul");
  let aElSection = document.querySelectorAll(".item > section");
  let curSIdx = 0;

  Array.from(
    elNavi.children,
    function (
      elMenu,
      idx,
      elMenus //children-자식 요소에 접근
    ) {
      elMenu.addEventListener("click", function () {
        doScroll(idx);
      });
    }
  );

  let wheelTimer;
  window.addEventListener("wheel", function (e) {
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(function () {
      if (e.deltaY < 0) doScroll(++curSIdx);
      else doScroll(--curSIdx);
    }, 50);
  });

  function doScroll(sidx) {
    sidx = sidx < 0 ? 0 : sidx;
    sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;

    curSIdx = sidx;

    aElSection[curSIdx].scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      // 아래의 두곳에 각각 서비스아이디, 이메일 템플릿을 입력합니다
      // 서비스 아이디는 Email Services탭에서 본 ID를 입력해주면 된다
      emailjs.sendForm("service_ngevhwc", "template_ajigcsu", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });

  (function () {
    // 아래에다가 API ID를 입력합니다
    emailjs.init("zmTyQUWmXQ3o60EnH");
  });
};
