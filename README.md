<div align="center">
 <h1>다 함께 만들어 가는 트렌드한 자기소개, 누구</h1>
   <a href="https://nugu-line4.vercel.app/">
    <img width="200px" src="https://github.com/user-attachments/assets/1d96cacb-2f96-4139-8a4f-882eeccf37e0" alt="NUGU로 이동하기"/>
  </a>
</div>

## ☁️Service Introduction

> **“나보다 나를 더 잘 아는 친구가 나를 대신 소개한다면?”**

여러분, 갑작스러운 자기소개 시간이 부담스럽거나 새로운 사람을 만날 때 나를 어떻게 표현해야 할지 고민해본 적 있으신가요?  
“누구”는 이러한 고민을 덜어드리고, 자신을 더욱 편하게 소개할 수 있도록 돕는 자기소개 플랫폼입니다.

때로는 나조차도 나를 어떻게 소개할지 모를 때가 있죠. 그래서, “나보다 나를 더 잘 아는 친구가 나를 대신 소개해주면 어떨까?”라는 아이디어에서 출발해,  
친구들이 직접 나를 소개할 수 있는 기능을 담았습니다.

이 기능을 통해, 나에 대해 잘 아는 친구들이 나를 어떻게 보고 있는지, 또 내가 잘 모르고 있는 내 모습을 발견할 수 있습니다.  
“누구”는 나와 친구들이 함께 만들어가는 자기소개 서비스입니다.

다함께 만들어가는 나만의 자기소개, 누구를 통해 가능해집니다.

## 🌟 주요 기능

### 1️⃣ **나의 자기소개, 누구**

- 나만의 프로필 생성 (MBTI, 한 줄 소개, 키워드 등)
- 하단의 공유 버튼으로 친구들에게 링크 공유

### 2️⃣ **친구가 작성하는, 누구 소개**

- 친구들이 나를 표현하는 키워드 투표 및 간단한 소개 작성
- 상위 3개의 키워드를 통해 내가 몰랐던 새로운 모습 발견

### 3️⃣ **다함께 즐기는, 누구 테스트**

- 10가지 질문으로 구성된 퀴즈 형식의 테스트
- 소유자와 접속자가 서로를 더 잘 알 수 있도록 설계

---

## 🎨 View & Feature

 <img width="100%" src="https://github.com/user-attachments/assets/51c675f3-4ae6-4ad8-81d7-814dfc8888d0" alt="NUGU로 이동하기"/>
  <img width="100%" src="https://github.com/user-attachments/assets/75c4754f-617e-4dca-aac8-d6426e6a6975" alt="NUGU로 이동하기"/>
   <img width="100%" src="https://github.com/user-attachments/assets/44d282a2-811c-423a-9493-09ffe33ad8a5" alt="NUGU로 이동하기"/>
    <img width="100%" src="https://github.com/user-attachments/assets/a8fbf4ac-a802-438b-b263-cf89f3ad80b7" alt="NUGU로 이동하기"/>

## 🛠 Development Tools & Environment

### 주요 기술 스택

<img alt="React" src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge"> 
<img alt="Styled-Components" src="https://img.shields.io/badge/Styled--Components-5.3.6-DB7093?logo=styled-components&logoColor=white&style=for-the-badge"> 
<img alt="Recoil" src="https://img.shields.io/badge/Recoil-0.7.5-007AF4?logo=recoil&logoColor=white&style=for-the-badge"> 
<img alt="Axios" src="https://img.shields.io/badge/Axios-1.5.0-black?logo=axios&logoColor=white&style=for-the-badge"> 
<img alt="Spring Boot" src="https://img.shields.io/badge/Spring%20Boot-3.1.0-6DB33F?logo=springboot&logoColor=white&style=for-the-badge"> 
<img alt="AWS EC2" src="https://img.shields.io/badge/AWS%20EC2-%23FF9900.svg?logo=amazonaws&logoColor=white&style=for-the-badge"> 
<img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge">

## 💻 Code Convention

### Git Flow 전략 및 협업방식

**전반적인 흐름**

    1.	Upstream Repository를 자신의 GitHub 계정으로 포크(fork)하여 Origin Repository를 만듭니다.
    2.	Origin Repository를 로컬 컴퓨터로 클론(clone)합니다.
    3.	변경 사항을 Origin Repository로 푸시(push)한 후 Upstream Repository로 PR을 보냅니다.
    4.	PR이 완료된 후 Upstream Repository의 최신 변경 사항을 로컬에서 풀(pull)합니다.

**개발 시작 시**

    1.	Upstream Repository에서 Issue를 생성합니다.
    2.	Origin Repository의 develop 브랜치에서 새로운 브랜치를 생성합니다.
    3.	로컬에서 Fetch하여 새로운 브랜치를 가져옵니다.
    4.	해당 브랜치로 체크아웃(checkout)한 후 기능 개발을 진행합니다.

    - 기능 개발: feature/#[Issue 번호]
    - 버그 수정: fix/#[Issue 번호]
    - 리팩토링: refactor/#[Issue 번호]

**개발 종료 시**

    1.	기능 개발이 완료되면 Origin Repository의 해당 브랜치(feature, fix, refactor)로 변경 사항을 푸시합니다.
    2.	Origin Repository에서 Upstream Repository로 PR을 보냅니다.
    3.	코드 리뷰 후 마지막 리뷰어가 Squash and Merge를 수행합니다.
    4.	PR이 Squash and Merge되면 로컬에서 dev 브랜치로 체크아웃합니다.
    5.	Upstream Repository의 dev 브랜치를 로컬에서 풀(pull)합니다.
    6.	Origin Repository의 dev 브랜치를 업데이트하기 위해 푸시(push)합니다.

**Main 브랜치 갱신 시**

    1.	릴리즈 버전을 낼 때는 Upstream의 dev 브랜치에서 main 브랜치로 PR을 보냅니다.
    2.	모든 사용자가 코드를 재확인한 후 머지(merge)합니다.

### Commit & PR Convention

**Commit Convention**

| Commit Type | Description           |
| ----------- | --------------------- |
| Feature     | 기능 개발             |
| Fix         | 버그 수정             |
| Docs        | 문서 수정             |
| Refactor    | 코드 리팩토링         |
| Design      | CSS 등 사용자 UI 변경 |
| Test        | 로직 및 코드 테스트   |

**PR Convention**

| Naming                        | Description                      |
| ----------------------------- | -------------------------------- |
| [Design] #(issue-number)      | UI/스타일 파일 추가/수정         |
| [Feature] #(issue-number)     | 새로운 기능 도입                 |
| [Fix] #(issue-number)         | 버그 수정                        |
| [Test] #(issue-number)        | 로직 및 코드 테스트              |
| [Refactoring] #(issue-number) | 코드 리팩토링                    |
| [Docs] #(issue-number)        | Feature 이외에 문서 생성 및 수정 |

</td>
  </tr>
</table>

## 📂 프로젝트 폴더 구조

```plaintext
📦Nugu-Frontend
 ┣ 📦.github
 ┃   ┣ 📂ISSUE_TEMPLATE
 ┃   ┃ ┗ 📜FRONT-ISSUE.md
 ┃   ┣ 📂workflows
 ┃   ┃ ┗ 📜cd.yaml
 ┃   ┗ 📜PULL_REQUEST_TEMPLATE.md
 ┣ 📦public
 ┃  ┣ 📂fonts
 ┃  ┃ ┣ 📜chab.woff
 ┃  ┃ ┗ 📜Pretendard-Regular.woff
 ┃  ┣ 📂images
 ┃  ┃ ┣ 📜basisrank.svg
 ┃  ┃ ┣ 📜BlueCloud.svg
 ┃  ┃ ┣ 📜Cloud.png
 ┃  ┃ ┣ 📜GointroIcon.svg
 ┃  ┃ ┣ 📜insta.svg
 ┃  ┃ ┣ 📜nugu-half.png
 ┃  ┃ ┣ 📜nugu-heart.png
 ┃  ┃ ┣ 📜nugu-sad.png
 ┃  ┃ ┣ 📜NuguCreateImg.svg
 ┃  ┃ ┣ 📜NuguLogo.png
 ┃  ┃ ┣ 📜nuguOriginal.png
 ┃  ┃ ┣ 📜rank1.svg
 ┃  ┃ ┣ 📜rank2.svg
 ┃  ┃ ┣ 📜rank3.svg
 ┃  ┃ ┣ 📜SmallLogo.png
 ┃  ┃ ┣ 📜small_logo.svg
 ┃  ┃ ┗ 📜StarNugu.png
 ┃  ┗ 📜vite.svg
 ┣ 📦src
 ┃   ┣ 📂apis
 ┃  ┃ ┣ 📜instance.js
 ┃  ┃ ┣ 📜login.js
 ┃  ┃ ┣ 📜nuguInfo.js
 ┃  ┃ ┣ 📜nuguIntro.js
 ┃  ┃ ┣ 📜nuguPatch.js
 ┃  ┃ ┣ 📜nuguTest.js
 ┃  ┃ ┣ 📜signUp.js
 ┃  ┃ ┗ 📜uuid.js
 ┃  ┣ 📂assets
 ┃  ┃ ┗ 📜Cloud.svg
 ┃  ┣ 📂atoms
 ┃  ┃ ┣ 📜chipState.js
 ┃  ┃ ┣ 📜loginState.js
 ┃  ┃ ┣ 📜nuguTestState.js
 ┃  ┃ ┣ 📜signUpState.js
 ┃  ┃ ┗ 📜testUser.js
 ┃  ┣ 📂components
 ┃  ┃ ┣ 📂chip
 ┃  ┃ ┃ ┣ 📜Chip.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂common
 ┃  ┃ ┃ ┣ 📂button
 ┃  ┃ ┃ ┃ ┣ 📜BottomBtn.jsx
 ┃  ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃  ┃ ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┃ ┣ 📂introField
 ┃  ┃ ┃ ┃ ┣ 📜IntroField.jsx
 ┃  ┃ ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┃ ┣ 📂layout
 ┃  ┃ ┃ ┃ ┣ 📜Layout.jsx
 ┃  ┃ ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┃ ┣ 📂logo
 ┃  ┃ ┃ ┃ ┣ 📜Logo.jsx
 ┃  ┃ ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┃ ┗ 📂navigateBar
 ┃  ┃ ┃ ┃ ┣ 📜NavigateBar.jsx
 ┃  ┃ ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂error
 ┃  ┃ ┃ ┗ 📜Error.jsx
 ┃  ┃ ┣ 📂input
 ┃  ┃ ┃ ┣ 📜Input.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂nuguTest
 ┃  ┃ ┃ ┣ 📜CompleteTest.jsx
 ┃  ┃ ┃ ┣ 📜NuguTestHome.jsx
 ┃  ┃ ┃ ┣ 📜NuguTestNone.jsx
 ┃  ┃ ┃ ┣ 📜NuguTestTrue.jsx
 ┃  ┃ ┃ ┣ 📜styled.js
 ┃  ┃ ┃ ┗ 📜TestRanking.jsx
 ┃  ┃ ┣ 📂nuguTestRanking
 ┃  ┃ ┃ ┣ 📜NonRankingBox.jsx
 ┃  ┃ ┃ ┣ 📜NuguTestRanking.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂progressBar
 ┃  ┃ ┃ ┣ 📜ProgreesBar.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂rankingBox
 ┃  ┃ ┃ ┣ 📜RankingBox.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂testQuestion
 ┃  ┃ ┃ ┣ 📜styled.js
 ┃  ┃ ┃ ┗ 📜TestQuestion.jsx
 ┃  ┃ ┗ 📂toast
 ┃  ┃ ┃ ┗ 📜Toast.jsx
 ┃  ┣ 📂constants
 ┃  ┃ ┣ 📜chip.js
 ┃  ┃ ┣ 📜navigatebar.js
 ┃  ┃ ┣ 📜nuguTest.js
 ┃  ┃ ┗ 📜signUp.js
 ┃  ┣ 📂hook
 ┃  ┣ 📂hooks
 ┃  ┃ ┣ 📜useForm.js
 ┃  ┃ ┣ 📜usePageInfo.js
 ┃  ┃ ┗ 📜useToast.js
 ┃  ┣ 📂layout
 ┃  ┣ 📂pages
 ┃  ┃ ┣ 📂login
 ┃  ┃ ┃ ┣ 📜Login.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂nugu
 ┃  ┃ ┃ ┣ 📂_hooks
 ┃  ┃ ┃ ┃ ┗ 📜useNuguInfo.js
 ┃  ┃ ┃ ┣ 📜Nugu.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂nuguIntro
 ┃  ┃ ┃ ┣ 📂_hooks
 ┃  ┃ ┃ ┃ ┗ 📜useIntroForm.js
 ┃  ┃ ┃ ┣ 📜NuguIntro.jsx
 ┃  ┃ ┃ ┣ 📜styled.js
 ┃  ┃ ┃ ┗ 📜WriteIntro.jsx
 ┃  ┃ ┣ 📂nuguPatch
 ┃  ┃ ┃ ┣ 📂_hooks
 ┃  ┃ ┃ ┃ ┣ 📜useNuguPatch.js
 ┃  ┃ ┃ ┃ ┗ 📜usePatchChip.js
 ┃  ┃ ┃ ┣ 📜NuguPatch.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂nuguTest
 ┃  ┃ ┃ ┣ 📂_hooks
 ┃  ┃ ┃ ┃ ┣ 📜useChallengeTest.js
 ┃  ┃ ┃ ┃ ┗ 📜useMakeTest.js
 ┃  ┃ ┃ ┣ 📜ChallengerTest.jsx
 ┃  ┃ ┃ ┣ 📜MakeNuguTest.jsx
 ┃  ┃ ┃ ┣ 📜NuguChallenge.jsx
 ┃  ┃ ┃ ┣ 📜NuguTest.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┣ 📂onBoarding
 ┃  ┃ ┃ ┣ 📜Onboarding.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┃ ┗ 📂signUp
 ┃  ┃ ┃ ┣ 📂_hooks
 ┃  ┃ ┃ ┃ ┣ 📜useChip.js
 ┃  ┃ ┃ ┃ ┣ 📜useSignUp.js
 ┃  ┃ ┃ ┃ ┗ 📜useValidation.js
 ┃  ┃ ┃ ┣ 📜NuguCreate.jsx
 ┃  ┃ ┃ ┣ 📜SignUp.jsx
 ┃  ┃ ┃ ┣ 📜SignUpSubmit.jsx
 ┃  ┃ ┃ ┗ 📜styled.js
 ┃  ┣ 📂styles
 ┃  ┃ ┣ 📜global.js
 ┃  ┃ ┗ 📜theme.js
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜router.jsx
```
