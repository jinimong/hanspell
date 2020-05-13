# NodeJS Express Spell Checker
npm 의 `hanspell` 패키지를 호출하는 NodeJS 서버를 도커라이징

(https://www.npmjs.com/package/hanspell)

---

# 사용법

스크립트를 다음과 같이 실행하면 최초 1회 이미지를 생성 후  
도커 컨테이너로 띄워준다.

```shell
sh run.sh
```

---

# 맞춤법검사

문장의 맞춤법을 검사.

**URL** : `/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "sentence": "[한국어 말뭉치 (권장 : 300단어, 1000글자 미만)]"
}
```

**Data example**

```json
{
    "sentence": "다른사람들은 나랑 틀린가보다. 나만 외않되?"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
[{"type": "space",
  "token": "다른사람들은",
  "suggestions": ["다른 사람들은"],
  "context": "다른사람들은 나랑 틀린가보다.",
  "info": "관형사는 뒤에 오는 말과 띄어 쓰는 것이 옳습니다.\n\n(예)\n오빠는 새 신발을 사자마자 헌 신발을 버렸다\n아저씨, 그 사과 얼마예요?\n그녀와 헤어진 지 한 달이 넘었다."},
 {"type": "space_spell",
  "token": "틀린가보다.",
  "suggestions": ["다른가 보다."],
  "context": "다른사람들은 나랑 틀린가보다. 나만 외않되?",
  "info": "'다르다'는 '서로 같지 않다'는 뜻으로, '틀리다'는 '맞지 않고 어긋나다'는 뜻으로 서로 구분하여 씁니다.\n\n(예)\n그녀는 나와 취향이 다르다.\n선생이라서 그런지 어디가 달라도 달라.\n비가 올 거라던 일기 예보가 틀렸다.\n병휘는 그 부분에서 대사를  틀리고 말았다."},
 {"type": "space_spell",
  "token": "외않되?",
  "suggestions": ["왜 안돼?"],
  "context": "틀린가보다. 나만 외않되?",
  "info": "'왜 안돼?'로 고쳐 쓰세요."}]
```

## Error Response

**Condition** :

**Code** : `400 BAD REQUEST`

**Content** :
