let index={
//		한페이지 안에서 일어나는 이벤트를 index에 다 작성
//		충돌 일어날 확률 낮추고 깔끔해짐		
//		자바스크립트 오브젝트 생성 
		init: function() {
			
//			화살표함수를 사용하여 부모를 바로 찾아가게 함
//			함수의 이름이 없어도 실행되어야 하는 함수 : 화살표 함수 사용
			$("#btn-save").on("click", ()=>{
				this.save();
			});
		
		},
		
//		init 클릭하면 save 실행 됨
		save: function(){
			let data = {
					username: $("#username").val(),
					password: $("#password").val(),
					email: $("#email").val(),
			}
			
			$.ajax({
				type: "POST",
				url: "/auth/joinProc",
//				json으로 데이터 주고받을거기 때문에 하단  공식임
//				js 문법 : 자바스트립트 오브젝트를 jsonString으로 바꿔즘
				data: JSON.stringify(data),
//				스프링은 데이터 받아서 오브젝트로 들고있기 때문에 json이 들어온다는 것을 메세지 컨버터에게 contentType으로 알려줘야 오브젝트 변활할 수 있음
				contentType: "application/json; charset=utf-8",
//				서버가 응답하는 데이터 타입
				dataType: "json"
			}).done(function(resp){
				if(resp.statusCode == 1) {
					alert("회원가입 성공");
					location.href="/";
				}
				console.log(resp);
			}).fail(function(error){
				console.log(error);
			})
			
		},
}

index.init();