const SIGN_OUT_STATUS = 1;
const SIGN_IN_STATUS = 2;

/* 로그인, 로그아웃 시 메뉴바 뷰 지정*/
const setMenuStatus = (menuNO) => {
  console.log("setMenuStatus CALLED!!");

  /*menuNO => SIGN OUT, SIGN IN 받음 */
  switch (menuNO) {
    /*SIGN OUT MENU VIEW*/
    case SIGN_OUT_STATUS:
      document.querySelector("div.menu_wrap a.sign_up").style.display =
        "inline-block";
      document.querySelector("div.menu_wrap a.sign_in").style.display =
        "inline-block";
      document.querySelector("div.menu_wrap a.sign_out").style.display = "none";
      break;

    /*SIGN IN MENU VIEW*/
    case SIGN_IN_STATUS:
      document.querySelector("div.menu_wrap a.sign_up").style.display = "none";
      document.querySelector("div.menu_wrap a.sign_in").style.display = "none";
      document.querySelector("div.menu_wrap a.sign_out").style.display =
        "inline-block";
      break;
  }
};
