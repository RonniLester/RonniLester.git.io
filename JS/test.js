
// var s = {
// 	"Id": 16024,
// 	"ChildId": "19114",
// 	"ChildName": "贾智杰",
// 	"Gender": 1,
// 	"ClassName": "小二班",
// 	"ClassId": 194142,
// 	"KindergartenName": "东尚爱幼幼儿园",
// 	"KindergartenId": 112,
// 	"GroupId": 0,
// 	"AgeGroup": 4,
// 	"Birthday": "/Date(1339718400000+0800)/",
// 	"PlanTime": "/Date(1466553600000+0800)/",
// 	"CreateTime": "/Date(1468194421527+0800)/",
// 	"UserId": 7614,
// 	"Height": 118,
// 	"Weight": 19.5,
// 	"StandingLongJump": 120,
// 	"JumpWithBothFeet": 5.67,
// 	"TennisThrowFar": 5,
// 	"WalkOnTheBalanceBeam": 11.3,
// 	"SitAndReach": 6,
// 	"TenMetersShuttleRun": 8.9,
// 	"HeightScore": 5,
// 	"WeightScore": 5,
// 	"StandingLongJumpScore": 5,
// 	"JumpWithBothFeetScore": 4,
// 	"TennisThrowFarScore": 4,
// 	"WalkOnTheBalanceBeamScore": 4,
// 	"SitAndReachScore": 3,
// 	"TenMetersShuttleRunScore": 3,
// 	"TotalScore": 33,
// 	"Grade": 2,
// 	"PhysicalExaminationPlanId": 186,
// 	"GradeResult": "良好",
// 	"WeightResult": "体重在正常范围内，体型匀称，营养状况良好",
// 	"HeightResult": "较高",
// 	"SitAndReachResult": "躯干、腰部和髋关节等活动的幅度较小，相应部位韧带和肌肉的伸展性和弹性也较差。",
// 	"PowerResult": "力量素质好，不同种类力量发展均衡。",
// 	"SpeedResult": "速度、灵敏、协调性一般,",
// 	"BalanceResult": "平衡能力一般。",
// 	"BMI": 14,
// 	"BMIType": 1,
// 	"IsInformalSitAndReach": false,
// 	"IsInformalTenMetersShuttleRun": false,
// 	"IsInformalStandingLongJump": false,
// 	"IsInformalTennisThrowFar": false,
// 	"IsInformalJumpWithBothFeet": false,
// 	"IsInformalWalkOnTheBalanceBeam": false,
// 	"IsMentalFaction": false,
// 	"TestDateStr": "2016-07-11",
// 	"Age": 4,
// 	"PhysicalQualityScore": "优秀",
// 	"PhysicalQualityImage": "images/icon-reward.png"
// }

// var p = [1,3,4,6];
// console.log(p.join(","));


// var p = {
// 	name: "javascript中this关键字",
// 	age: (function(){
// 		return this.name;
// 	})
// }
// console.log(p.age());
// //  name = "javas";
// // function test(name){
// // 	return this.name;
// // }

// console.log(test("Hello Word"));

// function a(xx){
// 	this.x = xx;
// 	return this;
// }
// var x =new a(5);
// var y =new a(6);
// console.log(x.x);
// console.log(y.x);
// console.log( a instanceof );
// fullname = 'John Doe';
// var obj = {
//     fullname: 'Colin Ihrig',
//     prop: {
//         fullname: 'Aurelio De Rosa',
//         getFullname: function() {
//             return this.fullname;
//         }
//     }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;
// console.log((test()));

var arr = [1,2,2,3,4]
var str = "1,2,3,4,4,4,";
var strArr = str.split(",");
console.log(strArr);