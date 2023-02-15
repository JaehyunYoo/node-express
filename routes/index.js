var express = require("express");
var router = express.Router();





/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/v1/dashboard/home", (req, res) => {
  const datahome = {
    status_code: 200,
    data: {
      list_views: [
        {
          title: "DAL,이벤트",
          description: "",
          type: "EventCollection",
          items: [
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/event/event_banner_2.png",
              link: "https://bit.ly/3VKV7ey",
            },
            {
              image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/event/event_banner_1.png",
              link: "https://bit.ly/3zHxzxx",
            },
          ],
        },
        {
          title: "INTJ,언니의 추천",
          description: "같은 타입 언니의 인생템 만나기",
          type: "ItemCollection",
          items: [
            {
              name: "닉스컵",
              description: "닉스컵 S",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/nZ6fQNvjahuExYAASa3G.png",
              link: "https://bit.ly/3DniUdF",
            },
            {
              name: "카이톤",
              description: "@vec organic\ncotton pants",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/YEOupFnX8a2Mpdqqkchc.png",
              link: "https://bit.ly/3JkwxOI",
            },
            {
              name: "나우푸드",
              description: "이노시톨",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/7wPiytBYdqUWsMtCTYn2.png",
              link: "https://bit.ly/3RqoZMt",
            },
            {
              name: "청담소녀",
              description: "오리지널 중형",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/f1o1160SRAAFUPIFOmnF.png",
              link: "https://bit.ly/3JeyJqW",
            },
            {
              name: "안국건강",
              description: "루테인 지아잔틴 미니",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/qeJd1zK5jKfLOuLFgaZM.png",
              link: "https://bit.ly/3XWrmZc",
            },
            {
              name: "템포",
              description: "템포 오리지널 레귤러",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/1MSKEU32TLZc6XVP454l.png",
              link: "https://bit.ly/3JgbHjv",
            },
            {
              name: "여력",
              description: "여력",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/AHlkIxogv9IXDJ0jElpV.png",
              link: "https://bit.ly/3j723Fd",
            },
            {
              name: "자로우 포뮬러스",
              description: "우먼스 펨 도필러스",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/MWN4dt8OoQrTw6Rrz4hS.png",
              link: "https://bit.ly/3Y4nHc6",
            },
            {
              name: "듀이랩스",
              description: "포이컵",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/qyrmcjy2h1utuEoPAhfE.png",
              link: "https://bit.ly/3Y327Vm",
            },
            {
              name: "바솔",
              description: "이너밸런싱 포밍워시",
              image_url:
                "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/yAezrmd21jNOGeZYpsvX/pub/rd2mXJaNbHIJeLy3fBqB.png",
              link: "https://bit.ly/3H9WKg1",
            },
          ],
        },
        {
          title: "투데이 추천 콘텐츠",
          description: "",
          type: "ContentsCollection",
          items: [
            {
              thumbnail_image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/contents/contents_1.png",
              link_url: "https://bit.ly/3j5gUjg",
            },
            {
              thumbnail_image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/contents/contents_2.png",
              link_url: "https://bit.ly/3wudVnB",
            },
            {
              thumbnail_image_url:
                "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/contents/contents_3.png",
              link_url: "https://bit.ly/3R57eC5",
            },
          ],
        },
      ],
      events: [
        {
          event_image_url:
            "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/event/popup/popup_3.png",
          event_link: "survey_test",
        },
        {
          event_image_url:
            "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/event/popup/popup_2.png",
          event_link: "https://bit.ly/3VKV7ey",
        },
        {
          event_image_url:
            "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/event/popup/popup_1.png",
          event_link: "https://bit.ly/3zHxzxx",
        },
      ],
      period: {
        period_title: "월경,23일 전",
        period_status_image_url:
          "https://flutterappimage.s3.ap-northeast-2.amazonaws.com/home_main/period_status_background/golden.riv",
        period_message: "월경기간 동안 수고했어요\n오늘도 화이팅!💪",
        pregnancy_possibility: "낮은날",
        period_type: "ISFP",
        description: "지옥의 활화산",
        predicted_period_left_day: 24,
        predicted_ovulation_left_day: 14,
      },
    },
  };
  res.status(200).json(datahome);
});
router.get("/api/v2/periods", (req, res) => {
  const data2 = {
    status_code: 200,
    data: {
      dates: [
        {
          date: "2023-02-05T00:00:00",
          is_period: true,
          predicted_period_dates: false,
          ovulation_day: false,
          ovulation_date: false,
          predicted_ovulation_date: false,
          discharge: "혈/냉",
          mood: "좋음",
          body_condition: "보통",
        },
        {
          date: "2023-02-06T00:00:00",
          is_period: true,
        },
        {
          date: "2023-02-07T00:00:00",
          is_period: true,
          predicted_period_date: true,
          predicted_ovulation_date: true,
        },
        {
          date: "2023-02-08T00:00:00",
          is_period: true,
          predicted_period_date: true,
          predicted_ovulation_date: true,
        },
        {
          date: "2023-02-09T00:00:00",
          is_period: true,
        },
        {
          date: "2023-02-23T00:00:00",
          ovulation_date: true,
        },
        {
          date: "2023-02-24T00:00:00",
          ovulation_date: true,
        },
        {
          date: "2023-02-25T00:00:00",
          ovulation_day: true,
        },
        {
          date: "2023-02-26T00:00:00",
          ovulation_date: true,
        },
      ],
      period_length: 5,
    },
  };
  
  res.status(200).json(data2);
});
router.put("/api/v2/periods", (req, res) => {
  res.status(201).json({});
});
module.exports = router;
