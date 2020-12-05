const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': '14.jpg',
      'name': '홍길동',
      'birthday': '960202',
      'gender': '남자',
      'job': '대학생',
    },
    {
      'id': 2,
      'image': "1.jpg",
      'name': "이순신",
      'birthday': "121516",
      'gender': "남자",
      'job': "영웅",
    },
    {
      'id': 3,
      'image': "12.jpg",
      'name': "유이",
      'birthday': "921205",
      'gender': "여자",
      'job': "여배우",
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
