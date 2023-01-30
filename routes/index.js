var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/api/v1/dashboard/home", (req, res) => {
  const data = {
    status_code: 200,
    data: {
      list_views: [
        {
          title: "DAL, 이벤트",
          type: "EventCollection",
          items: [
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/test/event_banner_1.png",
              link: "http://bit.ly/3WiA9DM",
            },
  
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/test/event_banner_2.png",
              link: "http://bit.ly/3WiA9DM",
            },
          ],
        },
        {
          title: "언니의 추천",
          description: "타입을 검사하면 같은 타입 언니의 인생템을 볼 수 있어요",
          type: "ItemCollection",
          items: [
            {
              name: "브랜드 이름 한 줄",
              description: "상품명 들어가는 영역\n최대 두줄까지 노출",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/6s5nJIQI5T8sGExGn0XQ.png",
              link: "http://bit.ly/3WiA9DM",
            },
            {
              name: "브랜드 이름 한 줄",
              description: "상품명 들어가는 영역\n최대 두줄까지 노출",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/VTStKt2zvtl6jKe9cDlb.png",
              link: "http://bit.ly/3WiA9DM",
            },
            {
              name: "브랜드 이름 한 줄",
              description: "상품명 들어가는 영역\n최대 두줄까지 노출",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/twJOwCEmoppvfxLwdcWY.png",
              link: "http://bit.ly/3WiA9DM",
            },
            {
              name: "브랜드 이름 한 줄",
              description: "상품명 들어가는 영역\n최대 두줄까지 노출",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/nZ6fQNvjahuExYAASa3G.png",
              link: "http://bit.ly/3WiA9DM",
            },
          ],
        },
        {
          title: "투데이 맞춤 콘텐츠",
          type: "ContentsCollection",
          items: [
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/test/test1.png",
              link: "http://bit.ly/3WiA9DM",
            },
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/test/test2.png",
              link: "http://bit.ly/3WiA9DM",
              name: "PMS, 이것부터 따라해봐",
            },
          ],
        },
      ],
      period: {
        period_title: "미뤄진 지, 15일 째",
        period_status_image_url:
          "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/test/test.riv",
        period_message: "월경통이 심하다면, \n커피 대신 따뜻한 차 한 잔 어때요?",
        pregnancy_possibility: "낮은날",
        period_type: "ISFP",
        description: "월경타입 - 지옥의 활화산",
        period_info: {
          cycle_length: 28,
          period_length: 5,
        },
      },
    },
  };
  res.status(200).json(data);
  // res.status(404).json({
  //   statusCode: 404,
  //   error: {
  //     type: "Not found",
  //     message: "요청한 리소스를 찾지 못했습니다.",
  //     title: "등록된 정보가 없어요.",
  //     detail: "정보를 등록한 후 다시 이용해주세요.",
  //   },
  // });
});

module.exports = router;
