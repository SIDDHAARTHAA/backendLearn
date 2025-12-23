![alt text](src/assets/working_model.png)

---

Refresh Tokens in action


┌──────────┐
│ Browser  │
└────┬─────┘
     │ 1️⃣ Login / Signup
     │    (credentials)
     ▼
┌──────────────┐
│   Backend    │
└────┬─────────┘
     │ 2️⃣ Issues tokens
     │
     │  ┌─────────────────────────────┐
     │  │ Access Token (JSON response) │  ← short-lived (15 min)
     │  └─────────────────────────────┘
     │
     │  ┌─────────────────────────────┐
     │  │ Refresh Token (HTTP-only     │
     │  │ cookie, 7 days)              │  ← long-lived
     │  └─────────────────────────────┘
     ▼
┌──────────┐
│ Browser  │
│          │ 3️⃣ Stores refresh token
│          │    (cookie jar, JS can't see)
└────┬─────┘
     │
     │ 4️⃣ API Request
     │    Authorization: Bearer <accessToken>
     ▼
┌──────────────┐
│   Backend    │
└────┬─────────┘
     │
     │ 5️⃣ Access token expired ❌
     │
     ▼
┌──────────┐
│ Browser  │
└────┬─────┘
     │ 6️⃣ Calls /auth/refresh
     │    (cookie auto-attached)
     ▼
┌──────────────┐
│   Backend    │
│              │
│ ✔ Verifies refresh token
│ ✔ Checks DB match
│ ✔ Issues new access token
└────┬─────────┘
     │
     ▼
┌──────────┐
│ Browser  │
│          │ 7️⃣ Retries original request
│          │    with new access token
└──────────┘
