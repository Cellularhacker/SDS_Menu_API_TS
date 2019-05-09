# SDS_Menu_API_TS

## RESTful API Declaration

### EndPoint

- https://api.hackbot.kr/sdsMenu

## SDS Cafeteria Corner

### Corner info

```
GET /{sessionId}/corner/{cornerId}
```

- Response

| Name     | Type   | Description                                      |
| :------- | :----- | :----------------------------------------------- |
| name     | string | A corner name requested.                         |
| floor    | string | A Floor the corner located in.                   |
| location | string | A zone code of the campus the corner located in. |

### Zone info

```
GET /{sessionId}/zone/{cornerId}
```

- Response

| Name | Type   | Description            |
| :--- | :----- | :--------------------- |
| name | string | A zone name requested. |

## How to get sessionId?

- [Temporary] Contact me some how and tell me where & why do you want to use.
