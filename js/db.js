const userDB = new Map();
const airResDB = new Map();

/* 사용자 DB 만들기 시작 */
const addUser = (id, pw, gender, mail, phone, reg_date) => {
    console.log('addUser() CALLED!!');

    //  id를 가지고 가입한다.
    userDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_gender: gender,
        u_mail: mail,
        u_phone: phone,
        u_reg_date: reg_date,
    });

    airResDB.set(id, []);

    console.log(userDB.get(id));
}

// 회원조회
const searchUser = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let userObj = userDB.get(id); //ID라는 키 값에서 멤버를 가져온다.
    if (userObj !== undefined && userObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;
    }

    console.log("SIGN IN FAIL!!");
    return false;
}
/* 사용자 DB 만들기 끝 */

/* 비행기 예약 DB 시작 */
const addAirRes = (no, id, name, mail, phone, d_location_no, depart_datetime, a_location_no, arrival_datetime) => {
    console.log('addAirRes() CALLED!!');

    airResDB.set(no, {
        r_no: no,
        u_id: id,
        r_name: name,
        r_mail: mail,
        r_phone: phone,
        depart_location_no: d_location_no,
        r_depart_datetime: depart_datetime,
        arrival_location_no: a_location_no,
        r_arrival_datetime: arrival_datetime,
    });
    console.log(airResDB.get(no));

    let airResArr = airResDB.get(signInedMemberId);
    airResArr.push(no + id + name + mail + phone + d_location_no + depart_datetime + a_location_no
        + arrival_datetime);

    console.log('airResArr: ', airResArr);

}

// 로그인 해서 비행기 예약 리스트 보고싶을 때
const searchAirRes = () => {
    console.log('searchAirRes() CALLED!!');

    let airResArr = airResDB.get(signInedMemberId);
    console.log('aiResArr: ', airResArr);

    return airResArr;
}
/* 비행기 예약 DB 끝 */

